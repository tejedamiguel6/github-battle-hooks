import './App.css'
import { useState, useEffect } from 'react'
import { fetchPopularRepos } from './utils/api'
import { Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav'
import Popular from './components/Popular'
import Battle from './components/Battle'

function App() {
  const [selectedLanguage, setSelectedLangauge] = useState('All')
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPopularRepos(selectedLanguage).then((res) => {
      setRepos(res)
      setLoading(false)
    })
  }, [selectedLanguage])

  const onUpdateLanguage = (language) => {
    setLoading(true)
    fetchPopularRepos(language).then((res) => {
      setRepos(res)
      setSelectedLangauge(language)
      setLoading(false)
    })
  }

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route
          path={'/'}
          element={
            <Popular
              repos={repos}
              loading={loading}
              onUpdateLanguage={onUpdateLanguage}
              selected={selectedLanguage}
            />
          }
        />
        <Route path={'/battle'} element={<Battle />} />
      </Routes>
    </div>
  )
}

export default App
