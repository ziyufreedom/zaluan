
/*

  当前函数功能：将任何类型的某个数值转化为数组

  传入参数，将其他类型的参数转化为数组，传入数组则返回数组，只接受一个参数

  功能要点：用...args将参数直接转化为数组
*/
function castArray(...args){
	//当没有参数传过来的时候args是一个空数组，有参数传过来的时候只取第一个参数
	//没传参数的时候args[0]是undefined，传undefined过来的时候args[0]也是undefined
	//但是没传参数的时候args是一个空数组，传undefined过来的时候arg是[undefined]
	
	//如果没有参数传过来就返回空数组
	if(!args.length) {
		return [];
	}
	//我们需要的参数只是第一个参数
	let firstArg = args[0]

	//判断如果参数是数组，则按原来返回
	return Array.isArray(firstArg) ?  firstArg : [firstArg]
}



// export default castArray