import Btn from "./Btn"

const MainSection = () => {
    return (
        <section className="main-banner">
            <div className="main-sec">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-5">
                            <div className="main-text">
                                <h3>new bag collection</h3>
                                <h1>
                                    Summer 2021
                                    <br />
                                    Collection Lookbook
                                </h1>
                                <Btn text={"VIEW MORE"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSection