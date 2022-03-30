import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  // sets everything back to initial state after each test
  fetch.resetMocks();
})

// describe is a jest method that contains one or more related tests.
describe('receives values from GitHub REST API using jest fetch mock', () => {
  test("receives GitHub name", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'coder'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName).toHaveTextContent('coder')
  })
  test("receives GitHub URL", async () => {
    fetch.mockResponseOnce(JSON.stringify({html_url: 'https://github.com/learningToCode1234'}))
    render(<App />)
    const gitHubURL = await waitFor(() => screen.getByRole('link'))
    expect(gitHubURL).toHaveAttribute('href', expect.stringContaining('github.com'))
  })

  // For Bonus
  test("receives GitHub Image URL", async () => {
    fetch.mockResponseOnce(JSON.stringify({avatar_url: 'https://avatars.githubusercontent.com/u/87375911?v=4'}))
    render(<App />)
    const gitHubURL = await waitFor(() => screen.getByAltText('Github profile image'))
    expect(gitHubURL).toHaveAttribute('src', expect.stringContaining('githubusercontent'))
  })
})