export const getAllContactList = (state) => state.contacts ;
export const getContactById = (id)=>(state) => Object.entries(state.contacts).find((contact) => contact.id == id) ;

