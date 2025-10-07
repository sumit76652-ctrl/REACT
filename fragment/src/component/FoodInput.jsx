import styles from "./FoodInput.module.css"; 

const FoodInput = ({handleKeyDown}) => {

 

  return <input typr="text" placeholder="enter food item here" className={styles.foodInput}
  onKeyDown={ handleKeyDown}
  />;
}

export default FoodInput;