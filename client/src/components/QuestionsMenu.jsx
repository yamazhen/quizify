import { faChevronLeft, faChevronRight, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UploadBox from './UploadBox'
import { useEffect, useState } from 'react'
import axios from 'axios'

const QuestionsMenu = ({ onStartReview }) => {
    const [resources, setResources] = useState([])

    const fetchResources = async () => {
        try {
            const response = await axios.get("http://localhost:3000/resources");
            setResources(response.data.questions);
        } catch (error) {
            console.error("Error fetching resources: ", error);
        }
    };

    useEffect(() => {
        fetchResources();
    }, []);

    return (
        <>
            <UploadBox onUploadSuccess={fetchResources} />
            <div id="questionsmenu"
                className="bg-slate-800 mt-8 w-[60%] rounded-md border border-slate-700">
                <table className="min-w-full">
                    <thead className="border-b-2 border-slate-700">
                        <tr>
                            <th className="table-head text-left w-1/2">Resource</th>
                            <th className="table-head w-1/4">Questions Count</th>
                            <th className="table-head w-1/4">Start Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resources.length > 0 ? (
                            resources.map((resource, index) => (
                                <tr key={index}>
                                    <td className='table-body'><span className='table-file-button'>{resource.fileName}</span></td>
                                    <td className='table-body text-center'>{resource.questionCount}</td>
                                    <td className="table-body text-center"><FontAwesomeIcon icon={faCirclePlay} className='cursor-pointer' onClick={() => onStartReview(resource.fileName)}/></td>
                                </tr>
                            ))
                        ) : (
                                <tr>
                                    <td className="table-body text-xs">No questions generated yet...</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
            <div id='paging'
                className='flex flex-row justify-end mt-5 w-[60%] items-center gap-6'>
                <p className='text-sm'>1-3 of 3</p>
                <FontAwesomeIcon icon={faChevronLeft} size='xs' className='cursor-pointer' />
                <FontAwesomeIcon icon={faChevronRight} size='xs' className='cursor-pointer' />
            </div>
        </>
    )
}

export default QuestionsMenu
