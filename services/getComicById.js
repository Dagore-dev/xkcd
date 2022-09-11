import fs from 'fs-extra'
import path from 'node:path'

export default async function getComicById(id) {
  const comicPath = path.join(process.cwd(), `comics/${id}.json`)
  const fileExists = await fs.pathExists(comicPath)

  if (!fileExists) return { status: 404, content: { message: `Comic with id: "${id}" not found` } }

  try {
    const comic = await fs.readJSON(comicPath)
    return { status: 200, content: comic }
  } catch (error) {
    return { status: 500, content: { message: 'Internal server error' } }
  }

}
