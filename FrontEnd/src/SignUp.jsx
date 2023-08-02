import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { Typography } from '@mui/material';
import moveImgg from './movee.jpeg'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';

function SignUp(){
	const [email , setEmail] =  useState("");
	const [password, setPassword] =  useState("");
	return <div  >
	<div style={{ height:"82.7vh", backgroundColor:"#3c3c3c",  display: 'flex', justifyContent : 'space-evenly' , alignItems : 'center'}} >
		<div style={{ width: 500}}>
			<Card sx={{ maxWidth: 645 }}>
				<CardMedia
					sx={{  height: 340 }}
					image={moveImgg}
				/>
				<div style={{backgroundColor:"#d3d3d3", display: 'flex', justifyContent:'space-around', alignItems : 'center'}}>
					<CardContent>
						<Typography  fontFamily={"Georgia"} gutterBottom variant="h4" component="div">
							Intense Movement Training
						</Typography>
					</CardContent>
				</div>
			</Card>
		</div>
		<div>
			<div style={{ display : "flex", justifyContent : 'center'}}>
				<div style={{
					display : 'flex', 
					flexDirection : "column",
					justifyContent : 'space-around',
					paddingTop  : 0,
					paddingBottom : 10,
					alignItems: 'center'
					}}> 
					<Typography color={'#b4b4b4'} fontFamily={"Georgia"} variant={"h5"}>
						Welcome to Movement Intensive
					</Typography>  
					<Typography color={'#b4b4b4'} fontFamily={"Georgia"} variant={"h5"}>
						 Sign Up below 
					</Typography>  
				</div>
			</div>

			<div style={{  display : "flex", justifyContent : 'center'}}>
				<Card variant="outlined"  style={{ 
						backgroundColor: "#d3d3d3",
						border: "2px",
						width : 400,
						padding : 20
				}}>
					<div style={{ borderRadius:"0.5rem",  backgroundColor:"white"}}>
						<TextField 
							onChange={(e) =>{
								setEmail(e.target.value);
							}}
							
							fullWidth={true}
							label="Email " 
							variant="outlined"/>
					</div>
						<br /> <br />
					<div style={{ borderRadius:"0.5rem",  backgroundColor:"white"}}>
						<TextField 
							onChange={(e) =>{
								setPassword( e.target.value);
							}}
							fullWidth={true}
							label="Password" 
							variant="outlined" />
					</div>
					
					<br />
					<br />

					<Button size='large' variant="contained" color='success'
						onClick={ async ()=>{
							const res = await axios.post( "http://localhost:3000/admin/signup", {
								username : email ,
								password : password
							
							})
							const data = res.data;
							localStorage.setItem("token", data.token);
							window.location = "/courses"
							console.log(data);

						}}> Sign Up</Button>
				</Card>
			</div>
		</div>

	</div>
	</div>
}

export default SignUp;