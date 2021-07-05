import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Cause from './components/Cause'

function App() {
  const [deals, setDeals] = useState([])
  const refresh = false
  const[causeList, setCauseList] = useState([])
  
  useEffect(() => {
      let causeListArray = ['All deals']
      axios.get("https://bakesaleforgood.com/api/deals").then(data => {
        for (let i = 0; i < data.data.length; i++) {
          causeListArray.push(data.data[i.toString()].cause.name)
        }
        causeListArray = new Set(causeListArray)
        causeListArray = Array.from(causeListArray)
        setCauseList(causeListArray)
        console.log(causeListArray)
      })
  }, [refresh])
  
  return (
    <div className="App">
      <Cause list = {causeList} setDeals = {setDeals} />
    </div>
  );
}

export default App;
