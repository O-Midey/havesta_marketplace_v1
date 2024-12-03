import joinUs from "../../../config/joinUs.config";

const SectionL2 = () => {
    return (
        <>
            <div className="w-full flex justify-center py-[175.41px]">
                <div className="md:w-[66.40%] lg:flex justify-between items-center space-y-4 ">
                    {joinUs.map((item, index) => (
                        <div className="flex flex-col gap-[3rem]" key={index}>
                            <div
                                className="bg-white border-primary border-4 relative grid grid-flow-col lg:grid-flow-row justify-items-center items-center rounded-xl w-[300px] "
                            >
                                <div className="z-10 w-full">
                                    <img
                                        src={item.image}
                                        className="w-[200px] h-[180px] lg:w-[328px] m-2 lg:m-0 object-cover rounded-lg border-primary border-b-4"
                                    />
                                </div>

                                <div className="grid grid-flow-row ml-2 lg:ml-0">
                                    <h5 className="font-secondary text-harvestaLightGreen lg:text-2xl mt-3 place-self-center lg:place-self-start">
                                        {item.count}
                                    </h5>
                                    <p className="lg:w-72 text-[10px] font-primary lg:text-[13px] text-justify p-2">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                            <button className="text-[10px] bg-primary rounded-3xl p-2 hover:bg-primaryHover cursor-pointer text-white lg:text-xs  lg:w-40 m-4 place-self-center">
                                {item.button}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SectionL2;
