import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product';
import Cartpage from './components/Cartpage';
import { useState } from 'react';

const App = () => {
  const users = [
  {
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Mr. John Doe",
    price: 49.99
  },
  {
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Ms. Jane Smith",
    price: 32.50
  },
  {
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    name: "Mr. Alex Johnson",
    price: 27.00
  },
  {
    image: "https://randomuser.me/api/portraits/women/92.jpg",
    name: "Ms. Maria Rodriguez",
    price: 55.20
  },
  {
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Mr. Daniel Lee",
    price: 41.75
  },
  {
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Ms. Emily Davis",
    price: 29.99
  },
  {
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Mr. Michael Brown",
    price: 63.00
  },
  {
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    name: "Ms. Olivia Wilson",
    price: 38.40
  },
  {
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    name: "Mr. William Taylor",
    price: 22.99
  },
  {
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Ms. Sophia Martinez",
    price: 47.80
  }
];
  const [cart, setCart] = useState(true)
  const[items,setItems]=useState([])



  return (
    <div className='h-screen '>
      <Navbar cart={cart} setCart={setCart}/>
  
  <div className='flex flex-wrap'>
      {
        users.map((elem,id)=>{
          return <Product key={id} elem={elem} setItems={setItems} />
        })
      }
  </div>
    {
      cart?<Cartpage items={items}/>:""
    }

    </div>
  )
}

export default App