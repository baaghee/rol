var chai = require('chai');
var expect = chai.expect;
var mongoose = require("mongoose");

var Types = require("../lib/cms/Types")

chai.should();

describe('Database', function(){
	it('#must have mongodb', function(){
		require('mongoose');
	});
});

describe('Data Types',function(){
    //common to all datatypes
    it("must exist", function(){
        expect(Types).to.exist;
    });
    describe("server", function(){
        it("#must exist", function(){
            for(var Type in Types) {
                var type = Types[Type];
                expect(type.server).to.exist
            }
        });
        it("should have a valid mongoose schema type", function(){
            for(var Type in Types) {
                var type = Types[Type];
                var schema = type.server.schema;
                expect(schema).to.exist;
                new mongoose.Schema({ name: schema }); 
            }
        });
    });
    describe("client", function(){
        describe("element", function(){
            it("must exist", function(){
                for(var Type in Types) {
                    var type = Types[Type];
                    expect(type.client).to.exist
                }
            });
            it("should have options as first argument", function(){
            });
            it("must return a valid html markup string", function(){
            });
        });
        
        describe("render", function(){
            it("should exist");
            it("should have valid html markup string as first argument")
            it("should have json data as second element")
            it("should return a DOM element")
        });
        
        describe("serialize", function(){
            it("should return a valid string or an object");
        });
    });
    
    /**
     ** String
     **
     */
     describe("Text", function(){
        describe("options", function(){
            it("must have ")
        });
     });
});

describe("Client", function(){
	it("generates client file");
});

describe('Data Source', function(){
	it('#must create data source');
	it('#must create different kinds of data source');
	it('#must have a category property');
	it('#must contain at least one field');
	it('#should update');
	it('#should delete');
});
