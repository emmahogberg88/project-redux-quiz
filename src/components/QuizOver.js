/* eslint-disable linebreak-style */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import correctSticker from "../components/assets/checkmark.png";
import inCorrectSticker from "../components/assets/cross.png";
import Button from "./Button";

const QuizOver = () => {

  const dispatch = useDispatch();
  const selectedAnswer = useSelector((state) => state.quiz.answers);
  const correctAnwser = selectedAnswer.filter((answer) => answer.isCorrect);

  // Restart game
  const onRestartClick = () => {
    dispatch(quiz.actions.restart());
  };

  return (
    <>
      <h1>Guess Whose Butt</h1>
      <section className="question-section summary-section">
        <p className="summary-text">
          {correctAnwser.length <= 3
            ? "Oh sorry, look at more butts and try again"
            : correctAnwser.length === 4 || correctAnwser.length === 5
            ? "Nice try! You did good. But if you see a butt, check it out"
            : "Congratulations! You really know your butts"}
        </p>
        <div className="summary-comtainer">
          {selectedAnswer.map((item) => (
            <div>
              <img
                className="sticker"
                src={item.question.sticker}
                alt={item.img_alt}
              />
              <img
                className="check-mark"
                src={item.isCorrect ? correctSticker : inCorrectSticker}
                alt=""
              />
            </div>
          ))}
        </div>

        <Button onClick={onRestartClick}>
          Restart
        </Button>
      </section>
    </>
  );
};

export default QuizOver;
