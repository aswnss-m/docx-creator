import React from "react";
import { saveAs } from "file-saver"
import { Document , Paragraph, Packer,TextRun, HeadingLevel}  from "docx";
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

       const doc = new Document({
        sections : [{
            children : [
                new Paragraph({
                    text: eventJSON.eventName,
                    heading: HeadingLevel.TITLE,
                    break:1
                }),
                new Paragraph({
                    text: "Abstract",
                    heading : HeadingLevel.HEADING_3,
                    bold: true,
                }),
                new Paragraph({
                    text: eventJSON.eventAbstract,
                    break : 1
                }),
                new Paragraph({
                    text: "Details",
                    heading: HeadingLevel.HEADING_3,
                    bold : true
                }),
                new Paragraph({
                  text : eventJSON.eventDetail,
                  break : 1  
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text : "Mode : "
                        }),
                        new TextRun({
                            text : eventJSON.eventMode,
                            break : 1
                        })
                    ]
                }),
                new Paragraph({
                    children : [
                        new TextRun({
                            text : "Author : "
                        }),
                        new TextRun({
                            text : eventJSON.eventAuthor,
                            break: 1
                        })
                    ]
                })
            ]
        }]
       })
        Packer.toBlob(doc).then((blob) => {
            saveAs(blob, "example.docx");
        });       
        
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
                <tr colSpan="2">
                    <td>
                        <input type="submit" value="Submit" />
                    </td>
                </tr>
            </table>
        </form>
    )
}