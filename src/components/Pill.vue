<template>
	<span class="bg-slate-600 hover:scale-75 duration-300 text-gray-50 px-5 py-2 rounded-xl text-base">
		{{ label }}
	</span>
</template>

<script setup>
	const props = defineProps({
		label: {
			type: String,
			default: 'Label'
		}
	})
</script>
