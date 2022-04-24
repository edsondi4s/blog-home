import { Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Rotas from './routes';
//import Article from './components/Article';

function App() {
  return (
    <>
      <Header />
      <Rotas />
    </>
  );
}

export default App;
