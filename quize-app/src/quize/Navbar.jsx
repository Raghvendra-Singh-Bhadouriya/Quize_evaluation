import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <>
        <div style={{border:"1px solid black",
        display:"flex",
        justifyContent:"space-around",
        fontFamily:"sans-serif",
        padding:"1%",
        backgroundColor:"red"
    }}
        >
            <Link style={{textDecoration:'none', color:"black", fontWeight:'bold'}} to="/">Quize SetUp</Link>
            <Link style={{textDecoration:'none', color:"black", fontWeight:"bold"}} to="/leader-board">Leader Board</Link>
        </div>
        
        </>
    )
}

export default Navbar;