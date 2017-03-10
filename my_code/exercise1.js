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

Student.prototype = {
  getName: function () {
    let self  = this;
    return function(s) {
      s.name[0] > self.name[0];
    }
  },
  getSmarter: function (s) {
    return this.gpa > s.gpa;
  },
  getEnthusiasmCriterion: function() {
    return (s) => s.courses.length > this.courses.length;
  }
}

function getEnthusiasmCriterion(threshold) {
  return function (s) {
    return s.courses.length > threshold;
  };
}

let school  = []

school.push(new Student("Jon", 3.5, "Math", "Science"));
school.push(new Student("James", 2.5, "Bio", "Art"));
school.push(new Student("Steph", 1.5, "Bio", "Art"));
school.push(new Student("Amy", 4.0, "Bio", "Art"));

let moreEnthusiasticThanMe = school[0].getEnthusiasmCriterion();
console.log("Smart students: " + getByCriterion(school, moreEnthusiasticThanMe));
console.log("--------------------------------");

function getByCriterion(students, criterion) {
  let rv = [];
  for (let s of students) {
    if (criterion(s)) {
      rv.push(s);
    }
  }
  return rv;
}

// console.log(s1.getSmarter(s2));
console.log(getByCriterion(school, school[0].getName()));
