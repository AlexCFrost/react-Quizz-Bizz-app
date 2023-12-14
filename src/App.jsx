import { useState, useEffect} from 'react'
import './App.css'

function App() {
  // All Questions and answer 
  const questions = [
    {
      questionContent : 'How many vowels are there in Tamil language ?',
      answeroptions : [
        {answerCont: '12', isRight: true},
        {answerCont: '13', isRight: false}, 
        {answerCont: '11', isRight: false},
        {answerCont: '14', isRight: false} , 
      ]
    },
    {
      questionContent : 'Which other country than India have Tamil as protected language under its constitution ?',
      answeroptions : [
        {answerCont: 'Malaysia', isRight: false},
        {answerCont: 'South Africa', isRight: true}, 
        {answerCont: 'Australia', isRight: false},
        {answerCont: 'Japan', isRight: false} , 
      ]
    },
    {
      questionContent : 'Which of the following country have Tamil as official language ?',
      answeroptions : [
        {answerCont: 'Malaysia', isRight: false},
        {answerCont: 'Singapore', isRight: true}, 
        {answerCont: 'Bhutan', isRight: false},
        {answerCont: 'Burma', isRight: false} ,  
      ]
    },
    {
      questionContent : 'How many letters are in Tamil Language?',
      answeroptions : [
        {answerCont: '15', isRight: false},
        {answerCont: '216', isRight: false}, 
        {answerCont: '365', isRight: false},
        {answerCont: '247', isRight: true} , 
      ]
    },
    {
      questionContent : 'What does VANAKAM mean in tamil?',
      answeroptions : [
        {answerCont: 'Greetings', isRight: true},
        {answerCont: 'Good Night', isRight: false}, 
        {answerCont: 'Thank You', isRight: false},
        {answerCont: 'Sorry', isRight: false} , 
      ]
    }
  ]

  const [theme, setTheme] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] =useState(0);
  const [isHighlight, setHighlight] = useState(false);

// To create theme change button
useEffect(()=>{
  if(theme===true){
    document.body.classList.add('dark')
  }else{
    document.body.classList.remove('dark')
  }
},[theme])

const handleClickTheme = ()=>{
  setTheme(!theme)
}


// To increase Score
  const handleAnswerOption = (isRight)=> {
    if(isRight){
      setScore(score + 1);
    }
    handleNextQuestion()
  }  

// To go next question and if it is false it goes to score card
 const handleNextQuestion = () => {
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
  } else {
    setShowScore(true);
  }
 };

//  To Restart all the values
 const handleRestart = ()=>{
  setCurrentQuestion(0);
  setShowScore(false);
  setScore(0);
 }

//  To Highlight the Question
const handleHighlight = ()=>{
  setHighlight(!isHighlight)
}

  return (
    // Now if the above setShow is false question card will run else showScore will run
    <div className='app'>
          <div >
              <button className='theme-btn' onClick={handleClickTheme}>Theme</button>
          </div>
      {showScore ?(
        <div className='score-card'>
          <div>
            <h3>You Scored {score} out of {questions.length}, ({(score/5)*100}%) </h3>
          </div>
          <div>
            <button className='btn' onClick={handleRestart}>Restart</button>
          </div>
        </div>
        
      ) : (
        <div className='card'>
          <div className='question-card'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className={`question-content ${isHighlight ? 'highlighted' : ''}`}>
                {questions[currentQuestion].questionContent}
              </div>
          </div>
          <div className='answer-card'>
              {questions[currentQuestion].answeroptions.map((answerOption, index)=>(
                <button className='btn' key={index} onClick={()=> handleAnswerOption(answerOption.isRight)}>{answerOption.answerCont}</button>
              ))}
          </div>
        </div>

      )}
      <button onClick={handleHighlight} className='highlight-button'>
          {isHighlight ? 'Remove Highlight' : 'Highlight'}
       </button>
    </div>
  )
}

export default App
