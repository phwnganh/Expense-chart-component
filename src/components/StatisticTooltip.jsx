
const StatisticTooltip = ({itemAmount}) => {
    return (
        <div className={"flex justify-center items-center rounded-5 bg-brown-950 group-hover:opacity-100 opacity-0 pointer-events-none hover:pointer-events-auto"}>
            <p className={"text-preset-4 font-preset-4 text-white"}>{itemAmount}</p>
        </div>
    );
};

export default StatisticTooltip;