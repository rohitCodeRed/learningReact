
import Expenses from './components/Expenses/Expenses';
 
function App() {
  const dataArr=[{
    "id":1,
    "title":"car insurance",
    "amount":259,
    "date":new Date()
  }]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses data={dataArr}></Expenses>
    </div>
  );
}

export default App;
