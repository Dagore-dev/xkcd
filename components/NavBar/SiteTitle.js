import Link from "next/link"

export default function SiteTitle() {
  return (
    <span className="text-yellow-400 text-xl font-bold italic">
      <Link href="/">xkcd comics</Link>
    </span>
  )
}