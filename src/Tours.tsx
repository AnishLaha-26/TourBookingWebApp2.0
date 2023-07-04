import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Menu } from "antd";
import styles from "./styles/homepage.module.css";
import { Descriptions, Image } from 'antd';

const { Header, Content, Footer } = Layout;

function Tours() {
  return (
    <Layout>
      {/* Header */}
      <Header className={styles.headerStyle}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>

      {/* Content */}
      <Content className={styles.contentStyle}>
        <h2>Welcome to our website!</h2>
        <p>Book your dream tour to Thailand today.</p>
        <Button type="primary">Explore Tours</Button>

        {/* Description Sets */}
        <div className={styles.descriptionSets}>
          <Descriptions title="Tour 1" layout="vertical">
            <Descriptions.Item label="Tour Name">Tour 1 Name</Descriptions.Item>
            <Descriptions.Item label="Location">Tour 1 Location</Descriptions.Item>
            <Descriptions.Item label="Duration">Tour 1 Duration</Descriptions.Item>
            <Descriptions.Item label="Price">Tour 1 Price</Descriptions.Item>
            <Descriptions.Item label="Description" span={3}>
              Tour 1 Description
            </Descriptions.Item>
            <Descriptions.Item label="Image" span={3}>
              <Image
                width={200}
                src="https://image-url-for-tour-1.jpg"
              />
            </Descriptions.Item>
          </Descriptions>

          <Descriptions title="Tour 2" layout="vertical">
            <Descriptions.Item label="Tour Name">Tour 2 Name</Descriptions.Item>
            <Descriptions.Item label="Location">Tour 2 Location</Descriptions.Item>
            <Descriptions.Item label="Duration">Tour 2 Duration</Descriptions.Item>
            <Descriptions.Item label="Price">Tour 2 Price</Descriptions.Item>
            <Descriptions.Item label="Description" span={3}>
              Tour 2 Description
            </Descriptions.Item>
            <Descriptions.Item label="Image" span={3}>
              <Image
                width={200}
                src="https://image-url-for-tour-2.jpg"
              />
            </Descriptions.Item>
          </Descriptions>

          {/* Add more tour description sets with images as needed */}
        </div>
      </Content>

      {/* Footer */}
      <Footer className={styles.footerStyle}>
        <p>&copy; 2023 Travel Tourism Thailand. All rights reserved.</p>
        {/* Add other footer elements, such as social media icons or legal information */}
      </Footer>
    </Layout>
  );
}

export default Tours;
