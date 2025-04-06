
import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={css.options}>
      <button className={css.good} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.neutral} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.bad} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={css.resetButton}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;