import { useState } from "react";
import data from "./Data";

let Student = () => {
    let [student, setStudent] = useState(data);
    console.log(student);
    return (
        <div>
            <input type="text" placeholder="Please enter the Name" /><br />
            <br />
            <input type="text" placeholder="Please enter the Roll number"/><br />
            <br />
            <input type="text"  placeholder="Pllease ente the Class Name"/><br />
            <br />
            <input type="text" placeholder="Please enter the Batch"/>
<br /><br />
            <button type="button">Submit</button>
            <br /><br />


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