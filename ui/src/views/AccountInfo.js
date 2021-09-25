import { useEffect, useState } from "react";
import { fetchUserData } from "../api/AuthenticationService";
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const MainWrapper=styled.div`
    padding-top:40px;
`;

const AccountInfo = () => {

    const [data, setData] = useState({});
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
            history.push('/');
        })
    }, [])

    const logOut=()=>{

        localStorage.clear();
        history.push('/');

    }


    return (
        <Container>
            <MainWrapper>
                <h4>Hello {data && `${data.firstName} ${data.lastName}`}</h4>
                <br></br>
                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 && <Button type="variant">Add User</Button>}
                <br></br>

                <Button style={{ marginTop: '5px' }} onClick={() => logOut()}>Logout</Button>
            </MainWrapper>
        </Container>
    );
}

export default AccountInfo;