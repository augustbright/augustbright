import { TPost } from "@/api/types";
import { components } from "@/app/components/portable-text/portable-components";
import { SanityImage } from "@/app/components/sanity/sanity-image";
import { client } from "@/lib/sanilty";
import { PortableText } from "@portabletext/react";
import moment from "moment";

type TProps = {
    params: { slug: `${string}_${string}` };
};
export default async function Post({ params }: TProps) {
    const postId = params.slug.split("_")[1];
    const [post] = await client.fetch<Array<TPost>>(`*[_type == "post" && _id == "${postId}"]`)
    return (
        <main className="">
            <article className="max-w-3xl">
                {post.cover && <SanityImage image={post.cover} />}
                <header className="my-4">
                    <h1 className="text-2xl text-yellow-300 font-semibold">{post.title}</h1>
                    <p className="text-sm text-gray-500">Posted on {moment(post._createdAt).format('MMMM Do YYYY')}</p>
                </header>
                <PortableText
                    value={post.intro}
                    components={components}
                />
                <div className="border-t my-4 border-dotted border-gray-400"></div>
                <PortableText
                    value={post.content}
                    components={components}
                />
            </article>
        </main>
    );
}