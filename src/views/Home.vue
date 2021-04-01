<template>
	<div>
		<div class="my-5">
			<h1>Every Color That You Need It :*</h1>
			you made {{paletteCount}}
		</div>
		<Palettes />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Palettes from '../components/Palettes.vue';
export default {
	name: "Home",
	components: {
		Palettes,
	},
    computed :{
      ...mapGetters([
        'paletteCount',
      ])
    },
};
</script>
