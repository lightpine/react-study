import React from 'react'
import styled from 'styled-components'

const Wapper = styled.div`
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
`
const NaviIcon = styled.div`
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
`
const NaviEng = styled.div`
    grid-column: 2;
`

const Navigater = () => {
    return (
        <Wapper>
            <NaviIcon>this is navigater</NaviIcon>
            <NaviCover>menw1</NaviCover>
            <NaviContents>menw2</NaviContents>
            <NaviContact>menw3</NaviContact>
            <NaviLanguage>Kr<NaviEng>Eng</NaviEng></NaviLanguage>
        </Wapper>
    )
}

export default Navigater
