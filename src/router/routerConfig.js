import routerComponent from './routerComponent.js';

export default[
	{ 
		path: '/', 
		redirect:'/bookrack',
	},
	{
		path:'/bookrack',
		name:'bookrack',
		component:routerComponent.Bookrack,
		 meta: {
		  isShow:true,
		  isArrowShow:false
		},
		children:[
			
		]
	},
	{
		path:'/classify',
		name:'classify',
		component:routerComponent.Classify,
		 meta: {
		  isShow:true,
		  isArrowShow:false
		},
	},
	{
		path:'/ranking',
		name:'ranking',
		component:routerComponent.Ranking,
		 meta: {
		  isShow:true,
		  isArrowShow:false
		},
	},
	{
		path:'/search',
		name:'search',
		component:routerComponent.Search,
		 meta: {
		  isShow:true,
		  isArrowShow:false
		},
	},
	{
		path:'/detail/:a',
		name:'detail',
		component:routerComponent.Detail,
		 meta: {
		  isShow:true,
		  isArrowShow:false
		},
	},
	{
		path:'/bookdetails/:id',
		name:'bookdetails',
		component:routerComponent.Bookdetails,
		 meta: {
		  isShow:true,
		  isArrowShow:false
		},
	},
	{
		path:'/catalog/:id',
		name:'catalog',
		component:routerComponent.Catalog,
		 meta: {
		  isShow:true,
		  isArrowShow:false
		},
	},
	{
		path:'/contentbook/:id',
		name:'contentbook',
		component:routerComponent.Contentbook,
		 meta: {
		  isShow:false,
		  isArrowShow:true
		},
	},
	{
		path:'/totallist',
		name:'totallist',
		component:routerComponent.Totallist,
		 meta: {
		  isShow:true,
		  isArrowShow:false
		},
	}
]