import Link from "next/link"

export default function Home() {
  return (
  <div className="h-screen w-full homepage" >
    <div className="w-4/5 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >
      <h1 className="my-8 text-4xl" >Explore food from around the world</h1>
      <Link className="shadow-gray-50 bg-gray-300 rounded text-xl px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white" href="/types" >List of Cuisines</Link>
    </div>
  </div>
  )
}