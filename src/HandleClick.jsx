import React from "react";
import { saveAs } from "file-saver"
import { Document , Paragraph, Packer,TextRun, HeadingLevel}  from "docx";

export default function handleClick(event){
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