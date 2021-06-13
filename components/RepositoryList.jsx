const repositoryName = 'New Repo';

export function RespositoryList() {
    return (
        <section className="repository-list">
            <h1>Respository List</h1>
            <ul>
                <li>
                    <strong>React-01</strong>
                    <p>Starting with React</p>
                </li>

                <li>
                    <strong>{repositoryName}</strong>
                    <p>Starting with React</p>
                </li>

                <li>
                    <strong>React-01</strong>
                    <p>Starting with React</p>
                </li>
            </ul>
        </section>
    )
}