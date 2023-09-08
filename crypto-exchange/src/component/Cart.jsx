import { cryptoContext } from "../context/CryptoContext"
import { useContext } from "react"
export const Cart = () => {
    const { cart, totalCost,deleteCart } = useContext(cryptoContext)
    return (
        <div className="cart">
            <div>
                <h2>Your Cart</h2>
                <h3>Total:{(totalCost).toFixed(2)}</h3>
            </div>
            {cart.length ? <table>
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((el,i)=>{
                        return <tr key={i}>
                        <td>{i}</td>
                        <td>{el.name}</td>
                        <td>{el.quantity}</td>
                        <td>${(el.price*el.quantity).toFixed(2)}</td>
                        <td><button onClick={()=>deleteCart(el.id)}>🗑️</button></td>
                      </tr>
                    })}
                </tbody>
            </table> : "Your cart is empty!"}
        </div>
    )
}
