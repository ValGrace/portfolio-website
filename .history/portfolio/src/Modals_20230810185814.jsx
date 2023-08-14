import {  Button, Typography, Space, Tag, Divider} from "antd"
// import { DiReact, DiFirebase, DiNodejsSmall, DiCss3 } from "react-icons/di"
// import { HiMiniServerStack} from "react-icons/hi2" 

// import { Link} from "react-router-dom"

export const EcomModal = () => {
    
    return (
        <>
       
            <Typography.Title>Ecommerce Web app</Typography.Title>
            <Space size={[0, 3]}>
            <Button href="https://anypay-28455.web.app" target="blank">Live Link</Button>
            <Button href="https://github.com/ValGrace/ecommerce-project">Github Link</Button>
            </Space>
            <Typography.Title>Problem Statement</Typography.Title>
            <Divider />
            <Typography.Text>The traditional brick and mortar shopping experience is often time consuming and limits consumers to geographical constraints. This solution makes a wide variety of products accessible to consumers with the ability to compare options and make purchases from the comfort of their homes.</Typography.Text>
            <Typography.Title>Objective</Typography.Title>
            <Typography.Text>To transform the consumers' shopping experience by addressing the limitations of physical shopping and simplify the purchase process.</Typography.Text>
            <Typography.Title>Technology Used</Typography.Title>
            <Space size={[0, 20]}>
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