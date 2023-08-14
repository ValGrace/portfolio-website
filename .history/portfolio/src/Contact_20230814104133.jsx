import { Divider, Space } from "antd";
import React, {useState} from "react";
import { LinkedinOutlined, GithubOutlined} from "@ant-design/icons"
const Contact = () => {
    const [subject, setSubject] = useState("")
    // const [email, setEmail] = useState("")
    const [context, setContext] = useState("")

    const sendEmail = (e) => {
        e.preventDefault()
        window.open(`mailto:gracevalerie1@gmail.com?subject=${subject}&body=${context}`)
    }
    const dividerStyle = {
        color: "rgba(2, 255, 221, 0.849)",
        fontSize: "2em",
        fontFamily: "luns-sans",
        width: "50%"
        
    }
    const iconStyle = {
        color: "rgba(2, 255, 221, 0.849)",
        fontSize: "2em",
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
            <Divider style={dividerStyle} orientation="left">Socials</Divider>
            <Space size={30}>
            <LinkedinOutlined style={iconStyle}/>
            <GithubOutlined style={iconStyle}/>
            </Space>
        </form>
        
        </>
    )
}

export default Contact