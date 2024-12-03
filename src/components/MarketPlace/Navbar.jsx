export default function Navbar(){
    return(
        <nav className="w-full h-[175px] pt-[22.67px] pb-[13.33px] flex justify-center itemms-center bg-[#FFFFFFEB">
            <div className="flex flex-col justify-between gap-[13.33px] w-[83.33%] h-full items-center">
                <div className="flex justify-between w-full h-fit">
                    <img className="w-[7.375%] h-[41.84px] object-contain" src="/images/Havesta 1 5.png" alt="" />
                
                    <div className="min-w-[41.41%] w-fit flex h-[56px] bg-[#F3F3F3] justify-betweent items-center">
                        <select className="outline-none w-fit px-4 h-[24px] text-[#253D4E] text-[18.67px] leading-[25.52px] font-semibold text-center bg-inherit" name="categories" id="catrgories">
                            <option className="" value="all">All Categories</option>
                        </select>
                        <input className="text-[18.67px] leading-[25.52px] w-full bg-inherit outline-none" placeholder="Search for items..." type="text" />
                        <button className="flex justify-center items-center px-[28px] rounded-tr-[7px] rounded-br-[7px] w-[101.33px] h-full bg-[#01BE72]">
                            <img className="w-[36px] h-[36px] object-contain" src="/images/li_search.svg" alt="" />
                        </button>
                    </div>

                    <div className="min-w-[19.25%] w-fit h-[44px] flex items-center justify-between">
                        <div className="flex gap-[6.67px] items-center">
                            <img className="relative w-[42.67px] h-[41.33px] object-contain" src="/images/li_heart.svg" alt="" />
                            <p className="text-[16px] leading-[20.16px] font-medium">Wishlist</p>
                        </div>

                        <div className="flex gap-[6.67px] items-center">
                            <img className="relative w-[42.67px] h-[41.33px] object-contain" src="/images/li_shopping-cart.svg" alt="" />

                            <div className="flex flex-col gap-[5.33px]">
                            <p className="text-[16px] leading-[20.16px] font-medium">My cart</p>
                            <p  className="text-[16px] leading-[20.16px] font-medium text-[#01BE72]">₦100,000</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="flex gap-[6.67px] w-fit min-w-[15.35%] items-center h-[53.33px]">
                        <img className="w-[53.33px] h-[53.33px] object-contain" src="/images/Ellipse 2.png" alt="" />
                        <p  className="text-[21.33px] leading-[26.88px] font-semibold text-[#253D4E]">Noel Amobeda</p>
                    </div>
                </div>


                <div className="flex justify-between items-center w-full h-fit">
                    <button className="justify-center items-center rounded-[7px] flex gap-[12px] p-[18.67px] bg-[#01BE72] w-[18.16%] h-[69.33px] ">
                        <img className="w-[32px] h-[32px] object-contain" src="/images/li_layout-grid.svg" alt="" />
                        <p className="text-white text-[21.33px] leading-[26.88px]">Brows All Vendors</p>
                    </button>

                    <div className="w-fit min-w-[47.67%] flex justify-between gap-8 h-[53.67px]">
                        <div className="w-fit flex items-center gap-[6.67px] p-[13.33px] h-full">
                            <img className="w-[26.67px] h-[26.67px] obj" src="/images/Frame.svg" alt="" />
                            <p className="text-[#005231] text-[21.33px] leading-[26.88px] font-medium">Home</p>
                        </div>
                        <div className="w-fit flex items-center gap-[6.67px] p-[13.33px] h-full">
                            <img className="w-[26.67px] h-[26.67px] obj" src="/images/Group.svg" alt="" />
                            <p className="text-[#253D4E] text-[21.33px] leading-[26.88px] font-medium">Bulk deals</p>
                        </div>
                        <div className="w-fit flex items-center gap-[6.67px] p-[13.33px] h-full">
                            <img className="w-[26.67px] h-[26.67px] obj" src="/images/Vector-1.svg" alt="" />
                            <p className="text-[#253D4E] text-[21.33px] leading-[26.88px] font-medium">Promotions</p>
                        </div>
                        <div className="w-fit flex items-center gap-[6.67px] p-[13.33px] h-full">
                            <img className="w-[26.67px] h-[26.67px] obj" src="/images/li_megaphone.svg" alt="" />
                            <p className="text-[#253D4E] text-[21.33px] leading-[26.88px] font-medium">New products</p>
                        </div>
                    </div>

                    <div className="w-fit min-w-[25.375%] h-[69.33px] flex items-center gap-[6.67px]">
                        <img className="w-[26.67px] h-[26.67px] object-contain" src="/images/Call.svg" alt="" />
                        <p className="text-[#01BE72] text-[24px] leading-[30.24px] font-semibold">080HARVESTA</p>
                        <p  className="text-[#253D4E] text-[18.67px] leading-[23.52px] font-medium">24/7 support center</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}