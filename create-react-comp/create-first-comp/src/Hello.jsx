function Hello() {

  let myName = "sumit";

  let fullName = () => {
    return 'sumit kumar singh';
  }

  return <div>
    <h3>Hello this is the future speaking. i am your master {myName} </h3>
  
  <h2>my full name is {fullName()}</h2></div>
    
  
  
}

export default Hello;