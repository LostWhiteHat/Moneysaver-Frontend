import { defineStore } from 'pinia'
import { getAuthToken } from '../auth'

export const useMoneyStore = defineStore('expenses', {
  state: () => ({
    expenses: [],
    fixedExpenses: [],
    balances: [],
    income: 0
  }),
  actions: {
    async fetchExpenses() {
      this.expenses = []
      const token = getAuthToken()
      await fetch('http://localhost:3000/expenses', {
        method: 'GET',
        credentials: 'include',
        headers: {
          authorization: `${token}`
        }
      })
        .then((res) => res.json())
        .then((data) =>
          data.foreach((e) => {
            this.expenses.push(e)
          })
        )
        .catch(() => {})
    },

    async fetchFixedExpenses() {
      this.fixedExpenses = []
      const token = getAuthToken()
      await fetch('http://localhost:3000/expenses/fixed', {
        method: 'GET',
        credentials: 'include',
        headers: {
          authorization: `${token}`
        }
      })
        .then((res) => res.json())
        .then((data) =>
          data.foreach((e) => {
            this.fixedExpenses.push(e)
          })
        )
        .catch(() => {})
    },

    async fetchBalances() {
      this.balances = []
      const token = getAuthToken()
      await fetch('http://localhost:3000/balances', {
        method: 'GET',
        credentials: 'include',
        headers: {
          authorization: `${token}`
        }
      })
        .then((res) => res.json())
        .then((data) =>
          data.foreach((e) => {
            this.balances.push(e)
          })
        )
        .catch(() => {})
    },

    async fetchIncome() {
      this.income = 0
      const token = getAuthToken()
      await fetch('http://localhost:3000/income', {
        method: 'GET',
        credentials: 'include',
        headers: {
          authorization: `${token}`
        }
      })
        .then((res) => res.json())
        .then((data) => (this.income = data.income))
        .catch(() => {})
    }
  },
  getters: {
    getExpenses: (state) => {
      return state.expenses
    },
    getFixedExpenses: (state) => {
      return state.fixedExpenses
    },
    getIncome: (state) => {
      return state.income
    }
  }
})
