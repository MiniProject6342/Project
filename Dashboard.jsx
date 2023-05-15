import React,{useEffect,useState} from 'react'
import axios from 'axios'
import UpdateEmployee from './UpdateEmployee'
import {BrowserRouter as Route,Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Dashboard() {
    const [employeeid, setId] = useState('');
  const [employeefname, setFName] = useState("");
  const [employeelname,setLName]=useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [pass,setPass]=useState("");
  const [dept,setDept]=useState("");
  const [desig,setDesig]=useState("");
  const [dob,setDob]=useState("");
    const [employees, setUsers] = useState([]);
    useEffect(() => {
        (async () => await Load())();
    }, []);
    async function  Load()
    {
     const result = await axios.get(
         "http://localhost:8089/api/v1/employee/getall");
         setUsers(result.data);
         console.log(result.data);
    }
    Load();
 
   async function DeleteEmployee(employeeid)
   {
        await axios.delete("http://localhost:8089/api/v1/employee/delete/" + employeeid); 
        alert("Employee deleted Successfully");
        Load();
   }
   async function editEmployee(employees){
      setId(employees.employeeid);
      setFName(employees.employeefname);
      setLName(employees.employeelname);
      setMobile(employees.mobile);
      setEmail(employees.email);
      setPass(employees.pass);
      setDept(employees.dept);
      setDesig(employees.desig);
      setDob(employees.dob);
   }
   async function update(event){
     
   }
  return (
    <div>
<html>
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container-fluid">
  <div class="row content"style={{"height": "700px"}}>
    <div class="col-sm-2 sidenav" style={{
        "height": "100%",
        "background-color": "#555",
        "color": "white",
        "padding":" 15px"
        }}>
      <h4>Admin</h4>
      <ul class="nav nav-pills nav-stacked">
        <li class="active"><a href="#section1">DashBoard</a></li>
        <li><a href="#AddUser">Leaves</a></li>
        <li><a href="#section3">Salary</a></li>
      </ul>
    </div>

    <div class="col-sm-10">
      <h4><small>RECENT POSTS</small></h4>
        <table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope='col'>Employee Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Mobile No.</th>
      <th scope='col'>Email</th>
      <th scope='col'>Department</th>
      <th scope='col'>Designation</th>
      <th scope='col'>Date of joining</th>
      <th scope="col">Option</th>
    </tr>
  </thead>
       {employees.map(function fn(employee)
       {
            return(
            <tbody>
                <tr>
                <td>{employee.employeeid}</td>    
                <td>{employee.employeefname}</td>
                <td>{employee.employeelname}</td>
                <td>{employee.mobile}</td>     
                <td>{employee.email}</td> 
                <td>{employee.dept}</td>  
                <td>{employee.desig}</td>
                <td>{employee.dob}</td>
                <td>
                        <Link to={"/update/"+employee._id}>Update</Link>
                     <button type="button" class="btn btn-warning"  onClick={() => editEmployee(employee)} >save</button>   
                     <button type="button" class="btn btn-danger" onClick={() => DeleteEmployee(employee._id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table> 
      </div>
</div>
</div>
</body>
</html>
</div>
  )
}
