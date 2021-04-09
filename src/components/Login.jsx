import logo from "../assets/logo.png";
import salud from "../assets/salud.jpeg";
import { Form, Input, Button} from "antd";
import { Link } from 'react-router-dom';

function Login() {
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
            label="Número de celular"
            rules={[{ type: "name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Contraseña"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button style={{marginLeft:'25%'}} type="primary" htmlType="submit">
              INICIAR SESIÓN
            </Button>
          </Form.Item>
        </Form>
        <div className='container_recuperación'>
        <Link style={{color:'black'}} to="/recovery"><p>¿Olvidaste tu contraseña?</p></Link>
        <Link style={{color:'black'}} to="/recovery-number"><p>¿Cambiaste de número?</p></Link>
        <p>¿No tienes cuenta? <span> <Link to="/form">Registrate</Link></span></p>
        </div>
      </div>
      </div>
    );
  }
  
  export default Login;