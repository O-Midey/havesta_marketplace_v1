import MarketCard from "./marketCard";

export default function Section2() {
    return (
        <div className="w-full h-fit py-[80px] flex flex-col items-center gap-20">
            <div className="w-[83.33%] flex flex-col gap-[30.88px] h-fit">
                <div className="w-full h-[50px] flex items-center justify-between">
                    <div className="w-fit flex h-fit items-center gap-2">
                        <img className="w-[37.46px] h-[39.39px] object-contain" src="/images/Vector-1.svg" alt="" />
                        <p className="text-[33px] leading-[49.5px] font-semibold">Promotions</p>
                    </div>
                    <div className="w-fit flex h-fit items-center gap-[s.09px] cursor-pointer">
                        <img className="w-[25.44px] h-[25.44px] object-contain" src="/images/location.svg" alt="" />
                        <p className="text-[17.81px] leading-[27.99px] font-medium">Ikosi Ketu, NGA </p>
                        <img className="w-[20.35px] h-[20.35px] object-contain" src="/images/arrow-left.svg" alt="" />
                    </div>
                </div>

                <div className=" w-full overflow-x-clip h-fit p-[16px]">
                    <div className="w-full h-full ">
                        <div className="w-[1600px/1920px] gap-4 flex h-full">
                            <MarketCard />
                            <MarketCard />
                            <MarketCard />
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-[83.33%] flex flex-col gap-[30.88px] h-fit">
                <div className="w-full h-fit flex items-center justify-between">
                    <p className="text-[33px] leading-[49.5px] font-semibold">All Vendors</p>

                    <div className="min-w-[473px] w-fit flex h-[56px] bg-[#F3F3F3] justify-betweent items-center">
                        <input className="text-[18.67px] px-4 leading-[25.52px] w-full bg-inherit outline-none" placeholder="Search for products..." type="text" />
                        <button className="flex justify-center items-center px-[28px] rounded-tr-[7px] rounded-br-[7px] w-[101.33px] h-full bg-[#01BE72]">
                            <img className="w-[36px] h-[36px] object-contain" src="/images/li_search.svg" alt="" />
                        </button>
                    </div>
                </div>

                <div className=" w-full overflow-x-clip h-fit p-[16px]">
                    <div className="w-full h-full ">
                        <div className="w-full gap-4 gap-y-12 flex flex-wrap  justify-center h-full">
                            <MarketCard />
                            <MarketCard />
                            <MarketCard />
                            <MarketCard />
                            <MarketCard />
                            <MarketCard />
                            <MarketCard />
                            <MarketCard />
                            <MarketCard />
                            <MarketCard />
                            <MarketCard />
                            <MarketCard />
                            <button className="text-white w-[238px] h-[69px] rounded-[7px] bg-[#01BE72]">
                                Show More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

