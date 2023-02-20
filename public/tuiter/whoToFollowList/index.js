import whoToFollowListItem from "./whoToFollowListItem.js";
import who from "./who.js";

const whoToFollowList = () => {
    return (`
    <ul class="list-group">
        <li class="list-group-item mb-0 fw-bold fs-6 wd-post-text">Who to follow</li>
        ${who.map(a => whoToFollowListItem(a)).join('')}
    </ul>
    `)
}

export default whoToFollowList();