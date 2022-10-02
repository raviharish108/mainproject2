import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Signup } from './Signup';
import { CreateAccount } from './CreateAccount';
import { About } from './About';
import { Landingpage } from './Landingpage';
import { Contactus } from './Contactus';
import { Allproducts } from './Allproducts';
function App() {
 
  return (
    <div>
      
    <Landingpage/>
    <About/>
    <Routes>
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/" element={<Signup/>} />
      <Route path="/contact" element={<Contactus/>} />
    </Routes>
    <Allproducts/>
    <BookedList/>
    </div>
  );
}


function BookedList(){
  return(
    <div>
      <table>
        <tr>
          <th>
            <td></td>
         </th>
        </tr>
        
      </table>
    </div>
  )
}
export default App;
