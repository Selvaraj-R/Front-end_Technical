import React from 'react'

const  ExpenseForm = () =>{
     
return(
 <div>
    <form>
    <input type ='text' placeholder={'Add Expense ...'} className="inputBox" />
        <input type ='number' placeholder={'Add Amount ...'} className="numberBox" />
    </form>
 </div>
)

}

export default ExpenseForm;