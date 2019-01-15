import React, { Component } from 'react';
import { Question } from '../interfaces/question';

export interface AnswerFormProps {  };
export interface AnswerFormState { value: any; questions: Question[]; isCorrect: boolean;};

export default class AnswerForm extends Component<AnswerFormProps, AnswerFormState> {
    constructor(props: AnswerFormProps) {
      super(props);
      this.state = {value: '', questions: [],
      isCorrect: false};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    // handleClick(event: any) {
    //     if (this.state.questions.find(q => q.answer.toLocaleLowerCase() === event.target.value.toLocaleLowerCase())) {
    //         this.setState({ isCorrect: true });
    //     } else {
    //         this.setState({ isCorrect: false });
    //     }
    // }

    handleChange(event: any) {
        this.setState({value: event.target.value});

    }
  
    handleSubmit(event: any) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      if (this.state.questions.find(q => q.answer.toLocaleLowerCase() === this.state.value.toLocaleLowerCase())) {
        this.setState({ isCorrect: true });
    } else {
        this.setState({ isCorrect: false });
    }
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }