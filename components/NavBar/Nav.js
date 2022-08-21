import Link from "next/link";
import Menu from "./Menu";

export default function Nav() {
  return (
    <nav className="container px-4 md:px-0 h-full mx-auto flex justify-between items-center">
      <span className="text-yellow-400 text-xl font-bold italic">
        <Link href="/">xkcd comics</Link>
      </span>
      <Menu />
    </nav>
  )
}
