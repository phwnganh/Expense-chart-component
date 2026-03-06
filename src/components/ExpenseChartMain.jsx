import ExpenseChartFooter from "./ExpenseChartFooter";
import ExpenseRealTimeChartStatistics from "./ExpenseRealTimeChartStatistics";

const ExpenseChartMain = () => {
  return (
    <div className="bg-white rounded-20 py-6 px-4 sm:py-8 sm:px-10 flex flex-col gap-6 sm:gap-8">
      <div className="flex flex-col gap-14 sm:gap-16">
        <h1 className="text-preset-3 sm:text-preset-2 font-preset-2 leading-preset-3 sm:leading-preset-2">
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
