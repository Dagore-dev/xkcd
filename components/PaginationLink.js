import Link from 'next/link'

export default function PaginationLink({ text, comicId }) {
  return (
    <Link href={`/comic/${comicId}`}>
      <a>
        {text}
      </a>
    </Link>
  )
}
