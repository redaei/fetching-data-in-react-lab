import '../App.css'
import StarshipCard from './StarshipCard'

const StarshipList = (props) => {
  {
    console.log(props.count)
  }
  return (
    <section>
      <h3>Starships</h3>
      <p>Number of results: {props.count}</p>
      <ul>
        {props.starships.map((starship) => (
          <li key={starship.name}>
            <StarshipCard starship={starship} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default StarshipList
