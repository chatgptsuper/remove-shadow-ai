export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label:"Shadow Remove",
    route:"/transformations/add/remove-shadow-from-photo",
    icon:"/assets/icons/scan.svg",
  },
  {
    label: "Background Remove",
    route: "/transformations/add/remove-background-from-image",
    icon: "/assets/icons/camera.svg",
  },
  {
    label: "Object Remove",
    route: "/transformations/add/remove-object-from-photo",
    icon: "/assets/icons/scan.svg",
  },
  {
    label: "Generative Fill",
    route: "/transformations/add/generative-fill",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Object Recolor",
    route: "/transformations/add/image-recolor",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "Image Restore",
    route: "/transformations/add/image-restore",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
  {
    label: "Pricing",
    route: "/pricing",
    icon: "/assets/icons/bag.svg",
  },
];

export const CREEM_PRODUCT_IDS = {
  STARTER: process.env.NEXT_PUBLIC_CREEM_STARTER_PRODUCT_ID || '',
  BASIC: process.env.NEXT_PUBLIC_CREEM_BASIC_PRODUCT_ID || '',
  PRO: process.env.NEXT_PUBLIC_CREEM_PRO_PRODUCT_ID || '',
  BUSINESS: process.env.NEXT_PUBLIC_CREEM_BUSINESS_PRODUCT_ID || '',
  ENTERPRISE: process.env.NEXT_PUBLIC_CREEM_ENTERPRISE_PRODUCT_ID || ''
} as const;

export const enhancedPlans = [
  {
    name: "Free",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 5,
    inclusions: [
      {
        label: "5 Image Transformations",
        isIncluded: true,
      },
      {
        label: "Standard Processing Speed",
        isIncluded: true,
      },
      {
        label: "Basic Image Resolution",
        isIncluded: true,
      },
    ],
  },
  {
    name: "Starter",
    icon: "/assets/icons/free-plan.svg",
    price: 8,
    credits: 30,
    productId: CREEM_PRODUCT_IDS.STARTER,
    inclusions: [
      {
        label: "30 Image Transformations",
        isIncluded: true,
      },
      {
        label: "Standard Processing Speed",
        isIncluded: true,
      },
      {
        label: "Enhanced Image Resolution",
        isIncluded: true,
      },
    ],
  },
  {
    name: "Basic",
    icon: "/assets/icons/free-plan.svg",
    price: 15,
    credits: 75,
    productId: CREEM_PRODUCT_IDS.BASIC,
    inclusions: [
      {
        label: "75 Image Transformations",
        isIncluded: true,
      },
      {
        label: "Standard Processing Speed",
        isIncluded: true,
      },
      {
        label: "Enhanced Image Resolution",
        isIncluded: true,
      },
    ],
  },
  {
    name: "Pro",
    icon: "/assets/icons/free-plan.svg",
    price: 25,
    credits: 150,
    productId: CREEM_PRODUCT_IDS.PRO,
    inclusions: [
      {
        label: "150 Image Transformations",
        isIncluded: true,
      },
      {
        label: "Standard Processing Speed",
        isIncluded: true,
      },
      {
        label: "Enhanced Image Resolution",
        isIncluded: true,
      },
    ],
  },
  {
    name: "Business",
    icon: "/assets/icons/free-plan.svg",
    price: 45,
    credits: 400,
    productId: CREEM_PRODUCT_IDS.BUSINESS,
    inclusions: [
      {
        label: "400 Image Transformations",
        isIncluded: true,
      },
      {
        label: "Standard Processing Speed",
        isIncluded: true,
      },
      {
        label: "Enhanced Image Resolution",
        isIncluded: true,
      },
    ],
  },
  {
    name: "Enterprise",
    icon: "/assets/icons/free-plan.svg",
    price: 99,
    credits: 1000,
    productId: CREEM_PRODUCT_IDS.ENTERPRISE,
    inclusions: [
      {
        label: "1000 Image Transformations",
        isIncluded: true,
      },
      {
        label: "Standard Processing Speed",
        isIncluded: true,
      },
      {
        label: "Enhanced Image Resolution",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  'remove-shadow-from-photo': {
    type: "remove-shadow-from-photo",
    title: "Remove Shadow From Photo",
    subTitle: "Remove shadow from photo using AI",
    config: {
      remove: { prompt: "unwanted background shadows", removeShadow: true, multiple: true },
      // cast shadows from light source
    },
    icon: "scan.svg",
  },
  'image-restore': {
    type: "image-restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "image.svg",
  },
  'remove-background-from-image': {
    type: "remove-background-from-image",
    title: "Remove Background From Image",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  'generative-fill': {
    type: "generative-fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  'remove-object-from-photo': {
    type: "remove-object-from-photo",
    title: "Remove Object From Photo",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  'image-recolor': {
    type: "image-recolor",
    title: "Image Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;

// export const creditFee = -1;
