import React from 'react';
import {useSelector} from "react-redux";
import Contacts from './Contacts';
const Contact = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    return (
        <div>
            <table className="table shadow">
                <thead>
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"></input>
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    contacts.map((contact,index)=>{
                        return (
                            <Contacts contact={contact} key={contact.id}/>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Contact 
