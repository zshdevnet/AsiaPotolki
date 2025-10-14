import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

it('renders site title', () => {
  render(<App />)
  expect(screen.getByText(/Asia Potolki/i)).toBeInTheDocument()
})
