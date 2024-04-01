import './App.css'
import Description from './components/homes/Description'
import Foot from './components/homes/Foot'
import Header from './components/homes/Hearder'
import Stack from './components/homes/Stack'
import Work from './components/homes/Work'
import { projects } from './components/homes/projects'

function App() {

  return (
    <>
      <Header />
      <Description />
      <Work projects={projects}/>
      <Stack />
      <Foot />
    </>
  )
}

export default App
