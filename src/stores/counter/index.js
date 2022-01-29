import { defineStore } from 'pinia'

export const useCount = defineStore('counter', {
	state: () => {
		return {
			count: 0
		}
	},
	actions: {
		click() {
			this.count++
		},
		doubleClick() {
			this.count = this.count * 2
		}
	}
})
