import React,{useState} from 'react'
import InterviewCard2 from './InterviewCard2/InterviewCard';
import Classes from './InterviewList.module.css'
export default function InterviewList() {
    const [btn, btnsetstate] = useState('true')
    let swclass= `${Classes.switch} pt-1`;
    let swtching=()=>{
        btnsetstate(!btn)
        console.log(btn)
    }
    return (
        <div className="mt-5">
            <div className="d-inline-block" style={{marginRight:"12px"}}>
                <div onClick={swtching} className={btn?'':swclass}>
                        Today
                </div>
                
            </div>
            <div className="d-inline-block ">
                <div className={btn?swclass:''} onClick={swtching}>
                        Upcoming
                </div>
            </div>
            <div>
                <InterviewCard2></InterviewCard2>
            </div>
            
        </div>
    )
}
