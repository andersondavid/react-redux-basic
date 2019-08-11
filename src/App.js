import React from 'react';

//react with hooks
import ExampleSelector from './pages/dispatch-selector/ExampleSelector';
import ExampleDispatch from './pages/dispatch-selector/ExampleDispatch';

//connect()
import MapState from './pages/connect/MapState';
import MapDispatch from './pages/connect/MapDispatch';

function App() {

  return (
    <div className="App">
      <div>
        <div>
          <h2>useDispatch e useSelector</h2>
          <p>Exemplo usando useDispatch e useSelector e React Hooks.Usado quando o componente está em formato de função</p>
          <ExampleSelector />
          <ExampleDispatch />
        </div>
        <div>
          <h2>connect()</h2>
          <p>Exemplo usando a função connect() para conectar os components em formato de classe ao store</p>
          <MapState />
          <MapDispatch />
        </div>
      </div>
    </div>
  );
}

export default App;
