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
school.push(new Student("Teresa", 3.6, "Electronics", "Astronomy"));
school.push(new Student("Tony", 2.9, "Astronomy", "Astrophysics", "Engineering"));

console.log("School: " + school);

function byGpa(a,b) {
    return a.gpa - b.gpa;
}

console.log("By gpa: " + school.sort(byGpa));

function getByCriterion(students, criterion) {
    let rv = [];
    for (let s of students) {
        if (criterion(s)) {
            rv.push(s);
        }
    }
    return rv;
}

let studentIsSmart = function (s) {
    return s.gpa > 3.0;
};

function studentIsEnthusiastic(s) {
    return s.courses.length > 3;
}

function studentNameFirstHalf(s) {
    return s.name.substring(0, 1) < "M"; 
}

function getEnthusiasmCriterion(threshold) {
    return function(s) {
        return s.courses.length > threshold;
    };
}

function getSmartnessCriterion(threshold) {
    return function(s) {
        return s.gpa > threshold;
    };
}

let smarterThanThree = getSmartnessCriterion(3);
console.log("Smart students: " + getByCriterion(school, smarterThanThree));
console.log("--------------------------------")
let enthusiastic = getEnthusiasmCriterion(2);
console.log("Smart students: " + getByCriterion(school, enthusiastic));
console.log("--------------------------------")

function and(testOne, testTwo) {
    return function(s) {
        return testOne(s) && testTwo(s);
    }
}
console.log("Smart and enthusiastic students: " + getByCriterion(school, and(enthusiastic, smarterThanThree)));


//console.log("Smart students: " + getByCriterion(school, studentIsSmart));
//console.log("Enthusiastic students: " + getByCriterion(school, studentIsEnthusiastic));
//console.log("first half students: " + getByCriterion(school, studentNameFirstHalf));

//function getSmartStudents(students, threshold) {
//    let rv = [];
//    for (let s of students) {
//        if (s.gpa > threshold) {
//            rv.push(s);
//        }
//    }
//    return rv;
//}
//
//function getEnthusiasticStudents(students, threshold) {
//    let rv = [];
//    for (let s of students) {
//        if (s.courses.length > threshold) {
//            rv.push(s);
//        }
//    }
//    return rv;
//}
//getSmartStudents(school[0]);

//console.log("Smart students: " + getSmartStudents(school, 3.5));
//console.log("Enthusiastic students: " + getEnthusiasticStudents(school, 2));

