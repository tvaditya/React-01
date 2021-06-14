// const repositoryName = 'New Repo';

import {RepositoryItem} from "./RepositoryItem";

const repository = {
    name: 'FastAPI',
    description: 'Learning FastApi',
    link: "https://github.com/tvaditya/fastapiproject"
}

export function RespositoryList() {
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