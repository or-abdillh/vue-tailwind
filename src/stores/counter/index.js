import { defineStore } from 'pinia'

export const useCount = defineStore('counter', {
	state: () => {
		return {
			count: 0
		}
	}
})
