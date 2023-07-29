import { Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Courses(){
	const [courses , setCourse] = useState([]);
	useEffect( ()=> {
		function callback2(data){
			setCourse(data.courses);
		}
		function callback1(res){
			res.json().then(callback2);
		}
		fetch( "http://localhost:3000/admin/courses", { 
			method: "GET",
			headers: {
				"Authorization" : "Bearer "+ localStorage.getItem("token")
			}
		}).then(callback1)
	}, []);

	return (
		<div>
			<div style={{ backgroundColor: "grey"}}>
				<div style={{ display: "flex",  justifyContent: "center", alignItems: "center"}}>
				   	<Typography padding={5} color={'black'} fontFamily={'Georgia'} variant="h4" > Welcome to Courses</Typography>
				</div>
				<div style={{ padding: 10,  display : "flex",  flexWrap : "wrap" , justifyContent: "center"} }>
					{courses.map( course => {
						return <div style={{ padding : 10}}> <Course  course={course} /> </div> 
					} )}
				</div>
			</div>
		</div>
	)
}

function Course(props){
	return <div>
		<Card  style={{
			backgroundColor: "#F3E5AB", margin : 10, width : 300, minHeight : 200 }}>

			<Typography  fontFamily={'Georgia'} color={"black"} textAlign={"center"} variant="h6" > {props.course.title}  </Typography>
			<br />
			<Typography color={"black"} textAlign={"center"} > {props.course.description}  </Typography>
			<img src= {props.course.imageLink} style={{ height:180, width : 300}} />	
		</Card>
	</div>
}

export default Courses;