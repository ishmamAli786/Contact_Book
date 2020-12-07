import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {addContact} from '../../action/contactAction';
import shortid from 'shortid';
import {useHistory} from 'react-router-dom';
export  const AddContact = () => {
    let history=useHistory();
    const dispatch = useDispatch();
    const [name,setName]=useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const createContact=(e)=>{
        e.preventDefault();
        const newContact={
            id:shortid.generate(),
            name:name,
            phone:phone,
            email:email
        }
        dispatch(addContact(newContact));
        history.push("/")
    }
    return (
        <div className="card border-0 shadow">
        <div className="card-header">
           Add A Contact 
        </div>
        <div className="card-body">
        <form onSubmit={(e)=> createContact(e)}>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Your Name" value={name} onChange={(e)=> setName(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} ></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your E-mail Address" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <button className="btn btn-primary" type="submit">Create Contact</button>
        </form>
         
        </div>
        </div>
    )
}
