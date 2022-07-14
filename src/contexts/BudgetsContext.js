import React, { useContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import useLocalStorage from '../hooks/useLocalStorage'

const BudgetsContext = React.createContext()

export function useBudgets() {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({children}) => {

    //default is empty array
    const [budgets, setBudgets] = useLocalStorage('budgets', [])
    const [expenses, setExpenses] = useLocalStorage('expenses', [])

    function getBudgetExpenses(budgetId){
        return getBudgetExpenses.filter(expense => expense.budgetId === budgetId)
    }

    function addExpense({description, amount, budgetId}){
        setExpenses(prevExpenses => {
            // keeping all previous expenses and then creating a new expense with a unique id
            return [...prevExpenses, {id: uuidv4(), description, amount, budgetId}]
        })
    }

    function addBudget({name, max}){
        setBudgets(prevBudgets => {
            // if you're trying to add a budget with the same name as a pre-exisitng budget, don't make a new budget
            if(prevBudgets.find(budget => budget.name === name)){
                return prevBudgets
            }
            // keeping all previous budgets and then creating a new budget with a unique id and name
            return [...prevBudgets, {id: uuidv4(), name, max}]
        })
    }

    function deleteBudget({id}){
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    }

    function deleteExpense({id}){
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }

    return (
        // passing the value allows all the children inside the context to have access to the value
        // since we wrapped our entire application in in this BudgetsProvider content in index.js, our entire app has accress everything in this budget's context 
        <BudgetsContext.Provider value={
            // what we want to pass down in the form of an object
            {budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense}
        }>
            {children}
        </BudgetsContext.Provider>
    )
}