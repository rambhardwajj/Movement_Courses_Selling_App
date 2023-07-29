import { Typography, rgbToHex } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import moveImg from './move.jpeg'

function Home() {
  return (
		<div style={{ backgroundColor : "grey"}}>
			<div style={{   display : 'flex',  justifyContent : 'space-evenly', alignItems : 'center', height : "82vh"}}>
				
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						sx={{ height: 240 }}
						image={moveImg}
					/>
					<div style={{ backgroundColor:'#E2DFD2'  , ailgnItems : 'center'}}>
						<CardContent>
							<Typography  fontFamily={"Georgia"} gutterBottom variant="h5" component="div">
								Intense Movement Training
							</Typography>
							
						</CardContent>
					</div>
				</Card>

				<Card sx={{ maxWidth: 600 }}>
					<div style={{ backgroundColor: "#E2DFD2" }}>
						<CardContent  sx={{ height: 380 }} >
							<div style={{  alignItems : 'center'}}>
								<Typography  fontFamily={"Georgia"}   gutterBottom variant="h5" component="div">
									Footworking 
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Welcome to the intense movement drives Arena , 
									here we provide you with intense Training on different form of Movements 
								</Typography>
								<br />

								<Typography  fontFamily={"Georgia"}   gutterBottom variant="h5" component="div">
									Movement
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Welcome to the intense movement drives Arena , 
									here we provide you with intense Training on different form of Movements 
								</Typography>
								<br />

								<Typography   fontFamily={"Georgia"}  gutterBottom variant="h5" component="div">
									Exploration
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Welcome to the intense movement drives Arena , 
									here we provide you with intense Training on different form of Movements 
								</Typography>
								<br />

								<Typography fontFamily={"Georgia"} gutterBottom variant="h5" component="div">
									Work-Outs
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Welcome to the intense movement drives Arena , 
									here we provide you with intense Training on different form of Movements 
								</Typography>
							</div>
						</CardContent>
					</div>
				</Card>
			</div>	
		</div>
  );
}

export default Home;