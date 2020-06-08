import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Counter from '../components/Counter'

it('Correct starting text rendered', () => {
  const { container } = render(<Counter />)

  expect(container.textContent).toContain(`You've clicked 0 times!`)
})

it('Button increments count', () => {
  const { getByTestId, container } = render(<Counter />),
    button = getByTestId('counter-button')

  expect(container.textContent).toContain(`You've clicked 0 times!`)
  fireEvent.click(button)
  expect(container.textContent).toContain(`You've clicked 1 times!`)
  fireEvent.click(button)
  expect(container.textContent).toContain(`You've clicked 2 times!`)
})
