import React from "react";
import { faReply, faRetweet, faShare, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TuitStats = (
    {
        stats = {
            "liked": false,
            "replies": 0,
            "retuits": 0,
            "likes": 0,
        }
    }
) => {
    return (
        <div>
            < div className="w-25 d-inline-flex" >
                <FontAwesomeIcon size="lg" className="pe-1" icon={faReply} />
                <div className="w-25">{stats.replies}</div>
            </div >
            <div className="w-25 d-inline-flex">
                <FontAwesomeIcon size="lg" className="pe-1" icon={faRetweet} />
                <div>{stats.retuits}</div>
            </div>
            <div className="w-25 d-inline-flex">
                <FontAwesomeIcon size="lg" className="pe-1" icon={faHeart} style={{ "color": stats.liked ? 'red' : '' }} />
                <div>{stats.likes}</div>
            </div>
            <div className="w-25 d-inline-flex">
                <FontAwesomeIcon size="lg" className="pe-1" icon={faShare} />
            </div>
        </div >
    )
}

export default TuitStats;