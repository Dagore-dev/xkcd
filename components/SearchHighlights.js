import Link from "next/link"

export default function SearchHighlights({ search, hits }) {
  return (
    <ul>
      {
        search !== '' && hits.map(hit => {
          return (
            <li key={hit.id}>
              <Link href={`/comic/${hit.id}`}>
                <a className='text-sm font-semibold'>
                  {hit.title}
                </a>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}
