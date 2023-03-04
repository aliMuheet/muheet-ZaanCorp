import Avatar from "./avatar";
import avatarImg from "../public/assets/images/avatar.png";
export default function Users() {
    var users = [
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
                {users.map((user, index) => {
                    return (
                        <div className="user-box" key={index}>
                            <Avatar image={user.image} size="sm" />
                            <span className={`count-label ${user.status ? user.status : ""}`}>{user.count}</span>
                        </div>
                    );
                })}
            </div>
            <div className="addon">
                <button className="btn btn-secondary">
                    <span class="zcIcon-Arrow-Chevron"></span>
                </button>
            </div>
        </div>
    );
}
