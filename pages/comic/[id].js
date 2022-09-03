import Head from 'next/head'
import PrimaryLayout from '../../components/PrimaryLayout'
import Image from 'next/image'
import PaginationLink from '../../components/PaginationLink'
import fs from 'fs-extra'
import path from 'path'

export default function Comic({ id, img, alt, title, width, height, prevId, hasPrev, nextId, hasNext }) {
  const headTitle = `xkcd: ${title}`

  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content="xkcd - Comics for developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PrimaryLayout>
        <article className='flex flex-col justify-evenly items-center p-5 min-h-full md:w-3/5 md:mx-auto shadow-xl'>
          <h1 className='text-4xl text-center font-bold'>{title}</h1>

          <span className='py-5 text-center'>
            <Image src={img} width={width} height={height} alt={alt} objectFit='contain' />
          </span>

          <p className='text-center'>{alt}</p>

          <div className='flex justify-evenly w-80 py-5'>
            {hasPrev && <PaginationLink text='Previous' comicId={prevId} />}
            {hasNext && <PaginationLink text='Next' comicId={nextId} />}
          </div>
        </article>
      </PrimaryLayout>
    </>
  )
}

export async function getStaticPaths() {
  const availableComics = await fs.readdir('./comics')
  const baseNames = availableComics.map(comicPath => { return { params: { id: path.basename(comicPath, '.json') } } })
  return {
    paths: baseNames,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const comic = await fs.readJSON(`./comics/${id}.json`)

  const idNumber = Number(id)
  const prevId = idNumber - 1
  const nextId = idNumber + 1
  const [prevResult, nextResult] = await Promise.allSettled([
    fs.stat(`./comics/${prevId}.json`),
    fs.stat(`./comics/${nextId}.json`)
  ])

  return {
    props: {
      ...comic,
      prevId,
      nextId,
      hasPrev: prevResult.status === 'fulfilled',
      hasNext: nextResult.status === 'fulfilled'
    }
  }

}
