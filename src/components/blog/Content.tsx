"use client";
import "payloadcms-lexical-ext/client/client.css";

import { RichText } from "@payloadcms/richtext-lexical/react";
import { Blog as BlogType } from "@/payload-types";
import {
  AddHeading,
  Heading,
  RichTextContext,
  IContext,
} from "@/components/richtext/context";
import { FC, useCallback, useState } from "react";
import jsxConverters from "@/components/richtext/jsx-converter";
export interface BlogProps {
  blog?: BlogType;
  toc: Map<string, Heading>;
}

const BlogContent: FC<BlogProps> = ({ blog, toc: initialToc }) => {
  if (!blog) {
    return null;
  }
  const [toc, setTOC] = useState<Map<string, Heading>>(new Map());
  const addHeading: AddHeading = useCallback(
    (anchor, heading, type) => {
      if (!toc.has(anchor)) {
        const newTOC = new Map(toc);
        newTOC.set(anchor, { type, anchor, heading });
        setTOC(newTOC);
      }
    },
    [toc]
  );
  const context: IContext = {
    addHeading,
    toc: Array.from(toc).reverse(),
  };
  return (
    <div className="prose prose-md">
      <RichTextContext.Provider value={context}>
        <RichText
          converters={jsxConverters({ toc: !!initialToc })}
          data={blog?.content as unknown as any}
        />
      </RichTextContext.Provider>
    </div>
  );
};

export default BlogContent;
