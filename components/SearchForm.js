import Head from 'next/head'
import PrimaryLayout from './PrimaryLayout'
import PrimaryContainer from './PrimaryContainer'
import H1 from './H1'
import { useState } from 'react'

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState('')

  function handleChange(e) {
    setSearchValue(e.target.value)
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

          <form>
            <input type='search' name='q' onChange={handleChange} value={searchValue} className='border-2 border-indigo-600 px-1 rounded' />
            <button className='bg-indigo-600 w-20 rounded-lg text-center py-1 mx-2'>
              <span className='text-white opacity-70 hover:opacity-100 duration-300'>
                Search
              </span>
            </button>
          </form>

          <H1>{searchValue}</H1>
        </PrimaryContainer>
      </PrimaryLayout>
    </>
  )
}
