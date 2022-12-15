import './App.css';
import Asosiy from './component/Asosiy';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div style={{height:'100%'}}>
<Routes>
      <Route path="/" element={<Asosiy />}>
</Route>
    </Routes>
    </div>
  );
}

export default App;
