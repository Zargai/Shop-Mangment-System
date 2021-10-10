import { Layout, Spin } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AppHeader from "../components/AppHeader";
import Sidebar from "../components/Sidebar";
import ContentDiv from "./dashboard/ContentDiv";
import '../App.css'
import numl from '../numl.jpg'

const { Header, Content, Sider } = Layout;
function AppLayout() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const loginHandler = () => {
      const token = localStorage.getItem("token");
      if (token == null) return history.push("/login");
    };
    return loginHandler();
  }, [history]);

  return loading ? (
    <Spin
      size="large"
      style={{
        position: "absolute",
        top: "47%",
        right: "50%",
        transform: "translate(0, -50%)",
      }}
    />
  ) : (
    <Layout   style={{backgroundAttachment:'fixed'}}>
   
      <Layout   style={{backgroundAttachment:'fixed'}}>
        <Sider
          style={{
            overflow: "auto",
            height: "auto",
            left: 0,
            
          }}
        >
          <Sidebar />
        </Sider>
        <Layout
        style={{backgroundAttachment:'fixed'}}
        >
         
            <AppHeader />
           
          <Content
            style={{
              // backgroundImage:`url(${numl})`,
              // backgroundSize:"cover",
              // backgroundPosition:"center",
              // backgroundAttachment:"fixed",
              height:"auto",
              width:'auto',
              margin: 0,
              minHeight: 599,
              align: "center",
              
              }}
          >
              <div class="bg-gradient-primary">
            <ContentDiv  />
              </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
