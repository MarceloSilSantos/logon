import { useState } from 'react'
import Login from './Login'
import ProjectList from './components/ProjectList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <Login />
        </div>
        <div>
          <ProjectList />
        </div>
      
    </>
  )
}

export default App
