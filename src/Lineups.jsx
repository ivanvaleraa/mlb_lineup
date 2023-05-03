import React from 'react'

function Lineups (props) {
  const player = props
  const awayPlayerName = []
  const homePlayerName = []

  for (let i = 0; i < player.AwayBattingLineup.length; i++) {
    awayPlayerName.push(player.AwayBattingLineup[i].FirstName + ' ' + player.AwayBattingLineup[i].LastName)
  }

  for (let i = 0; i < player.HomeBattingLineup.length; i++) {
    homePlayerName.push(player.HomeBattingLineup[i].FirstName + ' ' + player.HomeBattingLineup[i].LastName)
  }

  let awayBattingOrder = 0
  let homeBattingOrder = 0

  const awayPlayerInformation = awayPlayerName.map(player => {
    awayBattingOrder++
    return (
        <div key={player} className="lineups--awayplayer">
            {awayBattingOrder + '. ' + player}
        </div>
    )
  })

  const homePlayerInformation = homePlayerName.map(player => {
    homeBattingOrder++
    return (
        <div key={player} className="lineups--awayplayer">
            {homeBattingOrder + '. ' + player}
        </div>
    )
  })

  // console.log("Nombre: "+player.AwayBattingLineup[0].FirstName)
  return (
        <div>
            <div className="lineups--item">
                <div className="lineups-teams">

                    <div className="lineups--awayteam">
                        <div className="lineups--awayteam">
                            <h1 className="lineups--awayteamname">{player.AwayTeam}</h1>
                        </div>

                        <div className="lineups--startingpitcher">
                            {player.AwayStartingPitcher.FirstName +
                            ' ' + player.AwayStartingPitcher.LastName}
                        </div>

                        <div className="lineups--startinglineup">
                            {awayPlayerInformation}
                        </div>
                    </div>

                    <div className="lineups--awayteam">
                        <div className="lineups--awayteam">
                            <h1 className="lineups--awayteamname">{player.HomeTeam}</h1>
                        </div>

                        <div className="lineups--startingpitcher">
                            {player.HomeStartingPitcher.FirstName +
                            ' ' + player.HomeStartingPitcher.LastName}
                        </div>

                        <div className="lineups--startinglineup">
                            {homePlayerInformation}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Lineups
