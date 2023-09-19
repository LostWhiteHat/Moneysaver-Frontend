<script setup>
import { useItemStore } from '../stores/items'
import { useMoneyStore } from '../stores/money'

const itemStore = useItemStore()
const moneyStore = useMoneyStore()

itemStore.fetchItems()
moneyStore.fetchExpenses()
moneyStore.fetchFixedExpenses()
moneyStore.fetchBalances()
moneyStore.fetchIncome()
</script>

<template>
  <main class="mobile">
    <div class="data container">
      <h3>Ausgaben</h3>
      <div class="data-row">Test</div>
    </div>
    <div class="quickadd container">
      <button class="Test">Test</button>
    </div>
  </main>
</template>

<style scoped>
.mobile {
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
  right: 2.5rem;
  bottom: 4rem;
  display: grid;
  grid-template-rows: 2fr 0.9fr;
  row-gap: 2.5rem;
  color: #90afc5;
}

.container {
  background-color: #3f4a50;
  background-color: #3f4a50;
  border-radius: 20px;
  padding: 1rem;
}
h3 {
  font-weight: bold;
  margin-bottom: 1rem;
}

.data {
  grid-row: 1;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}

.quickadd {
  grid-row: 2;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 1rem;
  column-gap: 1rem;
}
.Test {
  grid-row: 1;
  grid-column: 1;
}

button {
  border-width: 2px;
  border-radius: 20px;
  border-style: solid;
  background-color: transparent;
  color: #90afc5;
}
</style>
