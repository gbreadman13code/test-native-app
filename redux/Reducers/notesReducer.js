const initialState = {
    notesList: [
        {id: 1, pin: false, createTime: 14343, pinTime: 1, title: 'Купить', text: 'После работы не забыть заехать за подарком для бабушки. Что-нибудь из списка, который скинула жена.'},
    ]
}

const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const PIN_NOTE = 'PIN_NODE';

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_NOTE:
            console.log(state)
            console.log(action.payload)
            return {...state,
                notesList: [...state.notesList, action.payload],
            }
        case UPDATE_NOTE:
            let newArr = []
            for (let i = 0; i < state.notesList.length; i++) {
                if (state.notesList[i].id === action.payload.id) {
                    newArr.push(action.payload)
                } else {
                    newArr.push(state.notesList[i])
                }
            }
            return {...state,
                notesList: newArr,
            }
        case DELETE_NOTE:
            let array = [...state.notesList];
            const index = state.notesList.findIndex(item => item.id === action.payload);
            array.splice(index, 1);
            return {...state,
                notesList: array,
            }
        case PIN_NOTE: 
        let newArrForPin = [];
        const date = new Date();
        for (let i = 0; i < state.notesList.length; i++) {
            if (state.notesList[i].id === action.payload) {
                state.notesList[i].pinTime = Date.parse(date);
                state.notesList[i].pin = !state.notesList[i].pin;
                newArrForPin.push(state.notesList[i])
            } else {
                newArrForPin.push(state.notesList[i])
            }
        }
        return {...state,
            notesList: newArrForPin,
        }
        default:
            return state;
    }
}

export const addNewNoteAction = (payload) => ({ type: ADD_NEW_NOTE, payload });
export const updateNoteAction = (payload) => ({ type: UPDATE_NOTE, payload });
export const deleteNoteAction = (payload) => ({ type: DELETE_NOTE, payload });
export const pinNoteAction = (payload) => ({ type: PIN_NOTE, payload });