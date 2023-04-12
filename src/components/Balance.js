import React, { useContext } from 'react'
// 导入了useContext记得也要导入GlobalContext
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  // toFixed 四舍五入为两位小数的数字
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)


  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

export default Balance

// reduce() 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
// const array1 = [1, 2, 3, 4];
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
  // (accumulator, currentValue) => accumulator + currentValue,
  // initialValue
// );
// accumulator回调函数，即accumulator + currentValue
