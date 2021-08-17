import {db} from '../firebase';

export const contactsRef = db.ref('contacts');

export const contactsApi = {
    loadContacts: () => {
        console.log(contactsRef)

        return contactsRef
    }

}