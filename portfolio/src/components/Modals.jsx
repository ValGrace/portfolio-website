import {  Button, Typography, Space, Tag, Divider} from "antd"
import ecomhome from "../assets/ecom-home.PNG"
import sstg from "../assets/sstg.PNG"
import cmd from "../assets/CMDshot.png"
import docs47 from "../assets/docs47.png"
export const EcomModal = () => {
      const bgStyle = {
        height: "0.5%",
        width: "95%"
      }
    //   const imgStyle = {
    //     height: "95%",
    //     width: "95%"
    //   }
    return (
        <>
       
            <Typography.Title>Ecommerce Web app</Typography.Title>
            <Space>
                   <img src={ecomhome} alt="app cover" style={bgStyle}/>  
           
          </Space>
          <Divider />
          
          <Divider>Use Credentials To Log In </Divider> 
          <Typography.Text>Email: <b>testacc@gmail.com</b></Typography.Text>
          <Typography.Text>Password: <b>Test%%45acc</b></Typography.Text>
            <Space size={20}>
            <Button href="https://anypay-28455.web.app" target="blank">Live Link</Button>
            <Button href="https://github.com/ValGrace/ecommerce-project" type="primary" danger>Github Link</Button>
            </Space>
            <Typography.Title>Problem Statement</Typography.Title>
            <Divider />
            <Typography.Text>The traditional brick and mortar shopping experience is often time consuming and limits consumers to geographical constraints. This solution makes a wide variety of products accessible to consumers with the ability to compare options and make purchases from the comfort of their homes.</Typography.Text>
            <Typography.Title>Objective</Typography.Title>
            <Typography.Text>To transform the consumers' shopping experience by addressing the limitations of physical shopping and simplify the purchase process.</Typography.Text>
            <Typography.Title>Technology Used</Typography.Title>
            <Space size={[0, 20]} wrap>
              <Tag color="green">React</Tag>
              <Tag color="green">Firebase</Tag>
              <Tag color="green">Nodejs</Tag>
              <Tag color="green">Serverless Framework</Tag>
              <Tag color="green">CSS</Tag>
              <Tag color="green">Redux</Tag>
              
            </Space>
           
</>
       
    )
}



export const BlogModal = () => {
    const bgStyle = {
      height: "0.5%",
      width: "95%"
    }
  //   const imgStyle = {
  //     height: "95%",
  //     width: "95%"
  //   }
  return (
      <>
     
          <Typography.Title>Static Site Generator</Typography.Title>
          <Space>
                 <img src={sstg} alt="app cover" style={bgStyle}/>  
        
        </Space>
        <Divider />
        
        
          <Space size={60}>
          <Button href="https://blogsitegrt.onrender.com/login" target="blank">Live Link</Button>
          <Button href="https://github.com/ValGrace/-static-site" type="primary" danger>Github Link</Button>
          </Space>
          <Typography.Title>Problem Statement</Typography.Title>
          <Divider />
          <Typography.Text>Content management can often get complex, which can lead to performance bottlenecks and high maintenance overhead. This solution simplifies the process of web content creation as it ensures optimal performance and ease of maintance for both developers and writers.   </Typography.Text>
          <Typography.Title>Objective</Typography.Title>
          <Typography.Text>To streamline web content creation by automating the generation of static HTML pages from plain text files.</Typography.Text>
          <Typography.Title>Technology Used</Typography.Title>
          <Space size={[0, 20]} wrap>
            <Tag color="purple">React</Tag>
            <Tag color="purple">Firestore</Tag>
            <Tag color="purple">Golang</Tag>
            <Tag color="purple">Docker</Tag>
            <Tag color="purple">CSS</Tag>
            <Tag color="purple">Appwrite</Tag>
            <Tag color="purple">GitHub Actions</Tag>
            
          </Space>
         
</>
     
  )
}

export const DocsModal = () => {
    const bgStyle = {
      height: "0.5%",
      width: "95%"
    }
  //   const imgStyle = {
  //     height: "95%",
  //     width: "95%"
  //   }
  return (
      <>
     
          <Typography.Title>PDF Translator Engine</Typography.Title>
          <Space>
                 <img src={docs47} alt="app cover" style={bgStyle}/>  
        
        </Space>
        <Divider />
        
        
          <Space size={60}>
          <Button href="https://blogsitegrt.onrender.com/login" target="blank">Live Link</Button>
          <Button href="https://github.com/ValGrace/47Docs" type="primary" danger>Github Link</Button>
          </Space>
          <Typography.Title>Problem Statement</Typography.Title>
          <Divider />
          <Typography.Text>Public participation exercise often fails because the target communities are not proficient in English which the default language used to engage with the public. Across many government projects and documents, communities that are not native English or Swahili speakers are often secluded due to the barrier or minimal understanding of the language.    </Typography.Text>
          <Typography.Title>Objective</Typography.Title>
          <Typography.Text>To build a platform that easily translates documents while retaining the original document layout so as to retain the original meaning.</Typography.Text>
          <Typography.Title>Technology Used</Typography.Title>
          <Space size={[0, 20]} wrap>
            <Tag color="purple">Python</Tag>
            <Tag color="purple">Django</Tag>
            <Tag color="purple">Gemini</Tag>
            <Tag color="purple">RAG</Tag>
            
            
          </Space>
         
</>
     
  )
}
export const CMDModal = () => {
    const bgStyle = {
      height: "0.5%",
      width: "95%"
    }
  //   const imgStyle = {
  //     height: "95%",
  //     width: "95%"
  //   }
  return (
      <>
     
          <Typography.Title>Terminals History Database</Typography.Title>
          <Space>
                 <img src={cmd} alt="app cover" style={bgStyle}/>  
        
        </Space>
        <Divider />
        
        
          <Space size={60}>
          <Button href="https://blogsitegrt.onrender.com/login" target="blank">Live Link</Button>
          <Button href="https://github.com/ValGrace/terminal-ui" type="primary" danger>Github Link</Button>
          </Space>
          <Typography.Title>Problem Statement</Typography.Title>
          <Divider />
          <Typography.Text>Public participation exercise often fails because the target communities are not proficient in English which the default language used to engage with the public. Across many government projects and documents, communities that are not native English or Swahili speakers are often secluded due to the barrier or minimal understanding of the language.    </Typography.Text>
          <Typography.Title>Objective</Typography.Title>
          <Typography.Text>To build a platform that easily translates documents while retaining the original document layout so as to retain the original meaning.</Typography.Text>
          <Typography.Title>Technology Used</Typography.Title>
          <Space size={[0, 20]} wrap>
            <Tag color="purple">Golang</Tag>
            <Tag color="purple">SQLite</Tag>
            <Tag color="purple">Powershell</Tag>
                      
            
          </Space>
         
</>
     
  )
}