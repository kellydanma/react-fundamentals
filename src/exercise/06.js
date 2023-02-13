// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // Extra credit 1
  const usernameInputRef = React.useRef(undefined)

  function handleSubmit(event) {
    event.preventDefault()
    const usernameInput = usernameInputRef.current.value
    onSubmitUsername(usernameInput)
  }

  // Extra credit 2
  const [error, setError] = React.useState('')

  function handleChange(event) {
    const usernameInput = event.target.value
    console.log(usernameInput)

    const isValid = usernameInput === usernameInput.toLowerCase()
    setError(isValid ? undefined : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={usernameInputRef}
          id="usernameInput"
          type="text"
          onChange={handleChange}
        />
      </div>{' '}
      {error ? (
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      ) : undefined}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
