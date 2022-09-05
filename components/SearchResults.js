import Head from 'next/head'
import PrimaryLayout from './PrimaryLayout'
import PrimaryContainer from './PrimaryContainer'
import H1 from './H1'
import SearchResult from './SearchResult'

export default function SearchResults({ query, results }) {
  return (
    <>
      <Head>
        <title>{`${query} xkcd comics`}</title>
        <meta name="description" content={`Search results for ${query}`} />
      </Head>

      <PrimaryLayout>
        <PrimaryContainer>
          <H1>{results.length} results for {query}</H1>

          <ul className="w-4/5 md:w-3/5 lg:w-2/5">
            {
              results.map(result => <SearchResult key={result.id} result={result} />)
            }
          </ul>
        </PrimaryContainer>
      </PrimaryLayout>
    </>
  )
}
