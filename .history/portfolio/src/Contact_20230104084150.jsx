import React, {useState} from "react";

const Contact = () => {
    const [subject, setSubject] = useState("")
    const [email, setEmail] = useState("")
    const [context, setContext] = useState("")

    const sendEmail = () => {
        window.open(`mailto:gracevalerie@gmail.com?subject=${subject}&body=${context}`)
    }
    return (
        <>
        <form>
            <input type="text" name="subject" value={subject} onChange={e => setSubject(e.target.value)}/>
            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="text" name="context" value={context} onChange={e => setContext(e.target.value)}/>
            <input type="submit" value="send" />
        </form>
        <button onClick={sendEmail}>Email me</button>
        </>
    )
}

export default Contact