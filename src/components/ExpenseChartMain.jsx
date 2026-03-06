import ExpenseChartFooter from "./ExpenseChartFooter";
import ExpenseRealTimeChartStatistics from "./ExpenseRealTimeChartStatistics";

const ExpenseChartMain = () => {
  return (
    <div className="bg-white rounded-20 py-8 px-10 flex flex-col gap-8">
      <div className="flex flex-col gap-16">
        <h1 className="text-preset-2 font-preset-2 leading-preset-2">
          Spending - Last 7 days
        </h1>
        <ExpenseRealTimeChartStatistics />
      </div>
        <hr className="rounded-1 h-0.5 bg-red-100 border-red-100"/>
        <ExpenseChartFooter/>
    </div>
  );
};

export default ExpenseChartMain;
