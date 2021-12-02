import LoginContainer from './Components/LoginContainer';
import CreateProduct from './Components/CreateProduct';
import ProductList from './Components/ProductList';
import { ContextProvider } from './Context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
          <LoginContainer/>
          <CreateProduct/>
          <ProductList/>
        </ContextProvider>
    </div>
  );
}

export default App;
