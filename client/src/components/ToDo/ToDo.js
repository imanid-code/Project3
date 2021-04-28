import React from "react";

function ToDo() {


    return(
        <div>
            <h3>Today</h3>
            <table className="table mb-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Urgency</th>
                        <th scope="col">Status</th>
                        <th scope="col">Progress</th>
                        <th scope="col">Manager</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Urgent</td>
                        <td>Stuck</td>
                        <td>90%</td>
                        <td>Jill</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Moderate</td>
                        <td>Flowing</td>
                        <td>60%</td>
                        <td>Jill</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Low</td>
                        <td>Waiting on others</td>
                        <td>25%</td>
                        <td>Mark</td>
                    </tr>
                </tbody>
            </table>

            <h3>Tomorrow</h3>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Urgency</th>
                        <th scope="col">Status</th>
                        <th scope="col">Progress</th>
                        <th scope="col">Manager</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Urgent</td>
                        <td>Stuck</td>
                        <td>90%</td>
                        <td>Jill</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Moderate</td>
                        <td>Flowing</td>
                        <td>60%</td>
                        <td>Jack</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ToDo;