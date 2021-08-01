export const getAllContactList = (state) => state.contacts ;
export const getAllMessageByUserId = (id)=>(state) => Object.entries(state.contacts).find((contact) => contact.id == id) ;

