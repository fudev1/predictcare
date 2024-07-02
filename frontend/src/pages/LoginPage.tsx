import { Box, Typography, Container, Paper, Stack, Link, Alert, TextField, Button, AppBar, AlertTitle, Toolbar } from "@mui/material";
import App from "../App";



const LoginPage = () => {
  return (
    <>
        <Box display={"flex"} minHeight={"100vh"}>


            <AppBar position={"sticky"} >
                {/* <Alert severity="success">This is a success Alert.</Alert> */}
                <Toolbar>
                    <Container>
                        <Box component="a">LOGO</Box>
                        <Box>
                            <Link href={"#"}>Test</Link>
                        </Box>
                    </Container>

                </Toolbar>
            </AppBar>

           
        </Box>
    </>
  )
}

export default LoginPage