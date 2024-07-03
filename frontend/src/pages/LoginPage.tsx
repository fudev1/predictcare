import { Box, Typography, Container, Paper, Stack, Link, Alert, TextField, Button, AppBar, AlertTitle, Toolbar } from "@mui/material";



    

const LoginPage = () => {
  return (
    <>
        <Box display={"flex"} minHeight={"100vh"}>


            <AppBar color="secondary" position={"sticky"} >
                {/* <Alert severity="success">This is a success Alert.</Alert> */}
                <Toolbar>
                    <Container>
                        <Box component="a">LOGO</Box>
                        <Box>
                            <Link href={"#"}>Test</Link>
                        </Box>
                        <Button> JIJIJI </Button>
                    </Container>

                </Toolbar>
            </AppBar>

           
        </Box>
    </>
  )
}

export default LoginPage