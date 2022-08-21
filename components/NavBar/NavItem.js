import Link from "next/link"

export default function NavItem({ name, route }) {
  return (
    <li className="text-white opacity-70 hover:opacity-100 duration-300">
      <Link href={route}>{name}</Link>
    </li>
  )
}
