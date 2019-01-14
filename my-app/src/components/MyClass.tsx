import React, { Component } from 'react';
import { Question } from '../interfaces/question';

export interface MyClassProps { id: number;};
export interface MyClassState { error: any; isLoaded:boolean; questions: any[];};

class MyClass extends Component<MyClassProps, MyClassState> {
    constructor(props:MyClassProps) {
      super(props);
      this.state = {
        error: '',
        isLoaded: false,
        questions: []
      };
    }
  
    componentDidMount() {
      fetch("http://jservice.io/api/random")
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result);
            this.setState({
              isLoaded: true,
              questions: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, questions } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {questions[0].id}
          </ul>
        );
      }
    }
  }

export default MyClass;
