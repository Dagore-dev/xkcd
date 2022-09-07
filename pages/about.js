import Head from 'next/head'
import ExternalLink from '../components/ExternalLink'
import PrimaryContainer from '../components/PrimaryContainer'
import PrimaryLayout from '../components/PrimaryLayout'
import H1 from '../components/H1'

export default function About() {
  return (
    <>
      <Head>
        <title>About xkcd comics</title>
        <meta name="description" content="xkcd - Comics for developers" />
      </Head>

      <PrimaryLayout>
        <PrimaryContainer>
          <H1>About</H1>

          <div>
            <p className='p-5'>
              The comics which you can found in this website have been posted in first place at <ExternalLink url='https://xkcd.com/'>xkcd</ExternalLink> under a <ExternalLink url='https://creativecommons.org/licenses/by-nc/2.5/'>Creative Commons Attribution-NonCommercial 2.5 License</ExternalLink>. Please visit <ExternalLink url='https://xkcd.com/license.html'>xkcd.com/license.html</ExternalLink> for any doubts about it.
            </p>
            <p className='p-5'>
              This website have been created with educational purpose and its source code is available at <ExternalLink url='https://github.com/Dagore-dev/xkcd.git'>github.com/Dagore-dev/xkcd.git</ExternalLink>. My name is David and I am a beginner fullstack developer who likes to work with Javascript, React and C#. If you are interested in made a website like this consider to learn about React and Next.js, also you can find the same Youtube tutorial I have follow <ExternalLink url='https://youtu.be/pFT8wD2uRSE'>here</ExternalLink>.
            </p>
          </div>
        </PrimaryContainer>
      </PrimaryLayout>
    </>
  )
}