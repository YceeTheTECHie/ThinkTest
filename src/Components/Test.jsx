import React, { Component } from 'react';
import './style.css';
import {qBank} from '../api/questionBank';
import { Button, Icon } from '@material-ui/core';
class Test extends Component {
    questionBox;
    state = {
        currentQuestion : 0,
        userAnswer : null,
        answers: [],
        score: 0,
        quizEnd : false,
        open: false
    }
    loadTest = () => {
        const {currentQuestion} = this.state
        this.setState(() => {
            return {
                Questions : qBank[currentQuestion].question,
                answers : qBank[currentQuestion].answers,
                correctAnswer : qBank[currentQuestion].correct,
            }
        })   

    }


    playAgain = (score) => {
        this.loadTest();
        this.setState({
            currentQuestion:0,
            score : 0,
            userAnswer : null,
            answers: [],
            quizEnd : false

        });
         }


    nextQuest = () => { 
        const {userAnswer,correctAnswer,score} = this.state
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
        if (userAnswer === correctAnswer) {
            this.setState({
                score: score + 1
            })
        }
    }

    
    componentDidUpdate(prevProps, prevState){
        const {currentQuestion} = this.state
        if(this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return{
                    Questions : qBank[currentQuestion].question,
                    answers : qBank[currentQuestion].answers,
                    correctAnswer : qBank[currentQuestion].correct,
                        
                }   
            })
        }
    }

    componentDidMount() {
        this.loadTest()
        this.questionBox = JSON.parse(localStorage.getItem('qA'));
        if (localStorage.getItem('qA')){
            this.setState({
                currentQuestion : this.questionBox.currentQuestion,
                answers: this.questionBox.answers
            })
        }
        else{
            this.setState({
                currentQuestion:0,
                answers: [],

            })
        }
    }


    componentWillUpdate(nextProps,nextState){
        localStorage.setItem('qA',JSON.stringify(nextState));

    }
        
        answerCheck = answer => {
            this.setState({
                userAnswer:answer
            })  
        }


        handleBoth = () => {
            this.handleClickOpen();
            this.finishtest();
        }



        handleClickOpen = () => {
            this.setState({ open: true });
          };

        finishtest = () => {
            if (this.state.currentQuestion === qBank.length - 1){
                this.setState({
                    quizEnd:true,
                })
            }
        }

        
    render() {
           document.title =  "Test"
        const {Questions,userAnswer,answers,currentQuestion,quizEnd} = this.state
        
        if (quizEnd === true) {
            return (
      <div className="w3-container w3-center w3-animate-top resultbox">
                 <h1 className = "reultbox">
                Test Completed. <br/>Your IQ: {this.state.score * 20}</h1>
                <div className = "playbutton">
                <Button className = "fa fa-refresh" color   = "primary" size = "large" onClick = {this.playAgain}>Play Again<i class="small material-icons">autorenew</i></Button>
                </div>
      </div>
                      )}

        return (
        <React.Fragment>
            <div className = "card">
            <br/>
            <br/>
               <h4 className = "questiontitle">Question(s) {currentQuestion + 1}</h4>
                      <h4 className = " question flow-text">{Questions}</h4> 
                      <br/>
                      <br/> 
                    {answers.map(answer => (
                        <p style = { userAnswer ===  answer ? {color:"red"} : null} 
                            key = {answer.questionId}
                            className = "collection ans flow-text"
                            onClick = {() => this.answerCheck(answer)}
                            >
                                {answer}
                               
                        </p>
                     
                    ))}      
            </div> 
            <p className = "ansbtn">{(currentQuestion < qBank.length - 1) ? 
                
 <Button color  = "primary" variant="contained" className = "ansbtn"   onClick = {this.nextQuest} > next <Icon className = "arrow" style={{ fontSize: 10 }}>send</Icon>  </Button> :
     <Button  className = "finish" onClick = {this.finishtest} color  = "primary" >finish 
  </Button>}
      </p> 
        </React.Fragment>
        );
    }
}
 
export default Test;  