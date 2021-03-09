import React, {useState} from 'react';
import {Layout, Form, Button, Input, Typography, Image} from 'antd'

const {Header, Content} = Layout;
const {Title, Text} = Typography;

const FormLayout = {
    labelCol: {span: 8},
    wrapperCol : {span: 10}
}

const ButtonLayout ={
    wrapperCol: {offset: 4, span: 16}
}

function Component(){
    const [ShowForm, SetShowForm] = useState(true);
    const [ShowImg, SetShowImg] = useState(false);

    const handleClick = (e) => {
        console.log(ShowForm)
        SetShowForm(!ShowForm)
    }

    const handleInput = (e) => {
        const {value, } = e.target;
        if (value.length >= 20) {
            SetShowImg(true)
        } else {
            SetShowImg(false)
        }
        console.log(ShowImg)
    }


    return (
        <Layout class="layout">
            <Header>
                <Title type="warning">Week 2 Assignment</Title>
            </Header>
            <Content style={{padding: '50px 50px'}}>
                <Form
                    {...FormLayout}
                >
                    {ShowForm 
                        ?
                        <Form.Item
                            label="Input Some Text"
                            name="Text"
                        >
                            <Input onChange={handleInput}/>
                        </Form.Item>
                        :
                        ""
                    
                    }
                    <Form.Item
                        {...ButtonLayout}
                    >
                        <Button 
                            type="primary"
                            onClick = {handleClick}
                        >
                            {ShowForm ? "Hide Form" : "Show Form"}
                        </Button>
                    </Form.Item>
                </Form>

                {ShowImg
                    ?
                    <Image
                    
                    width={400}
                    src="https://images.unsplash.com/photo-1615217482859-6b0c8a50129d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    />
                    :
                    ""
                }
            </Content>
        </Layout>
    )
}

export default Component