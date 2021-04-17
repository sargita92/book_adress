import { createStore } from 'redux';

//Importa o arquivo que ta o reduce principal
import rootReducer from './reducers'



//cria um armazenamento pra reduce principal
const store = createStore(rootReducer);

export {store};