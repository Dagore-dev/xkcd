import Head from 'next/head'
import PrimaryLayout from './PrimaryLayout'
import PrimaryContainer from './PrimaryContainer'
import H1 from './H1'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SearchHighlights from './SearchHighlights'

export default function SearchForm() {
  const [state, setState] = useState({ search: '', hits: [] })
  const router = useRouter()

  // Debounce without dependencies
  useEffect(() => {

    const getHits = setTimeout(() => {
      fetch(`/api/search?q=${state.search}`)
        .then(response => response.json())
        .then(results => {
          setState(prev => { return { ...prev, hits: results } })
        })
    }, 1000)

    // Destroy timeout on cleanup
    return () => clearTimeout(getHits)

  }, [state.search])

  function handleChange(e) {
    setState(prev => { return { ...prev, search: e.target.value } })
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.push(`/search?q=${state.search}`)
  }

  return (
    <>
      <Head>
        <title>Find a xkcd comic</title>
        <meta name="description" content='Search a xkcd comic' />
      </Head>

      <PrimaryLayout>
        <PrimaryContainer>
          <H1>Find your favorites xkcd comics</H1>

          <form onSubmit={handleSubmit}>
            <input type='search' name='q' onChange={handleChange} value={state.search} className='border-2 border-indigo-600 px-1 rounded' />
            <button className='bg-indigo-600 w-20 rounded-lg text-center py-1 mx-2'>
              <span className='text-white opacity-70 hover:opacity-100 duration-300'>
                Search
              </span>
            </button>
          </form>

          <SearchHighlights search={state.search} hits={state.hits} />
        </PrimaryContainer>
      </PrimaryLayout>
    </>
  )
}
