import React, { useEffect } from 'react';

const ConflictChecker = (props)=>{
  const {team} = props
  const [error, setError] = React.useState("");

  useEffect(()=>{
    const hasGeorge = team["George"] === "on";
    const hasLucas =  team["Lucas"] === "on";
    const hasMary =  team["Mary"] === "on";
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
  const [team, setTeam] = React.useState({})

  const handlePlayerClick = (clickedPlayer)=>{
    setTeam(prevTeam => ({...prevTeam, clickedPlayer: prevTeam.clickedPlayer === "on" ? "off" : "on"}));
  }

  return <div>
    <h1>Pick your players!</h1>
    {players.map((playerName)=> {
      return <button className={team[playerName] === "on" ? "active" : "" } onClick={()=>handlePlayerClick(playerName)}>{playerName}</button>}
    )}
    <ConflictChecker team={team}/>
  </div>
}

export default PlayersSelector;
