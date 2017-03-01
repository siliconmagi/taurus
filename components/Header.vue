<template>
	<header>
		<nav class="header">
			<nuxt-link class="logobutton" to="/">
				<img src="../assets/img/atar.svg" alt="Nightshell Logo" class="logo" width="23px"/>
			</nuxt-link>
			<nuxt-link class="button" to="/">
				Home
			</nuxt-link>
			<nuxt-link class="button" to="/blog">
				Blog
			</nuxt-link>
			<nuxt-link class="button" to="/about">
				About
			</nuxt-link>
		</nav>
	</header>
</template>

<style scoped>
.header
{
	list-style: none;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	flex-flow: row wrap;
	align-content: flex-end;
	padding: 0;
	margin: 0;
	background: #660033;
}

</style>
