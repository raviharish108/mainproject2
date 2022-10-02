
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export function Allproducts() {
  const [state,setstate]=useState(0);
 const[productlist,setproductlist]=useState([]);
 useEffect(()=>{
  fetch("https://sever-003.herokuapp.com/getallproducts")
  .then((data)=>data.json())
  .then((prod)=>setproductlist(prod))
 })
  return (
    <div>
<h1>cart{state}</h1>
    <div className='rooms'>
      {productlist.map((value,index) => <Product_component key={index} val={value} button={<button
       onClick={(()=>setstate(state+1))}>Add to card</button>} 
        />)}
    </div>
    </div>
  );
}


function Product_component({ val,button,booknow }) {
  return (
    <div className='room_container'>
      <img src={val.img} className="room_img"  alt="product_image"/>
      <h1>{val.name}</h1>
      <p>rate:{val.rate}</p>
      <p>rating:{val.rating}/10</p>
      {button}
      {booknow}
    </div>
  );
}
 export function Booknow(){
  return(
    <div>
     <TextField id="outlined-basic" label="product_name" variant="outlined" />
     <br/>
     <TextField id="outlined-basic" label="product_rate" variant="outlined"  />
     <br/>
     <TextField id="outlined-basic" label="product_rating" variant="outlined" />
     <br/>
     <TextField id="outlined-basic" label="from_date" variant="outlined" />
     <br/>
     <TextField id="outlined-basic" label="to_date" variant="outlined" />
     <br/>
     <TextField id="outlined-basic" label="from_time" variant="outlined" />
     <br/>
     <TextField id="outlined-basic" label="to_time" variant="outlined" />
     <br/>
     <Button variant="outlined">booknow</Button>
    </div>
  )
 }