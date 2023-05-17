import React, { useState, useEffect } from 'react'
import Header from './Header'
import Date from './Date'
import Lineups from './Lineups'

// const LINEUP_DATA_ENDPOINT = `https://api.sportsdata.io/v3/mlb/projections/json/StartingLineupsByDate/${date}?key=6a891811b614433ab78a462161ef6f5f`

function App () {
  const [date, setDate] = useState('2023-04-15')
  const [lineup, setLineup] = useState([])

  useEffect(() => {
    fetch(`https://api.sportsdata.io/v3/mlb/projections/json/StartingLineupsByDate/${date}?key=6a891811b614433ab78a462161ef6f5f`)
      .then(res => res.json())
      .then(data => setLineup(data))
  }, [date])

  function updateDate (e) {
    setDate(e)
  }

  const lineups = Object.entries(lineup).map(([k, item]) => {
    return (
      item.Status !== 'Postponed' &&
      item.Status !== 'Suspended' &&
      item.AwayBattingLineup.length > 0 &&
      item.HomeBattingLineup.length > 0 &&
      item.AwayStartingPitcher &&
      <Lineups
      key={k}
      position={k}
      {...item}/>
    )
  })

  return (
    <div>
      <Header/>
      <Date
      updateDate={updateDate}
      />
      <div className="lineups--container">
        {lineups}
      </div>
    </div>
  )
}

export default App
