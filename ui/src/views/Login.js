
import '../CSS/login.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux"
import { actionCreators } from "../redux/index";
import { userLogin } from '../api/AuthenticationService';

const Login = () => {

    const [accountypeCheckbox, setAccountypeCheckbox] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const {authSuccess,authenticate,authFailure} = bindActionCreators(actionCreators, dispatch);

    const handleCheckbox = e => {
        setAccountypeCheckbox(e.target.value);
    }

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticate();
        const data = { userName, password};
        userLogin(data).then((response)=>{
            if(response.status===200){
                console.log(response.data);
                authSuccess(response.data);
                history.push('/AccountInfo');
            }
            else{
                authFailure("Something Wrong!Please Try Again")
                
            }
        }).catch((err)=>{
            if(err && err.response){
                switch(err.response.status){
                    case 401:
                        console.log("401 status");
                        authFailure("Authentication Failed.Bad Credentials")
                        break;
                    default:
                        authFailure("Authentication Failed.Bad Credentials")
                }
                }
                else{
                    authFailure("Authentication Failed.Bad Credentials")
                }
        });
        // setIsPending(true);
        // axios.post('http://localhost:8081/login/auth', data)
        //     .then((response) =>{
        //         console.log("Loged In");
        //         console.log("response",response.data.token);
        //         // setIsPending(false);
        //         // history.go(-1);
        //         // history.push('/');
        //         history.push('/AccountInfo')
        //     });
    }

    return (
        <div className="login">
            <form onSubmit = {handleSubmit}>
                <Container>
                    <Row>
                        <h2 className="top-heading" style={{ marginTop: 9 + '%' }}
                        >Login</h2>
                    </Row>
                    <Row style={{ marginTop: 9 + '%' }}>
                        {/* <Col className="choseRole" xs={6}>
                            <div>
                                Admin <input onChange={handleCheckbox} type="radio" name="accountType" value="admin" />
                            </div> */}

                            {/* <Form>
                                
                                    <div key={`default`} className="mb-3">
                                        <Form.Check
                                            type='checkbox'
                                            id={`adminCheck`}
                                            label= {`Admin`}
                                            checked = {adminCheckbox}
                                            onChange={(e) =>{
                                                let checked = e.target.checked;
                                                setAdminCheckbox(adminCheckbox.map);
                                            }}
                                        />
                                    </div>
                                    <p>{adminCheckbox}</p>
    
                            </Form> */}
                        {/* </Col>
                        <Col className="choseRole" xs={6}>

                            <div>
                                User <input onChange={handleCheckbox} type="radio" name="accountType" value="user" />
                            </div>

                        </Col> */}
                    </Row>
                    <Row>
                        <label >Username:</label>
                        <input
                            type="text"
                            required
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        >
                        </input>
                        <label >Password:</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </input>
                        <button>Submit</button>
                    </Row>

                </Container>
            </form>
            {/* <p>{accountypeCheckbox}</p>
            <p>{userName}</p>
            <p>{password}</p> */}
            
            {/* <Button variant="primary">Primary</Button>{' '} */}
        </div >
    );
}

export default Login;