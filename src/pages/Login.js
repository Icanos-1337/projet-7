
import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText
} from './../components/Styles';

import Logo from './../assets/logo-red.png';

import {Formik, Form} from 'formik';
import {TextInput} from './../components/FormLib';
import * as Yup from 'yup';

// loader spinner
import Loader from 'react-loader-spinner';

import {useNavigate} from 'react-router-dom';

import {FiMail, FiLock} from 'react-icons/fi';

import { login } from '../Api';

const Login = () => {
    const errors = {
        email: "email invalide",
        password: "mot de passe"
    }
    const loginUser = (values) => {
       login(values).then(() => {
        console.log("Connexion Réussi")
        alert("Connexion..")
       })
       .catch((err) => {
        alert("Erreur de connexion")
            console.log("Erreur de connexion", err)
       });
    }
    const history = useNavigate();
    return (
       <div>
        <StyledFormArea>
            <Avatar image={Logo} />
            <StyledTitle color={colors.tertiaire}size={30}>S'identifier</StyledTitle>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={
                    Yup.object({
                        email: Yup.string().email("Invalid email address")
                        .required("Required"),
                        password: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required"),
                    })
                }
                onSubmit={loginUser} >
                {({isSubmitting}) => (
                    <Form>
                        <TextInput 
                            name="email"
                            type="text"
                            label="Adresse e-mail"
                            placeholder="olaga1@example.com"
                            icon={<FiMail />}
                        />

                        <TextInput 
                            name="password"
                            type="password"
                            label="Mot de passe"
                            placeholder="********"
                            icon={<FiLock />}
                        
                        />
                        
                    
                        <ButtonGroup>
                            
                            <StyledFormButton
                                type="submit">Login
                            </StyledFormButton>

                           
                        </ButtonGroup>
                    </Form>
                )}
            </Formik>
            <ExtraText>
                Nouveau chez Groupomania ? <TextLink to="/signup">Créer votre compte</TextLink>
            </ExtraText>
        </StyledFormArea>
        <CopyrightText>
            All rights reserved &copy;2022
        </CopyrightText>
       </div>
    );
};

export default Login;