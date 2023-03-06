import Avatar from "@/components/avatar";
import avatarImg from "../public/assets/images/avatar.png";
export default function Card({ data }) {
    return (
        <div className="project-card">
            <div className="card-head">
                <span className="project-name">
                    <span className={`status sm ${data.projectStatus}`}></span>
                    <span className="name-text">{data.projectName}</span>
                </span>
                <h4 className="card-title">{data.cardName}</h4>
                {data.cardIcon && <span className={`card-icon ${data.cardIcon}`}></span>}
            </div>
            {data.tags.length != 0 && (
                <ul className="tag-list">
                    {data.tags.map((tag, i) => {
                        return (
                            <li key={i + 1}>
                                <span className={`tag ${tag.tagType}`}>{tag.tagTitle}</span>
                            </li>
                        );
                    })}
                </ul>
            )}
            <ul className="meta-list">
                {data.metaList.map((meta) => {
                    let icon = "";
                    if (meta.type === "ml-1") icon = "zcIcon-description";
                    if (meta.type === "ml-2") icon = "zcIcon-Message";
                    if (meta.type === "ml-3") icon = "zcIcon-Checklist-2";
                    if (meta.type === "ml-4") icon = "zcIcon-Link";
                    return (
                        <li key={meta.type}>
                            <span className="meta-box">
                                <span className={`icon ${icon}`}></span>
                                {meta.count && <span className="meta-text">{meta.count}</span>}
                            </span>
                        </li>
                    );
                })}
            </ul>
            <div className="card-foot">
                <span className="date-created">Created 3 days agao</span>
                <Avatar image={avatarImg} size="sm" />
            </div>
        </div>
    );
}
