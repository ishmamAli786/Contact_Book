import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import Contacts from './Contacts';
import {selectAllContact,clearAllContact,deleteAllContacts} from '../../actions/contactAction';
const Contact = () => {
    const dispatch=useDispatch();
    const [selectAll,setSelectAll]=useState(false);
    const contacts = useSelector(state => state.contacts.contacts);
    const selectedContacts=useSelector((state)=> state.contact.selectedContacts);
    useEffect(()=>{
        if(selectAll){
            dispatch(selectAllContact(contacts.map(contact=> contact.id)))
        }else{
            dispatch(clearAllContact());
        }
    },[selectAll])
    return (
        <div>
        {
                selectedContacts.length > 0 ?  (
                    <button className="btn btn-danger mb-3" onClick={() => dispatch(deleteAllContacts())}>Delete ALL</button>
                ):null
        }
            <table className="table shadow">
                <thead>
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input id="selectAll" type="checkbox" className="custom-control-input" value={selectAll} onClick={()=> selectAll(!selectAll)}></input>
                                <label htmlFor="selectAll" className="custom-control-label"></label>
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
                            <Contacts contact={contact} key={contact.id} selectAll={selectAll}/>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Contact 
