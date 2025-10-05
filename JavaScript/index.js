// input total number of subjects from user
let totalNoSubjects = Number(prompt("Enter Total Number of Subjects")); 

alert("Please enter the mark out of 100")

//Input marks of n subjects using for loop
let subjects = [];
for(i=0;i<totalNoSubjects;i++){
    let sub = i+1;
    subjects[i]= Number(prompt("Enter the mark of subject "+ sub + "/" + totalNoSubjects + " : "));
}

//find the total marks using adding elements in the array
let totalMarks = 0;
for(i=0; i<totalNoSubjects; i++){
    totalMarks += subjects[i];
}

// find the average of n marks
let averageMarks = 0;
averageMarks =totalMarks/totalNoSubjects;

// calculate grade based on marks
let grade ;

if(averageMarks >= 90){
    grade = "A+";
}else if(averageMarks >= 80){
    grade = "A"
}else if(averageMarks >= 70){
    grade = "B"
}else if(averageMarks >= 60){
    grade = "C"
}else if(averageMarks >= 50){
    grade = "D"
}else{
    grade = "F"
}


// display Total marks, Average marks and grade using alert function

alert(" Total Marks : " + totalMarks +" | Average Marks : "+ averageMarks + " | Grade : "+grade);
