import { Form, Input, Button, Checkbox } from "antd";
import logo from "../assets/logo.png";
import salud from "../assets/salud.jpeg";
import { Link } from 'react-router-dom';

function Formulario() {
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
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div className="content_Form">
      <div className="content_logo">
        <img width="550px" src={logo} alt="logo" />
        <img width="550px" src={salud} alt="salud" />
      </div>

      <div
        className="content_form"
      >
        <div className="content_form_titles">
          <p className="title_form">Regístrate</p>
          <p className="content_form">
            Completa la información y empieza a trabajarár dentro de nuestra
            plataforma.
          </p>
        </div>
        <Form
          layout="vertical"
          name="form"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Nombre"
            rules={[{ type: "name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "website"]} label="username">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Domicilio completo">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="CURP">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Numero celular">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Contraseña">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Confirmar contraseña">
            <Input />
          </Form.Item>
          <Form.Item>
            <Checkbox onChange={onChange}>Acepto los términos y condiciones de uso de MoviCare.</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              REGISTRARME
            </Button>
          </Form.Item>
        </Form>
        <p style={{textAlign:'center'}}>¿Ya tienes una cuenta? <span> <Link to="/login">Inicia sesión</Link></span></p>
      </div>
    </div>
  );
}
export default Formulario;
