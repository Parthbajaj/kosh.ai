import './style.css';
import Filter from './components/filter'
import Table from './components/table_data'
import Graph from './components/graph_container'
import Histogram from './components/fullRowChart'
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Filter />
        <Table />
        <Graph />
        <Histogram />
        
      </header>
    </div>
  );
}

export default App;
