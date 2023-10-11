import React from 'react'

function Card() {
    const options = [1,2,3,4,5,6]
    const quantity = [{name:'Quarter'},{name:'Half'},{name:"Full"},{name:"Medium"}]
    
    
    return (
        <div><div><div className="card" style={{ "width": "18rem" }}>
            <img src="https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035-750x500.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Description about Food</p>
                <div className='container' ></div>
                <select className=' h-15 m-2  rounded-top rounded-bottom ' style={{ 'backgroundColor': '#7ad461' }} >
                    {options.map((option, index) => {
                        return (
                            <option key={index} value={option}  >
                                {option}
                            </option>
                        )
                    })}

                </select>
                <select className=' h-15 m-2  rounded-top rounded-bottom ' style={{ 'backgroundColor': '#7ad461' }} >
                    {quantity.map((quant, index) => {
                        return (
                            <option key={index} value={quant.name} >{quant.name}</option>
                        )
                    })}

                </select>
                <div className='d-inline fs-5 h-100' >Total Price</div>


            </div>
        </div></div></div>
    )
}

export default Card