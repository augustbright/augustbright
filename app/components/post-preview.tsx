import { TPost } from "@/api/types";
import { PortableText } from "@portabletext/react";
import { SanityImage } from "./sanity/sanity-image";
import moment from "moment";
import Link from "next/link";
import { components } from "./portable-text/portable-components";

type TProps = {
    post: TPost;
};

export const PostPreview = ({ post }: TProps) => {
    const urlTitle = encodeURIComponent(post.title.toLowerCase().replace(/\s/g, '-'));

    return (
        <Link href={`/post/${urlTitle}_${post._id}`}>
            <article className="border max-w-2xl p-4 rounded-md border-teal-600 hover:border-teal-300 transition duration-200 ease-in-out">
                {post.cover && <SanityImage image={post.cover} />}
                <header className="my-4">
                    <h1 className="text-2xl text-yellow-300 font-semibold">{post.title}</h1>
                    <p className="text-sm text-gray-500">Posted on {moment(post._createdAt).format('MMMM Do YYYY')}</p>
                </header>
                <PortableText
                    value={post.intro}
                    components={components}
                />
            </article>
        </Link>
    );
};