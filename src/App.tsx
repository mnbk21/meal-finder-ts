import {useState} from "react"
import Header from "./components/Header"
import Form from "./components/Form"

const App = () => {

  // useStateの型は大半のケースで推測してくれるので、あえて付けなくてもいい
  const [mealName, setMealName] = useState("");

  const [mealData, setMealData] = useState({
    id: "",
    name: "",
    instructions: "",
    img: "",
    source: "",
    area: "",
    category: "",
  })

  const getMealData = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault;
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    const jsonData = await response.json();

    // setMealData({
    //   id: jsonData.meals[0].idMeal,
    //   name: jsonData.meals[0].strMeal,
    //   instructions: jsonData.meals[0].strInstructions,
    //   img: jsonData.meals[0].strMealThumb,
    //   source: jsonData.meals[0].strYoutube,
    //   area: jsonData.meals[0].strArea,
    //   category: jsonData.meals[0].strCategory
    // })

    const {idMeal, strMeal, strInstructions, strMealThumb, strYoutube, strArea, strCategory} = jsonData.meals[0]

    setMealData({
      id: idMeal,
      name: strMeal,
      instructions: strInstructions,
      img: strMealThumb,
      source: strYoutube,
      area: strArea,
      category: strCategory
    })

  }

  return (
    <div>
      <Header />
      <h1>こんにちは</h1>
      <Form setMealName={setMealName} getMealData={getMealData}/>
    </div>
  )
}

export default App