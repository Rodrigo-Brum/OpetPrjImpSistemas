<template>
	<div id="app">
		 <router-view></router-view>
	</div>
</template>

<script>

export default {
	name: "App",
}
</script>

<style>
	* {
		font-family: "Lato", sans-serif;
	}

	body {
		margin: 0;
		background: rgb(6,109,171);
		background: -moz-linear-gradient(-45deg,  rgba(6,109,171,1) 0%, rgba(138,187,215,1) 69%, rgba(197,222,234,1) 100%);
		background: -webkit-linear-gradient(-45deg,  rgba(6,109,171,1) 0%,rgba(138,187,215,1) 69%,rgba(197,222,234,1) 100%); 
		background: linear-gradient(135deg,  rgba(6,109,171,1) 0%,rgba(138,187,215,1) 69%,rgba(197,222,234,1) 100%);
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#066dab', endColorstr='#c5deea',GradientType=1 );
	}
</style>