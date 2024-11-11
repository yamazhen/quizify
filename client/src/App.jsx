import { useState } from "react";
import QuestionsMenu from "./components/QuestionsMenu"
import ReviewSection from "./components/ReviewSection"

function App() {
    const [activeTab, setActiveTab] = useState('review');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <main className="bg-slate-900 pt-14">
            <header className="flex justify-center fixed w-full top-0 h-14 items-center bg-slate-900 border-b border-slate-800">
                <h1 className="text-3xl font-bold">Quizify</h1>
            </header>
            <section className="flex flex-col items-center my-12">
                <div id="navbutton"
                className="flex flex-row cursor-pointer">
                    <p className={`px-12 py-3 rounded-l-3xl transition-all duration-300 ease-in-out ${activeTab === 'review' ? 'bg-slate-700 border-b-2 border-blue-600' : 'bg-slate-800'}`}
                    onClick={() => handleTabClick('review')}>Review</p>
                    <p className={`px-12 py-3 rounded-r-3xl transition-all duration-300 ease-in-out ${activeTab === 'questions' ? 'bg-slate-700 border-b-2 border-blue-600' : 'bg-slate-800'}`}
                    onClick={() => handleTabClick('questions')}>Questions</p>
                </div>
                {activeTab === 'review' && <ReviewSection/>}
                {activeTab === 'questions' && <QuestionsMenu/>}
            </section>
        </main>
    )
}

export default App
