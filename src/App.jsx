
import './App.css'
import Carts from './components/Carts/Carts'
import Header from './components/Header/Header'
import List from './components/List/List'


function App() {
 

  return (
    <>
    <div className='max-w-7xl mx-auto px-5 '>
        <Header></Header>
        <div className='flex flex-col-reverse md:flex-row gap-5'>
            <Carts></Carts>
            <List></List>
        </div>
    </div>
    </>
  )
}

export default App
