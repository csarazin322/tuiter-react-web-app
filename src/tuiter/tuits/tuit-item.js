/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import TuitStats from "./tuit-stats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";


const TuitItem = (
    {
        tuit = {
            "_id": 0,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.jpg",
            "liked": false,
            "replies": 0,
            "retuits": 0,
            "likes": 0,
            "handle": "@spacex",
            "tuit": "default text"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    const stats = {
        "liked": tuit.liked,
        "replies": tuit.replies,
        "retuits": tuit.retuits,
        "likes": tuit.likes,
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="w-100 img-responsive rounded-circle" src={`/images/${tuit.image}`} />
                </div>
                <div className="col-10 d-inline">
                    <div>
                        <i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <div className="d-inline pe-2 fw-bolder">{tuit.userName}</div>
                        <FontAwesomeIcon className="pe-2" icon={faCheckCircle} color="#0C6EFD" size="lg" />
                        <div className="d-inline">{tuit.handle} - {tuit.time}</div>
                    </div>
                    <div>{tuit.tuit}</div>
                    <TuitStats stats={stats}></TuitStats>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;