
import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText
} from './../components/Styles';

import Logo from './../assets/logo-red.png';

import {Formik, Form} from 'formik';
import {TextInput} from './../components/FormLib';
import * as Yup from 'yup';

// loader spinner
import Loader from 'react-loader-spinner';

//auth

import {connect} from 'react-redux';
import {signupUser} from './../auth/actions/userActions';
import {useNavigate} from 'react-router-dom';

import {FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi';

const Signup = ({signupUser}) => {
    const history = useNavigate();
    return (
       <div>
        <StyledFormArea>
            <Avatar image={Logo} />
            <StyledTitle color={colors.tertiaire}size={30}>Créer un compte</StyledTitle>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    repeatPassword: "",
                    dateOfBirth: "",
                    name: ""
                }}
                validationSchema={
                    Yup.object({
                        email: Yup.string().email("Invalid email address")
                        .required("Required"),
                        password: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required"),
                        name: Yup.string().required("Required"),
                        dateOfBirth: Yup.date().required("Required"),
                        repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords must match")
                    })
                }
                onSubmit={(values, { setSubmitting, setFieldError }) => {
                    console.log(values);
                    signupUser(values, history, setFieldError, setSubmitting)
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <TextInput 
                            name="name"
                            type="text"
                            label="Prénom et nom de famille"
                            placeholder="Robert Durden"
                            icon={<FiUser />}
                        />
                        <TextInput 
                            name="email"
                            type="text"
                            label="Adresse e-mail"
                            placeholder="Robert1@example.com"
                            icon={<FiMail />}
                        />
                        <TextInput 
                            name="dateOfBirth"
                            type="date"
                            label="Date de naissance"
                            icon={<FiCalendar />}
                        />

                        <TextInput 
                            name="password"
                            type="password"
                            label="Mot de passe"
                            placeholder="********"
                            icon={<FiLock />}
                        
                        />

                        <TextInput 
                            name="repeatPassword"
                            type="password"
                            label="Confirmer mot de passe"
                            placeholder="********"
                            icon={<FiLock />}
                        
                        />
                    
                        <ButtonGroup>
                            
                            <StyledFormButton
                                type="submit">Créer un compte
                            </StyledFormButton>

                           
                        </ButtonGroup>
                    </Form>
                )}
            </Formik>
            <ExtraText>
            Vous possédez déjà un compte ?<TextLink to="/login"> Identifiez-vous</TextLink>
            </ExtraText>
        </StyledFormArea>
        <CopyrightText>
            All rights reserved &copy;2022
        </CopyrightText>
       </div>
    );
};

export default connect(null, {signupUser}) (Signup);