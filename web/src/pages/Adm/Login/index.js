import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
} from '@material-ui/core';
// import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
// import { Container } from './styles';

const Login = () => (
  <>
    <Box
      display='flex'
      flexDirection='column'
      height='100%'
      justifyContent='center'
    >
      <Container maxWidth='sm'>
        <Formik
          initialValues={{ email: 'usuario@gmail.com', password: 'abc123' }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Informe um email válido!')
              .max(255)
              .required('Campo obrigatório.'),
            password: Yup.string().max(255).required('Campo obrigatório.'),
          })}
          onSubmit={() => {}}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box mb={3}>
                <Typography color='textPrimary' variant='h2'>
                  Acessar
                </Typography>
                <Typography color='textSecundary' variant='body2'>
                  Insira suas credeciais abaixo para acessar o sistema
                </Typography>
              </Box>
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label='Email'
                margin='normal'
                name='email'
                onBlur={handleBlur}
                onChange={handleChange}
                type='email'
                value={values.email}
                variant='outlined'
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label='Senha'
                margin='normal'
                name='password'
                onBlur={handleBlur}
                onChange={handleChange}
                type='password'
                value={values.password}
                variant='outlined'
              />
              <Box my={2}>
                <Button
                  color='primary'
                  disabled={isSubmitting}
                  fullWidth
                  size='large'
                  type='submit'
                  variant='contained'
                >
                  Acessar
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Container>
    </Box>
  </>
);

export default Login;
