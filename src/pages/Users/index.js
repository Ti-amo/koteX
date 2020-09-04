import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import '../../assets/styles/info.css'

import AsideUserLayout from '../../components/layouts/AsideUserLayout'
import Info from './Info'
import Noti from './Noti'
import Watched from './Watched'
import Favorties from './Favorites'

export default ({ match }) => {
    console.log("match", match.path)
    return (
        <main>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <i className="fas fa-home-lg-alt" />
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/product">Product</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Product
      </li>
                </ol>
            </nav>
            {/* END BREADCRUMB */}
            <section className="products">
                <div className="container">
                    <div className="row">
                        <AsideUserLayout />
                        <Switch>
                            <Route path={`${match.path}/noti`} component={Noti} />
                            <Route path={`${match.path}/favorites`} component={Favorties} />
                            <Route path={`${match.path}/watched`} component={Watched} />
                            <Route path={[`${match.path}`, `${match.path}/info`]} component={Info} />
                        </Switch>
                    </div>
                </div>
            </section>
        </main>

    )
}

