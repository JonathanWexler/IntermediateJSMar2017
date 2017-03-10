"use strict";
function Student(name, gpa, ...courses) {
    if (name !== undefined) {
        this.name = name;
    }
    if (gpa !== undefined) {
        this.gpa = Number(gpa);
    }
    this.courses = courses;
}
;
Student.prototype = {
    name: "Unspecified",
    gpa: 0.0,
    // DO NOT USE LAMBDAS for member functions!
//    toString: () => "Student { name = " + this.name + ", gpa = " + this.gpa +
//                " courses = " + this.courses + " }",
    toString: function () {
        return "Student { name = " + this.name + ", gpa = " + this.gpa +
                " courses = " + this.courses + " }";
    },
    getSmartnessCriterion: function () {
        let self = this;
        return function (s) {
            return s.gpa > self.gpa;
        };
    },
    getEnthusiasmCriterion: function() {
        return (s) => s.courses.length > this.courses.length;
    }
};

let school = [];
school.push(new Student("Fred", 3.2, "Math", "Physics", "Chemistry"));
school.push(new Student("Jim", 2.9, "Art History", "Philosophy"));
school.push(new Student("Sheila", 3.9, "Engineering", "Electronics", "Astronomy", "Astrophysics"));
school.push(new Student("Teresa", 3.6, "Electronics", "Astronomy"));
school.push(new Student("Tony", 2.9, "Astronomy", "Astrophysics", "Engineering"));

function byGpa(a, b) {
    return a.gpa - b.gpa;
}

function getByCriterion(students, criterion) {
    let rv = [];
    for (let s of students) {
        if (criterion(s)) {
            rv.push(s);
        }
    }
    return rv;
}

//let studentIsSmart = function (s) {
//    return s.gpa > 3.0;
//};

//let studentIsSmart = (s) => {
//    return s.gpa > 3.0;
//};
let studentIsSmart = s => s.gpa > 3.0;

function studentIsEnthusiastic(s) {
    return s.courses.length > 3;
}

function studentNameFirstHalf(s) {
    return s.name.substring(0, 1) < "M";
}

function getEnthusiasmCriterion(threshold) {
    return function (s) {
        return s.courses.length > threshold;
    };
}

function and(testOne, testTwo) {
    return function (s) {
        return testOne(s) && testTwo(s);
    };
}

function or(testOne, testTwo) {
    return function (s) {
        return testOne(s) || testTwo(s);
    };
}

function not(testOne) {
    return function (s) {
        return !testOne(s);
    };
}

let smarterThanThree = school[0].getSmartnessCriterion();
console.log("Smart students: " + getByCriterion(school, smarterThanThree));
console.log("--------------------------------");

console.log("Enthusiastic students: " + getByCriterion(school, s => s.courses.length > 3));
console.log("--------------------------------");

let moreEnthusiasticThanMe = school[0].getEnthusiasmCriterion();
console.log("Smart students: " + getByCriterion(school, moreEnthusiasticThanMe));
console.log("--------------------------------");
