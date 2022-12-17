
import '../App.css';
import Asosiy from '../component/Asosiy';
import {
  Routes,
  Route,
} from "react-router-dom";
import { SidebarData } from '../utils/sidebsrView';
import Button from '../component/Button';

function App() {
  return (
    <div style={{height:'100%'}}>
<Routes>
      <Route path="/" element={<Asosiy />}>
      <Route path="/Steps" element={<Button />}/>

        {
            SidebarData?.map(({path,component})=>
                <Route exact path={path} component={component} />
                    
                
            )
        }
      </Route>
        

    </Routes>
    </div>
  );
}

export default App;
