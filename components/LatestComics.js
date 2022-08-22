import ComicCard from './ComicCard'

export default function LatestComics({ comics }) {
  return (
    <div className='md:grid md:grid-cols-2 lg:grid-cols-3'>
      {
        comics.map(comic => <ComicCard key={comic.id} content={comic} />)
      }
    </div>
  )
}
