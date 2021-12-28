import React from "react";
import UserService from "./UserService";

class UserComponent extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
             orders:[]
        }
    }
    componentDidMount(){
        UserService.getOrders().then((response) => {
            this.setState({ orders: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Users List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Order Id</td>
                            <td> Car Name</td>
                            <td> Car Model</td>
                            <td> washer Name </td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.orders.map(
                                user => 
                                <tr key = {order.id}>
                                     <td> {order.id}</td>   
                                     <td> {order.carName}</td>   
                                     <td> {order.carModel}</td>   
                                     <td> {order.wName}</td>
   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default UserComponent