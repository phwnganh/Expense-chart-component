
const ExpenseRealTimeChartItem = ({item}) => {
    return (
        <div className="flex flex-col gap-2">
            <div className={`rounded-5 w-12.5 flex items-center justify-center bg-red-500`}
            style={{height: `${item.amount * 3}px`}}>
            </div>
            <p className="text-center text-preset-5 leading-preset-5 text-brown-400">{item.day}</p>
        </div>
    );
};

export default ExpenseRealTimeChartItem;