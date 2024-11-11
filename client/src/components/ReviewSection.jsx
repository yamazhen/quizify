import Chart from "./Chart"

const ReviewSection = ({ onButtonClick }) => {
    return (
        <>
            <div id="reviewmenu"
                className="bg-slate-800 mt-8 w-[60%] p-4 rounded-md border border-slate-700">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl">Next Review</h2>
                    <a onClick={() => onButtonClick('answering')} className="float-right px-8 py-2 bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 duration-300">Start Review</a>
                </div>
                <p>Your next review will contain all questions from your lecture resources.</p>
            </div>
            <div id="reviewstats"
                className="bg-slate-800 mt-8 w-[60%] p-4 rounded-md border border-slate-700">
                <h2 className="text-2xl">Your Progress</h2>
                <Chart></Chart>
            </div>
        </>
    )
}

export default ReviewSection
