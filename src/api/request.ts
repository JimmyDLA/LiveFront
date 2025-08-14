// https://rickandmortyapi.com/api
// {
//   "characters": "https://rickandmortyapi.com/api/character",
//   "locations": "https://rickandmortyapi.com/api/location",
//   "episodes": "https://rickandmortyapi.com/api/episode"
// }

const BASE_URL = 'https://rickandmortyapi.com/api'

export const GET = async (endpoint: string) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);

    if(!res.ok) {
      throw new Error(`ERROR: ${res.status}`)
    }

    const data = await res.json();
    return data

  } catch (err) {
    console.log(err)
  }
}