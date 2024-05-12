var Student = /** @class */ (function () {
    function Student(name, birthdate, phone, city, school, group) {
        this.Name = name;
        this.BirthDate = birthdate;
        this.Phone = phone;
        this.City = city;
        this.School = school;
        this.Group = group;
    }
    Student.prototype.SetName = function (a) {
        this.Name = a;
    };
    Student.prototype.GetName = function () {
        return this.Name;
    };
    Student.prototype.SetBirthDate = function (a) {
        this.BirthDate = a;
    };
    Student.prototype.GetBirthDate = function () {
        return this.BirthDate;
    };
    Student.prototype.SetPhone = function (a) {
        this.Phone = a;
    };
    Student.prototype.GetPhone = function () {
        return this.Phone;
    };
    Student.prototype.SetCity = function (a) {
        this.City = a;
    };
    Student.prototype.GetCity = function () {
        return this.City;
    };
    Student.prototype.SetSchool = function (a) {
        this.School = a;
    };
    Student.prototype.GetSchool = function () {
        return this.School;
    };
    Student.prototype.SetGroup = function (a) {
        this.Group = a;
    };
    Student.prototype.GetGroup = function () {
        return this.Group;
    };
    Student.prototype.Table = function (students) {
        var table = document.createElement("table");
        students.forEach(function (student) {
            var row = table.insertRow();
            Object.values(student).forEach(function (value) {
                var cell = row.insertCell();
                cell.textContent = String(value);
            });
        });
        document.body.appendChild(table);
    };
    return Student;
}());
var student = new Student('a', 'a', 12, 'a', 'a', 2);
var student2 = new Student('b', 'b', 12, 'b', 'b', 2);
var student3 = new Student('c', 'c', 12, 'c', 'c', 2);
var students = [student, student2, student3];
var table = document.createElement("table");
students.forEach(function (student) {
    var row = table.insertRow();
    Object.values(student).forEach(function (value) {
        var cell = row.insertCell();
        cell.textContent = String(value);
    });
});
document.body.appendChild(table);
