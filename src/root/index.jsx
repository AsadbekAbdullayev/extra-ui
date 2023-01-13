
import '../App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { SidebarData } from '../utils/sidebsrView';
import Asosiy from '../view/Asosiy';
import Generic from '../view/generic';
// import Sidebar from '../component/sidebar';
function App() {
  return (
    <div>

<Routes>
<Route path="/" element={<Asosiy />}>
      <Route path="/Components" element={<Generic />}/>
      <Route path="/Docs" element={<Generic />}/>
      <Route path="/Resources" element={<Generic />}/>
      <Route path="/Blog" element={<Generic />}/>
        {  
          SidebarData?.map(({path,Component,hidden})=>!hidden && <Route exact path={path} element={<Component/>} />)
        }
      </Route>
      
    </Routes>
        </div>
  );
}

export default App;
