import Header from "./header";
import Sidebar from "./sidebar";
export default function Layout(props) {
    return (
        <div>
            <div className="page-wrapper">
                <Header />
                <div className="main-wrapper">
                    <Sidebar />
                    <main className="main">{props.children}</main>
                </div>
            </div>
        </div>
    );
}
