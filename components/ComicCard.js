import Link from 'next/link'
import Image from 'next/image'

export default function ComicCard({ content: { id, title, img, alt } }) {
  return (
    <section className='p-3'>
      <h2 className='text-3xl text-center pb-2'>{title}</h2>
      <div className='w-[300px] mx-auto'>
        <Link href={`/comic/${id}`}>
          <a>
            <Image src={img} alt={alt} width={300} height={300} objectFit='contain' />
          </a>
        </Link>
      </div>
    </section>
  )
}
