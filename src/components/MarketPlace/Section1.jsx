const Section1 = () => {
    return (
        <>
        <div className="relative flex items-center h-[636px] w-full bg-marketSec1 bg-[#01BE724D]">
            <img className="absolute top-0 right-0 w-[39.427%] h-[604.89px] object-contain object-right-top" src="/images/Hreo-img.png" alt="" />
            <div className="w-[36.94%] flex flex-col h-fit gap-[38.67px] ml-[8.19%]">
                <p className="w-full text-[73.33px] leading-[92.4px] font-bold">Don’t miss our daily amazing deals.</p>
                <p className="text-[26.67px] leading-[33.6px] font-medium">Save up to 60% off on your first order</p>

                <div className="w-[82.14%] h-[69.33px] items-center bg-white flex rounded-tr-[7px] rounded-br-[7px] overflow-x-hidden">
                    <img className="ml-4 w-[24px] h-[24px] object-contain" src="/images/li_send.svg" alt="" />
                    <input placeholder="Enter your email address" className="text-[18.67px] leading-[23.52px] font-medium ml-4 bg-inherit outline-none w-full" type="text" />
                    <button className="bg-[#01BE72] w-[24.71%] h-full text-white p-[18.67px] text-[21.33px] leading-[26.88px] font-semibold">Subscribe</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section1;