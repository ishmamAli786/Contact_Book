import React from 'react';
import Avatar from 'react-avatar';

const Contacts = ({contact}) => {
    const {name,phone,email}=contact;
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
            <a href="#"><span><i class="fas fa-pen"></i></span></a>
                <a href="#"><span><i class="fas ml-2 fa-minus-circle text-danger"></i></span></a>
            </td>
            </tr>
    )
}

export default Contacts;
