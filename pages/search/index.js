import SearchForm from '../../components/SearchForm'
import SearchResults from '../../components/SearchResults'
import search from '../../services/search'

export default function Search({ query, results }) {
  if (query === '') return <SearchForm />

  return <SearchResults query={query} results={results} />
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
