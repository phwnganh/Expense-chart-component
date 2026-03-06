import data from '../data/data.json'
import ExpenseRealTimeChartItem from './ExpenseRealTimeChartItem';
const ExpenseRealTimeChartStatistics = () => {
    const maxAmount = Math.max(...data.map(item => item.amount))
    return (
        <div className="flex items-end gap-4">
            {data.map((item, index) => <ExpenseRealTimeChartItem key={index} item={item} isMaxAmount={maxAmount === item.amount}/>)}
        </div>
    );
};

export default ExpenseRealTimeChartStatistics;