import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { Typography } from '@mui/material';


function AddCourse(){

	const [title , setTitle] = useState("");
	const [ description, setDescription] = useState("");
	const [ imageLink , setImageLink] = useState(""); 

	return (<div>
			<div style={{ display : "flex", justifyContent : 'center'}}>
				<div style={{
					paddingTop  : 130
					}}> 
					<Typography  variant={"h6"}>
						ADD COURSE 
					</Typography>  
				</div>
			</div>

			<div style={{ display : "flex", justifyContent : 'center'}}>
				<Card variant="outlined"  style={{ 
						width : 400,
						padding : 20
				}}>
					<TextField 
						onChange={(e) =>{
							setTitle(e.target.value);
						}}
						fullWidth={true}
						label="Title" 
						variant="outlined"/>
					<br /> <br />

					<TextField 
						onChange={(e) =>{
							setDescription( e.target.value);
						}}
						fullWidth={true}
						label="Discription" 
						variant="outlined" />
					<br /> <br />
					
					<TextField 
						onChange={(e) =>{
							setImageLink( e.target.value);
						}}
						fullWidth={true}
						label="ImageLink" 
						variant="outlined" />
					<br /> <br />

					<Button  size='large'  variant="contained"
						onClick={ async ()=>{
							const res = await axios.post( "http://localhost:3000/admin/courses", {
								title : title ,
								description : description,
								imageLink : imageLink,
								published : true
							},{
								headers : {
									"Content-type": "application/json",
									"Authorization": "Bearer "+ localStorage.getItem("token")
								}
							});
							alert("course added");							
						}}> Add Course</Button>
				</Card>
			</div>
		</div>
	)
}

export default AddCourse;