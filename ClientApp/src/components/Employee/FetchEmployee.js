import React, { Component } from 'react';

import { Link } from "react-router-dom";


export class FetchEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: [],
            employeeId: '',
            employeename: '',
            department: '',
            dateofjoining: '',
            photofilename: '',
            showModal: false,
            showDeleteModal: false

        };
        //this.handleDeleteOpenModal = this.handleDeleteOpenModal.bind(this);
        //this.handleDeleteCloseModal = this.handleDeleteCloseModal.bind(this);
        //this.handleOpenModal = this.handleOpenModal.bind(this);
        //this.handleCloseModal = this.handleCloseModal.bind(this);
        //this.logChange = this.logChange.bind(this);
        //this.handleEdit = this.handleEdit.bind(this);
        //this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        let self = this;

        fetch('/employee', {
            method: 'GET'


        }).then(function (response) {

            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log(response);
            return response.json();

        }).then(function (data) {
            self.setState({ employee: data });

            console.log("Employee", self.state.employee);
        }).catch(err => {
            console.log("caught it", err);
        });

    }
    

    //handleDeleteOpenModal(member) {
    //    this.setState({
    //        name: member.name,
    //        address: member.address,
    //        id: member.id,
    //        showDeleteModal: true
    //    });
    //}

    //handleDeleteCloseModal() {
    //    this.setState({ showDeleteModal: false });
    //}

    //handleOpenModal(member) {
    //    this.setState({
    //        name: member.name,
    //        address: member.address,
    //        id: member.id,
    //        showModal: true
    //    });
    //}

    //handleCloseModal() {
    //    this.setState({ showModal: false });
    //}

    logChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

    }


    handleEdit(event) {
        //alert("Edit");
        event.preventDefault();
        var data = {
            employeeId: 1,
            employeename: 'rr',
            department: 'rr',
            dateofjoining: 'rr',
            photofilename: 'rr',
        };

        //let that = this;

        fetch('/employee/' + 1, {

            method: 'PUT',

            headers: {

                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)

        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            console.log("Success", data);
        });

    }

    handleDelete(event) {
        //alert("Edit");
        event.preventDefault();
        var data = {
            name: this.state.name,
            address: this.state.address,
            id: this.state.id
        };

        //let that = this;

        fetch('api/Customers/' + data.id, {

            method: 'DELETE',

            headers: {

                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)

        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            console.log("Success", data);
        });

    }
    
    render() {
        return (<div><h1>Fetch Customer</h1>
            <Link to="/AddCustomer">AddCustomer</Link>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employee.map(member =>
                            <tr key={member.employeeId}>
                                <td>{member.employeeId}</td>
                                <td>{member.employeeName}</td>
                                <td>{member.department}</td>
                            </tr>)
                    }
                </tbody>

            </table>
        </div>);
    }
}
