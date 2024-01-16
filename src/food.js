function Food({itemFood}) {
    return(<div className="products">
        {itemFood.map((element => {
            const {id, foodName, price, units, image} = element;
            return (
                <div key={id} className="product-card">
                    <img src={image} width="270px" height="200px" alt="meal"/>
                    <div className="product-info">
                        <h3>{foodName}</h3>
                        <h4>$ {price} {units}</h4>
                    </div>
                </div>
            )
        }))}
    </div>)
}

export default Food;