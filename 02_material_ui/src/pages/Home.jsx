import React from "react";
import { Typography, Button, TextField } from "@mui/material";

function Home() {
  return (
    <div>
      <br />
      <br />

      <h1>MUI Tutorials</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
        quaerat!
      </p>

      <br />
      <br />
      <br />
      <Typography
        variant="h1"
        // custum style bhi use kar sakte hai.
        sx={{
          margin: "7px 0px",
          color: "red",
          backgroundColor: "gray",
        }}
        components={"h3"}
      >
        Techinfo YT
      </Typography>

      <Button
        variant="contained"
        color="error"
        size="large"
        sx={{ margin: "30px" }}
      >
        CLICK ME
      </Button>

      <Button variant="contained">CLICK ME</Button>

      <Button variant="text" disabled>
        CLICK ME
      </Button>

      <Button variant="outlined" onClick={() => alert("You clicked")}>
        CLICK ME for action
      </Button>

      <br />
      <br />
      <br />

    <input type="text" placeholder="name" />

    <br />
    <br />

    <TextField
     type="text"
     placeholder="name"
     variant="standard"
     sx={{margin: '30px'}}
     />

    <br />

    <TextField
     type="text"
     placeholder="name"
     variant="outlined"
     sx={{margin: '30px'}}
     />

    <br />

    <TextField
     type="text"
     placeholder="name"
     variant="filled"
     sx={{margin: '30px'}}
     />

    <br />

    <br />
    <br />
    </div>
  );
}

export default Home;
