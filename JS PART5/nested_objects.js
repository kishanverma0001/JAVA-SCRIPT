const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    shradha: {
        grade: "A",
        city: "Pune"
    },
    karan: {
        grade: "O",
        city: "Mumbai"
    }
};
console.log(classInfo);
console.log(classInfo.shradha);
console.log(classInfo.aman.city);
classInfo.aman.city = "Gurugram";
console.log(classInfo);
