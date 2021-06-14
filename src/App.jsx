import './styles/global.scss';
import {RespositoryList} from "../components/RepositoryList";
import {Counter} from "../components/Counter";

export function App() {

    // return <h1>Hello React / Webpack / Developmet Mode/ HTML Plugin</h1>
    return (
        <>
            <RespositoryList />
            <Counter />
        </>

    )
}