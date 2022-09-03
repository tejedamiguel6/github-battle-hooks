import './App.css'
import { useState, useEffect } from 'react'
import { fetchPopularRepos } from './utils/api'
import LanguagesNav from './components/LanguagesNav'
import Popular from './components/Popular'
import Instructions from './components/Instructions'
import Battle from './components/Battle'

function App() {
  const [selectedLanguage, setSelectedLangauge] = useState('All')
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchPopularRepos(selectedLanguage).then((res) => setRepos(res))
  }, [selectedLanguage])

  const onUpdateLanguage = (selectedLanguage) => {
    setLoading(true)
    fetchPopularRepos(selectedLanguage).then((res) => {
      setRepos(res)
      setSelectedLangauge(selectedLanguage)
      setLoading(false)
    })
  }

  return (
    <div className='App'>
      <h1>React Github battle</h1>
      {/* <LanguagesNav
        selected={selectedLanguage}
        onUpdateLanguage={onUpdateLanguage}
      />
      <Popular repos={repos} loading={loading} /> */}

      <Battle />
    </div>
  )
}

export default App
