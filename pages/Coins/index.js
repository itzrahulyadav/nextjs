import Axios from "axios";

//getStaticProps
//getServerSideProps

const CoinList = ({coinData}) => {
    console.log(coinData);
     return(
         <div>
            {coinData.coins.map(coin => {
                return(
                    <div>
                        <h1>{coin.name}</h1>
                        <img src = {coin.icon} alt = "coin-logo" />
                        <p>{coin.price}</p>
                    </div>
                )
            })}
         </div>
     )
}
export const getServerSideProps = async ({params}) => {
        // const id = params.id;
        const data = await Axios.get(
            "https://api.coinstats.app/public/v1/coins?=0"
        )

        return {
            props:{
                coinData:data.data
            },
        }
}
export default CoinList;