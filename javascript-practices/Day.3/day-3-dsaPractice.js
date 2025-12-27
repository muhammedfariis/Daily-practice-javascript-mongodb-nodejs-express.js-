// day-3
// arrays and objects and manipulation

let student = [
    "faris",
    "jasim",
    "kane",
    "robert",
    "kanedy"
]


student[1] = "roberto"
student.push("messi")
student.pop()
student.unshift("lewendowski")
student.shift()
student.splice(1,1)
console.log(student);


const students = [
  {
    id: 1,
    name: "Ayaan",
    age: 20,
    gender: "Male",
    course: "BCA",
    marks: 85,
    phone: "9876543210",
    email: "ayaan@gmail.com",
    skills: ["JavaScript", "HTML", "CSS"],
    address: { city: "Kozhikode", state: "Kerala" },
    isActive: true
  },
  {
    id: 2,
    name: "Fathima",
    age: 19,
    gender: "Female",
    course: "BSc CS",
    marks: 92,
    phone: "9123456780",
    email: "fathima@gmail.com",
    skills: ["Python", "Django"],
    address: { city: "Malappuram", state: "Kerala" },
    isActive: true
  },
  {
    id: 3,
    name: "Rahul",
    age: 21,
    gender: "Male",
    course: "BTech",
    marks: 76,
    phone: "9988776655",
    email: "rahul@gmail.com",
    skills: ["Java", "Spring"],
    address: { city: "Bangalore", state: "Karnataka" },
    isActive: false
  },
  {
    id: 4,
    name: "Anjali",
    age: 20,
    gender: "Female",
    course: "BCA",
    marks: 88,
    phone: "9090909090",
    email: "anjali@gmail.com",
    skills: ["React", "Node.js"],
    address: { city: "Thrissur", state: "Kerala" },
    isActive: true
  },
  {
    id: 5,
    name: "Sameer",
    age: 22,
    gender: "Male",
    course: "MCA",
    marks: 81,
    phone: "9012345678",
    email: "sameer@gmail.com",
    skills: ["MongoDB", "Express"],
    address: { city: "Kochi", state: "Kerala" },
    isActive: false
  }
];



console.log( Object.values(students) );
// gives key values
console.log(Object.keys(students));
// give indexes
console.log(Object.entries(students));
// gives it turn objects to arrays 
console.log(Object.freeze(students));
// it will freez the objects and that object cannot manipulate it again







