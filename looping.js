//for loop
var obj = [
    { "name": "Kaviya", "profession": "nurse" },
    { "name": "swathi", "profession": "engineer" },
    { "name": "raju", "profession":"doctor" }
];
for (let i = 0; i < obj.length; i++) {
   
   console.log(JSON.stringify(obj));
  }

  //for...of loop
  var profile = [
    { "name": "Kaviya", "profession": "nurse" },
    { "name": "swathi", "profession": "engineer" },
    { "name": "raju", "profession":"doctor" }
];
for(var job of profile)
{
    console.log(JSON.stringify(job.name));
}

//for...in loop
var profile = [
    { "name": "Kaviya", "profession": "nurse" },
    { "name": "swathi", "profession": "engineer" },
    { "name": "raju", "profession":"doctor" }
];
for(var key in profile)
{
    console.log(JSON.stringify(profile[key]));
}

//forEach loop
var profile = [
    { "name": "Kaviya", "profession": "nurse" },
    { "name": "swathi", "profession": "engineer" },
    { "name": "raju", "profession":"doctor" }
];
profile.forEach(job => console.log(JSON.stringify(job)));

