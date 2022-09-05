import Head from "next/head"
import H1 from "../../components/H1"
import PrimaryContainer from "../../components/PrimaryContainer"
import PrimaryLayout from "../../components/PrimaryLayout"
import SearchResult from "../../components/SearchResult"
import search from "../../services/search"

export default function Search({ query, results }) {
  return (
    <>
      <Head>
        <title>Find a xkcd comic</title>
        <meta name="description" content={`Search results for ${query}`} />
      </Head>

      <PrimaryLayout>
        <PrimaryContainer>
          <H1>{results.length} resultados para {query}</H1>

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

export async function getServerSideProps(context) {
  const { query } = context
  const { q = '' } = query

  const results = await search(q)

  return {
    props: {
      query: q,
      results
    }
  }

}
