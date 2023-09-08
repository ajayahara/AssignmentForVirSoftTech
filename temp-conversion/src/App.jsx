import { useEffect, useState } from "react";
export default function App() {
  const [value, setValue] = useState("");
  const [tempType, setTempType] = useState("C");
  const [error, setError] = useState(false);
  const [ans, setAns] = useState(null);
  const checkNumber = (num) => {
    if(num=="") return false;
    let pointCount = 0;
    for (let i = 0; i < num.length; i++) {
      if (num[i] === ".") {
        pointCount++;
      } else {
        if (isNaN(num[i])) {
          return false;
        }
      }
    }
    if (pointCount > 1) return false;
    return true;
  };
  useEffect(() => {
    setAns(null);
    setError(false);
  }, [tempType, value]);
  const hadleCalculation = (type) => {
    const res = checkNumber(value);
    if (!res) return setError(true);
    let ans;
    switch (type) {
      case "C":
        ans = ((Number(value) - 32) * 5) / 9;
        return setAns(`${value}°F is equal to ${ans}°C`);
      case "F":
        ans = (Number(value) * 9) / 5 + 32;
        return setAns(`${value}°C is equal to ${ans}°F`);
      default:
        return setError(true);
    }
  };
  return (
    <div className="App">
      <h2>Welcome To Temp Conversion App</h2>
      {error ? <h3 className="error">Please enter a valid number</h3> : null}
      <div>
        <input
          type="text"
          placeholder="enter a number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={tempType} onChange={(e) => setTempType(e.target.value)}>
          <option value="C">°C </option>
          <option value="F">°F</option>
        </select>
      </div>
      <div>
        <button
          disabled={tempType === "C"}
          onClick={() => hadleCalculation("C")}
        >
          Covert to °C
        </button>
        <span>or</span>
        <button
          disabled={tempType === "F"}
          onClick={() => hadleCalculation("F")}
        >
          Covert to °F
        </button>
      </div>
      <div>{ans ? <h3 className="ans">{ans}</h3> : null}</div>
    </div>
  );
}
