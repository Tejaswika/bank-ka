import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import './style.css';
import { loginAvtar } from '../../s3.Links';

const NavbarComponent = () => {

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item (disabled)
                </a>
            ),
            icon: <SmileOutlined />,
            disabled: true,
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item (disabled)
                </a>
            ),
            disabled: true,
        },
        {
            key: '4',
            danger: true,
            label: 'a danger item',
        },
    ];

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">
                    <span className='grey-logo'>BANK</span><span>KARO</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            Our Products
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            Tools
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                    </ul>
                    <button className="custom-btn btn">
                        <span className="btn-text">Sign In</span>
                        <img
                            src={loginAvtar}
                            alt="avatar"
                            className="btn-avatar"
                        />
                    </button>

                </div>
                
            </div>
        </nav>
    );
}

export default NavbarComponent;
