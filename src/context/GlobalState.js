import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"


// Initial state
const initialState = {
  transactions: []
}

// 1.Create context 变量
export const GlobalContext = createContext(initialState)

// 2.Create Provider
// 这里的children指的是app.js里的那些components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // actions

  function deleteTransaction (id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    })
  }

  function addTransaction (transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  // 3. return <GlobalContext.Provider>
  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>)
}

// 3.在app.js用<GlobalProvider>包住components
// 4.在组件里导入 { useContext } 
// import { GlobalContext } from '../context/GlobalState'
// const { transactions } = useContext(GlobalContext)
