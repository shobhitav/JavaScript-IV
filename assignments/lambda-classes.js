// CODE here for your Lambda Classes
class Person{
    constructor(attr){
this.name=attr.name;
 this.age=attr.age;
this.location=attr.location;
this.gender=attr.gender;
}
speak(){
return `Hello my name is ${this.name},I am from ${this.location}`
}
}


class Instructor extends Person{
    constructor(instructorattr){
    super(instructorattr)
this.speciality=instructorattr.speciality;
this.favLanguage=instructorattr.favLanguage;
this.catchPhrase=`Don't Forget the homies.`;
    }
demo(subject){
    return `Today we are learning about the ${subject}`
}
grade(studentattr,subject){
    return `${studentattr.name} recieves a perfect score of the subject ${subject}`;
}
}


class Student extends Person{
    constructor(studentattr){
    super(studentattr)
this.previousBackground=studentattr.previousBackground;
this.className=studentattr.className;
this.favSubjects=studentattr.favSubjects;

    }
//     listsSubjects(){
//     return `Today we are learning about the ${subject}`
// }
PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`;
}
sprintChallenge(){
    return `${this.name} has begun sprint challenge on ${subject}`;
}
}

class ProjectManager extends Instructor{
    constructor(pmattr){
    super(pmattr)

this.gradClassName=pmattr.gradClassName;
this.favInstructor=pmattr.favInstructor;

    }

standUp(slackchannel){
    return `${this.name} announces to ${slackchannel}, @channel standy times!​​​​​`;
}
debugsCode(studentattr,subject){
    return `${this.name} debugs ${studentattr.name}'s code  ${subject}`;
}
}
const wilma= new Person({
    name:'Wilma',
    age: 32,
    location: 'Boston',
    gender: 'female'

});

const fred = new Instructor({
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'React',
    catchPhrase: `Don't forget the homies`
  });


  const mary = new Student({
    name: 'Mary',
    age: 18,
    location: 'LA',
    gender: 'female',
    favLanguage: 'JavaScript',
    previousBackground: 'Engineering',
    className:'CS3',
   favSubjects: ['Economics','CS','Politics']
  });

  const john = new ProjectManager({
    name: 'John',
    age: 18,
    location: 'Chicago',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName:'CS125',
    favInstructor:'Josh'
  });
  

  console.log(wilma.speak());
 
  console.log(mary.PRAssignment('javascript'));
  console.log(john.standUp('CS4slack'));
  console.log(john.debugsCode(mary,'CSS'));
  console.log(fred.demo('java'));
  console.log(fred.grade(mary,'java'))
  console.log(fred.catchPhrase);