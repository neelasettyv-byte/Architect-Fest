import { useState } from 'react'
import { calculate } from './calculate'

function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [operation, setOperation] = useState('add')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleCalculate = () => {
    try {
      setError('')
      setResult(calculate(Number(a), Number(b), operation))
    } catch (e) {
      setResult(null)
      setError(e.message)
    }
  }

  return (
    <div className="app">
      <h1>CI/CD Practice Calculator</h1>
      <p className="subtitle">A tiny app built to practice pipelines</p>

      <div className="inputs">
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          aria-label="first number"
        />
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          aria-label="operation"
        >
          <option value="add">+</option>
          <option value="subtract">−</option>
          <option value="multiply">×</option>
          <option value="divide">÷</option>
        </select>
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          aria-label="second number"
        />
      </div>

      <button onClick={handleCalculate}>Calculate</button>

      {result !== null && <p className="result">Result: {result}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default App
