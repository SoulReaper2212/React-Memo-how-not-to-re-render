import React, { useState } from 'react';
import Messages from '../components/Memo_messages'; //change this import and use the memoized component.... 
import { Container, TextField, Button, Typography, Box, AppBar, Toolbar  } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [opt,setotp]= useState('');
  const [errorMessage, setErrorMessage] = useState('');
 
  
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission (if used in a form)
    
    // Check if username is defined and compare it
    if (username === "A3BO4XLTUKZ894BK") {
      alert("YAYYYYY YOU FINALLY LEARNED THE POWER OF REACT MEMO");
    } else {
      alert("Invalid username"); // Handle cases when the username is not correct
    }
  };
 

  return (
    <>

    
<AppBar position="static" sx={{display: "flex", flexDirection: "row", backgroundColor: 'black', alignContent: "center", alignItems: "center" }}>
  <Toolbar sx={{ width: "100%", flexDirection: "column", alignItems: "center" }}>
    <Typography variant="h6" component="div" sx={{ fontFamily: 'Ubuntu Mono, monospace', textAlign: "center" }}>
      LEARN HOW TO STOP COMPONENTS FROM RE-RENDERING
    </Typography>
    <Typography variant="h6" component="div" sx={{ fontFamily: 'Ubuntu Mono, monospace', textAlign: "center", mt: 1 }}>
      MEMOIZED PAGE
    </Typography>
  </Toolbar>
</AppBar>
    <Container maxWidth="xs">


     
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          marginTop: 4,  
          paddingY: "7%",  
          borderRadius: 2, 
          border: '2px solid black',
          borderWidth: "2%" 
        }}
      >
        <Typography variant="h4" gutterBottom>
          ENTER OTP
        </Typography>
        <form onSubmit={handleLogin} style={{ width: '80%' }}>
          <TextField
            label="OTP"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
         
          <Button type="submit"  variant="contained" color="black" fullWidth >
            Enter OTP
          </Button>

          {errorMessage && (  // Conditionally render the error message
        <Typography sx={{marginTop:"5%"}} color="error">
          {errorMessage}
        </Typography>
      )}

        </form>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 4,
          bgcolor: "white",
          paddingX: "3%",
          paddingY: "7%",
          borderRadius: 2,
          border: '5px solid black',
        }}
      >
        <Messages /> 
      </Box>

    </Container>

    </>
  );
};

export default LoginPage;
