import { CREATE_CONTACT,GET_CONTACT,UPDATE_CONTACT,DeleteContact,SELECT_CONTACT,CLEAR_CONTACT, DELETE_SELECTED_CONTACTS} from '../constant/types';

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


/// delete a contact
export const deleteContact = (payload) => ({
    type: DeleteContact,
    payload: id,
})


/// select All Contact
export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload:id,
})


/// clear selected contacts
export const clearAllContact = () => ({
    type: CLEAR_CONTACT,
})


/// DELETE selected contacts
export const deleteAllContact = () => ({
    type: DELETE_SELECTED_CONTACTS,
})

