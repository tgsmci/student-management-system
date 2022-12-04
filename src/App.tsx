import { useState } from 'react'
import Header from './components/Header'
import MainMenu from './components/MainMenu'
import SubMenu from './components/SubMenu'
import Contents from './components/Contents'

function App({ base }) {
  const [gradeLevel, setGradeLevel] = useState('Junior Casa')

  return (
    <div className="container mx-auto bg-red-100">
      <Header />
      <MainMenu />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 bg-blue-100">
          <SubMenu setGradeLevel={setGradeLevel} />
        </div>
        <div className="col-span-10 bg-green-100">
          <Contents
            base={base}
            gradeLevel={gradeLevel}
          />
        </div>
      </div>
    </div>
  )
}

export default App
