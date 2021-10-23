import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch></Switch>
    </Router>
  );
};

export default App;
