import Head from 'next/head'
import PrimaryLayout from '../../components/PrimaryLayout'
import Image from 'next/image'
import fs from 'fs-extra'

export default function Comic({ id, img, alt, title, width, height }) {
  return (
    <>
      <Head>
        <title>xkcd comics</title>
        <meta name="description" content="xkcd - Comics for developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PrimaryLayout>
        <article className='flex flex-col justify-center align-middle p-5'>
          <h1 className='text-4xl text-center font-bold'>{title}</h1>
          <span className='py-5 text-center'>
            <Image src={img} width={width} height={height} alt={alt} objectFit='scale-down' />
          </span>
          <p className='text-center'>{alt}</p>
        </article>
      </PrimaryLayout>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '2500' } }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const comic = await fs.readJSON(`./comics/${id}.json`)

  return {
    props: {
      ...comic
    }
  }

}
