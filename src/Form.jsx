import React from "react";

export default function Form() {
    const handleClick = (event) => {
        event.preventDefault();
        const eventJSON = {
            "eventName" :  event.target[0].value,
            "eventAbstract" :event.target[1].value,
            "eventDetail" :event.target[2].value,
            "eventMode"  :event.target[3].value?"Online":"Offline",
            "eventAuthor" :event.target[5].value,
        }
        
    }
    return(
        <form action="/" onSubmit={handleClick}>
            <table>
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
                    <tr>
                        <textarea name="eventDetail" id="eventDetail" cols="30" rows="10" placeholder="Explain What will be covered in the event, What all will you be doing"></textarea>
                    </tr>
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
                <tr colspan="2">
                    {/* <button onClick={handleClick}>Submit</button> */}
                    <input type="submit" value="Submit" />
                </tr>
            </table>
        </form>
    )
}