import { GETALLCOMMANDS, GETOWNCOMMANS } from "../ActionTypes/CommandTypes"

const initialState = {
    commands : [],
    ownCommands : []  
}




const CommandeReducer=(state = initialState, action)=>{
    switch (action.type) {

       case GETALLCOMMANDS : return {...state, commands : action.payload}
       case GETOWNCOMMANS : return {...state, ownCommands : action.payload}
        default: return state

    }
}

export default CommandeReducer
