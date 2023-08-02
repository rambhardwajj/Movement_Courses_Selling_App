import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { Typography } from '@mui/material';
import moveImgg from './moveee.jpeg'
import axios from 'axios';
function SignIn(){
	const [email , setEmail] = useState("");
	const [password, setPassword] =  useState("");
	return <div style={{ backgroundImage: `url(${moveImgg})`, backgroundSize: 'cover',    minHeight: '100vh' }}>
		<div style={{  display : "flex", justifyContent : 'center'}}>
			<div style={{ paddingTop  : 60  }}> 
				<Typography  borderRadius={2} padding={2} bgcolor={'black'} fontFamily={'Impact, sans-serif'} color={ '#eeeeee' }  variant={"h4"}>
					Welcome Back to course App ,  
					<br />
					Sign In below 
				</Typography>  
				<br /> <br />
			</div>
		</div>
		<div style={{ display : "flex", justifyContent : 'center'}}>
			<Card variant="outlined"  style={{ 
					borderRadius: 10,
					backgroundColor: 'black',
					width : 400,
					padding : 20
			}}>
      			<TextField 
					style={{  borderRadius:10,  backgroundColor: '#eeeeee'}}
					onChange={(e) =>{
						setEmail(e.target.value);
					}}
					fullWidth={true}
					label="Email " 
					variant="outlined"/>
				<br /> <br />
				<TextField 
					style={{  borderRadius:10,  backgroundColor: '#eeeeee'}}
					onChange={(e) =>{
						setPassword( e.target.value);
					}}
					fullWidth={true}
					label="Password" 
					variant="outlined" />
				<br />
				<br />

				<Button size='large' variant="contained"
					 onClick={async () => {
                        const res = await axios.post("http://localhost:3000/admin/login", {
                            username: email,
                            password: password
                        }, {
                            headers: {
                                "Content-type": "application/json"
                            }
                        });
                        const data = res.data;
                        localStorage.setItem("token", data.token);
                        window.location = "/courses"

					}}> Sign In</Button>
			</Card>
		</div>
	</div>
}

export default SignIn;