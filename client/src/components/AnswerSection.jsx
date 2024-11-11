import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnswerSection = () => {
    const [questions, setQuestions] = useState([]);
    const [results, setResults] = useState(null);

    const fetchQuestions = async () => {
        try {
            const response = await axios.get("http://localhost:3000/questions");
            setQuestions(response.data.questions); 
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userAnswers = questions.map((question) => {
            const selectedChoice = document.querySelector(`input[name="question-${question.id}"]:checked`)?.value;
            return {
                questionId: question.id,
                answer: selectedChoice || null,
            };
        });

        try {
            const response = await axios.post("http://localhost:3000/submit-answers", {
                answers: userAnswers,
            });
            setResults(response.data);
        } catch (error) {
            console.error("Error submitting answers:", error);
        }
    };

    return (
        <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
            {questions.length > 0 ? (
                <>
                    {questions.map((question, index) => (
                        <div key={question.id} className="bg-slate-800 p-4 mt-8 rounded-md border border-slate-700">
                            <p>{"Q" + (index + 1) + ". " + question.questionText}</p>
                            {JSON.parse(question.choices).map((choice, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id={`question-${question.id}-choice-${idx}`}
                                        name={`question-${question.id}`}
                                        value={choice}
                                        className="cursor-pointer"
                                    />
                                    <label htmlFor={`question-${question.id}-choice-${idx}`}>
                                        {choice}
                                    </label>
                                </div>
                            ))}

                            {results && (
                                <div className="mt-2">
                                    {results.results[index].isCorrect ? (
                                        <p className="text-green-500">Correct!</p>
                                    ) : (
                                        <p className="text-red-500">
                                            Incorrect. The correct answer is: <strong>{results.results[index].correctAnswer}</strong>
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                    <button type="submit" className="mt-6 bg-orange-500 px-4 py-2 rounded hover:bg-orange-600">
                        Submit Answers
                    </button>
                </>
            ) : (
                <p className='mt-8'>No questions available</p>
            )}
        </form>
    );
};

export default AnswerSection;
