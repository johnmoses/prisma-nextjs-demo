import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>Welcome</h1>
      <p>Check out the <Link href="/users">Users</Link> page.</p>
      <p>Check out the <Link href="/posts">Posts</Link> page.</p>
    </div>
  );
}
