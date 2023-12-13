import React,{useState} from "react"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {
  let [cart,setCart]=useState(0);
  let product=[
    {
      name:"Nokiya",
      price: 100,
      mrp: 150
    },
    {
      name :"Vivo",
      price: 120,
      mrp: 130
    },
    {
      name :"Oppo",
      price :121,
      mrp: 140
    },{
      name:"Redmi",
      price: 90,
      mrp: 100
    },
    {
      name :"Realmi",
      price: 91,
      mrp: 110
    },
    {
      name :"OnePlus",
      price :121,
      mrp: 135
    }
  ]
  return (
    <>
        <Navbar cart={cart} setCart={setCart}/>
        <Header/>
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              
              {
                product.map((e,i)=>{
                  return <Card cart={cart} setCart={setCart} product={e} key={1}/>
                })
              }
              
           
            </div> 
          </div>  
        </section>

        <Footer/>

    </>
  )
}

export default App
