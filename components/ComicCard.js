import Link from 'next/link'
import Image from 'next/image'

export default function ComicCard({ content: { id, title, img, alt, width, height } }) {
  return (
    <section className='p-3'>
      <h2 className='text-3xl text-center pb-2'>{title}</h2>
      <div className='w-[300px] mx-auto'>
        <Link href={`/comic/${id}`}>
          <a>
            <Image src={img} alt={alt} width={width} height={height} layout='responsive' />
          </a>
        </Link>
      </div>
    </section>
  )
}
