import ExpenseChartHeader from "./components/ExpenseChartHeader";
import ExpenseChartMain from "./components/ExpenseChartMain";

const MainPage = () => {
    return (
        <div className="bg-red-100">
            <div className={"min-h-screen flex justify-center items-center"}>
                <div className="max-w-135 w-full flex flex-col gap-6">
                    <ExpenseChartHeader/>
                    <ExpenseChartMain/>
                </div>
            </div>

        </div>
    );
};

export default MainPage;