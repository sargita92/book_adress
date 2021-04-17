import styled from 'styled-components'

export const ContactContainer = styled.div`
    width: 100%;
    height: 70vh;
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;

    padding: 1.5em;

`
export const ContactHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    padding: 0.5em 0 0 0;
    font-size: 2em;
    color: var(--primary-color);

`

export const ContactFormItem = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    position: relative;
    justify-content: space-between;

    font-size: 1.2em;
    color: var(--primary-color);
    margin-bottom: 1em;

`

export const ContactText = styled.input`
    width: 80%;
    border: 0.1em solid var(--secondary-color);
    color: var(--secondary-color);
    font-size: 1.1em;
    padding: 0.3em;
    border-radius: 0.3em; 

    :focus{
        border: 0.1em solid var(--primary-color);
        color: var(--primary-color); 
        outline: none;
    }

`

export const ContactButton = styled.button`
    background-color: var(--primary-color);
    color: var(--tertiary-color);
    font-size: 1.4em;
    padding: 0.5em;
    border-radius: 0.3em; 

    :focus{ outline: none; }
    :hover{ zoom: 1.1; };

`