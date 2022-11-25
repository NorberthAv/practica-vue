<template>
  <div id="app">
	<carousel :settings="settings" :autoplay="3000" :breakpoints="breakpoints">
		<slide v-for="slide in contenido" :key="slide">
			
			<div :class="slide.class+' carousel__item'"> 
				<div class="filtro">
				<h2>{{ slide.titulo}}&nbsp;</h2>
				<br>
				<p>{{ slide.contenido }}&nbsp;</p>
				</div>
			</div>

		</slide>

		<template #addons>
			<navigation />
      		<pagination/>
		</template>
	</carousel>
</div>

</template>
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {

  name: 'Autoplay',
  name: 'App',
	components: {
		Carousel,
		Pagination,
		Navigation,
		Slide
	},
	setup() {
		const contenido =[
		
		{
			class:'slider1',
			titulo:'Slider 1',
			contenido:'Imformacion importante1',
		},
		{
			class:'slider2',
			titulo:'Slider 2',
			contenido:'Imformacion importante2',
			
		},
		{
			class:'slider3',
			titulo:'Slider 3',
			contenido:'Imformacion importante3',
			
		},
		{
			class:'slider4',
			titulo:'Slider 4',
			contenido:'Imformacion importante4',
			
		},
		{
			class:'slider5',
			titulo:'Slider 5',
			contenido:'Imformacion importante5',
			
		},
	]


		return {
			contenido,
			// carousel settings
			settings: {
				itemsToShow: 1,
				snapAlign: "center"
			},
			// breakpoints are mobile first
			// any settings not specified will fallback to the carousel settings
			breakpoints: {
				// 700px and up
				700: {
					itemsToShow: 3.5,
					snapAlign: "center"
				},
				// 1024 and up
				1024: {
					itemsToShow: 1,
					snapAlign: "start"
				}
			}
		};
	}
};

</script>
<style scoped>
.slider1{
	background-image: url('../assets/img/fondo1.jpg');
}
.slider2{
	background-image: url('../assets/img/fondo2.jpg');
}
.slider3{
	background-image: url('../assets/img/fondo3.jpg');
}
.slider4{
 	background-image: url('../assets/img/fondo4.jpg');
}
.slider5{
	background-image: url('../assets/img/fondo5.jpg');	
}
body {
	padding: 20px;
}
.filtro{
	padding: 10%;
	background: rgba(0, 0, 0, 0.4);
	position: absolute;
	height: 100%;
	width: 100%;
}

.carousel__item {
	
	background-repeat: no-repeat;
	background-size: cover;
	min-height: 300px;
	width: 100%;
	color: white;
	font-size: 20px;
	border-radius: 8px;
	justify-content: center;
	/* filter: brightness(0.8); */
	align-items: center;
	
}
.carousel__item  p {
	filter: brightness(1);
}
.carousel__item  h2 {
	filter: brightness(1);
}

.carousel__slide {
	padding: 10px;
}

.carousel__prev,
.carousel__next {
	background-color: #ffffff;
}

</style>

  



