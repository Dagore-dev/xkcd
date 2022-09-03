import Head from 'next/head'
import ExternalLink from '../components/ExternalLink'
import PrimaryLayout from '../components/PrimaryLayout'

export default function About() {
  return (
    <>
      <Head>
        <title>About xkcd comics</title>
        <meta name="description" content="xkcd - Comics for developers" />
      </Head>

      <PrimaryLayout>
        <article className='min-h-full flex flex-col justify-center md:w-3/5 md:mx-auto shadow-xl'>
          <h1 className='text-4xl text-center font-bold p-5'>About</h1>
          <p className='p-5'>
            The comics which you can found in this website have been posted in first place at <ExternalLink url='https://xkcd.com/'>xkcd</ExternalLink> under a <ExternalLink url='https://creativecommons.org/licenses/by-nc/2.5/'>Creative Commons Attribution-NonCommercial 2.5 License</ExternalLink>. Please visit <ExternalLink url='https://xkcd.com/license.html'>xkcd.com/license.html</ExternalLink> for any doubts about it.
          </p>
          <p className='p-5'>
            This website have been created with educational purpose and its source code is available at <ExternalLink url='https://github.com/Dagore-dev/xkcd.git'>github.com/Dagore-dev/xkcd.git</ExternalLink>. My name is David and I am a beginner fullstack developer who likes to work with Javascript, React and C#. If you are interested in made a website like this consider to learn about React and Next.js, also you can find the same Youtube tutorial I have follow <ExternalLink url='https://youtu.be/pFT8wD2uRSE'>here</ExternalLink>.
          </p>
        </article>
      </PrimaryLayout>
    </>
  )
}