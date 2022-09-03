import Head from "next/head"
import PrimaryLayout from "../../components/PrimaryLayout"

export default function Search({ query }) {
  return (
    <>
      <Head>
        <title>Find a xkcd comic</title>
        <meta name="description" content={`Search results for ${query}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PrimaryLayout>
        {
          query != null
            ? <h1>Results for {query}</h1>
            : <h1>Search</h1>
        }
      </PrimaryLayout>
    </>
  )
}

export async function getServerSideProps(context) {
  const { query } = context
  const { q = '' } = query

  return {
    props: {
      query: q
    }
  }

}
