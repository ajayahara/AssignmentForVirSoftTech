import { createContext,useState,useEffect } from "react"
export const cryptoContext = createContext();
export const CryptoContextProvider = ({ children }) => {
    const [cryptoList,setCryptoList] = useState([])
    const [loading,setLoading]=useState(false);
    const [cart, setCart] = useState([]);
    const [totalCost,setTotalCost]=useState(0);
    const deleteCart = (id) => {
        const newCart=cart.filter((el)=>el.id!==id);
        setCart(newCart);
    }
    const updateCart = (data) => {
        setCart([...cart, data]);
    }
    useEffect(()=>{
        const getCryptoList=async ()=>{
            setLoading(true);
           try {
            const currencies = 'bitcoin,ethereum,litecoin'; 
            const res=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${currencies}`)
            const data=await res.json();
            setCryptoList(data);
           } catch (err) {
            console.log(err)
           }
            setLoading(false)
        }
        getCryptoList();
    },[])
    useEffect(()=>{
        const totalPrice=cart.reduce((acc,cur)=>{
            return acc+Number(cur.price)*Number(cur.quantity);
        },0);
        setTotalCost(totalPrice);
    },[cart])

    return <cryptoContext.Provider value={{cart,cryptoList,deleteCart,updateCart,totalCost,loading}}>
        {children}
    </cryptoContext.Provider>
}