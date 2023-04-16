import { PortableTextComponents } from "@portabletext/react";
import { PortableImage } from "./portable-image";
import { SanityCode } from "../sanity/sanity-code";

export const components: PortableTextComponents = {
    types: {
        image: PortableImage,
        code: SanityCode
    },
    block: {
        h1: ({ children }) => <h1 className="text-2xl">{children}</h1>
    }
};