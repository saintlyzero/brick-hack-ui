import "./home-page.css";
import { useHistory } from "react-router-dom";
// import Loader from "../components/loader";
import { LECTURES } from "../constants";

// import { fetchMovies, fetchScript } from "../utils";
import { useEffect, useState } from "react";

const lectureCard = (lecture, history) => {
  const background = `linear-gradient(180.09deg,rgba(0, 0, 0, 0) 28.19%, #000000 99.92%), url("${process.env.PUBLIC_URL}/${lecture.thumbnail}")`;
  return (
    <div
      className="movie-card"
      style={{ backgroundImage: background }}
      onClick={() => {
        // fetchScript();
        history.push(`/lecture?id=${lecture.id}`);
      }}
      key={lecture.id}
    >
      <div className="card-up"></div>
      <div className="card-down">
        <span className="card-movie-title">{lecture.name}</span>
        <br />
        <span className="card-movie-description">{lecture.professor}</span>
        <br/>
        <span className="card-movie-date">{lecture.date}</span>
      </div>
    </div>
  );
};
const HomePage = () => {
  const history = useHistory();
  const [lectures, setLectures] = useState(LECTURES);

  // useEffect(() => {
  //   fetchMovies(setLectures);
  // }, []);

  return (
    <div className="home-page">
      <div className="top-logo">
        <img
          src={process.env.PUBLIC_URL + "/assets/logo.png"}
        ></img>
      </div>
      <div className="top-container">
        <div className="top-left-container">
          <span className="main-title">
          Unleash the power of AI: Text Extraction and Summarization
          </span>
          <span className="main-description">
          A cutting-edge solution that uses artificial intelligence to extract transcripts and summarize them into concise, easy-to-read summaries, get important announcements, semantic search , an in-depth elucidation of the lecture and AI-powered inquiry interface.
          </span>
        </div>
        <img src={process.env.PUBLIC_URL + "/assets/home-1.png"}></img>
      </div>
      {lectures.length <= 0 && (
        <div className="bottom-container">
          {/* <Loader></Loader> */}
        </div>
      )}
      {lectures.length >= 1 && (
        <div className="bottom-container">
          {lectures.map((lecture) => {
            return lectureCard(lecture, history);
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;