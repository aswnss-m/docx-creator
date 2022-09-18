import handleClick from "./HandleClick"
import "./assets/Form.css"
export default function Form() {
    return (
        <div className="form">
            <form action="/"
                onSubmit={handleClick}>
                {/* <table>
                    <tr>
                        <td>
                            Event Name :
                        </td>
                        <td>
                            <input type="text" name="eventName" id="eventName" placeholder="Main Event Name" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Abstract :
                        </td>
                        <td>
                            <input type="text" name="eventAbstract" id="eventAbstract" placeholder="Short info about the event" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Detail :
                        </td>
                        <td>
                            <textarea name="eventDetail" id="eventDetail" cols="30" rows="10" placeholder="Explain What will be covered in the event, What all will you be doing"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Mode :
                        </td>
                        <td>
                            Online : <input type="radio" name="eventMode" id="eventMode" value="Online"/>
                            Offline : <input type="radio" name="eventMode" id="eventMode" value="Offline"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Name :
                        </td>
                        <td>
                            <input type="text" name="eventAuthor" id="eventAuthor" placeholder="Your Name" required/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="submit" value="Submit" />
                        </td>
                    </tr>
                </table> */}
                <div className="formGroup">
                    <div className="inputSet">
                        <label htmlFor="eventName">Event Name</label>
                        <input type="text" name="eventName" required/>
                    </div>
                    <div className="inputSet">
                        <label htmlFor="eventAbstract">Abstract</label>
                        <input type="text" name="eventAbstract" required/>
                    </div>
                    <div className="inputSet">
                        <label htmlFor="eventDetail">Detail</label>
                        <textarea name="eventDetail" id="detailInput"required/>
                    </div>
                    <div className="inputSet" id="radioInput">
                        <label htmlFor="radioSet">Mode</label>
                        <span className="radioSet" id="radioSet">
                            <label htmlFor="r1">Online</label>
                            <input type="radio" name="eventMode" value="Online" id='r1' required/>
                            <label htmlFor="r2">Offline</label>
                            <input type="radio" name="eventMode" value="Offline" id='r2' required/>
                        </span>
                    </div>
                    <div className="inputSet">
                        <label htmlFor="eventAuthor">Your Name</label>
                        <input type="text" name="eventAuthor" required/>
                    </div>
                    <div className="inputSet">
                        <input type="submit" name="eventAuthor" required/>
                    </div>
                </div>
            </form>
        </div>
    )
}
