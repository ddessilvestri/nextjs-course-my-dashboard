import { CartCounter } from "@/shopping-cart"


export const metadata = {
  title:'Shopping Cart',
  description:'Check your cart products!'
}


export default function CounterPage(){
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>
          Cart Products
      </span>
      
      <CartCounter value={20}/>
    </div>

  )
}
