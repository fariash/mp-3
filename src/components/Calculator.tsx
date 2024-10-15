import { useState } from 'react'; 
import '../style.css'; 

// Calculator component
export default function Calculator(): JSX.Element {
    // State variables for first number, second number, and result
    const [firstNumber, setFirstNumber] = useState<number | string>(''); // Stores the first input number
    const [secondNumber, setSecondNumber] = useState<number | string>(''); // Stores the second input number
    const [result, setResult] = useState<number | string>(''); // Stores the calculated result

    // Handles calculation based on the operator passed in
    const handleCalculation = (operator: string) => {
        // Convert input values to floating-point numbers
        const num1 = parseFloat(firstNumber as string);
        const num2 = parseFloat(secondNumber as string);

        // Validates
        if (isNaN(num1) || isNaN(num2)) {
            setResult('Invalid input');
            return;
        }

        let res: number; // Variable to store result of operation

        // Switch statement to perform calculation based on operator
        switch (operator) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num1 - num2;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num1 / num2;
                break;
            case '^': 
                res = Math.pow(num1, num2);
                break;
            default:
                res = 0; 
        }

        setResult(res); // Update the result state with calculated value
    };

    // Function to clear the input fields and result
    const handleClear = () => {
        setFirstNumber(''); // Clear first number
        setSecondNumber(''); // Clear second number
        setResult(''); // Clear result
    };

    // JSX for rendering the calculator UI
    return (
        <div className="calculator">
            <h3 className="calculator-title">JavaScript Calculator</h3>
            <div className="calculator-inputs">
                <label htmlFor="firstNumber">First Number:</label>
                <input
                    type="text"
                    id="firstNumber"
                    className="calculator-input"
                    value={firstNumber}
                    onChange={(e) => setFirstNumber(e.target.value)} // Update state when user types
                />
                <label htmlFor="secondNumber">Second Number:</label>
                <input
                    type="text"
                    id="secondNumber"
                    className="calculator-input"
                    value={secondNumber}
                    onChange={(e) => setSecondNumber(e.target.value)} // Update state when user types
                />
            </div>
            <div className="calculator-buttons">
                {/* Buttons for different operations; call handleCalculation with the respective operator */}
                <button onClick={() => handleCalculation('+')} className="calculator-button">+</button>
                <button onClick={() => handleCalculation('-')} className="calculator-button">-</button>
                <button onClick={() => handleCalculation('*')} className="calculator-button">*</button>
                <button onClick={() => handleCalculation('/')} className="calculator-button">/</button>
                <button onClick={() => handleCalculation('^')} className="calculator-button">^</button>
                <button onClick={handleClear} className="calculator-button-clear">Clear</button> {/* Clear button */}
            </div>
            <div className="calculator-result">
                {/* Display the result if it's not an empty string */}
                {result !== '' && <p>Result: {result}</p>}
            </div>
        </div>
    );
}
