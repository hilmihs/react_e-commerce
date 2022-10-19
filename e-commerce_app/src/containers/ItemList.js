
import React from "react"
import { useNavigate } from "react-router-dom"
import { NumericFormat } from 'react-number-format';
export default function ItemList(props) {
    // const [item, setItem] = useState({
    //                  id: props.item.id ? props.item.id : '',
    //                 title: props.item.title || '',
    //                 rate: props.item.rate || '',
    //                 description: props.item.description || '',
    //                 price: props.item.price || '',
    //                 brand: props.item.brand || '',
    //                 detail_product: props.item.detail_product || '',
    //                 like: props.item.like || '',
    //                 image: props.item.image || ''
    // })
    // useEffect(() => {
    //   setItem({
    //     ...item,
    //     props
    //   })
    // }, [props])
    const navigate = useNavigate();
    const detail = () => {
        navigate('/detail', { replace: true, state: props.item });
          }
    return (
        
        <div className="card card-product">
            <img className="card-img-top widthSet heightSet" src="../pictures/macbook.jpeg" alt='img' />
            <div className="card-body">
                <h5 className="card-title">{props.item.title} {props.item.brand}</h5>
               {props.item.rate > 0 ? <span className="fa fa-star checked"></span> : <span className="fa fa-star"></span>} 
                {props.item.rate > 1 ? <span className="fa fa-star checked"></span> : <span className="fa fa-star"></span>} 
                {props.item.rate > 2 ? <span className="fa fa-star checked"></span> : <span className="fa fa-star"></span>} 
                {props.item.rate > 3 ? <span className="fa fa-star checked"></span> : <span className="fa fa-star"></span>} 
                {props.item.rate > 4 ? <span className="fa fa-star checked"></span> : <span className="fa fa-star"></span>} 
                <p className="card-text">{props.item.description}</p>
                <h3><NumericFormat value={props.item.price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} /></h3>
            </div>
            <div className="card-footer text-muted right-side">
                {/* <Link to={'detail'}> */}
                <button className="btn btn-primary light-green" onClick={detail}>DETAIL ITEM</button>
                {/* </Link> */}
                
            </div>
        </div>
    )
}