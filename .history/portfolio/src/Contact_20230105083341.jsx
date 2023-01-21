import React, {useState} from "react";

const Contact = () => {
    const [subject, setSubject] = useState("")
    // const [email, setEmail] = useState("")
    const [context, setContext] = useState("")

    const sendEmail = (e) => {
        e.preventDefault()
        window.open(`mailto:gracevalerie1@gmail.com?subject=${subject}&body=${context}`)
    }
    return (
        <>
        <form onSubmit={sendEmail} className="email-form">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" value={subject} onChange={e => setSubject(e.target.value)}/>
            
            {/* <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/> */}
            <label htmlFor="context"></label>
            <textarea name="context" id="context" value={context} onChange={e => setContext(e.target.value)}/>
            <input type="submit" value="send" />
        </form>
        {/* <button onClick={sendEmail}>Email me</button> */}
        </>
    )
}

export default Contact