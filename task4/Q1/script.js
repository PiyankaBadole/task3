var person = [{
    "id" : "01", 
    "name" : "abc",
    "mail": "abc@gmail.com"
},
{
    "id" : "02", 
     "name" : "pqr",
    "mail": "pqr@gmail.com"
}];
console.log("*******for*******");
for(var i = 0; i < person.length; i++) {
   
    var obj = person[i];

    console.log(obj.id);
    console.log(obj.name);
    console.log(obj.mail);



}


    console.log("*******for in*******");
for (var key in person) {

  console.log(person[key].id);
  console.log(person[key].name);
  console.log(person[key].mail);
}
console.log("*******for of*******");
let text = "";
for (let x of person) {
 text += 
 `
 ${x.id}
 ${x.name} 
 ${x.mail}
 `  ; 
}
 console.log(text);


 console.log("*******for Each*******");
 person.forEach(function(i) { console.log(i.id);
     console.log(i.name);
     console.log(i.mail); });
