import { Switch, Route } from 'react-router-dom';
import Login from './pages/login/index'
import Cadastro from './pages/cadastro/index'
import Funcionarios from './pages/funcionarios/index'

function App() {
  return (
    <Switch>
      <Route path="/funcionarios" component={ Funcionarios } />
      <Route path="/registrar-funcionario" component={ Cadastro } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
