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
        <section className="App-description">
          <h1>Music Royalties Calculator</h1>
          <p>Easily estimate your music streaming royalties with our intuitive and user-friendly Music Royalties Calculator! Simply enter the number of streams to see how much you could earn across popular platforms like Spotify, Apple Music, YouTube Music, Tidal, and more.</p>
          
          <h2>Features include:</h2>
          <ul>
            <li><strong>Dynamic Platform Logos</strong>: Instantly recognize platforms with clean, professional logos.</li>
            <li><strong>Accurate Earnings Calculations</strong>: Based on the latest payout rates per stream for each platform.</li>
            <li><strong>Streamlined User Experience</strong>: A simple input field and clear results, so you can focus on what matters—your music earnings!</li>
            <li><strong>Multi-Platform Insights</strong>: Compare royalties across platforms in one place.</li>
          </ul>
          
          <p>Start planning your music career and make informed decisions about your distribution strategy with our Music Royalties Calculator. It’s quick, easy, and tailored for music artists and producers!</p>
        </section>
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
