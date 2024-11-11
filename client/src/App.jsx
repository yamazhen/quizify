import { useState } from "react";
import QuestionsMenu from "./components/QuestionsMenu"
import ReviewSection from "./components/ReviewSection"
import NavButton from "./components/NavButton";
import AnswerSection from "./components/AnswerSection";

function App() {
    const [activeTab, setActiveTab] = useState('review');
    const [selectedFileName, setSelectedFileName] = useState(null);

    const handleTabClick = (tab, fileName) => {
        if (tab !== 'answering') {
            setSelectedFileName(null);
        }
        setActiveTab(tab);
        if (fileName) setSelectedFileName(fileName);
    };

    return (
        <main className="bg-slate-900 pt-14">
            <header className="flex justify-center fixed w-full top-0 h-14 items-center bg-slate-900 border-b border-slate-800">
                <a href="/" className="text-3xl font-bold">Quizify</a>
            </header>
            <section className="flex flex-col items-center my-8">
                <NavButton activeTab={activeTab} onTabClick={handleTabClick}/>
                {activeTab === 'review' && <ReviewSection onButtonClick={handleTabClick}/>}
                {activeTab === 'questions' && (
                    <QuestionsMenu onStartReview={(fileName) => handleTabClick('answering', fileName)}/>
                )}
                {activeTab === 'answering' && (
                    <AnswerSection fileName={selectedFileName} key={selectedFileName || 'all'} />
                )}
            </section>
        </main>
    )
}

export default App
