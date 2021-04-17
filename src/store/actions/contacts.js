//Como ele vai passar as informação pro reducer
export function setContacts(data){

    return{
      type: 'SET_CONTACTS',
      data
    };
  
}

export function setFilter(data){

  return{
    type: 'SET_FILTER',
    data
  };

}

