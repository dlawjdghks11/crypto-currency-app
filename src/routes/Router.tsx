import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";

const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Coins />
            </Route>
            <Route path="/:coinId">
                <Coin />
            </Route>
        </Switch>
    </BrowserRouter>
}

export default Router;