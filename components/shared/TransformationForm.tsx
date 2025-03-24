"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"; // 定义表单验证规则

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  aspectRatioOptions,
  creditFee,
  defaultValues,
  transformationTypes,
} from "@/constants";
import { CustomField } from "./CustomField";
import { useEffect, useState, useTransition } from "react";
import { AspectRatioKey, debounce, deepMergeObjects } from "@/lib/utils";
import { updateCredits } from "@/lib/actions/user.actions";
import MediaUploader from "./MediaUploader";
import TransformedImage from "./TransformedImage";
import { getCldImageUrl } from "next-cloudinary";
import { addImage, updateImage } from "@/lib/actions/image.actions";
import { useRouter } from "next/navigation";
import { InsufficientCreditsModal } from "./InsufficientCreditsModal";

// 定义表单数据结构和验证规则
export const formSchema = z.object({
  title: z.string(), // 图像标题，必填
  aspectRatio: z.string().optional(), // 纵横比，可选
  color: z.string().optional(), // 颜色
  prompt: z.string().optional(), // ai提示词
  publicId: z.string(), // 图像id
});

const TransformationForm = ({
  action, // "Add" 或 "Update"
  data = null, // 现有图像数据
  userId, // 用户ID
  type, // 转换类型
  creditBalance, // 用户积分余额
  config = null,
}: TransformationFormProps) => {
    let transformationType = transformationTypes[type as keyof typeof transformationTypes];
  // 根据传入的type获取转换类型配置信息，并保存到transfomationType
  const [image, setImage] = useState(data);
  const [newTransformation, setNewTransformation] =
    useState<Transformations | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // 提交状态
  const [isTransforming, setIsTransforming] = useState(false); // 转换状态
  const [transformationConfig, setTransformationConfig] = useState(config);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const initialValues =
    data && action === "Update" // action有Update和Add两种，data是指IImage
      ? {
          title: data?.title,
          aspectRatio: data?.aspectRatio,
          color: data?.color,
          prompt: data?.prompt,
          publicId: data?.publicId,
        }
      : defaultValues; // 否则使用默认值defaultValues

  // 1. Define your form.表单初始化
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  // 2. Define a submit handler.图片转换提交处理函数
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setIsSubmitting(true);

    if (data || image) {  // // 使用Cloudinary的URL生成API创建转换后的图片URL
      const transformationUrl = getCldImageUrl({
        width: image?.width,
        height: image?.height,
        src: image?.publicId,
        ...transformationConfig,
      });

      const imageData = {
        title: values.title,
        publicId: image?.publicId,
        transformationType: type,
        width: image?.width,
        height: image?.height,
        config: transformationConfig,
        secureURL: image?.secureURL,
        transformationURL: transformationUrl,
        aspectRatio: values.aspectRatio,
        prompt: values.prompt,
        color: values.color,
      };

      if (action === "Add") {
        try {
          const newImage = await addImage({
            image: imageData,
            userId,
            path: "/",
          });
          if (newImage) {
            form.reset();
            setImage(data);
            router.push(`/transformations/${newImage._id}`);
          }
        } catch (error) {
          console.log(error);
        }
      }

      if (action === "Update") {
        try {
          const updatedImage = await updateImage({
            image: { ...imageData, _id: data._id },
            userId,
            path: `/transformations/${data._id}`,
          });
          if (updatedImage) {
            router.push(`/transformations/${updatedImage._id}`);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    setIsSubmitting(false);
  }

  const onSelectFieldHandler = (
    // 处理下拉选择变化的函数
    value: string, // 接受用户选择的新值
    onChangeField: (value: string) => void //调用该函数可以更新表单中的宽高比字段
    // 接受传入的field.onChange(value)
  ) => {
    const imageSize = aspectRatioOptions[value as AspectRatioKey];

    setImage((prevState: any) => ({
      ...prevState,
      aspectRatio: imageSize.aspectRatio,
      width: imageSize.width,
      height: imageSize.height,
    }));

    setNewTransformation(transformationType.config);
    return onChangeField(value);
  };

  const onInputChangeHandler = (
    fieldName: string, // 字段名称，如："prompt","color"
    value: string,
    type: string, // 转换类型，如："remove"或"recolor"
    onChangeField: (value: string) => void // 更新表单字段的函数
  ) => {
    debounce(() => {
      setNewTransformation((prevState: any) => ({
        ...prevState,
        [type]: {
          // 动态键名，根据type参数来决定更新哪个转换类型的配置
          ...prevState?.[type], // 保留该类型现有配置
          [fieldName === "prompt" ? "prompt" : "to"]: value, // 设置新值
        },
      }));
     
    }, 1000)(); // debounce的作用：用户停止输入1000毫秒后执行

    return onChangeField(value);
  };

  // todo:retur to updateCredits function
  const onTransformationHandler = async () => {
    setIsTransforming(true); // 将 isTransforming 状态设置为 true
    setTransformationConfig(
      deepMergeObjects(newTransformation, transformationConfig) // 合并两个对象
    );
    setNewTransformation(null);
    startTransition(async () => {
      await updateCredits(userId, creditFee);
    });
  };

  useEffect(() => {
    if (image && (type === "image-restore" || type === "remove-background-from-image" || type==="remove-shadow-from-photo")) { // restore和removeBackground不需要手动输入参数，所以自动引用对应转换类型的默认配置
      setNewTransformation(transformationType.config);
    }
  }, [image, transformationType.config, type]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {creditBalance < Math.abs(creditFee) && <InsufficientCreditsModal />}
        <CustomField
          control={form.control} // 连接到表单控制器
          name="title" // 字段名称，对应schema中的title
          formLabel="Image Title" // 现实的表单标签文本
          className="w-full"
          render={({ field }) => <Input {...field} className="input-field" />}
          // 渲染一个文本输入框
        />
        {type === "generative-fill" && (
          <CustomField
            control={form.control}
            name="aspectRatio" //宽高比选择字段
            formLabel="Aspect Ratio"
            className="w-full"
            render={(
              { field } // 渲染一个下拉选择框
            ) => (
              <Select
                onValueChange={(value) =>
                  onSelectFieldHandler(value, field.onChange)
                }
                value={field.value}
              >
                <SelectTrigger className="select-field">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {/* Object.keys(aspectRatioOptions) : 获取所有宽高比选项的键 */}
                  {/* <SelectItem> : 单个选项组件 */}
                  {/* aspectRatioOptions[key as AspectRatioKey].label : 显示选项的标签文本 */}
                  {Object.keys(aspectRatioOptions).map((key) => (
                    <SelectItem key={key} value={key} className="select-item">
                      {aspectRatioOptions[key as AspectRatioKey].label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        )}
        {(type === "remove-object-from-photo" || type === "image-recolor") && (
          <div className="prompt-field">
            <CustomField
              control={form.control}
              name="prompt"
              formLabel={
                type === "remove-object-from-photo" ? "Object to remove" : "Object to recolor"
              }
              className="w-full"
              render={({ field }) => (
                <Input
                  value={field.value}
                  className="input-field"
                  onChange={(e) =>
                    onInputChangeHandler(
                      "prompt",
                      e.target.value,
                      type,
                      field.onChange
                    )
                  }
                />
              )}
            />
            {type == "image-recolor" && (
              <CustomField
                control={form.control}
                name="color"
                formLabel="Replacement Color" // 用于替换的目标颜色
                className="w-full"
                render={({ field }) => (
                  <Input
                    value={field.value}
                    className="input-field"
                    onChange={(e) =>
                      onInputChangeHandler(
                        "color",
                        e.target.value,
                        "recolor",
                        field.onChange
                      )
                    }
                  />
                )}
              />
            )}
          </div>
        )}

        <div className="media-uploader-field">
          <CustomField
            control={form.control}
            name="publicId"
            className="flex size-full flex-col"
            render={({ field }) => (
              <MediaUploader
                onValueChange={field.onChange}
                setImage={setImage}
                publicId={field.value}
                image={image}
                type={type}
              />
            )}
          />
          <TransformedImage
            image={image}
            type={type}
            title={form.getValues().title}
            isTransforming={isTransforming}
            setIsTransforming={setIsTransforming}
            transformationConfig={transformationConfig}
          />
        </div>

        <div className="flex flex-col gap-4 ">
          <Button // 应用转换效果
            className="submit-button capitalize"
            type="button"
            disabled={isTransforming || newTransformation == null} // 正在进行转换，没有转换配置时禁用
            onClick={onTransformationHandler}
          >
            {isTransforming ? "Transforming..." : "Apply Transformation"}
          </Button>
          <Button // 保存图像
            className="submit-button capitalize"
            type="submit"
            disabled={isSubmitting} // 正在提交时禁用
          >
            {isSubmitting ? "Submitting" : "Save Image"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default TransformationForm;
