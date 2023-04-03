import React from "react";
import { faReply, faRetweet, faShare, faHeart, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../services/tuits-thunks";
import baseTuit from "../data/base-tuit";

const TuitStats = (
    {
        tuit = baseTuit
    }
) => {
    const dispatch = useDispatch()
    return (
        <div>
            < div className="w-25 d-inline-flex" >
                <FontAwesomeIcon size="lg" className="pe-1" icon={faReply} />
                <div className="w-25">{tuit.replies}</div>
            </div >
            <div className="w-25 d-inline-flex">
                <FontAwesomeIcon size="lg" className="pe-1" icon={faRetweet} />
                <div>{tuit.retuits}</div>
            </div>
            <div className="w-25 d-inline-flex" >
                <FontAwesomeIcon onClick={() => {
                    tuit.liked ?
                        dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1, liked: false }))
                        : dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true }))
                }} size="lg" className="pe-1" icon={faHeart} style={{ "color": tuit.liked ? 'red' : '' }} />
                <div>{tuit.likes}</div>
            </div>
            <div className="w-25 d-inline-flex">
                <FontAwesomeIcon size="lg" className="pe-1" icon={faShare} />
            </div>
            <div className="w-25 d-inline-flex">
                <FontAwesomeIcon onClick={() => {
                    tuit.disliked ?
                        dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes - 1, disliked: false }))
                        : dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1, disliked: true }))
                }}
                    size="lg" className="pe-1" icon={faThumbsDown} style={{ "color": tuit.disliked ? 'red' : '' }} />
                <div>{tuit.dislikes}</div>
            </div>
        </div>
    )
}

export default TuitStats;