import prisma from "@/plib/prisma";
import Link from "next/link";

export default async function Posts() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>Posts</h1>
      <ul className="font-[family-name:var(--font-geist-sans)] max-w-2xl space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <span className="font-semibold">{post.title}</span>
            <span className="text-sm ml-2">by {post.author.name}</span>
            <span className="text-sm ml-2"><Link href={`/posts/${post.id}`}> | View</Link></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
