import {StyledTitle, StyledSubTitle, Avatar, AvatarProfile, StyledButton, ButtonGroup, StyledFormArea, colors} from './../components/Styles';

// logo

import Logo from './../assets/logo-black.png';

const Profile = () => {
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
                <AvatarProfile image={Logo} />
            </div>
            <StyledFormArea bg={colors.white}>
                <StyledTitle color={colors.primary}size={50}>
                    Welcome, User
                </StyledTitle>

                <StyledSubTitle color={colors.tertiaire}size={20}>
                    Feel free to explore our page
                </StyledSubTitle>

                <ButtonGroup>
                    <StyledButton to="Home">Logout</StyledButton>
                </ButtonGroup>
            </StyledFormArea>
            
       </div>

    );
}

export default Profile;