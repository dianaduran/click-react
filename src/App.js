import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Img from "./components/Img";
import dogs from "./dogs.json";
import { Container } from "./components/Grid";
import Footer from "./components/Footer";

function shuffleArray (array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

let clicked=[];
let TopScore=0;
let text="Click an image to begin!";

class App extends Component {

  state={
    count:0,
    dogs:dogs
  };

  clickImgID=id=>{  
    //the img is not clicked before and topScore is less or equal to count, increse both
      if(clicked.indexOf(id)<0 && TopScore<=this.state.count){
         clicked.push(id);
         this.setState({ count: this.state.count + 1 });
         TopScore+=1;
         this.setState({dogs: shuffleArray(dogs)})
         text="You guessed correctly!";
      }
      //the img is not clicked before and topScore is more than count, increse just the count
      else if(clicked.indexOf(id)<0 && TopScore > this.state.count){
        clicked.push(id);
        this.setState({ count: this.state.count + 1 });
        this.setState({dogs: shuffleArray(dogs)})
        text="You guessed correctly!";
      }
     else
     {
       //the img was clicked before the topScore is equal and the score is reseted to 0
      clicked=[];
      this.setState({ count: 0 });
      this.setState({dogs: shuffleArray(dogs)});
     //  TopScore+=1;
       text="You guessed incorrectly!";
     }
 }
 
  render() {
     return (
    <div>
      <Nav count={this.state.count} topScore={TopScore} text={text}/>
      <Header />
      <Container>
        <div>
        {this.state.dogs.map((dog, key) => (
          <Img
              id={dog.id}
              key={dog.id}
              url={dog.url}
              clickImgID={this.clickImgID}
            />
          ))}        
        </div>
   </Container> 
    <Footer />
    </div>

  );
 }
}

export default App;
