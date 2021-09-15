
import '../CSS/login.css';
import { Button, Container, Row, Col } from 'react-bootstrap';


const Login = () => {
    return (
        <div className="login">
            <form action="">
                <Container>
                    <Row>
                        <h2 className="top-heading" style={{marginTop: 9+'%'}}
                        >Chose Account Type</h2>
                    </Row>
                    <Row style={{marginTop: 9+'%'}}>
                        <Col className="choseRole" xs={6}><Button>Admin</Button></Col>
                        <Col className="choseRole" xs={6}><Button>User</Button></Col>
                    </Row>
                </Container>
            </form>
            {/* <Button variant="primary">Primary</Button>{' '} */}
        </div >
    );
}

export default Login;