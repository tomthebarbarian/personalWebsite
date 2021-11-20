import logo from './logo.svg';
import './App.css';
import Map from './components/map'

function App() {
  return (
    <>
    <head>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
    </head>
    <main className="App">
      <Map/>
    </main>
    </>
  );
}

export default App;
