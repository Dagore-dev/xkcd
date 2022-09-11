import fs from 'fs-extra'

export default async function getComicById(id) {
  const path = `comics/${id}.json`
  const fileExists = await fs.pathExists(path)

  if (!fileExists) return { status: 404, content: { message: `Comic with id: "${id}" not found` } }

  try {
    const comic = await fs.readJSON(path)
    return { status: 200, content: comic }
  } catch (error) {
    return { status: 500, content: { message: 'Internal server error' } }
  }

}
