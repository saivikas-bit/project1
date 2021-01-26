import React from 'react'
import Auxi from '../../../hoc/Auxi'
import DatePicker from "react-horizontal-datepicker";
import InterviewList from '../InterviewList/InterviewList'
import InterviewCard2 from '../InterviewList/InterviewCard2/InterviewCard';

export default function ScheduledInterviews() {
    const selectedDay = (val) =>{
        console.log(val)
    };
    return (
        <Auxi>
            <div className="mt-4">
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
            </div>
        </Auxi>
    )
}
