/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import TuitStats from "./tuit-stats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../services/tuits-thunks";
import baseTuit from "../data/base-tuit";


const TuitItem = (
    {
        tuit = baseTuit
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
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
                    <TuitStats tuit={tuit}></TuitStats>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;