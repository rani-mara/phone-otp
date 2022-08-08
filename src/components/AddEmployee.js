import React, { useEffect, useState } from 'react'
import employeeService from './services/employeeService';
import StudentService from './services/StudentService';

const AddEmployee = () => {

  const [student, setStudent] = useState({
      studentName :"",
      course : "",
      batch : "",
      
     } );       
    
     const [employee, setemployee] = useState({
        id :"1",
        organizationName :"",
        email :"",
        purpose :"",
        studentId : ""

             });
     const handleChange = (e) => {
        const value = e.target.value;
        setemployee({ ...employee, [e.target.name] : value});
      
      };
      
      const [loading, setloading] = useState(true);
      
         
      const SaveEmployee = (e)=>{
       e.preventDefault();
       console.log(employee)
       employeeService.saveEmployee(employee).then((response) =>{
        }).catch((error) => {
        console.log(error);
       });

       StudentService.getStudentById(employee.studentId).then((response) =>{
        console.log(response);
        setStudent(response.data);
        setloading(false);
        }).catch((error) => {
        console.log(error);
       });
        
      

     };
     
     
     
     const reset = (e) =>{
       e.preventDefault();
       setemployee({
        id :"",
        organizationName :"",
        email :"",
        purpose :"",
        studentId : ""
     });
     }

    return (
    <div className="grid grid-cos-2 bg-blue-500">
        
            <div >
            <h1 className="font-thin text-2xl tracking-wider">Please Enter Details</h1>
            </div>
            <div className="items-center justify-center h-14 my-2 grid-r">
            <input type="text" name="organizationName" value={employee.organizationName} placeholder="OrganizationName"  onChange = {(e) => handleChange(e)}
             className="h-10 w-96 border mt-2 px-2 py-2 bg-blue-800 text-white">
            </input>
            </div>
            <div className="items-center justify-center h-14 w-full my-2">
                     
            <input type="email" name="email" value={employee.email} placeholder="Enter your email Id" 
            onChange = {(e) => handleChange(e) }
            className="h-10 w-96 border mt-2 px-2 py-2 bg-blue-800 text-white">
            </input>
            </div>
            <div className="items-center justify-center h-14  my-2">
            
            <input type="text" name="purpose" value={employee.purpose} placeholder="purpose of Verification"
            onChange = {(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2 bg-blue-800 text-white"></input>
            </div>
            <div className="items-center justify-center h-14  my-2">
                     
            <input type="text" name="studentId" value={employee.studentId} placeholder="Student ID" 
            onChange = {(e) => handleChange(e) }
            className="h-10 w-96 border mt-2 px-2 py-2 bg-blue-800 text-white">
            </input>
            </div>
            <div className="items-center justify-center hx-4 w-full my-4 space-x-4 pt-4">
             <button onClick={SaveEmployee} className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700">
             Show Details
             </button>
             <button
             onClick= {reset} className="rounded text-white font-semibold bg-red-500 py-2 px-6 hover:bg-red-700">
             Clear
             </button>
             { !loading && (
             <table className="border-style :sm">
              <thead>
               <tr>
                <th >Student Name</th>
                <th > Course </th>
                <th > Batch </th>
                </tr>
              </thead>
              <tbody >
               <tr>
               <td> {student.studentName} </td>   
               <td> {student.course} </td>
               <td> {student.batch} </td>
               </tr>
               </tbody> 
             </table> ) }

             

            </div>

        </div>
    
  )
}

export default AddEmployee;