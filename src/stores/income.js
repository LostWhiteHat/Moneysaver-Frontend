import { defineStore } from 'pinia'
import { getAuthToken } from '../auth'

export const useIncomeStore = defineStore('income', {
  state: () => ({
    income: 0
  }),
  actions: {
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
    getIncome: (state) => {
      return state.income
    }
  }
})
