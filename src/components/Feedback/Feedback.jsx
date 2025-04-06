import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.feedback}>
      <p className={css.good}>Good: {feedback.good}</p>
      <p className={css.neutral}>Neutral: {feedback.neutral}</p>
      <p className={css.bad}>Bad: {feedback.bad}</p>
      <p className={css.total}>Total: {totalFeedback}</p>
      <p className={css.positive}>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;