var chai = require('chai');
var expect = chai.expect;
chai.should();

describe('Database', function(){
	it('#must have mongodb', function(){
		require('mongoose');
	});
});

describe('connection', function(){
	it('#must establish a connection', function(){
	
	});
});

describe('Data Source', function(){
	it('#must create data source');
	it('#must create different kinds of data source');
	it('#must have a category property');
	it('#must contain at least one field');
	it('#should update');
	it('#should delete');
});
