import React from 'react';
import styled from 'styled-components';
import { BsFillGrid3X3GapFill, BsHouseDoor, BsGrid1X2Fill, BsBarChartFill } from 'react-icons/bs';
import { Row, Col } from 'react-bootstrap';

// This component represents the main bar of the page.
const Top = styled.div`
    background-color: rgba(0,0,0, 0.25);
    padding: 0.5rem;
`;

// This component includes the name of the board and a little icon. 
const BoardOptions = styled.div`
    padding: 0.5rem
`;

// This component encapsulates the logo of the page (a simple text).
const Logo = styled.div`
    margin: -.5rem 0rem;
    text-align: center;
    color: white;
    font-family: Brush Script MT;
    font-size: 2rem;
`;

// This component is used to encapsulate icons.
const Icon = styled.div`
    background-color: rgb(255,255,255, 0.3);
    border-radius: 0.25rem;
    margin-right: 0.4rem;
    padding: 0.2rem 0.5rem;
    color: white;
    text-align: center;
    display: inline-block;
`

// This component is used to write the name of the board.
const BoardName = styled.div`
    color: #03254c;
    display: inline-block;
    font-size: 1.25rem;
    font-weight: bold;
`;

const PageHeader = () => {
    return (
        <>
            <Top>
                <Row>
                    <Col lg="4">
                        <Icon><BsFillGrid3X3GapFill/></Icon>
                        <Icon><BsHouseDoor/></Icon>
                        <Icon><BsGrid1X2Fill/><strong style={{marginLeft: "0.5rem", fontSize: "0.9rem"}}>Tableros</strong></Icon>
                    </Col>
                    <Col lg="4">
                        <Logo>Tasky</Logo>
                    </Col>
                </Row>
            </Top>
            <BoardOptions>
                <Row>
                    <Col lg="12">
                            <Icon><BsBarChartFill/></Icon>
                            <BoardName>Web apps</BoardName>
                        </Col>
                    </Row>
            </BoardOptions>

        </>
    )
}

export default PageHeader;