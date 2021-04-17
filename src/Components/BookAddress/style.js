import styled from 'styled-components'

export const BookAddressContainer = styled.div`
    width: 100%;
    min-height: 70vh;

    display: flex;
    align-items: flex-start;
    padding: 1em 0;

    position: relative;
`

export const Summary = styled.div`
    width: 10%;
    height: 46em;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

export const SummaryItem = styled.div`
    width: 1em;
    height: 1em;

    padding: 0.2em;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border: 0.1em solid var(--primary-color);
    color: var(--primary-color);
    margin-bottom: 0.3em;

    &:hover{
        zoom: 1.2;
    }
`

export const Addresses = styled.div`
    width: 90%;
    min-height: 70vh;

    display: flex;
    flex-direction: column;
`

export const AddressItem = styled.div`
    width: 95%;
    padding: 0.5em;
    margin-left: 0.2em;
    color: var(--primary-color);

    border-bottom: 0.1em solid var(--primary-color);

    > a{
        text-decoration: none;
        color: var(--primary-color);
        font-weight: bold;
        font-size: 1.1em;
    }
`
