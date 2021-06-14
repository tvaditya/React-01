export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name ?? 'Not defined'}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.link}>
                Access repository
            </a>
        </li>
    )
}