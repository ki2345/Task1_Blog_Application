import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import React, {useState} from "react";

const labelStyles = {mb:1, mt:2, fontSize: '24px', fontWeight: 'bold'};
const AddBlog = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });
  return (
    <div>
      <form>
        <Box
          border={3}
          borderColor={"linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"}
          borderRadius={10}
          boxShadow={"10px 10px 20px #ccc"}
          padding={3}
          margin={"auto"}
          marginTop={3}
          display="flex"
          flexDirection={"column"}
          width={"50%"}
        >
          <Typography fontWeight={'bold'} padding={3} color="grey" variant="h3" textAlign={'center'}>Post Your Blog</Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField name="title" onChange={handleChange} value={inputs.title} margin="normal" variant="outlined" />
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField name="description" onChange={handleChange} value={inputs.description} margin="normal" variant="outlined" />
          <InputLabel sx={labelStyles}>ImageURL</InputLabel>
          <TextField name="imageURL" onChange={handleChange} value={inputs.imageURL} margin="normal" variant="outlined" />
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBlog;
