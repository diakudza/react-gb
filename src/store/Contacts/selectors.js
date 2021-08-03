export const allContactListSelector = (state) => state.contacts ;
export const contactByIdSelector = (id)=>(state) => Object.entries(state.contacts).find((contact) => contact.id == id) ;

