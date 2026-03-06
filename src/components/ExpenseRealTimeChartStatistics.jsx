import data from '../data/data.json'
import ExpenseRealTimeChartItem from './ExpenseRealTimeChartItem';
const ExpenseRealTimeChartStatistics = () => {
    return (
        <div className="flex items-end gap-4">
            {data.map((item, index) => <ExpenseRealTimeChartItem key={index} item={item}/>)}
        </div>
    );
};

export default ExpenseRealTimeChartStatistics;