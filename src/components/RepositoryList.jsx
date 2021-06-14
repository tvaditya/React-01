import {RepositoryItem} from "./RepositoryItem";

import '../styles/repositories.scss';
import {useState, useEffect} from "react";

const repository = {
    name: 'FastAPI',
    description: 'Learning FastApi',
    link: "https://github.com/tvaditya/fastapiproject"
}

export function RespositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/tvaditya/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [repositories]);

    return (
        <section className="repository-list">
            <h1>Respository List</h1>
            <ul>
                <RepositoryItem
                    repository="FAstAPI"
                    description="Learning FastAPI"
                    link="https://github.com/tvaditya/fastapiproject" />
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}