import React, { useEffect } from 'react';

const ConflictChecker = (props)=>{
  const {team} = props
  const [error, setError] = React.useState("");

  useEffect(()=>{
    if (!Array.isArray(team)) {
      return;
    }
    const hasGeorge = team.indexOf("George") > -1;
    const hasLucas = team.indexOf("Lucas") > -1;
    const hasMary = team.indexOf("Mary") > -1;
    if (hasGeorge && hasLucas) {
      setError("George shouldn't be playing with Lucas");
      return;
    }
    if ((hasMary && !hasGeorge) || (!hasMary && hasGeorge)) {
      setError("Mary and George have to play together");
      return;
    }
    setError("");
  }, [team])

  return <div>{error}</div>
}



const PlayersSelector = ()=>{
  const players = ["Dom", "Justine", "Mary", "Lucas", "George"];
  const [team, setTeam] = React.useState([])

  const handlePlayerClick = (clickedPlayer)=>{
    if (team.indexOf(clickedPlayer) > -1) {
      setTeam(prevTeam => prevTeam.filter((p)=>p !== clickedPlayer));
    } else {
      setTeam(prevTeam => [...prevTeam, clickedPlayer]);
    }
  }

  return <div>
    <h1>Pick your players!</h1>
    {players.map((playerName)=> {
      return <button className={team.indexOf(playerName) > -1 ? "active" : "" } onClick={()=>handlePlayerClick(playerName)}>{playerName}</button>}
    )}
    <ConflictChecker team={team}/>
  </div>
}

export default PlayersSelector;
