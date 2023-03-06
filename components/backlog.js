import { useState } from "react";
import Card from "@/components/card";

export default function Backlog(props) {
    const backlogCardsData = [
        {
            id: 1,
            projectName: "ContactRM",
            projectStatus: "danger",
            cardName: "Design a Website",
            cardIcon: "zcIcon-Userstar",
            tags: [
                {
                    tagId: "tg-1",
                    tagTitle: "api.contactrm.com",
                    tagType: "info",
                },

                {
                    tagId: "tg-2",
                    tagTitle: "api.contactrm",
                    tagType: "secondary",
                },
            ],
            metaList: [
                {
                    type: "ml-1",
                    typeTitle: "Description",
                    count: "",
                },
                {
                    type: "ml-2",
                    typeTitle: "Comments",
                    count: "12",
                },
                {
                    type: "ml-3",
                    typeTitle: "Checklist",
                    count: "8/9",
                },
                {
                    type: "ml-4",
                    typeTitle: "Links",
                    count: "2",
                },
            ],
        },
        {
            id: 2,
            projectName: "AgentBook",
            projectStatus: "warning",
            cardName: "Design a Website",
            cardIcon: "zcIcon-File-check",
            tags: [
                {
                    tagId: "tg-1",
                    tagTitle: "api.contactrm.com",
                    tagType: "info",
                },

                {
                    tagId: "tg-2",
                    tagTitle: "api.contactrm",
                    tagType: "secondary",
                },
            ],
            metaList: [
                {
                    type: "ml-1",
                    typeTitle: "Description",
                    count: "",
                },
                {
                    type: "ml-3",
                    typeTitle: "Checklist",
                    count: "8/9",
                },
            ],
        },
    ];
    const [backlogCards, setBacklogCards] = useState(backlogCardsData);
    const [backlogCardName, setBacklogCardName] = useState("");
    const [backlogCategory, setBacklogCategory] = useState("");

    const handleBacklogNameChange = (event) => {
        setBacklogCardName(event.target.value);
    };

    const handleBacklogCategoryChange = (event) => {
        const selectedBacklogCategoryOption = event.target.options[event.target.selectedIndex];
        setBacklogCategory(selectedBacklogCategoryOption.text);
    };

    const handleBacklogAdd = (event) => {
        event.preventDefault();
        const newItem = { ...backlogCards[0], cardName: backlogCardName, projectName: backlogCategory };
        setBacklogCards(backlogCards.concat(newItem));
        setBacklogCardName("");
        setBacklogCategory("");
        setIsAcitve(false);
    };

    // Add Card Box
    const [isActive, setIsAcitve] = useState(false);
    const handleBoxOpen = () => {
        setIsAcitve(true);
    };
    const handleBoxClose = () => {
        setIsAcitve(false);
    };
    return (
        <div className="grid-col" data-type="Backlog">
            <div className="workflow-block">
                <div className="workflow-head">
                    <h3>
                        Backlog <span className="count">(2)</span>
                    </h3>
                    <ul className="workflow-option">
                        <li>
                            <button className="btn btn-sm btn-icon btn-icon btn-flat">
                                <span className="zcIcon-FIlter"></span>
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-sm btn-icon btn-icon btn-flat">
                                <span className="zcIcon-Sort-by"></span>
                            </button>
                        </li>
                        <li className="menu">
                            <button className="btn btn-sm btn-icon btn-icon btn-flat">
                                <span className="zcIcon-Menu-Dot"></span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="workflow-body">
                    <ul className="cards-list">
                        {backlogCards.map((card) => {
                            return (
                                <li key={card.id}>
                                    <Card data={card} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={`workflow-foot ${isActive ? "active" : ""}`}>
                    {!isActive && (
                        <button className="btn-add btn btn-full btn-outline btn-secondary" onClick={handleBoxOpen}>
                            <span className="zcIcon-Plus"></span>
                            <span className="btn-text">Add</span>
                        </button>
                    )}
                    {isActive && (
                        <form className="add-card-box" onSubmit={handleBacklogAdd}>
                            <div className="box-head">
                                <label htmlFor="title">Card title</label>
                                <button type="button" className="btn btn-flat btn-icon" onClick={handleBoxClose}>
                                    <span className="zcIcon-Close"></span>
                                </button>
                            </div>
                            <div className="input-wrap">
                                <input type="text" placeholder="Enter Card Name" name="name" className="form-control" value={backlogCardName} onChange={handleBacklogNameChange} />
                            </div>
                            <div className="input-group">
                                <div className="input-wrap">
                                    <select value={backlogCategory} onChange={handleBacklogCategoryChange} name="project" className="form-control">
                                        <option value="" disabled selected>
                                            Select Project
                                        </option>
                                        <option value="1">ContactRM</option>
                                        <option value="2">AgentBook</option>
                                        <option value="3">Asteler.io</option>
                                    </select>
                                </div>
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
