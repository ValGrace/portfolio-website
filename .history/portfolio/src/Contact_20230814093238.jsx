import { Divider } from "antd";
import React, {useState} from "react";

const Contact = () => {
    const [subject, setSubject] = useState("")
    // const [email, setEmail] = useState("")
    const [context, setContext] = useState("")

    const sendEmail = (e) => {
        e.preventDefault()
        window.open(`mailto:gracevalerie1@gmail.com?subject=${subject}&body=${context}`)
    }
    const dividerStyle = {
        color: "green",
        borderLeft: "2px solid green"
        
    }
    return (
        <>
        
        <form onSubmit={sendEmail} className="contact-form">
            <br></br>
            <h3>Send a Message</h3>
            {/* <label htmlFor="subject">Subject</label> */}
            <input type="text" name="subject" id="subject" value={subject} onChange={e => setSubject(e.target.value)} placeholder="subject title"/>
            
            {/* <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/> */}
            <label htmlFor="context">Your Message</label>
            <textarea name="context" id="context" value={context} onChange={e => setContext(e.target.value)} placeholder="your message"/>
            <input type="submit" value="send" id="send-button"/>
            <Divider plain style={dividerStyle} color="white">Socials</Divider>
        </form>
        
        </>
    )
}

export default Contact