<script lang="ts">
	import { onMount } from 'svelte';

	let h1: HTMLElement;

	export let timeline: gsap.core.Timeline;

	onMount(() => {
		timeline.fromTo(h1.firstChild, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power4.out' });
	});
</script>

<div class="wrapper">
	<div class="hero">
		<h1 bind:this={h1}>
			<div class="bruh">Bruh</div>
			<div class="moment">
				<div class="what">Moment</div>
				<svg
					class="idkman"
					width="100"
					height="100"
					viewBox="0 0 893 56"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.30749 31.6319C-3.34165 15.8316 8.50273 0 24.9728 0H456.998L873.613 7.50575C879.535 7.61244 885.092 10.3868 888.736 15.0558V15.0558C900.677 30.354 884.221 57.4473 864.954 55.1203C800.824 47.3747 678.554 38.2855 456.998 38C186.714 37.6517 75.2382 46.1621 32.4747 51.3583C18.9668 52.9996 5.14848 44.6857 1.30749 31.6319V31.6319Z"
						fill="#3DCBBD"
					/>
				</svg>
			</div>
		</h1>
		<p>Powerful Websites That Convert Visitors into Customers</p>
	</div>
	<div class="img-wrapper"><img src="/img/hero.png" alt="" /></div>
</div>

<style lang="scss">
	@import '../scss/base/util';
	.wrapper {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: start;
		.hero {
			z-index: 20;
			h1 {
				font-family: 'Panchang', sans-serif;
				font-size: 7rem;
				margin-left: -0.5rem;
				font-weight: 500;
				line-height: 157%;
				letter-spacing: 0.08rem;
				.bruh {
					position: relative;
					width: fit-content;
					&::before {
						content: '';
						position: absolute;
						bottom: 25%;
						z-index: -2;
						height: 25%;
						width: 100%;
						background-color: var(--brand);
					}
				}
				.moment {
					position: relative;
					width: fit-content;
					.idkman {
						position: absolute;
						bottom: 0;
						z-index: -1;
						width: 105%;
					}
				}
			}

			p {
				margin-top: to_rem(86);
				font-family: 'Panchang', sans-serif;
				font-size: 1.8rem;
				margin-left: -0.2rem;
				width: 25ch;
				letter-spacing: 0.08rem;
			}
		}
		.img-wrapper {
			height: 100%;
			width: max(74vw, 48rem);
			overflow: hidden;
			position: absolute;
			right: 0;
			top: 0;
			img {
				border-top-left-radius: 34rem;
				height: 100%;
				width: 100%;
				object-fit: cover;
				object-position: 0% 3%;
			}
		}
	}
</style>
