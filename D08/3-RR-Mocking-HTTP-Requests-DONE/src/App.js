import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [gitHubName, setGitHubName] = useState('')     
  const [gitHubURL, setGitHubURL] = useState('')   
  // For Bonus
  const [gitHubImageURL, setGitHubImageURL] = useState('')              


  useEffect(() => {
      fetch('https://api.github.com/users/CodyNicholson')
      .then(res => res.json())
      .then(data => {
        setGitHubName(data.name)
        setGitHubURL(data.html_url)
        setGitHubImageURL(data.avatar_url)
      })
  }, [])

  return (
    <div className="App">
      <div>
        <h1>Github Profile Info:</h1>
        <h2>{gitHubName}</h2>
        <a href={gitHubURL}><button>Link to GitHub profile</button></a>
      </div>
      {/* For Bonus */}
      <div className="pt-5">
        <img src={gitHubImageURL} alt='Github profile image' width='200' height='200'/>
      </div>
    </div>
  );
}

export default App