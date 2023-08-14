import { Modal, Button, Typography, Space, Tag} from "antd"
import { DiReact } from "react-icons/di"
import { useState } from "react"
// import { Link} from "react-router-dom"

export const EcomModal = () => {
    const [ecomModalOpen, setEcomModalOpen] = useState("false")
    return (
        <Modal title="Ecommerce marketplace"
        centered
        open={ecomModalOpen}
        onOk={() => setEcomModalOpen(false)}
        >
            <Typography.Title>Ecommerce Web app</Typography.Title>
            <Button><a href="https://anypay-28455.web.app" target="blank">Live Link</a></Button>
            <Button>Github Link</Button>
            <Typography.Title>Problem Statement</Typography.Title>
            <br ></br>
            <Typography.Text>The traditional brick and mortar shopping experience is often time consuming and limits consumers to geographical constraints. This solution makes a wide variety of products accessible to consumers with the ability to compare options and make purchases from the comfort of their homes.</Typography.Text>
            <Typography.Title>Objective</Typography.Title>
            <Typography.Text>To transform the consumers' shopping experience by addressing the limitations of physical shopping and simplify the purchase process.</Typography.Text>
            <Typography.Title>Technology Used</Typography.Title>
            <Space size={[0, 8]} wrap>
              <Tag icon={<DiReact />} color="green">React</Tag>
              <Tag icon={""} color="green">Firebase</Tag>
              <Tag>Nodejs</Tag>
              <Tag>Serverless Framework</Tag>
              <Tag>CSS</Tag>
              <Tag>Redux</Tag>
              
            </Space>
            </Modal>

       
    )
}