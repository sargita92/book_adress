import styled from 'styled-components'

export const UtilitiesBarContainer = styled.div`
    display: flex;
    align-items: center;

    padding: 0em 1em;
    height: 4em;
    border-bottom: 0.1em solid var(--primary-color);

    svg{
        padding: 0.1em;
        width: 1.5em;
        height: 1.5em;
        color: var(--primary-color);
        border-radius: 0.3em;

        
        :hover{
            zoom: 1.2;
        }
    }
`

export const SearchBar = styled.input`
    border: 0.1em solid var(--secondary-color);
    color: var(--secondary-color);
    font-size: 1.1em;
    padding: 0.3em;
    border-radius: 0.3em;  
    margin-right: 1em;

    :focus{
        border: 0.1em solid var(--primary-color);
        color: var(--primary-color); 
        outline: none;
    }
`
