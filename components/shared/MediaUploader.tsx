'user client'
import { toast } from "sonner";
import { dataUrl, getImageSize } from "@/lib/utils";
import { CldUploadWidget,CldImage } from "next-cloudinary"; // cloudinary的上传组件
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  image: any;
  publicId: string;
  type: string;
};

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MediaUploaderProps) => {
  const onUploadSuccessHandler = (result: any) => { // 上传成功的回调函数
    setImage((prevState: any) => ({
        ...prevState,
        publicId: result?.info?.public_id,
        width: result?.info?.width,
        height: result?.info?.height,
        secureURL: result?.info?.secure_url
      }))
  
      onValueChange(result?.info?.public_id)

    toast.success("Image uploaded successfully", {
      description: "1 credit was deducted from your account",
      duration: 5000,
      className: "success-toast",
    });
  };

  const onUploadErrorHandler = () => {
    toast.success("Something went wrong while uploading", {
      description: "Please try again",
      duration: 5000,
      className: "error-toast",
    });
  };

  return (  // 上传组件配置
    <CldUploadWidget
      uploadPreset="JSM_imaginify"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <div className="flex flex-col gap-4">
          <h3 className="h3-bold text-dark-600">Original</h3>
          {publicId ? (
            <>
              <div className="cursor-pointer overflow-hidden rounde-[10px">
                <CldImage
                  width={getImageSize(type, image, "width")}
                  height={getImageSize(type, image, "height")}
                  src={publicId}
                  alt="image"
                  sizes={"(max-width: 767px) 100vw, 50vw"}
                  placeholder={dataUrl as PlaceholderValue}
                  className="media-uploader_cldImage"
                />
              </div>
            </>
          ) : (
            <div className="media-uploader_cta" onClick={() => open()}>
              <div className="media-uploader_cta-image">
                <Image
                  src={"/assets/icons/add.svg"}
                  alt="ADD IMAGE"
                  width={24}
                  height={24}
                />
                <p className="p-14-medium">Click hero to upload image</p>
              </div>
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
