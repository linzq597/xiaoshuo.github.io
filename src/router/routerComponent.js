class RouterComponent{
	constructor() {}
	Classify(r){
		return require(['../views/Classify'],r)
	}
	Bookrack(r){
		return require(['../views/Bookrack'],r)
	}
	Search(r){
		return require(['../views/Search'],r)
	}
	Ranking(r){
		return require(['../views/Ranking'],r)
	}
	Detail(r){
		return require(['../views/Detail'],r)
	}
	Bookdetails(r){
		return require(['../views/Bookdetails'],r)
	}
	Catalog(r){
		return require(['../views/Catalog'],r)
	}
	Contentbook(r){
		return require(['../views/Contentbook'],r)
	}
	Totallist(r){
		return require(['../views/Totallist'],r)
	}
}
export default new RouterComponent();