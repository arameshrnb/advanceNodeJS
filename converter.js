exports.bin = function(input){
    return input.toString(2);
}

exports.hex = function(input) {
    return input.toString(16);
}

exports.person = function(name,age) {
    this.name = name;
    this.age = age;
    
    this.getName = function()  { 
        return name;
    }
    
    this.setName = function (sn) {
        name = sn;
    }
}