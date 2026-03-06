import StatisticTooltip from "./StatisticTooltip.jsx";

const ExpenseRealTimeChartItem = ({item, isMaxAmount}) => {
    return (
        <div className="flex flex-col gap-2 group">
            <StatisticTooltip itemAmount={item.amount}/>
            <div className={`rounded-5 min-w-7.5 sm:min-w-12.5 flex items-center justify-center ${isMaxAmount ? 'bg-blue-300 group-hover:bg-blue-200' : 'bg-red-500 group-hover:bg-red-300'}`}
            style={{height: `${item.amount * 3}px`}}>
            </div>
            <p className="text-center text-preset-6 sm:text-preset-5 leading-preset-6 sm:leading-preset-5 text-brown-400">{item.day}</p>
        </div>
    );
};

export default ExpenseRealTimeChartItem;