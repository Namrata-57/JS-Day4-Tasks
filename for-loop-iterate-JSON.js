// 1. For the given JSON iterate over all for loops (for, for in, for of, forEach)

var data = [{
    "firstname" : "John", 
    "lastname" : "Doe",
    "age"   : "40",
    "gender" : "Male",
    "email": "johndeao9@gmail.com"
},
{
    "firstname" : "Rylin", 
    "lastname" : "Winget",
    "age"   : "25",
    "gender" : "Female",
    "email": "rylinj6@gmail.com"
}];

//for loop
for(var i = 0; i < data.length; i++) {
    var obj = data[i];

    console.log(obj.firstname);
    console.log(obj.lastname)
}

//for in loop
for(var i in data){
    var obj1 = data[i];

    console.log(data[i].age);
    console.log(data[i].email); 
}

//for of loop
for (const key of data) {
    console.log(key.firstname);
    console.log(key.email);
  }

// forEach loop
data.forEach(function(object){
    console.log(object.gender);
    console.log(object.age);
})