import prisma from "@/plib/prisma";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  if (!user) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <article className="max-w-2xl space-y-4 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-bold mb-8">{user.name}</h1>
        <p className="text-gray-600 text-center">{user.email}</p>
      </article>
    </div>
  );
}