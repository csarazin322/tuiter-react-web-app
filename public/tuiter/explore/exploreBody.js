import postSummaryList from "../postSummaryList/index.js";

const exploreBody = () => {
    return (`
    <div class="row align-items-center mb-2">
        <div class="input-group wd-w-85">
            <i class="input-group-text fa fa-search pt-3 pb-3 border-end-0 bg-white wd-search-icon"></i>
            <input class="form-control border-start-0 w-50 wd-rounded" placeholder="Search"
                   type="text"/>
        </div>
        <div class="wd-w-15 d-inline-block">
            <i class="wd-primary-color fa fa-cog fa-2x"></i>
        </div>
    </div>
    <div class="row ms-0 me-0 mt-2 mb-2">
        <ul class="nav nav-tabs">
            <li class="nav-link active">For you</li>
            <li class="nav-link">Trending</li>
            <li class="nav-link">News</li>
            <li class="nav-link">Sports</li>
            <li class="nav-link">Entertainment</li>
        </ul>
    </div>
    <div class="row card ms-0 me-0 mt-2 mb-2">
        <div class="p-0 position-relative">
            <img class="card-img-top p-0" src="../../images/starship.webp">
            <p class="text-white mb-0 fs-1 fw-bold p-2 position-absolute start-0 bottom-0">SpaceX's Starship</p>
        </div>
        ${postSummaryList}
    </div>

    `)
}

export default exploreBody;