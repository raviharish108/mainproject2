import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function CreateAccount() {
  const navigate = useNavigate();
  return (
    <div className='createaccount'>
      <h1>create Account</h1>
      <TextField id="outlined-basic" label="enter your mail id" variant="outlined" />
      <br />
      <br />
      <TextField id="outlined-basic" label="password" variant="outlined"  type="password"/>
      <br />
      <br />
      <Button variant="outlined">createaccount</Button>
      <br />
      <Button variant="contained" onClick={(() => navigate("/"))}>already have account</Button>
    </div>
  );
}
