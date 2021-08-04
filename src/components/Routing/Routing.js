import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Main from "./Main/Main";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import Guarantee from "./UsefulPages/Guarantee/Guarantee";
import Delivery from "./UsefulPages/Delivery/Delivery";
import Payment from "./UsefulPages/Payment/Payment";
import Cooperation from "./UsefulPages/Сooperation/Cooperation";
import ProductsPage from "./ProductsPage/ProductsPage";
import {menu} from '../Header/PopUpMenu/menu'


class Routing extends React.Component {

    componentDidMount() {

    }


    render() {

        const menuCategoriesName = []
        menu.map(elem => {
            menuCategoriesName.push(elem.name)
            elem.submenu.map(elem => {
                menuCategoriesName.push(elem.name)
                elem.submenu.map(elem => {
                  return menuCategoriesName.push(elem.name)
                })
                return elem
            })
            return elem
        })
        return (

            <Switch>
                <Route exact path='/' component={Main}/>
                <Route exact path='/guarantee' component={Guarantee}/>
                <Route exact path='/delivery' component={Delivery}/>
                <Route exact path='/payment' component={Payment}/>
                <Route exact path='/cooperation' component={Cooperation}/>
                {menuCategoriesName.map(elem => (
                    <Route exact path={'/' + elem.replace(/ /, '-')} key={elem}>
                        <ProductsPage />
                    </Route>
                ))}
                <Route component={NotFoundPage}/>
            </Switch>

        )
    }
}

export default Routing