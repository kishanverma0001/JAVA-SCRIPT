let student = {
    name: "kishan",
    rollno: "24UADS1025",
    class: "final year",
    course: "AI & Ds",
    Degree: "B.Tech"
};

let teacher = {
    id: "t1234",
    subject: "ML",
    salary: 100000,
    post: "professor",
    experience: "10 years"
};

let college = {
    ...student,
    ...teacher
};
console.log(college);