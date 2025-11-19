import {
  DefaultNodeTypes,
  SerializedUploadNode,
} from "@payloadcms/richtext-lexical";
import { Heading as HeadingComponent } from "@/components/richtext/Heading";
import { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";
import { YoutubeJSXConverter } from "./YoutubeJSXConverter";
import { BlogRelationship } from "@/components/richtext/BlogRelationship";
import { isObject } from "@/lib/utils";
import { CodeBlock } from "@/blocks/Code/Component";
import HorizentalImages from "@/blocks/hotizental-image/horizental-image";
import { GithubLinkCard } from "@/blocks/github-link/github-link";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { Blog, Media } from "@/payload-types";
export const CustomUploadComponent: React.FC<{
  node: SerializedUploadNode;
}> = ({ node }) => {
  if (node.relationTo === "media") {
    const uploadDoc = node.value;
    if (typeof uploadDoc !== "object") {
      return null;
    }
    const { alt, height, url, width } = uploadDoc as any;
    return (
      <PhotoProvider>
        <PhotoView src={url}>
          <ImageWithFallback
            className="cursor-pointer"
            alt={alt ?? "img"}
            height={height}
            image={uploadDoc as Media}
            width={width}
          />
        </PhotoView>
      </PhotoProvider>
    );
  }

  return null;
};

const jsxConverters: (args: {
  toc?: boolean;
}) => JSXConvertersFunction<DefaultNodeTypes> =
  () =>
  ({ defaultConverters }) => {
    if (defaultConverters.heading) {
      defaultConverters.heading = HeadingComponent as any;
    }
    return {
      ...defaultConverters,
      ...YoutubeJSXConverter,
      relationship: ({ node }) => {
        if (
          node.relationTo === "blogs" &&
          isObject(node.value) &&
          "id" in node.value
        ) {
          return <BlogRelationship blog={node.value as Blog} />;
        }
        return null;
      },
      upload: ({ node }) => {
        return <CustomUploadComponent node={node} />;
      },
      blocks: {
        // @ts-ignore
        code: ({ node }) => (
          <CodeBlock className={`col-start-2`} {...node.fields} />
        ),
        // @ts-ignore
        "hotizontal-image": ({ node }) => <HorizentalImages {...node.fields} />,
        // @ts-ignore
        "github-link": ({ node }) => <GithubLinkCard {...node.fields} />,
      },
    };
  };

export default jsxConverters;
