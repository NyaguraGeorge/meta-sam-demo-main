import { configureStore } from '@reduxjs/toolkit';

const SENSOR_CLICKED = 'SENSOR_CLICKED';

function clickedSensor(){
    return {
    type: SENSOR_CLICKED,
    value: false,
    }
}

const initialState = {
    // wasClicked: false,
    wasClicked: false,
}

const reducer = (state=initialState, action)=> {
    switch(action.type){
        case SENSOR_CLICKED:
            return{
                ...state,
                wasClicked: false,
            }
        default:
            return state
    }
}

const store = configureStore(reducer)

console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(()=> console.log('Update state', store.getState()))

store.dispatch(clickedSensor())
// store.dispatch(clickedSensor())
// store.dispatch(clickedSensor())

unsubscribe()
