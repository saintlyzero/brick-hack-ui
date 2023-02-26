import "./lecture-page.css";
import { useEffect, useState } from "react";
import { INSIGHTS_API } from "../constants";
import BasicTimeline from "../components/timelineComponent";
import { useHistory } from "react-router-dom";

const fetchInsights = async (setTranscript, setOutline, setSummary, setQuiz, setAnnouncements) => {
        const response = await fetch(INSIGHTS_API);
        const insights = await response.json();
        setTranscript(insights.transcript);
        setOutline(insights.outline);
        setSummary(insights.summary);
        setQuiz(insights.quiz);
        setAnnouncements(insights.announcements);
}
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
            return <p className="highlight">{announcement}</p>
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
const [transcript, setTranscript] = useState([]);
const [outline, setOutline] = useState([]);
const [summary, setSummary] = useState([]);
const [quiz, setQuiz] = useState([]);
const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchInsights(setTranscript, setOutline, setSummary, setQuiz, setAnnouncements);
  }, []);

  const history = useHistory();


    return (
    <div>
        <div className="header">
        <img
          src={process.env.PUBLIC_URL + "/logo_white.png"}
          onClick={() => {
            history.push("home");
          }}
        />
            <span className="logo-text" onClick={() => {
            history.push("home");
          }}>LastMinuteAI</span>
        </div>
    <div className="l-main-container">
        <div className="l-top-container">
        <div className="transcript-container">
            <div className="upper-row">
                <span className="i-card-title">TRANSCRIPT</span>
                <span className="i-card-description">Transcript extracted from the lecture audio</span>
            </div>
            {displayScript(transcript)}
        </div>
        <div className="timeline-container">
        <div className="upper-row">
                <span className="i-card-title">OUTLINE</span>
                <span className="i-card-description">Shows how the lecture flows covering topics</span>
            </div>
            <BasicTimeline elements={outline}></BasicTimeline>
        </div>
        </div>
            <h3 className="section-name">What are the key insights?</h3>
        <div className="l-middle-container">
        <div className="summary-container">
        <div className="upper-row">
                <span className="i-card-title">SUMMARY</span>
                <span className="i-card-description">Short summary of the entire lecture</span>
            </div>

            {displaySummary(summary)}
        </div>
        <div className="annoucement-container">
        <div className="upper-row">
                <span className="i-card-title">ANNOUNCEMENTS</span>
                <span className="i-card-description">Displays any announcements made in the lecture</span>
            </div>

            {displayAnnouncement(announcements)}
        </div>
        </div>
        <h3 className="section-name">Need Quick Revision?</h3>

        <div className="questions-container">
        <div className="upper-row">
                <span className="i-card-title">TOPIC QUESTIONS</span>
                <span className="i-card-description">Auto generated questions to revise the topics covered in the lecture</span>
            </div>

            {displayQuestions(quiz)}
        </div>
    </div></div>)
}

export default LecturePage