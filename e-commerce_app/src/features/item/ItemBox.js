import React, { useEffect } from 'react'
import AddButton from '../../components/AddButton'
import Header from '../../components/Header'
import ItemList from '../../containers/ItemList'
import { useDispatch, useSelector } from "react-redux"
import { selectItems, readItem } from './itemSlice'

// react hooks
export default function ItemBox() {

    // const [redirect, setRedirect] = useState(false)

    // const logout = async () => {
    //     await request.get('users/signout')
    //     localStorage.setItem('user', '')
    //     setRedirect(true)
    // }
    let items = useSelector(selectItems)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readItem())
    }, [dispatch])
    return (
        <React.Fragment>
            <Header />
            <AddButton />
            <div className="row">
                {items.map((item, index) => <ItemList
                    key={item.id}
                    item={item}
                    no={index + 1}
                />
                )}
            </div>
        </React.Fragment>
    )

}