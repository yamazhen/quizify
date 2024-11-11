import { faChevronLeft, faChevronRight, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UploadBox from './UploadBox'

const QuestionsMenu = () => {
    return (
        <>
            <UploadBox></UploadBox>
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
                        <tr>
                            <td className="table-body"><span className='table-file-button'>Chapter 1</span></td>
                            <td className="table-body text-center">30</td>
                            <td className="table-body text-center"><FontAwesomeIcon icon={faCirclePlay}/></td>
                        </tr>
                        <tr>
                            <td className="table-body"><span className='table-file-button'>Chapter 2</span></td>
                            <td className="table-body text-center">20</td>
                            <td className="table-body text-center"><FontAwesomeIcon icon={faCirclePlay}/></td>
                        </tr>
                        <tr>
                            <td className="table-body"><span className='table-file-button'>Chapter 3</span></td>
                            <td className="table-body text-center">10</td>
                            <td className="table-body text-center"><FontAwesomeIcon icon={faCirclePlay}/></td>
                        </tr>
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
