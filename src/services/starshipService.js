const BASE_URL = `https://swapi.py4e.com/api/starships`

const search = async (starShipName) => {
  try {
    const queryString = `?search=${starShipName}`
    const res = await fetch(BASE_URL + queryString)
    const data = await res.json()
    console.log('Data:', data)
    return data
  } catch (err) {
    console.log(err)
  }
}

export { search }
