import PageContentBody from "@/components/pageContentBody";
import PageContentHeader from "@/components/pageContentHeader";
import { useState, useEffect, useRef } from "react";

import Avatar from "@/components/avatar";
import avatarImg from "../public/assets/images/avatar.png";

import Backlog from "@/components/backlog";

export default function Home(props) {
    // Tabs
    const [activeTab, setActiveTab] = useState(1);
    function handleTabClick(index) {
        setActiveTab(index);
    }

    // Filters options
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <PageContentHeader title="Workflow">
                <ul className="workflow-tabs">
                    <li className={activeTab === 1 ? "active" : ""}>
                        <button className="btn btn-sm btn-secondary btn-icon btn-circle" onClick={() => handleTabClick(1)}>
                            <span className="icon zcIcon-Workflow"></span>
                        </button>
                    </li>
                    <li className={activeTab === 2 ? "active" : ""}>
                        <button className="btn btn-sm btn-secondary btn-icon btn-circle" onClick={() => handleTabClick(2)}>
                            <span className="icon zcIcon-Design"></span>
                        </button>
                    </li>
                    <li className={activeTab === 3 ? "active" : ""}>
                        <button className="btn btn-sm btn-secondary btn-icon btn-circle" onClick={() => handleTabClick(3)}>
                            <span className="icon zcIcon-Code"></span>
                        </button>
                    </li>
                    <li className={activeTab === 4 ? "active" : ""}>
                        <button className="btn btn-sm btn-secondary btn-icon btn-circle" onClick={() => handleTabClick(4)}>
                            <span className="icon zcIcon-Annoucement"></span>
                        </button>
                    </li>
                </ul>
                {activeTab === 1 && (
                    <div className={`action-wrapper ${isOpen ? "action-collapse" : ""}`}>
                        <div className="action-drop-holder" ref={dropdownRef}>
                            <button className="action-opener btn btn-sm btn-secondary btn-icon btn-circle" onClick={handleToggle}>
                                <span className="icon zcIcon-Settings"></span>
                            </button>
                            <div className="action-drop">
                                <ul className="users-list">
                                    {props.users.map((user, index) => {
                                        return (
                                            <li key={index}>
                                                <div className="user-box">
                                                    <Avatar image={user.image} size="sm" />
                                                    <span className="user-count">{user.count}</span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <ul className="action-list">
                                    <li>
                                        <button className="btn btn-outline btn-secondary btn-icon btn-lg">
                                            <span className="zcIcon-Pinned text-warning"></span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="btn btn-outline btn-secondary btn-icon btn-lg">
                                            <span className="zcIcon-double-file text-violet"></span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="btn btn-outline btn-secondary btn-lg">
                                            <span className="zcIcon-save"></span>
                                            <span className="btn-text">Views</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="btn btn-outline btn-secondary btn-lg">
                                            <span className="zcIcon-FIlter"></span>
                                            <span className="btn-text">Filter</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="btn btn-outline btn-secondary btn-lg">
                                            <span className="zcIcon-Sort-by"></span>
                                            <span className="btn-text">Sort by</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </PageContentHeader>
            <PageContentBody>
                <div className="tab-content">
                    <div className={`tab-element ${activeTab === 1 ? "active" : ""}`}>
                        <div className="wrokflow-grid">
                            <Backlog />
                        </div>
                    </div>
                    <div className={`tab-element ${activeTab === 2 ? "active" : ""}`}>Tab 2 content</div>
                    <div className={`tab-element ${activeTab === 3 ? "active" : ""}`}>Tab 3 content</div>
                    <div className={`tab-element ${activeTab === 4 ? "active" : ""}`}>Tab 4 content</div>
                </div>
            </PageContentBody>
        </>
    );
}

export async function getStaticProps() {
    // API Request
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const posts = await response.json();
    // return {
    //     props: {
    //         posts,
    //     },
    // };

    const userList = [
        {
            id: "u001",
            image: avatarImg,
            count: 2,
        },
        {
            id: "u002",
            image: avatarImg,
            count: 5,
        },
        {
            id: "u003",
            image: avatarImg,
            count: 1,
        },
        {
            id: "u004",
            image: avatarImg,
            count: 4,
        },
    ];

    return {
        props: {
            users: userList,
        },
    };
}
