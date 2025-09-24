
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  
  // let foodItems = [];

  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];

  

  return (
    <>
      <h1 className = "food-heading ">Healthy Food</h1>

      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;




  
