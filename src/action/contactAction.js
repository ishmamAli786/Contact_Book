import { CREATE_CONTACT,GET_CONTACT,UPDATE_CONTACT} from '../constant/types';

/// actions
export const addContact = (contact) => ({
        type: CREATE_CONTACT,
        payload: contact,
})




//// get a contact
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id
})


//// Update A Contact
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact
})

