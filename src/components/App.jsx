import Difficulty from './Difficulty';
import { Recipe } from './Recipe/Recipe';
import recipie from 'recipe';


export const App = () => {
  return (
    <>
      {recipie.map(({name, time, servings, calories, image, difficulty}) => (
        <>
          <Recipe
            key={image}
            name={name}
            time={time}
            servings={servings}
            calories={calories}
            image={image}
          />
          <Difficulty key={time} difficulty={difficulty} />
        </>
        ))
      }
    </>
  )
}