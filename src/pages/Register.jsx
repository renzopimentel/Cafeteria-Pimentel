import styled from "styled-components"

const Container = styled.div`
`
const Wrapper = styled.div`
`
const Title = styled.h1`
`
const Form = styled.form``

const Input = styled.input``;

const Register = () => {
  return (
        <Container>
            <Wrapper>
                <Title>REGÍSTRATE</Title>
                <Form>
                    <Input placeholder="Nombre"/>
                    <Input placeholder="Apellidos"/>
                    <Input placeholder="Mail"/>
                    <Input placeholder="Contraseña"/>
                    <Input placeholder="Confirmar Contraseña"/>
                </Form>

            </Wrapper>
        </Container>
  )
}

export default Register