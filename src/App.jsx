import ThreeCanvas from './components/ThreeCanvas'
import Navbar from './components/Navbar'
import './index.css'

function App() {
  return (
    <div className="w-full h-screen overflow-hidden relative" style={{ background: '#0a0b10' }}>
      <ThreeCanvas />
      <Navbar />
    </div>
  )
}

export default App
