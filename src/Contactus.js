import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

export function Contactus() {
  const navigate=useNavigate();
  return (
    <div className='createaccount'>
      <h1>contact us</h1>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <br />
      <br />
      <TextField id="outlined-basic" label="Email" variant="outlined" type="email" />
      <br />
      <TextField id="outlined-basic" label="message" variant="outlined"/>
      <br />
      <Button variant="outlined">submit</Button>
      <br/>
      <Button variant="outlined" onClick={(()=>navigate(-1))}>Back</Button>
    </div>
  );
}
