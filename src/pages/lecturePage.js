import "./lecture-page.css";
import { TRANSCRIPT, SUMMARY, TIMELINE, ANNOUNCEMENTS, QUESTIONS } from "../constants";
import BasicTimeline from "../components/timelineComponent";
const displayScript = (script) => {
    return<div>
        
        {script.map((sentence) => {
            return <p>{sentence}</p>
          })}
    </div>
}

const displaySummary = (summary) => {
    return<div>
        
        {summary.map((sentence) => {
            return <p>{sentence}</p>
          })}
    </div>
}

const displayAnnouncement = (announcements) => {
    return<div>
        
        {announcements.map((announcement) => {
            return <p>{announcement}</p>
          })}
    </div>
}

const displayQuestions = (questions) => {
    return<div>
        
        {questions.map((question) => {
            return <p>{question}</p>
          })}
    </div>
}

const LecturePage = (props) =>{

    return (<div className="l-main-container">
        <div className="l-top-container">
        <div className="transcript-container">
            <div className="upper-row">
                <span className="i-card-title">TRANSCRIPT</span>
                <span className="i-card-description">This is the transcript extracted from the audio</span>
            </div>
            {displayScript(TRANSCRIPT)}
        </div>
        <div className="timeline-container">
        <div className="upper-row">
                <span className="i-card-title">OUTLINE</span>
                <span className="i-card-description">This is the transcript extracted from the audio</span>
            </div>
            <BasicTimeline elements={TIMELINE}></BasicTimeline>
        </div>
        </div>
        <div className="l-middle-container">
            
        <div className="summary-container">
        <div className="upper-row">
                <span className="i-card-title">SUMMARY</span>
                <span className="i-card-description">This is the transcript extracted from the audio</span>
            </div>

            {displaySummary(SUMMARY)}
        </div>
        <div className="annoucement-container">
        <div className="upper-row">
                <span className="i-card-title">ANNOUNCEMENTS</span>
                <span className="i-card-description">This is the transcript extracted from the audio</span>
            </div>

            {displayAnnouncement(ANNOUNCEMENTS)}
        </div>
        </div>
        <div className="questions-container">
        <div className="upper-row">
                <span className="i-card-title">TOPIC QUESTIONS</span>
                <span className="i-card-description">This is the transcript extracted from the audio</span>
            </div>

            {displayQuestions(QUESTIONS)}
        </div>
    </div>)
}

export default LecturePage