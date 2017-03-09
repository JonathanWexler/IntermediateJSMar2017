"use strict";

function Student(name, gpa, ...courses) {
    if (name !== undefined) {
        this.name = name;
    }
    if (gpa !== undefined) {
        this.gpa = Number(gpa);
    }
    this.courses = courses;
};
Student.prototype = {
    name: "Unspecified",
    gpa: 0.0,
    toString: function() {
        return "Student { name = " + this.name + ", gpa = " + this.gpa +
                " courses = " + this.courses + " }";
    }
};

let school = [];
school.push(new Student("Fred", 3.2, "Math", "Physics", "Chemistry"));
school.push(new Student("Jim", 2.9, "Art History", "Philosophy"));
school.push(new Student("Sheila", 3.9, "Engineering", "Electronics", "Astronomy", "Astrophysics"));

console.log("School: " + school);

function byGpa(a,b) {
    return a.gpa - b.gpa;
}

console.log("By gpa: " + school.sort(byGpa));


