import React from 'react';
import logo from './logo.svg';
import './App.css';

const Appoinment = {
  name: "Alon ford",
  id:12345678,
}
const customer={
  Appoinmention:"9.00(24/06/2016)",
  Email: "Rb012@gmail.com",
  Phone:"9888888732",
}

  const order={
  staus: "In progess",
  Door:"Mark",
  Time:new Date(1983878476473).toLocaleString(),
  }

const product_list={
  person:"bertonjn bytiibbxsn",
  para:"Overheerllikhe boltaart met Bosebessen uit de keuken van dde Bijienkot",
  image:"https://www.w3schools.com/howto/img_avatar.png",
}
var arrow="<"
var right_arrow=">"
function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <div className='header'>
      <h3>{arrow}</h3>
      <div>
      <h1>
        {Appoinment.name}
      </h1>
      <h5>{Appoinment.id}</h5>
      </div>
      
      <button >Print</button>
      </div>
    
     <div className='customer-info'>
       <p><label><strong>Appoinment: </strong> </label>{customer.Appoinmention}</p><br/>
       <p><label><strong>Email: </strong> </label>{customer.Email}</p><br/>
       <p><label><strong>Phone </strong></label>{customer.Phone}</p><br/>

     </div>
     <div className='order-info'>
       <div className='col'>
         <label><strong>Staus</strong></label><ul><li>{order.staus}</li></ul>
       </div>
       <div className='col'>
       <label><strong>Door</strong></label><p>{order.Door}</p>
       </div>
       <div className='col'>
       <label><strong>Time</strong></label><p>{order.Time}</p>
       </div>

     </div>
     <div className='Product-List'>
       <div className='first'> 
       <input type='checkbox'></input>
       <img src={product_list.image}/>
          
       </div>
       <div className='Second'> 
       <h3>{product_list.person}</h3>
       <p>{product_list.para}</p>  
       </div>
       <h3>{right_arrow}</h3>

      </div> 
    </div>
  );
}

export default App;
