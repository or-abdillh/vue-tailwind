<template>
	Current count : {{ count.count }}
</template>

<script setup>
	import { useCount } from '@/stores/counter'

	const count = useCount()
</script>
