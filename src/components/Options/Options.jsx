// import css from './Options.module.css';

// function Option({ updateFeedback, resetScore }) {
//   return (
//     <>
//       <div className='mt-4'>
//         <button
//           onClick={() => updateFeedback("good")}
//           className='btn btn-outline-dark px-3 py-2 m-2'
//           style={{ border: "2px solid black" }}
//         >
//           Good
//         </button>
//         <button
//           onClick={() => updateFeedback("neutral")}
//           className='btn btn-outline-dark px-3 py-2 m-2'
//           style={{ border: "2px solid black" }}
//         >
//           Neutral
//         </button>
//         <button
//           onClick={() => updateFeedback("bad")}
//           className='btn btn-outline-dark px-3 py-2 m-2'
//           style={{ border: "2px solid black" }}
//         >
//           Bad
//         </button>
//         <button
//           onClick={resetScore}
//           className='btn btn-outline-dark px-3 py-2 m-2'
//           style={{ border: "2px solid black" }}
//         >
//           Reset
//         </button>
//       </div>
//     </>
//   );
// }

// export default Option;
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