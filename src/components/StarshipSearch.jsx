import { useState } from 'react'

const StarshipSearch = (props) => {
  const [name, setName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    props.fetchData(name)
    setName('')
  }

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Search Term:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  )
}

export default StarshipSearch
