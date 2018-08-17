let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
 
 function print1(obj){
   var listnames = [];
   for(i=0; i<obj.length; i++){
     listnames.push("Name: "+obj[i]['name']+", Cohort: "+obj[i]['cohort']);
   }console.log(listnames);
 }
 
 print1(students);
 
 
 function print2(){
    for (var group in users) {
        console.log(group)
        for (var i = 0; i < users[group].length; i++) { //users["students"] -> users.students
            console.log(`${i} - ${users[group][i].last_name}, ${users[group][i].first_name} `)
        }
    }
}
print2();