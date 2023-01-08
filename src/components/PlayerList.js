import matchData from '../data/matchData';
import playerData from '../data/playerData';
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers'
import Player from './Player';

function PlayerList(props) {
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  );
}

export default PlayerList;