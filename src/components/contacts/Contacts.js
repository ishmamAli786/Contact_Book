import React from 'react';
import Avatar from 'react-avatar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Contacts = ({contact}) => {
    const {name,phone,email,id}=contact;
    return (
            <tr>
                <td>  
                 <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input"></input>
                <label className="custom-control-label"></label>
                </div></td>
                <td><Avatar name={name} size="45" round={true} className="mr-3"/>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`}><span><i class="fas fa-pen"></i></span></Link>
                <Link to="#"><span><i class="fas ml-2 fa-minus-circle text-danger"></i></span></Link>
            </td>
            </tr>
    )
}

export default Contacts;
