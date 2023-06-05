import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div className="expense-item__date">28 March 2023</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$249.50</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
