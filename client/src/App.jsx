import ReviewSection from "./components/ReviewSection"

function App() {
    return (
        <main className="bg-slate-900 pt-14">
            <header className="flex justify-center fixed w-full top-0 h-14 items-center bg-slate-900 border-b border-slate-800">
                <h1 className="text-3xl font-bold">Quizify</h1>
            </header>
            <section className="flex flex-col items-center my-12">
                <div id="navbutton"
                className="flex flex-row cursor-pointer">
                    <p className="bg-slate-700 border-b-2 border-blue-600 px-12 py-3 rounded-l-3xl">Review</p>
                    <p className="bg-slate-800 px-12 py-3 rounded-r-3xl">Questions</p>
                </div>
                <ReviewSection></ReviewSection>
            </section>
        </main>
    )
}

export default App
