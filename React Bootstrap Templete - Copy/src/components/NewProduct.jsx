import ProductCard from "./ProductCard"

const NewProduct = () => {
    let card = [
        {
            subTitle: "Apple",
            title: "Cassia Satchel Medium",
            price: "$14.00",
            subprice: "$134.00",
            bag: "/images/bag-1.1.jpeg",
            bag1: "/images/bag-1.jpeg",
            isFull: true,
            isBadge: true,
        },
        {
            subTitle: "Hewlett-Packard",
            title: "joy crossbody large",
            price: "$1772.00",
            bag: "/images/bag-2.1.jpeg",
            bag1: "/images/bag-2.jpeg",
            isFull: false,
        },
        {
            subTitle: "Apple",
            title: "Bee & Kin Tech Handbags",
            price: "$10.00",
            subprice: "$2000.00",
            bag: "/images/bag3.1.jpeg",
            bag1: "/images/bag3.jpeg",
            isFull: false,
            isBadge: true,
        },
        {
            subTitle: "Apple",
            title: "Nevenka Floral Handbags Women",
            price: "$1202.00",
            bag: "/images/bag4.jpeg",
            bag1: "/images/bag4.1.jpeg",
            isFull: false,
        },
    ]
    
    return (
        <section className="latest-product py-5">
            <div className="container">
                <h2 className="text-center mb-5 sec-heading">latest product</h2>
                <div className="row gy-4">
                    {
                        card.map((data) => {
                            return <ProductCard subTitle={data.subTitle} title={data.title} price={data.price} subprice={data.subprice} bag={data.bag} bag1={data.bag1} isFull={data.isFull} isBadge={data.isBadge} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default NewProduct