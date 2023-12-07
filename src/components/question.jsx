import Options from "./options";

function Questions({ question, dispatch, answer }) {
  return (
    <>
      <h4>{question.question}</h4>
      <div className="options">
        <Options question={question} dispatch={dispatch} answer={answer} />
      </div>
    </>
  );
}
export default Questions;
