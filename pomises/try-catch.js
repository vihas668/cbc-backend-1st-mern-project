console.log("Code is starting")
console.log("Code is continuing")

try{

    const student = {
        name: "John Doe",
        age: 20,
        major: "Computer Science",
        parent: {
            name: "Jane Doe",
            age: 45,
            occupation: "Engineer"
        }
    }

    console.log(student.parent.name)

}catch(err){
    console.log("Error occurred")
    console.log(err)
}




console.log("Code is continuing")
console.log("Code is ended")