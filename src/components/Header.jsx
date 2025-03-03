import { NavLink } from "react-router"
function Header() {
    return (
        <>
            <div className="header">
                <h1>FloraGuard</h1>
                <h3>Your Ultimate Guide to Plant Health & Disease Prevention</h3>
            </div>

            <div className="navbar" style={{ display: "flex" }}>
                <div className="a"><NavLink to={"/"}>Home</NavLink></div>
                <div className="a"><NavLink to={"/plants-list"}>Plants list</NavLink> </div>
                <div className="a"><NavLink to={"/disease-list"}>Diseases list</NavLink> </div>
            </div>
        </>

    )
}
export default Header;