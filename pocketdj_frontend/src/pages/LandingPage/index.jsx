import "./index.css"



const Landing = () => {
    return (
        <div className="landing_container">
        <a className = "landing_left_box" href="">
        <div className="landing_heading_box_left">
        <h1 className="landing_page_title_left">Admin Portal</h1>
        <h2 className="landing_heading_left">Log in to your account</h2>
        </div></a>
        <a className="landing_right_box" href="">
        <div className="landing_heading_box_right">
        <h1 className="landing_page_title_right">Artist Portal</h1>
        <h2 className="landing_heading_right">Log in to your account</h2>
        </div></a>
        </div>
    );
}
export default Landing;