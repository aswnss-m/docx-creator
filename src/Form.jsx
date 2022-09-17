import React from "react";

export default function Form(props) {
    return(
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
                    Online : <input type="radio" name="eventMode" id="eventMode" value="Online" checked/>
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
                <input type="submit" value="Download"/>
            </tr>

        </table>
    )
}