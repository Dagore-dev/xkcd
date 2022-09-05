import Head from 'next/head'
import PrimaryLayout from './PrimaryLayout'
import PrimaryContainer from './PrimaryContainer'
import H1 from './H1'

export default function SearchForm() {
  return (
    <>
      <Head>
        <title>Find a xkcd comic</title>
        <meta name="description" content='Search a xkcd comic' />
      </Head>

      <PrimaryLayout>
        <PrimaryContainer>
          <H1>Find your favorites xkcd comics</H1>

          <form>
            <input type='search' />
            <button>Search</button>
          </form>
        </PrimaryContainer>
      </PrimaryLayout>
    </>
  )
}
