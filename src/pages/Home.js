import {StyledTitle, StyledSubTitle, Avatar2, StyledButton, ButtonGroup} from './../components/Styles';

// logo

import Logo from './../assets/logo-black.png';

const Home = () => {
    return (
       <div>
            <div 
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparant",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start"
            }}>
                <Avatar2 image={Logo} />
            </div>
            <StyledTitle size={65}>
                Welcome to Groupomania
            </StyledTitle>
            <StyledSubTitle size={27}>
                Feel free to explore our page
            </StyledSubTitle>

            <ButtonGroup>
                 <StyledButton to="/login">Login</StyledButton>
                 <StyledButton to="/signup">Signup</StyledButton>
            </ButtonGroup>
       </div>

    );
}

export default Home;