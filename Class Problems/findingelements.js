// JSON JavaScript Object Notation
//Given a array of student objects 
// 0. Find a student whose name is Aravind.
// 1. Find the eldest student
// 2. Find the students whose physics score is more than 80
// 3. Count the number of students whose total average is more than 70. 
let array_student_obj 
 = [{name:"Aravind",
	 age:19,
	 salary: 10000, 
	 marks:{
			maths:80, 
			physics: 78, 
			chemistry:90
		}
	 },
	 {name:"Parameshwari",
	 age:18,
	 salary: 10000, 
	 marks:{
			maths:95, 
			physics: 95, 
			chemistry:89
		}
	 },
	 {name:"Barath",
	 age:21,
	 salary: 10000, 
	 marks:{
			maths:76, 
			physics: 81, 
			chemistry:76
		}
	 },{name:"Saran",
	 age:22,
	 salary: 10000, 
	 marks:{
			maths:67, 
			physics: 51, 
			chemistry:39
		}
	 }];

//Hints: 
//  console.log(array_student_obj[3].salary);
// let i=1;
//  console.log(array_student_obj[i].name=="Nanda");

// Find a student whose name is Aravind.

// let stu_name = "Aravind";
// let j = false; 
// for(let student of array_student_obj ){
//     if (student.name == stu_name) {
//         j = true;
//     }
// }

// if(j){
//     console.log("There is one student match with this name" , stu_name);
// }
// else{
//     console.log("There is no student match with this name" , stu_name);
// }

// Find the eldest student
// let max = array_student_obj[0].age 
// let stu_name;
// for(let student of array_student_obj ){
//     if (student.age > max) {
//         max = student.age;
//         stu_name = student.name
//     }
// }
// console.log(`${stu_name} is the elderer whose age is ${max}`);

// Find the students whose physics score is more than 80

// for (let i = 0; i < array_student_obj.length; i++) {
//     if(array_student_obj[i].marks.physics >= 80){
//         console.log(`${array_student_obj[i].name } scored more than 80 in physics`);
//     }
    
// }

// Count the number of students whose total average is more than 70. 

// for(let i = 0; i < array_student_obj.length; i++){
//     let physicsmark = array_student_obj[i].marks.physics;
//     let mathsmark = array_student_obj[i].marks.maths;
//     let chemistrymark = array_student_obj[i].marks.chemistry;
//     let total = physicsmark + mathsmark + chemistrymark;
//     if(total / 3 >= 70){
//         console.log(array_student_obj[i].name, "whose total average is more than 70");
//     }
// }
