function whoToFollowListItem({avatarIcon, userName, handle}) {
    return (`
    <li class="list-group-item d-inline-flex align-items-center">
        <img class="ms-0 me-1 wd-account-pic rounded-circle" src="../../images/${avatarIcon}">
        <div class="">
            <p class="d-inline-flex mb-0 fw-bold wd-account-name-2">${userName}</p>
            <i class="fa fa-check-circle fa-sm d-inline-flex"></i>
            <p class="mb-0 text-secondary wd-info-text-2">@${handle}</p>
        </div>
        <button type="button" class="btn btn-primary fs-6 rounded-pill ms-auto">Follow</button>
    </li>
    `)
}

export default whoToFollowListItem;