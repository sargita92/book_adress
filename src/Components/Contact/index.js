import { ContactContainer,
         ContactForm,
         ContactFormItem,
         ContactHeader,
         ContactText,
         ContactButton} from "./style";
import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ContactActions from "../../store/actions/contacts";
import { useHistory } from "react-router-dom";
import uuid from 'react-uuid'

const changeProperty = (e, contact, setProperty, property) =>{
    setProperty(e.target.value);
    contact[property] = e.target.value;


} 

const ContactItem = ({label, contact, property, setProperty}) =>{
    return(
        <ContactFormItem >
            {label}
            <ContactText value={contact[property]} onChange={e => changeProperty(e, contact, setProperty, property) } />
        </ContactFormItem>
    );
}



const Contact = ({contacts, setContacts, match}) =>{
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName,  setLastName]  = useState('');
    const [address,   setAddress]   = useState('');
    const [city,      setCity]      = useState('');
    const [state,     setState]     = useState('');
    const [ id ]                    = useState(match.params.id);

    const saveForm = (e,contact) =>{
        e.preventDefault();

        if(!contact.id){
            contact['id'] = uuid();

        }

        if(!contact.name){
            contact['name'] = firstName;

        }

        if(!contact.lastName){
            contact['lastName'] = lastName;

        }

        if(!contact.address){
            contact['address'] = address;

        }

        if(!contact.city){
            contact['city'] = city;

        }

        if(!contact.state){
            contact['state'] = state;

        }
        
        
        
        
        
        
        console.log(contact);

        let tempContacts = contacts.filter( c => {  return c.id != contact['id'] } );
        tempContacts.push(contact);
        setContacts(tempContacts);

        alert("Contact added!");

        history.push("/");
    }


    let contact = contacts.find( c => {return c.id == id });

    if(!contact){
        contact = {};
    }

    return(
        <ContactContainer >
            <ContactHeader>
                Create/Edit Contact
            </ContactHeader>
            <ContactForm>
                <ContactItem 
                    label='Name'
                    contact = {contact}
                    property={'name'}
                    setProperty={setFirstName} />
                <ContactItem 
                    label='Last Name'
                    contact = {contact}
                    property={'lastName'}
                    setProperty={setLastName} />
                <ContactItem 
                    label='Address'
                    contact = {contact}
                    property={'address'}
                    setProperty={setAddress} />
                <ContactItem 
                    label='City'
                    contact = {contact}
                    property={'city'}
                    setProperty={setCity} />
                <ContactItem 
                    label='State'
                    contact = {contact}
                    property={'state'}
                    setProperty={setState} />
                <ContactButton onClick={(e) => saveForm(e,contact)} >Save</ContactButton>
            </ContactForm>
        </ContactContainer>
    );
}

const mapStateToProps = (state) => ({
    contacts: state.contacts.list,
    filter: state.contacts.filter,
    
});

const mapDispatchToProps = (dispatch) =>
bindActionCreators( ContactActions , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contact);