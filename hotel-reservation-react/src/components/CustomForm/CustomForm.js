import React from 'react'

import { Form } from  'antd'



const CustomForm = (props) => {
    return (
        <div className="px-4">
            <Form
                // labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={ props.onFinish }
                autoComplete="off"
                >
                { props.children }
            </Form>
        </div>
    )
}

export default CustomForm
