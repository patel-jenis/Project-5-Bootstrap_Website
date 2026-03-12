import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import HeaderMenus from './HeaderMenus'

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let elements = [
        {
            menuTitle: "Stylish Bag",
        },
        {
            menuTitle: "Bum Bags",
        },
        {
            menuTitle: "Handbags",
        },
        {
            menuTitle: "Leather Bag",
        },
        {
            menuTitle: "Hobos",
        },
        {
            menuTitle: "More",
        },
    ]

    return (
        <header className='position-fixed top-0 start-0 w-100'>
            <div className="container">
                <div className='d-flex justify-content-between align-items-center py-3'>
                    <div>
                        <img src="/images/logo.png" alt="logo" />
                    </div>
                    <ul className='nav-menus d-xl-flex d-none align-items-center gap-5 m-0'>
                        {
                            elements.map((data) => {
                                return <HeaderMenus menmenuTitle={data.menuTitle} />
                            })
                        }
                    </ul>
                    <ul className='nav-social d-sm-flex d-none align-items-center gap-3 m-0'>
                        <li>
                            <button className='border-0 bg-transparent'>
                                <i className="ri-search-line"></i>
                            </button>
                        </li>
                        <li>
                            <a href="#">Sign In</a>
                        </li>
                        <li>
                            <button className='border-0 bg-transparent d-flex gap-2 align-items-center'>
                                <i className="ri-shopping-bag-line position-relative">
                                    <span className="cart-bedge position-absolute translate-middle badge rounded-pill">
                                        0
                                    </span>
                                </i>
                                <span>$0.00</span>
                            </button>
                        </li>
                    </ul>
                    <Button variant="primary" className='menu-btn d-sm-none me-4' onClick={handleShow}>
                        <i className="ri-menu-line" />
                    </Button>
                </div>
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div>
                            <img src="/images/logo.png" alt="logo" />
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='nav-menus offcanvas-menus p-0 m-0'>
                        {
                            elements.map((data) => {
                                return <HeaderMenus menmenuTitle={data.menuTitle} />
                            })
                        }
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    )
}

export default Header