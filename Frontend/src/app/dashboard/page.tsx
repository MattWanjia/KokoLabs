'use client'

import { fetchCategories, fetchExpenses, fetchGoal, fetchIncomes, getMonthlyTotals } from "@/api";
import Dash from "@/components/Dashboard/Dash";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";


export default function Home() {
  const [incomes, setIncomes] = useState<any[]>([]); // Initialize incomes as an empty array of any type
  const [expenses, setExpenses] = useState<any[]>([]);
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [goal, setGoal] = useState([])
  const [categories, setCategories] = useState([])
  const [chartTotals, setChartTotals] = useState([])

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

  }, [incomes, expenses]); // Run this effect whenever incomes or expenses change

  const fetchLists = async () => {
    try{
      const res = await fetchExpenses()

      setExpenses(res)

      const res2 = await fetchIncomes()

      setIncomes(res2)

      const res3 = await fetchGoal()

      setGoal(res3)

      //console.log(res3)
      const res4 = await fetchCategories()
      setCategories(res4)

      const res5 = await getMonthlyTotals()
      setChartTotals(res5)


      //console.log(res5)
    }catch(err){
      console.log(err)
    }
    
  }

  return (
    <>
      <DefaultLayout>
        <Dash incomes={incomes} expenses={expenses} totalIncome={totalIncome} totalExpense={totalExpense} goal={goal} categories={categories} chartTotals={chartTotals}/>
      </DefaultLayout>
    </>
  );
}
