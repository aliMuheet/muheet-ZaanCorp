import Avatar from "./avatar";
import avatarImg from "../public/assets/images/avatar.png";
export default function ProfilesList() {
    let profilesList = [
        {
            id: "u01",
            image: avatarImg,
            count: 15,
            status: "active",
        },
        {
            id: "u02",
            image: avatarImg,
            count: 11,
            status: "away",
        },
    ];
    return (
        <div className="profile-notification">
            <div className="profiles">
                {profilesList.map((item, index) => {
                    return (
                        <div className="profile-box" key={index}>
                            <Avatar image={item.image} size="sm" />
                            <span className={`count-label ${item.status ? item.status : ""}`}>{item.count}</span>
                        </div>
                    );
                })}
            </div>
            <div className="addon">
                <button className="btn btn-secondary">
                    <span className="zcIcon-Arrow-Chevron"></span>
                </button>
            </div>
        </div>
    );
}
