import Link from 'next/link'

export default function ComicCard({ content: { id, title, img, alt } }) {
  return (
    <section className='p-3'>
      <h2 className='text-3xl'>{title}</h2>
      <Link href={`/comic/${id}`}>
        <a>
          <img src={img} alt={alt} />
        </a>
      </Link>
    </section>
  )
}
