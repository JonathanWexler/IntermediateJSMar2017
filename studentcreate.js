"use strict";

let studentPrototype = {
    name: "Unspecified",
    gpa: 0.0,
    toString: function() {
        return "Student { name = " + this.name + ", gpa = " + this.gpa +
                " courses = " + this.courses + " }";
    }
};

function makeStudent(name, gpa, ...courses) {
    let self = Object.create(studentPrototype);
    if (name !== undefined) {
        self.name = name;
    }
    if (gpa !== undefined) {
        self.gpa = Number(gpa);
    }
    self.courses = courses;
    return self;
};

let school = [];
school.push(makeStudent("Fred", 3.2, "Math", "Physics", "Chemistry"));
school.push(makeStudent("Jim", 2.9, "Art History", "Philosophy"));
school.push(makeStudent("Sheila", 3.9, "Engineering", "Electronics", "Astronomy", "Astrophysics"));

console.log("School: " + school);

function byGpa(a,b) {
    return a.gpa - b.gpa;
}

console.log("By gpa: " + school.sort(byGpa));


