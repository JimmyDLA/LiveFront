// https://rickandmortyapi.com/api
// {
//   "characters": "https://rickandmortyapi.com/api/character",
//   "locations": "https://rickandmortyapi.com/api/location",
//   "episodes": "https://rickandmortyapi.com/api/episode"
// }

export const BASE_URL = 'https://rickandmortyapi.com/api'

export const GET = async (url: string) => {
  try {
    const res = await fetch(url);

    if(!res.ok) {
      throw new Error(`ERROR: ${res.status}`)
    }

    const data = await res.json();
    return data

  } catch (err) {
    console.log(err)
  }
}