const LanguagesNav = ({ onUpdateLanguage, selected }) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <div>
      <ul>
        {languages.map((language) => (
          <li key={language}>
            <button
              onClick={() => onUpdateLanguage(language)}
              style={
                language === selected ? { color: 'rgb(187, 46, 31)' } : null
              }
            >
              {language}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LanguagesNav
