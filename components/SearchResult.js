import Link from 'next/link'
import Image from 'next/image'

export default function SearchResult({ result: { id, alt, img, title, width, height } }) {
  return (
    <li className="py-5">
      <Link href={`comic/${id}`}>
        <a className="grid md:grid-cols-2 justify-center items-center">
          <span className="text-center">{title}</span>
          <Image alt={alt} src={img} width={width} height={height} layout='responsive' />
        </a>
      </Link>
    </li>
  )
}
