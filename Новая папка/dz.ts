class Student{
    private Name: string;
    private BirthDate: string;
    private Phone: number
    private City: string;
    private School: string;
    private Group: number;

    constructor(name:string, birthdate:string, phone:number,city:string,school:string,group:number)
    {
        this.Name = name;
        this.BirthDate = birthdate;
        this.Phone = phone;
        this.City = city;
        this.School = school;
        this.Group = group;
    }

    public SetName(a: string)
    {
        this.Name = a;
    }
    public GetName()
    {
        return this.Name;
    }
    public SetBirthDate(a: string)
    {
        this.BirthDate = a;
    }
    public GetBirthDate()
    {
        return this.BirthDate;
    }
    public SetPhone(a:number)
    {
        this.Phone = a;
    }
    public GetPhone()
    {
        return this.Phone;
    }
    public SetCity(a:string)
    {
        this.City = a;
    }
    public GetCity()
    {
        return this.City;
    }
    public SetSchool(a:string)
    {
        this.School = a;
    }
    public GetSchool()
    {
        return this.School;
    }
    public SetGroup(a:number)
    {
        this.Group = a;
    }
    public GetGroup()
    {
        return this.Group;
    }

    public Table(students: Student[]) {
        const table = document.createElement("table");

        students.forEach(student=>{
            const row = table.insertRow();
            Object.values(student).forEach(value=>{
                const cell = row.insertCell();
                cell.textContent = String(value);
            });
        });
        document.body.appendChild(table);
    }
}

console.log(1);

let student: Student = new Student('a','a',12,'a','a',2);
let student2: Student = new Student('b','b',12,'b','b',2);
let student3: Student = new Student('c','c',12,'c','c',2);

let students: Student[] = [student, student2, student3];

const table = document.createElement("table");

        students.forEach(student=>{
            const row = table.insertRow();
            Object.values(student).forEach(value=>{
                const cell = row.insertCell();
                cell.textContent = String(value);
            });
        });
document.body.appendChild(table);

console.log(1);
