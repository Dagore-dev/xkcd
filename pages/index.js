import Head from 'next/head'
import PrimaryLayout from '../components/PrimaryLayout'
import LatestComics from '../components/LatestComics'
import fs from 'fs-extra'

export default function Home({ comics }) {
  const { ok, content } = comics

  return (
    <>
      <Head>
        <title>xkcd comics</title>
        <meta name="description" content="xkcd - Comics for developers" />
      </Head>

      <PrimaryLayout>
        <h1 className='text-4xl text-center font-bold'>Latest comics</h1>

        {
          ok
            ? <LatestComics comics={content} />
            : <p>Latest comics not available</p>
        }
      </PrimaryLayout>
    </>
  )
}

export async function getStaticProps(context) {
  const files = await fs.readdir('./comics')
  const lastSixComicsFiles = files.slice(-6, files.length)
  const promisesReadComics = lastSixComicsFiles.map(async (comic) => await fs.readJSON(`./comics/${comic}`, 'utf-8'))

  try {
    const lastSixComics = await Promise.all(promisesReadComics)
    return {
      props: {
        comics: { ok: true, content: lastSixComics }
      }
    }
  } catch (error) {
    return {
      props: {
        comics: { ok: false, content: [] }
      }
    }
  }
}
