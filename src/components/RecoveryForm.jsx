import React, { useState } from 'react';
import logo from "../assets/logo.png";
import salud from "../assets/salud.jpeg";
import { Form, Input, Button, Modal} from "antd";

function Recoveryform() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onFinish = (values: any) => {
        console.log(values);
      };
      const validateMessages = {
        required: "${label} is required!",
        types: {
          email: "${label} is not a valid email!",
          number: "${label} is not a valid number!",
        },
        number: {
          range: "${label} must be between ${min} and ${max}",
        },
      };
      const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    
    
    return (
      <div className="login">
         <div className="content_logo">
        <img width="550px" src={logo} alt="logo" />
        <img width="550px" src={salud} alt="salud" />
      </div>

      <div className='content_login'>
          <p className='title_login'>Inicia sesión</p>
          <Form
          layout="vertical"
          name="form"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "number"]}
            label="Correo electronico"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Número de celular"
            rules={[{ type: "number" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button style={{marginLeft:'25%'}} type="primary" htmlType="submit"  onClick={showModal}>
              ENVIAR
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Tus datos han sido enviados</p>
        <p>con éxito!</p>
        <p>Enviaremos un código</p>
        <p>de recuperación a tu correo</p>
      </Modal>

      </div>
    );
  }
  
  export default Recoveryform;