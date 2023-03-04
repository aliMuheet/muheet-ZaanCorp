import { useRef } from "react";
export default function BrandBox(props) {
    let brandName = "Zaan Corp";
    let words = brandName.split(" ");
    const initials = words[0][0] + words[words.length - 1][0];
    let initialsRef = useRef(null);
    return (
        <div className="brand-box">
            <strong className="brand-title">
                <span className="status active"></span>
                <span className="brand-name">{brandName}</span>
                <span className="brand-initials" ref={initialsRef} title={brandName}>
                    {initials}
                </span>
            </strong>
            <button className="btn-collapse btn btn-sm btn-link btn-icon" onClick={props.collapseOn}>
                <span className="zcIcon-Double-arrow"></span>
            </button>
        </div>
    );
}
