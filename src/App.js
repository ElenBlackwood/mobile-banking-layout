import './App.scss';
import {BalanceCard} from './components/BalanceCard/BalanceCard.js';
import { Actions } from './components/Actions/Actions.js';
import { Statistic } from './components/Statistic/Statistic.js';
import {Menu} from './components/Menu/Menu.js';

function App() {
  return (
    <div className="app">
      <BalanceCard />
      <Actions />
      <Statistic />
      <Menu />
    </div>
  );
}

export default App;
