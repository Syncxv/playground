<script lang="ts">
	import Hero from '../lib/components/Hero.svelte';
	import NavButton from '../lib/components/NavBar/NavButton.svelte';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { load } from '../lib/utils/loadManager';
	import { sleep } from '../lib/utils/sleep';

	let header!: HTMLHeadElement;
	let aside!: HTMLElement;
	let loader!: HTMLDivElement;
	const timeline = gsap.timeline({ paused: true });
	const heroTimeline = gsap.timeline({ paused: true });
	onMount(() => {
		timeline
			.fromTo(header, { y: '80vh' }, { y: 0, duration: 1, ease: 'power4.out' })
			.fromTo(aside, { x: '80vw' }, { x: 0, duration: 1, ease: 'power4.out' }, '<.12')
			.fromTo(aside.firstChild, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power4.out' });
		load().then(async () => {
			gsap.to(loader.firstChild, { y: '-100vh', duration: 1, ease: 'power4.in' });
			await gsap.to(loader, { y: '-100vh', duration: 1, delay: 0.2, ease: 'power4.in' });
			await sleep(100);
			timeline.play();
			heroTimeline.play();
		});
	});
</script>

<div bind:this={loader} class="loader">
	<h1>Loading</h1>
</div>
<div class="wrapper">
	<header bind:this={header} />
	<main class="content">
		<Hero timeline={heroTimeline} />
	</main>
	<aside bind:this={aside}>
		<NavButton />
	</aside>
</div>

<style lang="scss">
	@import '../lib/scss/base/util';
	.loader {
		position: absolute;
		z-index: 99999;
		inset: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: white;
		& > h1 {
			font-size: 4rem;
		}
	}
	.wrapper {
		--200px: #{to_rem(200)};
		display: grid;
		grid-template-columns: var(--200px) 100%;
		grid-template-rows: var(--200px) min-content;
		grid-template-areas:
			'sidebar header'
			'sidebar content'
			'sidebar content';
		height: 100vh;

		header {
			position: relative;
			grid-area: header;
			height: var(--200px);
			z-index: 100;
			&::after {
				content: '';
				position: absolute;
				background-color: hsla(0, 0%, 0%, 0.459);
				height: 1px;
				width: calc(100vw + var(--200px));
				bottom: 0;
				left: calc(var(--200px) * -1);
			}
		}
		.content {
			position: relative;
			grid-area: content;
			overflow-y: auto;
			overflow-x: hidden;
		}
		aside {
			position: relative;
			grid-area: sidebar;
			width: var(--200px);
			&::after {
				content: '';
				position: absolute;
				background-color: hsla(0, 0%, 0%, 0.459);
				height: calc(100vh + var(--200px));
				width: 1px;
				bottom: calc(var(--200px) * -1);
				right: 0;
			}
		}
	}
</style>
