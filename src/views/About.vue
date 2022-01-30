<template>
	<main>
		<section class="bg-gray-50 py-8 px-5 rounded">
			<div>
				<BackBtn />
				<p class="text-3xl my-2 font-medium">
					Hello, I'm {{ about.name }}
				</p>
				<small>
					{{ about.subs.join(' | ') }}
				</small>
			</div>
			<div class="flex gap-2 mt-3">
				<template v-for="(item, i) in sosmed" :key="i">
					<a :href="item.href" target="_blank">
						<i :class="item.icon" class="text-2xl"></i>
					</a>
				</template>
			</div>	
		</section>
		<Footer />
	</main>
</template>
<script setup>
	import Footer from '@/components/Footer.vue'
	import BackBtn from '@/components/BackBtn.vue'

	const about = {
		name: 'Abdillah',
		subs: [
			'Fullstack Web Developer',
			'Javascript Enthusiast'
		]
	}
	
	const sosmed = [
		{
			icon: 'fab fa-github text-gray-800',
			href: 'https://github.com/or-abdillh'
		},
		{
			icon: 'fab fa-instagram text-pink-600',
			href: 'https://instagram.com/or.abdillh'
		},
		{
			icon: 'fab fa-facebook text-blue-700',
			href: 'https://facebook.com/abdillahcfc'
		}
	]
</script>
