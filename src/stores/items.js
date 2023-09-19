import { defineStore } from 'pinia'
import { getAuthToken } from '../auth'

export const useItemStore = defineStore('items', {
  state: () => ({
    items: []
  }),
  actions: {
    async fetchItems() {
      this.items = []
      const token = getAuthToken()
      await fetch('http://localhost:3000/items', {
        method: 'GET',
        credentials: 'include',
        headers: {
          authorization: `${token}`
        }
      })
        .then((res) => res.json())
        .then((data) => {
          data.forEach((e) => {
            this.items.push(e)
          })
        })
        .catch(() => {})
    }
  },
  getters: {
    getItems: (state) => {
      return state.items
    }
  }
})
