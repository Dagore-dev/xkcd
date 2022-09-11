import getComicById from '../../../services/getComicById'

export default async function handler(req, res) {
  const { query } = req
  const { id } = query
  const { status, content } = await getComicById(id)

  res
    .status(status)
    .send(content)
}
