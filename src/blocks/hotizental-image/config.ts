
export const HotizontalImage= {
  slug: "hotizontal-image",
  interfaceName: "HotizontalImageBlock",
  fields: [
    {
      name: "filename",
      type: "text",
    },
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
