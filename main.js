var vm = require('vm');
var fs = require('fs');
var converter = require('./converter.js');

var num = 10;

console.log( "BIN:" + converter.bin(num)+ " HEX:" + converter.hex(num));
var person = new converter.person("ram",10);

console.log("Name:" + person.getName());
person.setName("sam");
console.log("Name:" + person.getName());

// load the script file
var script_code = fs.readFileSync('./script.js');

var name = 'Sparrow';
var age = 195;
var pets = [{"name": "Kiddo", "species": "cat"}, {"name": "Kaka", "species":"crow"}, {"name": "Evul", "species": "monkey"}];

// this object will be passed to the vm context, the keys will become available as global variables in the context
var sandbox = { "module": module, "name": name, "age": age, "pets": pets, "result": false };
// create a script out of the loaded string - the script is compiled
var script = vm.createScript(script_code);
// execute the script in the context of `sandbox`, which becomes its global object
script.runInNewContext(sandbox);

console.log(sandbox.result);