
exports.text = {
    options:{//default options
        richText:false,
        multi:false,
    },
	server:{
		schema:'string',
		properties:{},
	},
	client: {
	    class:"cms-text",
	    element:function(options){ //build element html
	        return "<input type='text' />";
	    },
	    render: function(element, data){
	        //return rendered element
	    },
	    serialize:function(element){ 
	        //populate data
	    }
	}
}

/*,
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
	reference:'objectid'*/


//sample file
var a = {
    description: {
        type:"string",
        options:{
            rte:false,
            multi:true,
        }
    }
}

//generates cms.js

(function($, window){
	if(!window.cms){
		window.cms = {};
	}
	var cms = window.cms;
})(jQuery, window)
