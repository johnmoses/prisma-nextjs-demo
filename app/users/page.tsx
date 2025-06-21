import prisma from "@/plib/prisma";
import Link from "next/link";

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>Users</h1>
      <ul className="font-[family-name:var(--font-geist-sans)] max-w-2xl space-y-4">
        {users.map((user) => (
          <li key={user.id}>
            <span className="font-semibold">{user.name}</span>
            <span className="text-sm ml-2">{user.email}</span>
            <span className="text-sm ml-2"><Link href={`/users/${user.id}`}> | View</Link></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
