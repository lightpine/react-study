import React from 'react'
import styled from 'styled-components'
import logo from '../Image/ohn.png'

const Wapper = styled.div`
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
    align-items: center;
`
const NaviIcon = styled.img`
    width: 5rem;
    height: auto;
    grid-column: 1 / 6;
`
const NaviCover = styled.div`
    grid-column: 6;
`
const NaviContents = styled.div`
    grid-column: 8;
`
const NaviContact = styled.div`
    grid-column: 10;
`
const NaviLanguage = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column: 12;
    justify-items: center;
`
const NaviEng = styled.div`
    grid-column: 2;
`

const Navigater = () => {
    return (
        <Wapper>
            <NaviIcon src={logo} />
            <NaviCover>menw1</NaviCover>
            <NaviContents>menw2</NaviContents>
            <NaviContact>menw3</NaviContact>
            <NaviLanguage>Kr<NaviEng>Eng</NaviEng></NaviLanguage>
        </Wapper>
    )
}

export default Navigater
