import React from 'react';
import './Main.css';
import { QuestionsComponents } from './QuestionsComponents';
import questions from './data';

function App() {
  return (
    <React.Fragment>
      <div className="mt-20 mb-10 p-8 shadow-lg mx-auto max-w-3xl w-11/12 bg-white rounded">
                <div className="md:flex md:justify-between">
                    <h2 className="text-sm sm:text-xl md:text-3xl w-48 tracking-wider md:mt-2">Questions And Answers About Login</h2>
                    <div className="flex flex-col">
                    {
                        questions.map(question => {
                            return (
                                <QuestionsComponents key={question.id} {...question} />
                            )
                        })
                    }
                    </div>
                </div>
            </div>
    </React.Fragment>
  );
}

export default App;
