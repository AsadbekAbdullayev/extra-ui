
import '../App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { SidebarData } from '../utils/sidebsrView';
import Button from '../component/Button';
import Asosiy from '../component/Asosiy';

function App() {
  return (
<Routes>
      <Route path="/" element={<Asosiy />}>
      <Route path="/Button" element={<Button />}/>

        {
            SidebarData?.map(({path,component})=>
                <Route exact path={path} component={component} />
                    
                
            )
        }
      </Route>
    </Routes>
  );
}

export default App;
