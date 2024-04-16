'use client'

import { fetchCategories, fetchExpenses, fetchIncomes } from "@/api";
import Dash from "@/components/Dashboard/Dash";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";


export default function Home() {
  const [incomes, setIncomes] = useState<any[]>([]); // Initialize incomes as an empty array of any type
  const [expenses, setExpenses] = useState<any[]>([]);
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)

  useEffect(() => {

    fetchLists()
  }, [])

  useEffect(() => {
    // Calculate total income
    const incomeTotal = incomes.reduce((total, income) => total + parseInt(income.amount), 0);
    setTotalIncome(incomeTotal);

    // Calculate total expense
    const expenseTotal = expenses.reduce((total, expense) => total + parseInt(expense.amount), 0);
    setTotalExpense(expenseTotal);

    //console.log(incomeTotal)
  }, [incomes, expenses]); // Run this effect whenever incomes or expenses change

  const fetchLists = async () => {
    try{
      const res = await fetchExpenses()

      setExpenses(res)

      const res2 = await fetchIncomes()

      setIncomes(res2)

      console.log(localStorage.getItem('token'))
    }catch(err){
      console.log(err)
    }
    
  }

  return (
    <>
      <DefaultLayout>
        <Dash incomes={incomes} expenses={expenses} totalIncome={totalIncome} totalExpense={totalExpense}/>
      </DefaultLayout>
    </>
  );
}
