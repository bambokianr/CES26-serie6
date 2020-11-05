import { Provider } from 'react-redux';

import store from './store';
import Calculator from './components/Calculator';

function App() {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}

export default App;
