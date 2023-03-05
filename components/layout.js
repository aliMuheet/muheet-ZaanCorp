import { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
export default function Layout(props) {
    // Sidebar collapse
    const [collapse, setCollapse] = useState(false);
    const [userCollapse, setUserCollapse] = useState(false);
    const [menuDrop, setMenuDrop] = useState(false);
    const collapseOn = (e) => {
        e.preventDefault();
        setCollapse(!collapse);
    };
    const userCollapseOn = (e) => {
        e.preventDefault();
        setUserCollapse(!userCollapse);
        setMenuDrop(false);
    };
    const menuDropOn = (e) => {
        e.preventDefault();
        setMenuDrop(!menuDrop);
        setUserCollapse(false);
    };
    return (
        <div className={`page-wrapper ${collapse ? "sidebar-collapse" : ""} ${userCollapse ? "user-collapse" : ""} ${menuDrop ? "menu-collapse" : ""}`}>
            <Header collapseOn={collapseOn} userCollapseOn={userCollapseOn} menuDropOn={menuDropOn} />
            <div className="main-wrapper">
                <Sidebar setMenuDrop={setMenuDrop} />
                <main className="main-content">{props.children}</main>
            </div>
        </div>
    );
}
