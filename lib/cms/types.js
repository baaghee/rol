exports = {
	string:{
		schema:'string',
		properties:{
		
		}
	},
	string_thaana:'string',
	table:{
		columns:{type:'array'},
		rows:{type:'array'}
	},
	image:{
		schema:'string',
		properties:{
			crop:function(w,h){
				
			}
		}
	},
	images:'array',
	select:{id:'objectid', name:'string'},
	file:'string',
	boolean:'boolean',
	reference:'objectid'
}
