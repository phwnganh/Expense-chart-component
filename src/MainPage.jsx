import ExpenseChartHeader from "./components/ExpenseChartHeader";
import ExpenseChartMain from "./components/ExpenseChartMain";

const MainPage = () => {
    return (
        <div className="bg-red-100">
            <div className="max-w-135 w-full mx-auto flex flex-col gap-6">
            <ExpenseChartHeader/>
            <ExpenseChartMain/>
            </div>
        </div>
    );
};

export default MainPage;