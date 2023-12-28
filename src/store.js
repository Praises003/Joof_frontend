import { configureStore, } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import eventReducer from './slices/eventSlice';
import guestReducer, { addGuest } from './slices/guestSlice'
import eventPackageReducer from './slices/eventPackageSlice';

//import chatReducer, { chats } from './slices/chatSlice'
//import singleChatReducer, { singleChats } from './slices/singleChatSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        event: eventReducer,
        guest: guestReducer,
        eventPackage:eventPackageReducer
        //chat: chatReducer,
        //singleChat:singleChatReducer
    },
    devTools:true
})
//store.dispatch(singleChats('64abfd0348f9459cc832adf2'))
//store.dispatch(chats(['64abfd0348f9459cc832adf2']))
// store.dispatch(addGuest([{name:"Big Man", seat: "A1"}, {name: "Big Guy", seat: "A2"}]))
//store.dispatch(addGuest([{name: "Big Man2662", seat: "A2366664"}]))
//store.dispatch(addGuest([{name: "Big Man2662", seat: "A2366664"}]))
//console.log(store.getState())
export default store;