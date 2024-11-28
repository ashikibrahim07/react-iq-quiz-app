import { useQuiz } from "../contexts/QuizProvider.jsx";
import Options from "./Options.jsx";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
