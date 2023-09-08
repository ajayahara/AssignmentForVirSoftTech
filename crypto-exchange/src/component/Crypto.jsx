import { cryptoContext } from "../context/CryptoContext"
import { SingleCrypto } from "./SingleCrypto"
import { useContext } from "react"
export const Crypto = () => {
    const { cryptoList,loading } = useContext(cryptoContext)
    return (
        <div className="container">
            <h2>Welcome To Crypto Currency</h2>
            {loading?<h3>Loading...</h3>:null}
            <div className="crypto-div">
                {cryptoList.length ? cryptoList.map((item, i) => {
                    return <SingleCrypto key={i} item={item} />
                }) : null}
            </div>
        </div>
    )
}
