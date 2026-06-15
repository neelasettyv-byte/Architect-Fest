import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { calculate } from './calculate'

// Unit tests for the pure logic
describe('calculate', () => {
  it('adds two numbers', () => {
    expect(calculate(2, 3, 'add')).toBe(5)
  })

  it('subtracts two numbers', () => {
    expect(calculate(5, 3, 'subtract')).toBe(2)
  })

  it('multiplies two numbers', () => {
    expect(calculate(4, 3, 'multiply')).toBe(12)
  })

  it('divides two numbers', () => {
    expect(calculate(10, 2, 'divide')).toBe(5)
  })

  it('throws when dividing by zero', () => {
    expect(() => calculate(5, 0, 'divide')).toThrow('Cannot divide by zero')
  })
})

// Component test
describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByText('CI/CD Practice Calculator')).toBeInTheDocument()
  })

  it('calculates a result when the button is clicked', () => {
    render(<App />)
    fireEvent.change(screen.getByLabelText('first number'), { target: { value: '7' } })
    fireEvent.change(screen.getByLabelText('second number'), { target: { value: '8' } })
    fireEvent.click(screen.getByText('Calculate'))
    expect(screen.getByText('Result: 15')).toBeInTheDocument()
  })
})
