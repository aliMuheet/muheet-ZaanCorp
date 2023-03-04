import { useState } from "react";
import Avatar from "./avatar";
import avatarImg from "../public/assets/images/avatar.png";
import BrandBox from "./brandBox";
import Users from "./users";

export default function Header(props) {
    const [value, setValue] = useState("");
    const [chatAlert, setChatAlert] = useState(true);
    let searchHandler = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    };
    return (
        <header className="header">
            <div className="holder">
                <BrandBox collapseOn={props.collapseOn} />
                <div className="header-top-bar">
                    <div className="option-bar-wrapper">
                        <ul className="top-options-bar">
                            <li>
                                <Users />
                            </li>
                            <li>
                                <button className="btn btn-outline btn-secondary btn-icon btn-lg">
                                    <span class="zcIcon-Suggestions"></span>
                                </button>
                            </li>
                            <li>
                                <button className="btn btn-primary btn-icon btn-lg">
                                    <span class="zcIcon-Plus"></span>
                                </button>
                            </li>
                            <li className="search-box">
                                <div className="search-input-wrap">
                                    <span class="zcIcon-Search icon"></span>
                                    <input type="text" name="search" onChange={searchHandler} value={value} className="form-control lg" />
                                </div>
                            </li>
                            <li>
                                <button className="btn btn-outline btn-secondary btn-icon btn-lg">
                                    <span class="zcIcon-Annoucement"></span>
                                </button>
                            </li>
                            <li>
                                <button className="btn btn-outline btn-secondary btn-icon btn-lg">
                                    <span class="zcIcon-Calendar"></span>
                                </button>
                            </li>
                            <li>
                                <button className="btn btn-outline btn-secondary btn-icon btn-lg">
                                    <span class="zcIcon-Chat-with-alert">
                                        <span class="path1"></span>
                                        {chatAlert ? <span class="path2"></span> : ""}
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="profile-box">
                        <button type="button" className="btn btn-lg btn-flat">
                            <Avatar image={avatarImg} size="lg" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
