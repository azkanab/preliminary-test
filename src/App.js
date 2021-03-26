import './App.css';
import Home from './pages/home'
import { Helmet } from 'react-helmet'

function App() {
  return (
      <div className="App">
        <Helmet>
          <title>Kulina's Frontend Developer Preliminary Test</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <div className="screen">
          <Home />
        </div>
      </div>
  );
}

export default App;
