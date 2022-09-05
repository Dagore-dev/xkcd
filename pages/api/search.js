import search from "../../services/search"

export default async function handler(req, res) {
  const { query: { q } } = req
  const result = await search(q)

  res.json(result)
}
