import { Switch, Route } from 'react-router-dom';
import Login from './pages/login/index'
import Cadastro from './pages/cadastro/index'
import Funcionarios from './pages/funcionarios/index'
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/funcionarios" component={ Funcionarios } />
        <Route path="/registrar-funcionario" component={ Cadastro } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
