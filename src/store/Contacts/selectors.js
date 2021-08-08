export const allContactListSelector = (state) => state.contacts;
export const stateWithMessageSelector = (state) => state.messages ;
export const contactByIdSelector = (id) => (state) => Object.entries(state.contacts).filter((contact) => {
    console.log(contact);});

export const lastMessageForContact = (id)=>(state) => state.messages
//find((contact) => contact.id == id) ;

