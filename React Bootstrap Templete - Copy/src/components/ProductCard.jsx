import Color from "./Color"
import Star from "./Star"

const ProductCard = ({ subTitle, title, price, subprice, bag, bag1, isFull, isBadge }) => {
    let star = [
        {
            isFill: isFull,
        },
        {
            isFill: isFull,
        },
        {
            isFill: isFull,
        },
        {
            isFill: isFull,
        },
        {
            isFill: isFull,
        },
    ]

    return (
        <div className="col-lg-3 col-md-6">
            <div>
                <div className="bag-img position-relative">
                    <img src={`${bag}`} className="bag-1" alt="bag" />
                    <img src={`${bag1}`} className="bag-2" alt="bag" />
                    <span className="position-absolute translate-middle badge rounded-pill bg-danger newbedge">
                        {isBadge === true ? "91%" : ""}
                    </span>
                    <span className="position-absolute translate-middle badge rounded-pill newbedge yellow">
                        {isBadge === true ? "On Sale" : ""}
                    </span>
                </div>
                <div className="product-info">
                    <span className="sub-info">{subTitle}</span>
                    <p className="m-0 main-info">{title}</p>
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
                    <h5 className="">
                        <span>{price}</span>
                        <span className="ms-2">{subprice}</span>
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default ProductCard