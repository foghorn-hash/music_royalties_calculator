import logo from './assets/spinundergroundrecords-square.png';
import design from './assets/i4ware-software.png';
import './App.css';
import MusicRoyaltiesCalculator from './screens/MusicRoyaltiesCalculator/MusicRoyaltiesCalculator';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Spin Underground Records" />
        <h1>Music Royalties Calculator</h1>
      </header>
      <main className="App-main">
        <MusicRoyaltiesCalculator />
      </main>
      <footer className="App-footer">
        <img src={design} className="App-design" alt="i4ware Software" />
        <div className="App-copyright">Copyright © Spin Underground Records 2004-2025, all rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
