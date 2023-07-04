import React from 'react';
import './App.css';
 
class MyMessage extends React.Component {
  render() {
    return <div><h1>Toady I should  {this.props.name}</h1></div>;
  }
}
class List extends React.Component{
  render(){
    return(
      <div id='list'>
       <input type="radio" id="coding" name="list1" value="coding"></input>
        <label for="coding">Coding   </label>  
        <input type="radio" id="reading" name="list1" value="reading"></input>
        <label for="reading">Reading   </label>
        <input type="radio" id="nothing" name="list1" value="nothing"></input>
        <label for="nothing">Nothing</label>
       </div>
    );
  }
}
function App() {
    return (
      <div>
        <h1> Hello React!! </h1>
        <p> Let's see what to do? </p>
        {/* using our compnent here */}
        <MyMessage name="DO" />
        <List />
      </div>
    );
}
 
export default App;
