// Define four functiopns
// Create student object
// Add "math" property to student with value of "B"
// Add "history" property with value of "C"
// Add "science property with value of "A"



const createStudent = (name, grade) => {
    const newStudentObject = {
        name: name,
        grade: grade
    }
    
   return newStudentObject

}
const student = createStudent("Jane Doe", 6)
// console.log(student)


const addMathGrade = (mathStuff) => {
    
        mathStuff.math = "B"
    
    return mathStuff

}
const mathGrade = addMathGrade(student)
console.log(mathGrade)



const addHistoryGrade = (historyStuff) => {
    historyStuff.history = "C"

    return historyStuff
}
const historyGrade = addHistoryGrade(mathGrade)
console.log(historyGrade)


const addScienceGrade = (scienceStuff) => {
    scienceStuff.science = "A"

    return historyStuff
}
const scienceGrade = addScienceGrade(historyGrade)
console.log(scienceGrade)