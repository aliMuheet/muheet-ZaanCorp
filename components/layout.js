import { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
export default function Layout(props) {
    // Sidebar collapse
    let [collapse, setCollapse] = useState(false);
    const collapseOn = (e) => {
        e.preventDefault();
        setCollapse(!collapse);
    };
    return (
        <div className={`page-wrapper ${collapse ? "sidebar-collapse" : ""}`}>
            <Header collapseOn={collapseOn} />
            <div className="main-wrapper">
                <Sidebar />
                <main className="main">{props.children}</main>
            </div>
        </div>
    );
}
