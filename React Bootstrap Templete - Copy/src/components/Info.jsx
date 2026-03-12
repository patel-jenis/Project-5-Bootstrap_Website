import InfoCard from "./InfoCard"

const Info = () => {
    let elements = [
        {
            icon: "ri-truck-line",
            title: "Free Shipping & Returns",
            dsc: "Lorem Ipsum is simply dummy text of the typesetting indus...",
        },
        {
            icon: "ri-history-line",
            title: "Longtime Warranty",
            dsc: "Lorem Ipsum is simply dummy text of the typesetting indus...",
        },
        {
            icon: "ri-hand-coin-line",
            title: "money bank guarantee",
            dsc: "Lorem Ipsum is simply dummy text of the typesetting indus...",
        },
    ] 

    return (
        <section className="px-sm-0 px-3">
            <div className="container">
                <div className="row info-box">
                    {
                        elements.map((data) => {
                            return <InfoCard title={data.title} dsc={data.dsc} icon={data.icon} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Info