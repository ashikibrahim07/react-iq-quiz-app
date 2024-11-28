import Header from "./Header";
import MainComponent from "./MainComponent";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import MainFooter from "./MainFooter";
import Timer from "./Timer";
import { useQuiz } from "../contexts/QuizProvider";
import Footer from "./Footer";

function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />

      <MainComponent>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <MainFooter>
              <Timer />
              <NextButton />
            </MainFooter>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </MainComponent>
      <Footer />
    </div>
  );
}

export default App;
