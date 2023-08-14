import {  Button, Typography, Space, Tag, Divider} from "antd"
import ecomhome from "./ecom-home.PNG"
import sstg from "./sstg.PNG"
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
          <Button href="https://blogsitegrt.onrender.com/" target="blank">Live Link</Button>
          <Button href="https://github.com/ValGrace/-static">Github Link</Button>
          </Space>
          <Typography.Title>Problem Statement</Typography.Title>
          <Divider />
          <Typography.Text>Content management can often get complex, which can lead to performance bottlenecks and high performance bottlenecks. </Typography.Text>
          <Typography.Title>Objective</Typography.Title>
          <Typography.Text>To streamline web content creation by automating the generation of static HTML pages from plain text files.</Typography.Text>
          <Typography.Title>Technology Used</Typography.Title>
          <Space size={[0, 20]} wrap>
            <Tag color="green">React</Tag>
            <Tag color="green">Firestore</Tag>
            <Tag color="green">Golang</Tag>
            <Tag color="green">Docker</Tag>
            <Tag color="green">CSS</Tag>
            <Tag color="green">appwrite</Tag>
            
          </Space>
         
</>
     
  )
}