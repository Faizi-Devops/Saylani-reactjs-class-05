import { useState } from "react";
import data from "./Data";

let Student = () => {
    let [student, setStudent] = useState(data);
    let [kame,setKame]=useState();
    let [katch,setKatch]=useState();
    let [mole,setMole]=useState();
    let [lass,setLass]=useState();

    let one  = (e) =>{
        setKame(e.target.value)

    }
    let two =(e) =>{
        setKatch(e.target.value);

    }
    let three = (e) =>{
        setMole(e.target.value)
    }
    let four  = (e)=> {
        setLass(e.target.value)

    }

    let ongetData  = () =>{
        let std = {
            Name:kame,
            Batch:katch,
            Rollnumber:mole,
            clas:lass
        }
        console.log(std)
    }




    

    

    return (
        <div>
            <h2>Add New Students</h2>
            <input type="text" placeholder="Please enter the Name" onChange={one}/><br />
            <br />
            <input type="text" placeholder="Please enter the Roll number" onChange={two} /><br />
            <br />
            <input type="text"  placeholder="Pllease ente the Class Name" onChange={three}/><br />
            <br />
            <input type="text" placeholder="Please enter the Batch" onChange={four}/>
<br /><br />
            <button type="button" onClick={ongetData}>Submit</button>
            <br /><br />

            <h2>List of Students</h2>


            <table class="table  table-striped">
                <tbody>
                    <tr>
                        <th scope="col">Serail No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Roll No.</th>
                        <th scope="col">Class</th>
                        <th scope="col">Batch</th>
                    </tr>
                </tbody>

                {
                    student.map((value, index) => {
                        return (
                            <tr>
                                <td scope="col">{index + 1}</td>
                                <td scope="col">{value.name}</td>
                                <td scope="col">{value.roll}</td>
                                <td scope="col">{value.class}</td>
                                <td scope="col">{value.batch}</td>
                            </tr>


                        )
                    })
                }

            </table>


        </div>
    )
}
export default Student;