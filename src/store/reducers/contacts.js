//Como sera o state inicial
const INITIAL_STATE = {
    list: [],
    filter: "",
}

//O que o reducer vai fazer quando mandar setar um usuário
// Execução do comando para alterar o state 
export default function contacts(state = INITIAL_STATE, action){

    if( action.type === 'SET_CONTACTS' ){
        return{
            ...state,
            list: action.data
        } 
    }else if(action.type === 'SET_FILTER'){
        return{
            ...state,
            filter: action.data
        } 
    }

    return state;
}