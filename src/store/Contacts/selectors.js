export const getAllContactListSelector = (state) => state.contacts ;
export const getContactByIdSelector = (id)=>(state) => Object.entries(state.contacts).find((contact) => contact.id == id) ;

