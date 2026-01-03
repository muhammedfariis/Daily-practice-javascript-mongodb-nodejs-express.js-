
// day.10 
// mongodb practices logical operators not nor and or


// not operators : what i dont want it will show the output 


practice> db.trail.find( {age : {$not : {$gt : 25}}})

[
  {
    _id: ObjectId('695797565fbe73b03b5d2c4f'),
    name: 'Ayaan',
    age: 18,
    course: 'BSc CS',
    marks: 82,
    city: 'Kochi'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c50'),
    name: 'Rahul',
    age: 20,
    course: 'BCA',
    marks: 76,
    city: 'Delhi'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c51'),
    name: 'Sneha',
    age: 19,
    course: 'BCom',
    marks: 88,
    city: 'Mumbai'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c52'),
    name: 'Farhan',
    age: 21,
    course: 'BTech',
    marks: 91,
    city: 'Bangalore'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c53'),
    name: 'Anjali',
    age: 18,
    course: 'BSc Maths',
    marks: 69,
    city: 'Chennai'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c54'),
    name: 'Rohit',
    age: 22,
    course: 'MBA',
    marks: 85,
    city: 'Pune'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c55'),
    name: 'Meera',
    age: 20,
    course: 'BCA',
    marks: 78,
    city: 'Kochi'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c56'),
    name: 'Adil',
    age: 19,
    course: 'BSc Physics',
    marks: 72,
    city: 'Hyderabad'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c57'),
    name: 'Pooja',
    age: 21,
    course: 'BTech',
    marks: 90,
    city: 'Noida'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c58'),
    name: 'Arjun',
    age: 18,
    course: 'BCom',
    marks: 66,
    city: 'Trivandrum'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c59'),
    name: 'Nikhil',
    age: 23,
    course: 'MCA',
    marks: 84,
    city: 'Bangalore'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c5a'),
    name: 'Kavya',
    age: 20,
    course: 'BSc CS',
    marks: 79,
    city: 'Mysore'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c5b'),
    name: 'Sahil',
    age: 22,
    course: 'MBA',
    marks: 88,
    city: 'Gurgaon'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c5c'),
    name: 'Aishwarya',
    age: 19,
    course: 'BCA',
    marks: 92,
    city: 'Coimbatore'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c5d'),
    name: 'Imran',
    age: 21,
    course: 'BTech',
    marks: 75,
    city: 'Calicut'
  }
]

// and operators : if both are true it is shows the output

practice> db.trail.find(
{
$and : [ {age :{$gte : 15}},
 {city : "Kochi"}
]
 }
 )
[
  {
    _id: ObjectId('695797565fbe73b03b5d2c4f'),
    name: 'Ayaan',
    age: 18,
    course: 'BSc CS',
    marks: 82,
    city: 'Kochi'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c55'),
    name: 'Meera',
    age: 20,
    course: 'BCA',
    marks: 78,
    city: 'Kochi'
  }
]

// or operators : if one will true that true will show

practice> db.trail.find( { $or: [ { age: { $gte: 15 } }, { city: "kochi" }] } )
[
  {
    _id: ObjectId('695797565fbe73b03b5d2c4f'),
    name: 'Ayaan',
    age: 18,
    course: 'BSc CS',
    marks: 82,
    city: 'Kochi'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c50'),
    name: 'Rahul',
    age: 20,
    course: 'BCA',
    marks: 76,
    city: 'Delhi'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c51'),
    name: 'Sneha',
    age: 19,
    course: 'BCom',
    marks: 88,
    city: 'Mumbai'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c52'),
    name: 'Farhan',
    age: 21,
    course: 'BTech',
    marks: 91,
    city: 'Bangalore'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c53'),
    name: 'Anjali',
    age: 18,
    course: 'BSc Maths',
    marks: 69,
    city: 'Chennai'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c54'),
    name: 'Rohit',
    age: 22,
    course: 'MBA',
    marks: 85,
    city: 'Pune'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c55'),
    name: 'Meera',
    age: 20,
    course: 'BCA',
    marks: 78,
    city: 'Kochi'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c56'),
    name: 'Adil',
    age: 19,
    course: 'BSc Physics',
    marks: 72,
    city: 'Hyderabad'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c57'),
    name: 'Pooja',
    age: 21,
    course: 'BTech',
    marks: 90,
    city: 'Noida'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c58'),
    name: 'Arjun',
    age: 18,
    course: 'BCom',
    marks: 66,
    city: 'Trivandrum'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c59'),
    name: 'Nikhil',
    age: 23,
    course: 'MCA',
    marks: 84,
    city: 'Bangalore'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c5a'),
    name: 'Kavya',
    age: 20,
    course: 'BSc CS',
    marks: 79,
    city: 'Mysore'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c5b'),
    name: 'Sahil',
    age: 22,
    course: 'MBA',
    marks: 88,
    city: 'Gurgaon'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c5c'),
    name: 'Aishwarya',
    age: 19,
    course: 'BCA',
    marks: 92,
    city: 'Coimbatore'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c5d'),
    name: 'Imran',
    age: 21,
    course: 'BTech',
    marks: 75,
    city: 'Calicut'
  }
]

// nor operator : it is used to find both not want what i not want all these i qurying nor 
 db.trail.find( { $nor:[
{city : "Calicut"}, {city : "Gurgaon"} ]})
[
  {
    _id: ObjectId('695797565fbe73b03b5d2c4f'),
    name: 'Ayaan',
    age: 18,
    course: 'BSc CS',
    marks: 82,
    city: 'Kochi'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c50'),
    name: 'Rahul',
    age: 20,
    course: 'BCA',
    marks: 76,
    city: 'Delhi'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c51'),
    name: 'Sneha',
    age: 19,
    course: 'BCom',
    marks: 88,
    city: 'Mumbai'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c52'),
    name: 'Farhan',
    age: 21,
    course: 'BTech',
    marks: 91,
    city: 'Bangalore'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c53'),
    name: 'Anjali',
    age: 18,
    course: 'BSc Maths',
    marks: 69,
    city: 'Chennai'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c54'),
    name: 'Rohit',
    age: 22,
    course: 'MBA',
    marks: 85,
    city: 'Pune'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c55'),
    name: 'Meera',
    age: 20,
    course: 'BCA',
    marks: 78,
    city: 'Kochi'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c56'),
    name: 'Adil',
    age: 19,
    course: 'BSc Physics',
    marks: 72,
    city: 'Hyderabad'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c57'),
    name: 'Pooja',
    age: 21,
    course: 'BTech',
    marks: 90,
    city: 'Noida'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c58'),
    name: 'Arjun',
    age: 18,
    course: 'BCom',
    marks: 66,
    city: 'Trivandrum'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c59'),
    name: 'Nikhil',
    age: 23,
    course: 'MCA',
    marks: 84,
    city: 'Bangalore'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c5a'),
    name: 'Kavya',
    age: 20,
    course: 'BSc CS',
    marks: 79,
    city: 'Mysore'
  },
  {
    _id: ObjectId('695797565fbe73b03b5d2c5c'),
    name: 'Aishwarya',
    age: 19,
    course: 'BCA',
    marks: 92,
    city: 'Coimbatore'
  }
]