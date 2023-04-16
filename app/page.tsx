import { TPost } from "@/api/types";
import { client } from "@/lib/sanilty";
import { PostPreview } from "./components/post-preview";

export default async function Home() {
  const posts = await client.fetch<Array<TPost>>(`*[_type == "post"]`);
  return (
    <main className="overscroll-none">
      {posts.map((post) => (
        <PostPreview key={post._id} post={post} />
      ))}
    </main>
  )
}
