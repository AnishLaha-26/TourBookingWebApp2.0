import { Button, Layout, Menu } from "antd";
import styles from "./styles/homepage.module.css";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Descriptions, Carousel, Card } from 'antd';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Tours from './Tours'; // Import the Tours component from tours.tsx



const { Header, Content, Footer } = Layout;
const { Meta } = Card;

function App() {
  const navigate = useNavigate();
  
  const goToTours = () => {
  
    // This will navigate to second component
    navigate('/tours'); 
  };

  return (
    <Router>
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
      <Content className={styles.content}>
        <h2>Welcome to our website!</h2>
        <p>Book your dream tour to Thailand today.</p>
        <button onClick={goToTours}>Explore Tours</button>


        <div className={styles.carouselContainer}>
          {/* Popular Tours */}
          <Carousel autoplay>
            <div>
              <h3 className={styles.carouselHeading}>Popular Tours</h3>
              <Carousel>
                {/* Popular Tour Cards */}
                <Card
                  className={styles.card}
                  cover={<img alt="Tour Image" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                >
                  <Meta
                    title="Tour 1"
                    description="Date: July 1, 2023 | Time: 10:00 AM"
                  />
                  <div className={styles.cardFooter}>
                    <p>Price: $100</p>
                    <Button type="primary">Book Now</Button>
                  </div>
                </Card>

                <Card
                  className={styles.card}
                  cover={<img alt="Tour Image" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                >
                  <Meta
                    title="Tour 2"
                    description="Date: July 2, 2023 | Time: 2:00 PM"
                  />
                  <div className={styles.cardFooter}>
                    <p>Price: $150</p>
                    <Button type="primary">Book Now</Button>
                  </div>
                </Card>

                {/* Add more popular tour cards */}
                <Card
                  className={styles.card}
                  cover={<img alt="Tour Image" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                >
                  <Meta
                    title="Tour 3"
                    description="Date: July 3, 2023 | Time: 4:00 PM"
                  />
                  <div className={styles.cardFooter}>
                    <p>Price: $120</p>
                    <Button type="primary">Book Now</Button>
                  </div>
                </Card>

                {/* Add more popular tour cards */}
                <Card
                  className={styles.card}
                  cover={<img alt="Tour Image" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                >
                  <Meta
                    title="Tour 4"
                    description="Date: July 4, 2023 | Time: 6:00 PM"
                  />
                  <div className={styles.cardFooter}>
                    <p>Price: $90</p>
                    <Button type="primary">Book Now</Button>
                  </div>
                </Card>
              </Carousel>
            </div>
          </Carousel>

          {/* Day Tours */}
          <Carousel autoplay>
            <div>
              <h3 className={styles.carouselHeading}>Day Tours</h3>
              <Carousel>
                {/* Day Tour Cards */}
                <Card
                  className={styles.card}
                  cover={<img alt="Tour Image" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                >
                  <Meta
                    title="Tour 1"
                    description="Date: July 1, 2023 | Time: 10:00 AM"
                  />
                  <div className={styles.cardFooter}>
                    <p>Price: $100</p>
                    <Button type="primary">Book Now</Button>
                  </div>
                </Card>

                <Card
                  className={styles.card}
                  cover={<img alt="Tour Image" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                >
                  <Meta
                    title="Tour 2"
                    description="Date: July 2, 2023 | Time: 2:00 PM"
                  />
                  <div className={styles.cardFooter}>
                    <p>Price: $150</p>
                    <Button type="primary">Book Now</Button>
                  </div>
                </Card>

                {/* Add more day tour cards */}
                <Card
                  className={styles.card}
                  cover={<img alt="Tour Image" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                >
                  <Meta
                    title="Tour 3"
                    description="Date: July 3, 2023 | Time: 4:00 PM"
                  />
                  <div className={styles.cardFooter}>
                    <p>Price: $120</p>
                    <Button type="primary">Book Now</Button>
                  </div>
                </Card>

                {/* Add more day tour cards */}
                <Card
                  className={styles.card}
                  cover={<img alt="Tour Image" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                >
                  <Meta
                    title="Tour 4"
                    description="Date: July 4, 2023 | Time: 6:00 PM"
                  />
                  <div className={styles.cardFooter}>
                    <p>Price: $90</p>
                    <Button type="primary">Book Now</Button>
                  </div>
                </Card>
              </Carousel>
            </div>
          </Carousel>

          {/* Night Tours */}
          <Carousel autoplay>
            <div>
              <h3 className={styles.carouselHeading}>Night Tours</h3>
              <Carousel>
                {/* Night Tour Cards */}
                <Card
                  className={styles.card}
                  cover={<img alt="Tour Image" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                >
                  <Meta
                    title="Tour 1"
                    description="Date: July 1, 2023 | Time: 10:00 AM"
                  />
                  <div className={styles.cardFooter}>
                    <p>Price: $100</p>
                    <Button type="primary">Book Now</Button>
                  </div>
                </Card>

                <Card
                  className={styles.card}
                  cover={<img alt="Tour Image" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                >
                  <Meta
                    title="Tour 2"
                    description="Date: July 2, 2023 | Time: 2:00 PM"
                  />
                  <div className={styles.cardFooter}>
                    <p>Price: $150</p>
                    <Button type="primary">Book Now</Button>
                  </div>
                </Card>

                {/* Add more night tour cards */}
                <Card
                  className={styles.card}
                  cover={<img alt="Tour Image" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                >
                  <Meta
                    title="Tour 3"
                    description="Date: July 3, 2023 | Time: 4:00 PM"
                  />
                  <div className={styles.cardFooter}>
                    <p>Price: $120</p>
                    <Button type="primary">Book Now</Button>
                  </div>
                </Card>

                {/* Add more night tour cards */}
                <Card
                  className={styles.card}
                  cover={<img alt="Tour Image" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                >
                  <Meta
                    title="Tour 4"
                    description="Date: July 4, 2023 | Time: 6:00 PM"
                  />
                  <div className={styles.cardFooter}>
                    <p>Price: $90</p>
                    <Button type="primary">Book Now</Button>
                  </div>
                </Card>
              </Carousel>
            </div>
          </Carousel>
        </div>
      </Content>

      {/* Footer */}
      <Footer className={styles.footerStyle}>
        <Descriptions title="Contact Information">
          <Descriptions.Item label="Email">contact@tours.com</Descriptions.Item>
          <Descriptions.Item label="Phone">123-456-7890</Descriptions.Item>
          <Descriptions.Item label="Address">
            123 Main Street, City, Country
          </Descriptions.Item>
        </Descriptions>
      </Footer>
    </Layout>


    <Routes>
      <Route path="/tours" element={<Tours />} />
    </Routes>
    
  
  </Router>
  );
}

export default App;
