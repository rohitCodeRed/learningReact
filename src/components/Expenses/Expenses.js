import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses(props){
    const data = props.data;
    return (<Card className="expenses">
        <ExpenseItem title={data[0].title} amount={data[0].amount} date={data[0].date}></ExpenseItem>
    </Card>);
}

export default Expenses;