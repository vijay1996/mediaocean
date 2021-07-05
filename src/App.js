import { useState, useEffect } from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import axios from 'axios'
import Cause from './components/Cause'
import Deals from './components/Deals'
import DealsView from './components/DealsView'
import Edit from './components/Edit'

function App() {
  const [deals, setDeals] = useState({})
  const [display, setDisplay] = useState('All deals')
  const [key, setKey] = useState('')
  const [dealsView, setDealsView] = useState({})
  
  const[causeList, setCauseList] = useState([])
  FetchData(setDeals, setCauseList)
  
  let dealsProp = relevantDisplay(display, deals, setDeals)
  console.log(key)
  RelevantDealsView(key, setDealsView, deals)

  return (
    <Router>
      <Switch>
        <Route path = "/edit">
          <Edit info={dealsView}  deals = {deals} setDeals = {setDeals}/>
        </Route>
        <Route path = "/">
          <div className="App" style={{textAlign: 'left', padding: '3%'}}>
            <button className="btn btn-primary">Add deal</button><br/><br/>
            <div className="row"> 
              <div className="col-md-2">
                <Cause list = {causeList} setDisplay = {setDisplay} />
              </div>
              <div className="col-md-4">
                <Deals list = {dealsProp} setKey = {setKey} />
              </div>
              <div className="col-md-6">
                <DealsView info = {dealsView} />
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

function FetchData (setDeals, setCauseList) {
  const refresh = false
  useEffect(() => {
    let causeListArray = ['All deals']
    let dealsArray = []
    axios.get("https://bakesaleforgood.com/api/deals").then(data => {
      dealsArray = data.data
      for (let i = 0; i < data.data.length; i++) {
        causeListArray.push(data.data[i.toString()].cause.name)
      }
      causeListArray = new Set(causeListArray)
      causeListArray = Array.from(causeListArray)
      setDeals(dealsArray)
      console.log(dealsArray)
      setCauseList(causeListArray)
    })
  }, [refresh])
}

function relevantDisplay(display, deals, setDeals) {
  if (display === "All deals") {
    return deals
  } else {
    let returnArray = []
    for(let i = 0; i < deals.length; i++) {
      if (deals[i].cause.name === display) {
        returnArray.push(deals[i])
      }
    }
    return returnArray
  }
}

function RelevantDealsView(key, setDealsView, deals) {
  useEffect(()=>{
    if (key === '') {
      setDealsView({})
    } else {
      let dealsObject = {}
      for (let i = 0; i < deals.length; i++) {
        if (deals[i].key === key)
        dealsObject = deals[i]
      }
      setDealsView(dealsObject)
    }
  }, [key])
}

export default App;
