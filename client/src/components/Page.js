import React from "react";
import { BiColor } from "react-icons/bi";
import { IoMdArrowDropup } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";


const Page = ({data}) => {
    
    // console.log(data)

    return (


        <div className="font-display">

            {/* <div>{data.id}</div>
            <div>{data.symbol}</div>
            <div>{data.name}</div>
            <div>{data.market_cap_rank}</div>
            <div>{data.market_data.current_price.usd}</div>
            <div>{data.market_data.market_cap.usd}</div>
            <div>{data.market_data.total_volume.usd}</div>
            <div>{data.market_data.high_24h.usd}</div>
            <div>{data.market_data.low_24h.usd}</div>
            <div>{data.market_data.price_change_24h}</div>
            <div>{data.market_data.price_change_percentage_24h}</div>
            <div>{data.market_data.market_cap_change_24h}</div>
            <div>{data.market_data.market_cap_change_percentage_24h}</div>
            <div>{data.market_data.price_change_24h_in_currency.usd}</div>
            <div>{data.market_data.price_change_percentage_24h_in_currency.usd}</div>
            <div>{ data.market_data.total_supply}</div>
            <div>{data.description.en}</div>
            <div>{data.links.homepage[0]}</div>
            <img src={data.image.large}/> */}

            <div class="flex items-center justify-between w-full px-4 py-2">
            <div>
                    
                    <img 
                        src={ data.image.large}
                        alt={ data.name} 
                        class="h-24 w-24"
                    />
               
            </div>
            <div class="flex flex-col items-end">
            <div className="flex">
                <a href={data.links.homepage[0]} className="flex items-center">
                    <h1 className="font-bold text-4xl">{data.name}</h1>
                    <FaArrowUpRightFromSquare className="text-xl ml-2" />
                </a>
            </div>

                <div className="flex justify-center content-center items-center">
                    <h2 className="text-xl px-4">{data.symbol}</h2>

                    <h2 className="border p-2 bg-gray-200 rounded-lg">#{data.market_cap_rank}</h2>
                </div>
            </div>
                
            </div>
            <hr class="w-1 h-1 mx-auto my-8 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            
            <div className="flex justify-center p-4 border rounded-md mx-2 items-center">
                <h1 className="font-bold text-4xl ">$ {data.market_data.current_price.usd}</h1>
                <div>{data.market_data.price_change_percentage_24h_in_currency.usd > 0 ? <IoMdArrowDropup className="text-green-400 h-8 w-8" /> : <MdOutlineArrowDropDown className="text-red-700" />}</div>
                <div className={data.market_data.price_change_percentage_24h_in_currency.usd > 0 ? "text-green-400" : "text-red-600"}>
                    {data.market_data.price_change_percentage_24h_in_currency.usd}
                </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className="px-4">
                <div>
                    <h1 className="text-xl font-semibold">Public Sentiment about { data.name }</h1>
                </div>
                <div className="flex justify-between py-2 px-4">
                    <span className="flex items-center text-xl"><IoMdThumbsUp />{ data.sentiment_votes_up_percentage } %</span>
                    <span className="flex items-center text-xl"><IoMdThumbsDown />{ data.sentiment_votes_down_percentage } %</span>
                </div>
                <div className="flex">
                </div>
                <div>
                    <span className="text-xl font-semibold">Watchlist Portfolio Users: { data.watchlist_portfolio_users}</span>
                </div>

            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
               
            <div className="gap-8">
            <div className="flex justify-between px-4 font-semibold">
                <div>
                    <h1>24h High</h1>
                </div>
                <div>
                    ${data.market_data.high_24h.usd}
                </div>
                
            </div>

            {/* <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
            
                

            <div className="flex justify-between px-4 my-2 font-semibold">
            <div>
                    <h1>24h Low</h1>
                </div>
                <div>
                    ${data.market_data.low_24h.usd}
                </div>
                </div>
                
                {/* <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
            

            <div className="flex justify-between px-4 my-2 font-semibold">
            <div>
                    <h1>Total Supply</h1>
                </div>
                <div>
                    {data.market_data.total_supply}
                </div>
            </div>

            {/* <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
                
                
            <div className="flex justify-between px-4 my-2 font-semibold">
                <div>
                    <h1>Market Cap</h1>
                </div>
                <div>
                    ${data.market_data.market_cap.usd}
                </div>
                </div>
                

                
            </div>

            <div className="flex justify-between px-4 my-2 font-semibold">
                <div>
                    <h1>Circulating Supply</h1>
                </div>
                <div>
                    ${data.market_data.circulating_supply}
                </div>
            </div>
                

                

            
            {/* <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
            

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            
            <div className="p-4">
                <div>
                    <h1 className="font-display font-semibold text-2xl">Description</h1>
                </div>
                <p className="font-display text-sm pt-2">
                    { data.description.en}
                </p>
            </div>

            <hr class="w-1 h-1 mx-auto my-8 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            
        
            
        </div>
    )
}

export default Page;