import BtnNew from "./BtnNew"
import Description from "./Description"
import NewCollectionElements from "./NewCollectionElements"

const NewCollection = () => {
    let elements = [
        {
            dsc: "OUTER: CALF LEATHER 100%",
        },
        {
            dsc: "Soft drummed cowhide",
        },
        {
            dsc: "1 gusseted card pocket",
        },
    ]

    let elements2 = [
        {
            dsc: "3 card slots",
        },
        {
            dsc: "One shipping fee",
        },
        {
            dsc: "returns within 14 days",
        },
    ]

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 order-lg-1 order-2">
                        <div className="product-details py-5 ms-sm-5 ps-sm-5 m-0">
                            <Description subTitle="new collection 2021" title="GG Marmont small leather matelassé shoulder bag" dsc="Lorem Ipsum is simply industry fashion dummy text of printing and typesetting  industry the Lorem bag Ipsum in has the been the industry's standard dummy text standard ever since the typesetti." />
                            <div className="d-xl-flex d-none gap-5 mb-4">
                                <div>
                                    {
                                        elements.map((data) => {
                                            return <NewCollectionElements dsc={data.dsc} />
                                        })
                                    }
                                </div>
                                <div>
                                    {
                                        elements2.map((data) => {
                                            return <NewCollectionElements dsc={data.dsc} />
                                        })
                                    }
                                </div>
                            </div>
                            <BtnNew text="SHOP NOW" />
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1 p-0">
                        <div className="collection-img">
                            <img src="/images/collection.jpeg" alt="img"  />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewCollection