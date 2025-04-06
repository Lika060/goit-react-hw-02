import css from './Options.module.css';

function Option({ updateFeedback, resetFeedback }) {
  return (
    <>
      <div className='mt-4'>
        <button
          onClick={() => updateFeedback("good")}
          className='btn btn-outline-dark px-3 py-2 m-2'
          style={{ border: "2px solid black" }}
        >
          Good
        </button>
        <button
          onClick={() => updateFeedback("neutral")}
          className='btn btn-outline-dark px-3 py-2 m-2'
          style={{ border: "2px solid black" }}
        >
          Neutral
        </button>
        <button
          onClick={() => updateFeedback("bad")}
          className='btn btn-outline-dark px-3 py-2 m-2'
          style={{ border: "2px solid black" }}
        >
          Bad
        </button>
        <button
          onClick={resetFeedback} 
          className='btn btn-outline-dark px-3 py-2 m-2'
          style={{ border: "2px solid black" }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default Option; 