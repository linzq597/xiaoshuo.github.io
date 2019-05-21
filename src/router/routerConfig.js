import routerComponent from './routerComponent.js';

export default[
	{
		path:'/',
		name:'home',
		component:routerComponent.Home,
		
		children:[
			
		]
	},
	{
		path:'about',
		name:'about',
		component:routerComponent.About,
	}
]