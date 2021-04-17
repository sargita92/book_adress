import UtilitiesBar from "../UtilitiesBar";
import { BookAddressContainer,
         Summary,
         SummaryItem, 
         Addresses,
         AddressItem} from "./style";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import uuid from 'react-uuid'

import * as ContactActions from "../../store/actions/contacts";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const addressList = [
    { id: '123', name: 'Jhon', lastName: 'Smith', address: " 45 Grove Street", city: 'anywhere', state: 'NJ' },
    { id: '456',name: 'joseph', lastName: 'Smith', address: " 45 Grove Street", city: 'anywhere', state: 'NJ' },
];

const Address = ( {item} ) =>{

    return(
        <div>
            <AddressItem> 
                {item.lastName}, {item.name}  - 
                <Link to={`/contact/${item.id}`}> Edit </Link>
            </AddressItem> 
        </div>
        
    );
}

const BookAddress = ({contacts, setContacts, filter, setFilter}) =>{
    const [contactsList, setContactsList] = useState([]);

    useEffect( () =>{

        console.log(JSON.stringify(contacts));
        if(contacts.length > 0){
            setContactsList(contacts);
        }else{
            setContacts(addressList);
            setContactsList(addressList);
        }
        

    }, [contacts ,addressList]);

    useEffect( () =>{
        if( filter.length === 1 && filter.match(/[a-zA-Z]/) ){
            setContactsList(
                contacts.filter( c => {
                    return (c.lastName[0].toLocaleLowerCase() === filter ||
                            c.name[0].toLocaleLowerCase() === filter);
                })
            );

        }else if(filter.match(/[a-zA-Z ,.\'-]+/) ){
            setContactsList(
                contacts.filter( c => {
                    let fullName = `${c.lastName}, ${c.name}`.toLocaleLowerCase();
                    console.log(fullName + " = " + filter.toLocaleLowerCase() );
                    return fullName.includes(filter.toLocaleLowerCase());
                })
            );
        }else{
            setContactsList(contacts);
        }

    }, [filter]);

    return(
        <>
            <UtilitiesBar/>
            <BookAddressContainer >
                <Summary>
                    <SummaryItem onClick={() => setFilter('')}> # </SummaryItem>
                    <SummaryItem onClick={() => setFilter('a')}> A </SummaryItem>
                    <SummaryItem onClick={() => setFilter('b')}> B </SummaryItem>
                    <SummaryItem onClick={() => setFilter('c')}> C </SummaryItem>
                    <SummaryItem onClick={() => setFilter('d')}> D </SummaryItem>
                    <SummaryItem onClick={() => setFilter('e')}> E </SummaryItem>
                    <SummaryItem onClick={() => setFilter('f')}> F </SummaryItem>
                    <SummaryItem onClick={() => setFilter('g')}> G </SummaryItem>
                    <SummaryItem onClick={() => setFilter('h')}> H </SummaryItem>
                    <SummaryItem onClick={() => setFilter('i')}> I </SummaryItem>
                    <SummaryItem onClick={() => setFilter('j')}> J </SummaryItem>
                    <SummaryItem onClick={() => setFilter('k')}> K </SummaryItem>
                    <SummaryItem onClick={() => setFilter('l')}> L </SummaryItem>
                    <SummaryItem onClick={() => setFilter('m')}> M </SummaryItem>
                    <SummaryItem onClick={() => setFilter('n')}> N </SummaryItem>
                    <SummaryItem onClick={() => setFilter('o')}> O </SummaryItem>
                    <SummaryItem onClick={() => setFilter('p')}> P </SummaryItem>
                    <SummaryItem onClick={() => setFilter('q')}> Q </SummaryItem>
                    <SummaryItem onClick={() => setFilter('r')}> R </SummaryItem>
                    <SummaryItem onClick={() => setFilter('s')}> S </SummaryItem>
                    <SummaryItem onClick={() => setFilter('t')}> T </SummaryItem>
                    <SummaryItem onClick={() => setFilter('u')}> W </SummaryItem>
                    <SummaryItem onClick={() => setFilter('v')}> X </SummaryItem>
                    <SummaryItem onClick={() => setFilter('x')}> Y </SummaryItem>
                    <SummaryItem onClick={() => setFilter('y')}> Z </SummaryItem>
                </Summary>
                <Addresses>
                    {
                        contactsList?.map( add =>  <Address key={uuid()} item={add}/> )
                    }

                </Addresses>
            </BookAddressContainer>
        </>
    );
}


const mapStateToProps = (state) => ({
    contacts: state.contacts.list,
    filter: state.contacts.filter,
    
});

const mapDispatchToProps = (dispatch) =>
bindActionCreators( ContactActions , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookAddress);