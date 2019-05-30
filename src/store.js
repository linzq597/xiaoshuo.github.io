import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		classifiCation: {},
		// Classifyres:null
	},
	mutations: {
		updateClassifiCation: function(state, id,name) {
			state.classifiCation.id = id
			state.classifiCation.name = name
		},
	},
	actions: {
		
	},	
	getters:{
		
	}
})
