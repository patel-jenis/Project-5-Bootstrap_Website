import ContactDetails from "./ContactDetails"
import FooterDetails from "./FooterDetails"
import FooterIcon from "./FooterIcon"

const Footer = () => {
    let ele = [
        {
            icon: "ri-home-4-line",
            dsc: <>
                1093 Marigold Lane <br />
                Coral Way <br />
                Surat
            </>
        },
        {
            icon: "ri-phone-line",
            dsc: `610-403-403`,
        },
        {
            icon: "ri-mail-line",
            dsc: `company@example.com`,
        },
    ]

    let ele2 = [
        {
            title: "About Us",
        },
        {
            title: "Privacy Policy",
        },
        {
            title: "Terms & Conditions",
        },
        {
            title: "Contact Us",
        },
        {
            title: "Returns",
        },
    ]

    let ele3 = [
        {
            title: "My Account",
        },
        {
            title: "Order History",
        },
        {
            title: "Wish List",
        },
        {
            title: "Specials",
        },
        {
            title: "Site Map",
        },
    ]

    let footerIcon = [
        {
            icon: "ri-facebook-fill",
        },
        {
            icon: "ri-twitter-fill",
        },
        {
            icon: "ri-instagram-fill",
        },
        {
            icon: "ri-pinterest-fill",
        },
    ]

    return (
        <footer>
            <div className="py-5">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-xl-3 col-md-6">
                            <div className="upper-footer text-light">
                                <h5>Contact us</h5>
                                <ul className="m-0 p-0 mt-3">
                                    {
                                        ele.map((data) => {
                                            return <ContactDetails icon={data.icon} dsc={data.dsc} />
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="upper-footer text-light">
                                <h5>Information</h5>
                                <ul className="m-0 p-0 mt-3">
                                    {
                                        ele2.map((data) => {
                                            return <FooterDetails title={data.title} />
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="upper-footer text-light">
                                <h5>My Account</h5>
                                <ul className="m-0 p-0 mt-3">
                                    {
                                        ele3.map((data) => {
                                            return <FooterDetails title={data.title} />
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="upper-footer text-light">
                                <h5>Newsletter</h5>
                                <p className="clr mb-4">Send Us a Message The Industrys Stan Dard My.</p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Your email address" />
                                    <button className="btn" type="button" id="button-addon2">SIGN UP</button>
                                </div>
                                <div className="d-flex gap-2 mt-4">
                                    <img src="/images/footer-1.png" alt="img" />
                                    <img src="/images/footer-2.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 main-border">
                <div className="container">
                    <div className="d-md-flex justify-content-between">
                        <div>
                            <p className="footer-text m-0 mb-md-0 mb-4">
                                Powered By
                                <a href="#"> OpenCart </a>
                                Next © 2026
                            </p>
                        </div>
                        <div className="text-end">
                            <ul className="d-flex gap-3 m-0 p-0">
                                {
                                    footerIcon.map((data) => {
                                        return <FooterIcon icon={data.icon} />
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>    
        </footer>
    )
}

export default Footer