import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
export function Landingpage() {
const navigate=useNavigate();
  return (
    <div className='landingpage'>
      <div>
        <h1>RRR renting bussiness pvt ltd.</h1>
        <h2>Rental Agengy</h2>
        <h3>chennai</h3>
        <Button variant="contained">call +91987987600</Button>
        <Button variant="outlined"><a href="https://www.google.com/">Directions</a></Button>
        <Button variant="outlined" onClick={(()=>navigate("/contact"))}>contact us</Button>
      </div>
    </div>
  );
}
