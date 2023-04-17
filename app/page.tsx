import { TPost } from "@/api/types";
import { client } from "@/lib/sanilty";
import { PostPreview } from "./components/post-preview";
import { MainIntro } from "./components/main-intro";

export default async function Home() {
  const posts = await client.fetch<Array<TPost>>(`*[_type == "post"]`);
  return (
    <main className="overscroll-none">
      <div className="container mx-auto p-8">
        <MainIntro />
        <div className="flex flex-col items-center">
          {posts.map((post) => (
            <PostPreview key={post._id} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
