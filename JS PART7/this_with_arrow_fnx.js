const student = {
    name: "kishan",
    marks: 95,
    pop: this, // global scope
    getName: function() {
        console.log(this); // student object 
        return this.name; // parent's scope
    },
    getMarks: () => {
        console.log(this); // parent's scope --> global scope
        return this.marks; // undefined
    },
    getInfo1: function(){
        setTimeout( () => {
            console.log(this); // student
        }, 2000);
    },
    getInfo2: function(){
        setTimeout( function (){
            console.log(this); // window
        }, 2000);
    }
};

console.log(student);
console.log(student.getName());
console.log(student.getMarks ());
student.getInfo1();
student.getInfo2();