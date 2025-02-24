import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";

export const BASE_URI = "/react-masterclass"

const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path={BASE_URI}>
                <Coins />
            </Route>
            <Route path={`${BASE_URI}/:coinId`}>
                <Coin />
            </Route>
        </Switch>
    </BrowserRouter>
}

export default Router;