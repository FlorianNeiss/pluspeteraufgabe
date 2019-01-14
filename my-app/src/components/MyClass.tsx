import React, { Component } from 'react';
import { Question } from '../interfaces/question';

export interface MyClassProps { id: number; };
export interface MyClassState { error: any; isLoaded: boolean; questions: Question[]; };

class MyClass extends Component<MyClassProps, MyClassState> {
    constructor(props: MyClassProps) {
        super(props);
        this.state = {
            error: '',
            isLoaded: false,
            questions: []
        };
    }

    fetchdata() {
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

    componentDidMount() {
        this.fetchdata();
    }

    render() {
        const { error, isLoaded, questions } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h3>Question:</h3>
                    {questions.map(item => (
                        <div>
                            <h4>{item.question} </h4>
                            <h3>Category title:</h3>
                            <h4>{item.category.title}</h4>
                        </div>
                    ))}
                </div>

            );
        }
    }
}

export default MyClass;
