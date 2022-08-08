import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/students";

class StudentService{
    saveStudent(student){
        return axios.post(EMPLOYEE_API_BASE_URL, student);
    }

    getStudents(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteStudent(id){
      return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    getStudentById(id){
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    updateStudent(student,id){
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, student);
    }
}

export default new StudentService();
