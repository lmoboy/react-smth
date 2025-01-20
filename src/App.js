import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Prasības un Prasību Specifikācija</h1>
        <div className="content">
          <h2>Kas ir prasības?</h2>
          <p>
            Prasības ir vajadzības vai vēlmes, kas tiek izteiktas attiecībā uz produktu, sistēmu vai pakalpojumu. Tās var būt funkcionālas (kas sistēmai jāspēj darīt) vai nefunkcionālas (piemēram, veiktspēja, drošība, lietojamība).
          </p>

          <h2>Kas ir prasību specifikācija?</h2>
          <p>
            Prasību specifikācija ir dokuments, kas detalizēti apraksta visas prasības, kas attiecas uz konkrētu projektu vai produktu. Tas ietver gan funkcionālās, gan nefunkcionālās prasības, kā arī citus svarīgus aspektus, piemēram, lietotāju vajadzības, sistēmas ierobežojumus un pieņemamos standartus.
          </p>

          <h2>Ar ko prasības atšķiras no prasību specifikācijas?</h2>
          <p>
            Prasības ir atsevišķas vajadzības vai vēlmes, kamēr prasību specifikācija ir visaptverošs dokuments, kas apkopo un detalizēti apraksta visas šīs prasības. Prasību specifikācija ir strukturēta un organizēta, lai nodrošinātu, ka visas prasības ir skaidri definētas un saprotamas visām projekta dalībnieku pusēm.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;