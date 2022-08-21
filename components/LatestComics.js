import ComicCard from './ComicCard'

export default function LatestComics({ comics }) {
  return (
    <div>
      {
        comics.map(comic => <ComicCard key={comic.id} content={comic} />)
      }
    </div>
  )
}
