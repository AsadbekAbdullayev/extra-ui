
import '../App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { SidebarData } from '../utils/sidebsrView';
import Button from '../component/Button';
import Asosiy from '../view/Asosiy';
import Generic from '../view/generic';

function App() {
  return (
    <div>

<Routes>
<Route path="/" element={<Asosiy />}>
      <Route path="/Button" element={<Button />}/>
      <Route path="/Components" element={<Generic />}/>
      <Route path="/Docs" element={<Generic />}/>
      <Route path="/Resources" element={<Generic />}/>
      <Route path="/Blog" element={<Generic />}/>

        {
          SidebarData?.map(({path,component,hidden})=>!hidden &&
          <Route exact path={path} component={component} />
          )
        }
      </Route>
    </Routes>
        </div>
  );
}

export default App;
