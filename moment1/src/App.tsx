import Header from './components/Header'
import Footer from './components/Footer'
import Books from './components/Books'

function App() {
  // genererar allting med components
  return (
    <>
      <Header title="Böcker" />
      <Books />
      <Footer name="Calle Alexanderson" email="caal2301@student.miun.se" />
    </>
  )
}

export default App
