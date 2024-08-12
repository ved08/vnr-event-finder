import "./Event.css"


const Event = (props) => {

    const registerEvent = () => {
        console.log("registering for the event")
    }
    return(
        <div>
            <div className="Banner-img">
                <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/66aa0484e3d40_hul-lime-season-xvi.webp?d=1280x371"/>
            </div>
            <div className="Event-details">
                <div className="Event-content">
                    <h1>Title</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, pariatur perferendis accusamus dignissimos dolor tempore quis temporibus ullam officiis non aspernatur maiores doloribus repellendus, perspiciatis voluptatem dolorum corporis. Esse, natus
                    </p>
                </div>
                <div className="Event-register">
                    <button className="Register-btn" onClick={registerEvent()}>Register</button>
                </div>
            </div> 
        </div>
    )
}

export default Event