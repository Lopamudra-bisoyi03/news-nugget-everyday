import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question:
        'Which country recently launched its first-ever crewed mission to its space station, Tianhe?',
      options: ['Russia', 'China', 'US', 'India'],
      answer: 'China',
    },
    {
      question: 'Who won the Academy Award for Best Actor in 2024?',
      options: [
        'Will Smith',
        'Leonardo DiCaprio',
        'Denzel Washington',
        'Benedict Cumberbatch',
      ],
      answer: 'Will Smith',
    },
    {
      question:
        'Which company recently announced its plans to develop a metaverse platform?',
      options: ['Google', 'Facebook', 'Apple', 'Micrasoft'],
      answer: 'Facebook',
    },
    {
      question:
        'Which European country recently declared a state of emergency due to a surge in COVID-19 cases?',
      options: ['France', 'Germany', 'Italy', 'Spain'],
      answer: 'France',
    },
    {
      question: 'Which city is set to host the 2024 Summer Olympics?',
      options: ['Tokyo', 'Paris', 'LA', 'Bejing'],
      answer: 'LA',
    },
    {
      question:
        'Which cryptocurrency recently surpassed $100,000 for the first time in its history?',
      options: ['Bitcoin', 'Ethereum', 'Dogecoin', 'Ripple(XRP)'],
      answer: 'Bitcoin',
    },
    {
      question:
        'Which tech CEO recently stepped down from his position, sparking controversy and discussions about corporate governance?',
      options: [
        'Elon Musk (Tesla)',
        'Tim Cook (Apple)',
        'Sundar Pichai (Google)',
        'Mark Zuckerberg (Facebook/Meta)',
      ],
      answer: 'Mark Zuckerberg (Facebook/Meta)',
    },
    {
      question:
        'Which country recently announced plans to build a high-speed rail link between its capital city and a major port city, aimed at enhancing connectivity and trade?',
      options: ['Japan', 'China', 'UK', 'India'],
      answer: 'China',
    },
    {
      question:
        'Who won the Nobel Peace Prize in 2024 for their efforts in promoting peace and reconciliation in a conflict-torn region?',
      options: [
        'Greta Thunberg',
        'Abiy Ahmed',
        'Malala Yousafzai',
        'Angela Merkel',
      ],
      answer: 'Abiy Ahmed',
    },
    {
      question:
        'Which social media platform recently faced backlash for its handling of user data and privacy concerns, leading to calls for increased regulation?',
      options: ['Tiktok', 'Snapchat', 'Twitter', 'Instagram'],
      answer: 'Tiktok',
    },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleStartQuiz = () => {
    setCurrentQuestion(0);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    if (selectedOption !== "" && currentQuestion >= 0) {
      const timer = setTimeout(() => {
        handleNextQuestion();
      }, 500); // Adjust the delay as needed
      return () => clearTimeout(timer);
    }
  }, [selectedOption]);

  return (
    <div>
      <h1>News Nugget</h1>
      <div className="quiz-container">
        {!showScore && currentQuestion === -1 && (
          <div>
            <h2>"Unlock the treasure trove of knowledge, one news nugget at a time."</h2>
            <button onClick={handleStartQuiz}>Let's Start</button>
          </div>
        )}
        {!showScore && currentQuestion >= 0 && (
          <div>
            <h2>{questions[currentQuestion].question}</h2>
            <div className="options-container">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={selectedOption === option ? "selected" : ""}
                  disabled={selectedOption !== "" || showScore}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
        {showScore && (
          <div>
            <h2>Final Score: {score} out of {questions.length}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
