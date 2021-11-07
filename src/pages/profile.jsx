import React from 'react'

const Profile =  () =>  {
    

    return (
        <>
            <Navbar />
            <Container className="container" fluid="md"
                style={{}}
            >
                <Row>
                <Col style={{ height: "90vh" }}>
                    <img
                    className="fondo"
                    
                    style={{ width: "100vw", objectFit: "cover", backgrounColor: ""}}
                    />
                    <p></p>
                </Col>
                </Row>
        </Container>
        </>
    )

}

export default Profile