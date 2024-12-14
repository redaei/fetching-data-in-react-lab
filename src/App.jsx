import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { search } from './services/starshipService'

const App = () => {
  let newSearch = { count: 0, results: [] }
  const [count, setCount] = useState(0)
  const [starships, setStarships] = useState([])
  const fetchData = async (starShipName) => {
    const data = await search(starShipName)
    newSearch = await {
      count: data.count,
      results: data.results
    }
    setStarships(newSearch.results)
    setCount(newSearch.count)
  }
  useEffect(() => {
    fetchData('')
  }, [])
  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch fetchData={fetchData} />
      <StarshipList starships={starships} count={count} />
    </main>
  )
}

export default App
