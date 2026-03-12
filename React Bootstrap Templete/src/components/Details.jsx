import Btn from "./Btn"
import Color from "./Color"
import Description from "./Description"
import Star from "./Star"

const Details = () => {
    let star = [
        {
            isFill: true,
        },
        {
            isFill: true,
        },
        {
            isFill: true,
        },
        {
            isFill: false,
        },
        {
            isFill: false,
        },
    ]

    return (
        <section>
            <div className="container">
                <div className="text-center">
                    <h1>Welcome to Oarma Handbags</h1>
                    <p className="mb-5">
                        Thank you for letting me be a part of the work it an unforgetracie is much the more than just much more than unknown in much more than just much more than unknown in printer has been the industry's just printer has beenin industry's unknown in unforgtracie is much just work tastic for res...
                    </p>
                    <Btn text={"SHOP NOW"} />
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <div className="detail-box text-center">
                            <h3>BE STYLISH!</h3>
                            <h2>Modern Handbag</h2>
                            <p className="mb-5">Sale Upto 40% Off</p>
                            <Btn text={"SHOP NOW"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                <div className="row gx-5 gy-md-0 gy-4 align-items-center">
                    <div className="col-md-6">
                        <div className="product-img position-relative">
                            <img src="/images/product-2.jpeg" alt="product" className="img-fluid img-1" />
                            <img src="/images/product-1.jpeg" alt="product" className="img-fluid img-2" />
                            <span className="sale position-absolute bg-danger">
                                <span className="badge text-bg-danger">80%</span>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-details">
                            <Description subTitle="HTC" title="angelica sling large" dsc="HTC Touch - in High Definition. Watch music videos and streaming content in awe-inspiring high definition clarity for a mobile experience you never thought possible. Seductively sl.." />
                            <div className="d-flex gap-5 align-items-center">
                                <div className="d-flex">
                                    {
                                        star.map((data) => {
                                            return <Star isFill={data.isFill} />
                                        })
                                    }
                                </div>
                                <Color />
                            </div>
                            <h5 className="mb-5">
                                <span>$26.00</span>
                                <span className="ms-2">$122.00</span>
                            </h5>
                            <Btn text={"ADD TO CART"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details