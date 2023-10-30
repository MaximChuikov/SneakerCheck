import React from 'react';
import {Layout, Row} from "antd";
import Navbar from "../components/Navbar";
import {Outlet} from "react-router-dom";


const AppContainer = () => {
    return (
        <Layout>
            <Layout.Header>
              <a href={'/'}><Navbar/></a>
            </Layout.Header>
            <Layout.Content style={{minHeight: 'calc(100vh - 64px - 75px)'}}>
                <Outlet/>
            </Layout.Content>
            <Layout.Footer style={{height: '75px'}}>
                <Row justify={'center'}>
                    Sneakers App @2023 Created by Muzhiki
                </Row>
            </Layout.Footer>
        </Layout>
    );
};

export default AppContainer;