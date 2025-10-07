
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import FoodInput from "./component/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./component/Container";
import { useState } from "react";


function App() {
  
  // let foodItems = [];

  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];

  let [foodItems, setFoodItems] = useState(["salad", "green vegetables", "Roti"])

   const onKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = ([...foodItems, newFoodItem]);
      setFoodItems(newItems);
      
    }
    
  }
  

  return (
    <>
   <Container>
      <h1 className = "food-heading ">Healthy Food</h1>

      
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>
      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems}></FoodItems>
    </Container>

    {/* <Container>
      <p>Above is the list of healthy foods that are good for your health and well being.</p>
    </Container> */}
    </>
  );
}

export default App;




  
