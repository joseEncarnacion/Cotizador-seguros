import React from 'react'
import styled from '@emotion/styled';
import PropsTypes from 'prop-types'

const TextoHeader = styled.h1`
    font-size: 2rem;
    font-family: 'Slabo 27px' , serif;
    margin: 0;
    text-align: center;
`
const ContenedorHeader = styled.header`
    background-color: #26c6DA;
    padding: 10px;
    font-weight: bold;
    color: #fff;
`;



const Header = ({titulo}) => {
    return ( 

        <ContenedorHeader className=''>
            <TextoHeader> {titulo} </TextoHeader>
        </ContenedorHeader>
     );
}


Header.prototype = {
    titulo: PropsTypes.string.isRequired
}

 
export default Header;