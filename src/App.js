import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

export default function App() {

  let card = data.map( item =>{
    return (
      <Card 
        key = {item.id}
        item = {item}

      />
    )
  })
  return (
    <div className = "App">
    <Navbar />  
    <div className='card-list'>
      {card}
    </div>
    </div>
  )
}


