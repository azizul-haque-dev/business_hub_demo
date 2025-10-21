import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">This is home page</h1>
      <p className="text-gray-600">Here will be the hole home components</p>
      <Link href={'/admin'} className="underline text-blue-500">Go to admin page</Link>
    </div>
  )
}
