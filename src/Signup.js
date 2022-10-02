import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Signup() {
  const navigate = useNavigate();
  return (
    <div className='createaccount'>
      <h1>sign in</h1>
      <TextField id="outlined-basic" label="user_name" variant="outlined" />
      <br />
      <br />
       <TextField id="outlined-basic" label="password" variant="outlined"  type="password"/> 
      <br />
      <br />
      <Button variant="outlined">sign in</Button>
      <br />
      <Button variant="contained" onClick={(() => navigate("/createaccount"))}>create new account</Button>
    </div>
  );
}
