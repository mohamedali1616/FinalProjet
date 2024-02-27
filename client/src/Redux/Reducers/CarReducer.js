import { GETALLCARS, GETONECAR } from "../ActionTypes/CarTypes"

const initialState = {
    car : {},
    cars : [] 
}




const CarReducer=(state = initialState, action)=>{
    switch (action.type) {

        case GETALLCARS : return {...state, cars : action.payload}
        case GETONECAR : return {...state, car : action.payload}
        default: return state

    }
}

export default CarReducer