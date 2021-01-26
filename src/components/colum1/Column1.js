// import classes from '*.module.css'
import React,{useState} from 'react'
import Classes from './Column1.module.css'
import DatePicker from "react-horizontal-datepicker";
import InterviewList from './InterviewList/InterviewList'
import InterviewCard2 from './InterviewList/InterviewCard2/InterviewCard';
import ScheduledInterviews from './scheduledinterviews/ScheduledInterviews';
import PendingInterviews from './Pendinginterviews/PendingInterviews';
export default function Column1() {
    const [btn, btnsetstate] = useState('true')
    let swclass= `${Classes.switch} p-2`;
   let swtching=()=>{
        btnsetstate(!btn)
        console.log(btn)
    }
    const selectedDay = (val) =>{
        console.log(val)
    };
 

    return (
        <div className="p-2">
            <div style={{marginTop:"0.5rem"}}>
            <div className="d-inline-block mx-2 px-1">
                <div onClick={swtching} className={btn?'':swclass}>
                Scheduled Interviews
                </div>
                
            </div>
            <div className="d-inline-block ">
                <div className={btn?swclass:''} onClick={swtching}>
                        Pending feedbacks
                </div>
               
            </div>
            </div>
            {/* <div className="mt-4">
                <p className="mx-2 f-6"><span className="text-warning f-4">2</span> out of<span className="text-warning f-4"> 10</span> Interviews are <span className="text-warning f-4">pending</span></p>
            </div>
            <div>
            <DatePicker getSelectedDay={selectedDay}
                  endDate={100}
                  selectDate={new Date("2021-04-30")}
                  labelFormat={"MMMM Qo"}
                  color={"#4391E0"}  />
            </div>
            <div>
                <InterviewList></InterviewList>
            </div>
            <div>
                <InterviewCard2></InterviewCard2>
            </div> */}
                {!btn?<ScheduledInterviews></ScheduledInterviews>:<PendingInterviews></PendingInterviews>}

        </div>
    )
}
