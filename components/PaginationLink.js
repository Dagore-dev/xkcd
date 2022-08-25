import Link from 'next/link'

export default function PaginationLink({ text, comicId }) {
  return (
    <Link href={`/comic/${comicId}`}>
      <a className='bg-indigo-600 w-20 rounded-lg text-center py-2'>
        <span className='text-white opacity-70 hover:opacity-100 duration-300 '>
          {text}
        </span>
      </a>
    </Link>
  )
}
