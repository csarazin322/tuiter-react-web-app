import exploreItems from "./exploreItems.js";
import postSummaryItem from "./postSummaryItem.js";

const postSummaryList = () => {
    return `${exploreItems.map(a => postSummaryItem(a)).join('')}`
}

export default postSummaryList();