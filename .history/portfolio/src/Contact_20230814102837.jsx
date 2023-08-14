import { Divider, Space } from "antd";
import React, {useState} from "react";
import { LinkedinOutlined} from "@ant-design/icons"
const Contact = () => {
    const [subject, setSubject] = useState("")
    // const [email, setEmail] = useState("")
    const [context, setContext] = useState("")

    const sendEmail = (e) => {
        e.preventDefault()
        window.open(`mailto:gracevalerie1@gmail.com?subject=${subject}&body=${context}`)
    }
    const dividerStyle = {
        color: "white",
        // backgroundColor: "rgba(2, 255, 221, 0.849)",
        // padding: 0,
        // height: "4px"
        
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
            <Divider style={dividerStyle} orientation="left" fill="red">Socials</Divider>
            <Space>
            <LinkedinOutlined size={"2em"}/>
            </Space>
        </form>
        
        </>
    )
}

export default Contact