import Btn from "./Btn"
import Description from "./Description"

const Offbanner = () => {
    return (
        <section className="pt-5">
            <div className="offbanner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-7 col-md-9">
                            <div className="product-details extra">
                                <Description subTitle="Sporty bagpack bag" title="New Leather bagpack" dsc="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum in has been the industry's standard dummy text ever since the typesetti." />
                                <div className="mt-5">
                                    <Btn text={"SHOP NOW"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offbanner