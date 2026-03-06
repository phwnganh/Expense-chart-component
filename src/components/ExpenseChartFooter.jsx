
const ExpenseChartFooter = () => {
    return (
        <div className="flex flex-col">
            <p className="text-brown-400 text-preset-4 leading-preset-4">Total this month</p>
            <div className="flex justify-between items-center">
                <h1 className="text-brown-950 text-preset-1 font-preset-1 leading-preset-1">$478.33</h1>
                <div className="flex flex-col items-end">
                    <p className="text-brown-950 text-preset-4 font-preset-4 leading-preset-4">+2.4%</p>
                    <p className="text-brown-400 text-preset-4 leading-preset-4">from last month</p>
                </div>
            </div>
        </div>
    );
};

export default ExpenseChartFooter;