import algoliasearch from 'algoliasearch/lite'

const client = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_READ_ONLY_API_KEY)
const index = client.initIndex('prop_comics')

export default async function search(query) {
  const { hits } = await index.search(query, {
    hitsPerPage: 10,
    attributesToRetrieve: ['id', 'title', 'img', 'alt', 'height', 'width']
  })

  return hits
}
