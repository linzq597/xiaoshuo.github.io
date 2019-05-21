class RouterComponent{
	constructor() {}
	About(r){
		return require(['../views/About'],r)
	}
	Home(r){
		return require(['../views/Home'],r)
	}
}
export default new RouterComponent();