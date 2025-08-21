import { defineQuery } from "next-sanity";

export const STARTUP_QUERIES = defineQuery(`
  *[_type == 'startup' && defined(slug.current)] | order(_createdAt desc){
  _id,
  title,
  slug,
  _createdAt,
  author -> {
    _id,
    name,
    username,
    email,
    image,
    bio
  },
  views,
  description,
  category,
  "slug": slug.current,
  "imageUrl": image.asset->url,
  image
}
`)