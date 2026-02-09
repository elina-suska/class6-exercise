export default function StickerDisplay () {
	return(
		// ---------------- MAIN DIV ----------------
		<div style={{
		display: "flex",
		flexDirection: "column",
		width: "50%",
		padding: "50px",
		backgroundColor: "antiquewhite",
		color: "black",
	}}>
		{/* ---------------- PLACEHOLDER IMAGE ----------------*/}
		<img src="https://placehold.co/600x400"/>

		{/* ---------------- TEXT ----------------*/}
		{/* Title text */}
		<div style={{
			padding: "10px",
		}}>Title</div>
		{/* Dscription text */}
		<div style={{
			padding: "10px",
		}}>Description</div>
	</div>
	)	
}