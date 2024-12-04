export default function MarketCard() {
    return (
        <div className="w-marketcards p-[5.895px] shadow-marketCustom h-[305.12px] flex flex-col gap-4 rounded-[12.11px]">
            <img className="w-full h-[166.56px] roundes-[6.06px] " src="/images/" alt="" />
            <div className="flex flex-col">
                <div className="w-full px-2 h-fit flex items-center justify-between">
                    <p className="text-[24px] leading-[36.5px] font-bold">Tunde Fresh Veggies</p>
                    <img className="w-[22.71px] h-[22.71px] object-contain" src="/images/heart.svg" alt="" />
                </div>

                <div className="w-full px-2 h-fit flex items-center gap-4 justify-between">
                    <div className="flex items-center gap-2">
                        <img className="w-[22.71px] h-[22.71px] object-contain" src="/images/Group 1171274916.svg" alt="" />
                        <p className=" text-[#797979] text-[15.14px] leading-[18.32px] font-medium">From N500  |  15 - 30min</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-[22.71px] h-[22.71px] object-contain" src="/images/Star.svg" alt="" />
                        <p className="text-[15.14px] leading-[18.32px] font-medium">4.5 (100)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}