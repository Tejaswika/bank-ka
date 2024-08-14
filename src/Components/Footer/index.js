import React from 'react';
import { Layout, Row, Col, Button, Divider } from 'antd';
import { TwitterOutlined, InstagramOutlined, AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import './style.css';

const { Footer } = Layout;

const CustomFooter = () => {
    return (
        <Footer className="footer">
            <div className="container">
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={9}>
                        <div className="social-icons">
                            <TwitterOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
                            <InstagramOutlined style={{ fontSize: '24px' }} />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis.
                            Ut vehicula sed velit a faucibus.
                        </p>
                        <div className='button-container'>
                            <Button type="primary" icon={<AppleOutlined />} size="large" className="credit-button">
                                APP STORE
                            </Button>
                            <Button type="primary" icon={<AndroidOutlined />} size="large" className="credit-button">
                                GOOGLE PLAY
                            </Button>
                        </div>

                    </Col>
                    <Col xs={24} md={5}>
                        <h5 className="footer-title">COMPANY</h5>
                        <ul className="footer-list">
                            <li>About BankKaro</li>
                            <li>Vision and Mission</li>
                            <li>Our Team Members</li>
                            <li>Partners and Investors</li>
                        </ul>
                    </Col>

                    <Col xs={24} md={5}>
                        <h5 className="footer-title">BLOG</h5>
                        <ul className="footer-list">
                            <li>BankKaro Savings</li>
                            <li>Cashless Makes Perfect</li>
                            <li>BankKaro No Interest</li>
                            <li>BankKaro Digital Wallet</li>
                        </ul>
                    </Col>

                    <Col xs={24} md={5}>
                        <h5 className="footer-title">FEATURES</h5>
                        <ul className="footer-list">
                            <li>Card Genius</li>
                            <li>Lounge Finder</li>
                            <li>Beat My Card</li>
                            <li>Compare Cards</li>
                        </ul>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col xs={24} md={9}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</Col>
                    <Col xs={24} md={5}>
                        <h5 className="footer-title">CONTACT</h5>
                        <ul className="footer-list">
                            <li>Contact Us</li>
                            <li>Contact Support</li>
                        </ul>
                    </Col>
                    <Col xs={24} md={5}>
                        <h5 className="footer-title">LEGAL</h5>
                        <ul className="footer-list">
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </Col>
                    <Col xs={24} md={3}>
                        <div className="copyright">
                            © 2024 Bankaro <br />
                            Powered by Pouring Pounds
                        </div>
                    </Col>
                </Row>


            </div>
        </Footer>
    );
};

export default CustomFooter;
