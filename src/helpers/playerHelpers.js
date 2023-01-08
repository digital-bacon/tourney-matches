export const preparePlayerData = (playerData) => {
  if (!playerData) {
    return [];
  }

  return Object.values(playerData);
}

// Output an array of players with an extra win key for each winning player in matchData
export const addWinsToPlayers = (playerDataArray, matchData) => {
  if (!playerDataArray) {
    return [];
  }

  return playerDataArray.map(player => {
    // Calculating the number of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
      // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);

    // Assigns the value to the wins key
    player.wins = currentWins;

    return player
  });
}
