// lib/image.js
import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity' // We import the client we already created

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}