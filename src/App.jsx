
import './App.css'
import Carts from './components/Carts/Carts'
import Header from './components/Header/Header'
import List from './components/List/List'


function App() {
 

  return (
    <>
    <div>
        <Header></Header>
        <div>
            <Carts></Carts>
            <List></List>
        </div>
    </div>
    </>
  )
}

export default App
