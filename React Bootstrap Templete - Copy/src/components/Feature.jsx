import FeatureBox from "./FeatureBox"
import FeatureBox2 from "./FeatureBox2"

const Feature = () => {
    let elements = [
        {
            title: "Waterproof",
            dsc: "Thank you for letting me be a part of the in work it an uniforgetrace is much unknown in printer has be.",
            imgUrl: "/images/feature-1.png",
        },
        {
            title: "Stain Free",
            dsc: "Thank you for letting me be a part of the in work it an uniforgetrace is much unknown in printer has be.",
            imgUrl: "/images/feature-2.png",
        },
        {
            title: "Worth Presenting",
            dsc: "Thank you for letting me be a part of the in work it an uniforgetrace is much unknown in printer has be.",
            imgUrl: "/images/feature-3.png",
        },
    ]
    let elements2 = [
        {
            title: "Long Lasting",
            dsc: "Thank you for letting me be a part of the in work it an uniforgetrace is much unknown in printer has be.",
            imgUrl: "/images/feature-4.png",
        },
        {
            title: "Leather Made",
            dsc: "Thank you for letting me be a part of the in work it an uniforgetrace is much unknown in printer has be.",
            imgUrl: "/images/feature-5.png",
        },
        {
            title: "Quality Ceritifed",
            dsc: "Thank you for letting me be a part of the in work it an uniforgetrace is much unknown in printer has be.",
            imgUrl: "/images/feature-6.png",
        },
    ]

  return (
    <section className="feature py-5">
        <div className="container">
            <h2 className="mb-5 mt-4 text-center feature-heading">Our Features</h2>
            <div className="row justify-content-center gy-lg-0 gy-5">
                <div className="col-xl-4">
                    {
                        elements.map((data) => {
                            return <FeatureBox title={data.title} dsc={data.dsc} imgUrl={data.imgUrl} />
                        })
                    }
                </div>
                <div className="col-xl-4">
                    <div className="text-center">
                        <img src="/images/feature-main.jpeg" alt="bag" className="img-fluid" />
                    </div>
                </div>
                <div className="col-xl-4">
                    {
                        elements2.map((data) => {
                            return <FeatureBox2 title={data.title} dsc={data.dsc} imgUrl={data.imgUrl} />
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feature