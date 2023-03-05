export default function PageContentHeader(props) {
    return (
        <>
            <header className="main-content-header">
                <h1 className="page-title">{props.title ? props.title : "Dashboard"}</h1>
                <div className="header-content-wrap">{props.children}</div>
            </header>
        </>
    );
}
