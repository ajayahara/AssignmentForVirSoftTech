import {useContext,useState} from "react"
import { cryptoContext } from "../context/CryptoContext";
export const SingleCrypto = ({item}) => {
    const [open,setOpen]=useState(false);
    const [quantity,setQuantity]=useState(0);
    const {updateCart}=useContext(cryptoContext)
    const handleBuy=()=>{
        if(!quantity||!open){
            alert("Please enter a quantity");
            return;
        }
        const date=new Date();
        const newCartItem={
            id:date.getTime()+item.name,
            quantity:quantity,
            name:item.name,
            price:item.current_price,
            image:item.image
        }
        updateCart(newCartItem);
        setOpen(false);
        setQuantity(0)
    }
  return (
    <div className="crypto-card">
        <div>
            <img src={item.image} alt={item.name||"Missing Image Url"} />
        </div>
        <h3>{item.name}</h3>
        <p>Price:${item.current_price}</p>
        <div>
            {open?<input type="number" value={quantity} onChange={(e)=>{
                if(e.target.value>=0){
                    setQuantity(Number(e.target.value))
                }
            }} />:<button onClick={()=>setOpen(true)}>Quantity</button>}
            <button onClick={handleBuy}>Buy</button>
        </div>
    </div>
  )
}