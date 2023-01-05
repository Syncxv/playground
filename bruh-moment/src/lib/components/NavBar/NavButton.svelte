<div class="btn-wrapper">
	<button class="button-one" aria-controls="primary-navigation" aria-expanded="false">
		<svg fill="var(--button-color)" class="hamburger" viewBox="0 0 100 100" width="50">
			<rect class="line top" width="80" height="1.5" x="10" y="30" rx="5" />
			<rect class="line middle" width="80" height="1.5" x="10" y="50" rx="5" />
			<rect class="line bottom" width="80" height="1.5" x="10" y="70" rx="5" />
		</svg>
	</button>
</div>

<style lang="scss">
	@import '../../scss/base/util';
	.btn-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: to_rem(200);
		height: to_rem(200);
		button {
			/* padding: to_rem(87) to_rem(75); */
			background-color: transparent;
			border: none;
			cursor: pointer;
		}
	}
</style>
