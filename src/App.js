//latest file and uses redux
// there is also an example reducer to understand reducer structure as well
// feel free to break the ui functional components apart from this file and put them into their own files
import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec, setOpen } from "./reducers/uiSlice";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
// const initialState = {
//   step: 1,
//   isOpen: true,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "inc":
//       return { ...state, step: state.step + action.payload };
//     case "dec":
//       return { ...state, step: state.step - action.payload };
//     case "setOpen":
//       return { ...state, isOpen: action.payload };
//     default:
//       throw new Error("Action unknown");
//   }
// }

// App component
export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>✌️</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>😎</p>
      </StepMessage>
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  // const [step, setStep] = useState(1);
  // const [isOpen, setIsOpen] = useState(true);

  // const [{ step, isOpen }, dispatch] = useReducer(reducer, initialState);

  // const [test, setTest] = useState({ name: "Jonas" });
  const dispatch = useDispatch();
  const { step, isOpen } = useSelector((store) => store.ui);

  function handlePrevious() {
    // if (step > 1) setStep((s) => s - 1);
    if (step > 1) {
      dispatch(dec(1));
    }
  }

  function handleNext() {
    // if (step < 3) {
    // setStep((s) => s + 1);
    // setStep((s) => s + 1);
    // }
    if (step < 3) {
      dispatch(inc(1));
    }
    // BAD PRACTICE
    // test.name = "Fred";
    // setTest({ name: "Fred" });
  }

  return (
    <div>
      {/* <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button> */}
      <button className="close" onClick={() => dispatch(setOpen(!isOpen))}>
        {isOpen ? "\u00D7" : "+"}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
              <span>🤓</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
