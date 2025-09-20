function Random() {

  let number = Math.floor(Math.random()*100);

  return <h1 style={{'background-color' : '#776691'}}>Rando number is : {number}</h1>
}

export default Random;