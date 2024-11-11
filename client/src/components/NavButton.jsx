import React from 'react'

const NavButton = ({ activeTab, onTabClick }) => {
    return (
        <div id="navbutton"
            className="flex flex-row cursor-pointer">
            <p className={`px-12 py-3 rounded-l-3xl transition-all duration-300 ease-in-out ${activeTab === 'review' ? 'bg-slate-700 border-b-2 border-blue-600' : 'bg-slate-800'}`}
                onClick={() => onTabClick('review')}>Review</p>
            <p className={`px-12 py-3 rounded-r-3xl transition-all duration-300 ease-in-out ${activeTab === 'questions' ? 'bg-slate-700 border-b-2 border-blue-600' : 'bg-slate-800'}`}
                onClick={() => onTabClick('questions')}>Questions</p>
        </div>
    )
}

export default NavButton
