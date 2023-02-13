// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // Extra credit 1
  // const usernameInputRef = React.useRef(undefined)

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  // Extra credit 2
  // const [error, setError] = React.useState('')

  // function handleChange(event) {
  //   const usernameInput = event.target.value
  //   console.log(usernameInput)

  //   const isValid = usernameInput === usernameInput.toLowerCase()
  //   setError(isValid ? undefined : 'Username must be lower case')
  // }

  // Extra credit 3
  const [username, setUsername] = React.useState('')

  function handleChange(event) {
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
