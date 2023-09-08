import { useState } from "react";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={FeedbackData}/>
      </div>
    </>
  );
}

export default App;
