import './App.css';

import Event,{Event1} from './components/event.tsx'
import Prop from './components/prop.tsx'
import List from './components/list.tsx'
import Ref from './components/ref.tsx';
// code for useRef
function App() {
  return (
    <>
      <h3>====================================================</h3>
      <Ref/>
      <h3>====================================================</h3>
      <List/>
      <h3>====================================================</h3>
      <Prop/>
      <h3>====================================================</h3>
      <Event/>
      <h3>====================================================</h3>
      <Event1/>
      <h3>====================================================</h3>
    </>
  );
}

export default App;
