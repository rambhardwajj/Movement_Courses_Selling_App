import { Typography, colors, formHelperTextClasses } from "@mui/material";
import Button  from "@mui/material/Button";
import { blueGrey, lightGreen } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Appbar(){
	// const navigate = useNavigate();
	const [userEmail , setUserEmail]  = useState("");

	useEffect(  ()=> {
		const fetchdata = async () =>{
			const res =  await axios.get("http://localhost:3000/admin/me", {
				headers : {
					"Authorization": "Bearer "+ localStorage.getItem("token")
				}
			})
			const data = res.data;
			console.log(data);
			if( data.username ){
				console.log(data.username)
				setUserEmail(data.username)
			}
		}
		fetchdata();
	}, []);


	if( userEmail ){
		console.log( "userEmail hai ");
		return (
			<div style={{  backgroundColor : "#131313", padding : 10 , display : "flex" , justifyContent : "space-between"}}>
				<Typography fontFamily={'Georgia'} paddingTop={2}  paddingLeft={5} color={"#E2DFD2"} variant= {"h4"}> Training Programs </Typography>
				<div style={{ display : "flex"}}>
					<div style={{ paddingTop: 30,  display:"flex",  color: '#00e676', fontFamily: 'Georgia', padding : 20}}>
 						<div style={{ paddingRight : 6, color : '#00e676' }}> Welcome  </div>	
							{userEmail}  
					</div>
					<div style={{ display:"flex",  padding : 10}}> 
						<Button 
							color="success"
							variant={"contained"}
							onClick={()=>{
								localStorage.setItem( "token",  null);
								window.location = "/addcourse"
							}}
							
						> Add Course </Button>

						<div style={{ padding : 10}}>
							<Button 
								color="error"
								variant={"contained"}
								onClick={()=>{
									localStorage.setItem( "token",  null);
									window.location = "/"
								}}
							> Logout </Button>

						</div>
					</div>
				</div>
			</div>
		)
	}

	console.log( "userEmail nahi hai ");

	return (

		<div style={{   backgroundColor : "#131313", padding : 10 , display : "flex" , justifyContent : "space-between"}}>
			<Typography  fontFamily={"Georgia"}   paddingLeft={3} fontSize={50} variant= {"h6"} color={"white"}> Werk-Ground</Typography>
			<div style={{ paddingTop: 15, display : "flex"}}>
				<div style={{ padding : 10}}>
					<Button 
						variant={"text"}
						onClick={()=>{
							window.location = "/signup"
						}}
						
					> Sign Up </Button>
				</div>
				<div style={{ padding : 10  , paddingRight: 100}}>
					<Button 
					variant="text"
					onClick={()=>{
							window.location = "/signin"
						}}
						> Sign In </Button>
				</div>
			</div>
		</div>
	)
}
export default Appbar;