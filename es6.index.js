export default{
	install(Vue){
		const padStart  = (value, length, char)=>{
			value = value + '';
			let len = length - value.length;

			if(len <= 0){
				return value
			}else{

				return Array(len + 1).join(char) + value
			}
		}

		Vue.filter('date', (date, format)=>{
			let _date = date;
			let splitArr = format.split(/(YYYY|MM|DD|hh|mm|ss)+/)
			
			if(typeof date != 'object'){
				_date = new Date(date)
			}

			return  splitArr.map(item=>{

				if(item == 'YYYY') {
					return _date.getUTCFullYear();
				}

				if(item == 'MM'){
					return padStart(_date.getUTCMonth() + 1, 2, 0)
				}

				if(item == 'DD'){
					return padStart(_date.getUTCDate(), 2, 0)
				}

				if(item == 'hh'){
					return padStart(_date.getUTCHours(), 2, 0)
					
				}
				if(item == 'mm'){
					return padStart(_date.getUTCMinutes(), 2, 0)
					
				}
				if(item == 'ss'){
					return padStart(_date.getUTCSeconds(), 2, 0)
				}

				return item
			}).join('')
		})
	}
}
