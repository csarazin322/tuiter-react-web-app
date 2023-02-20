function postSummaryItem({topic, userName, time, title, image, tweets}) {
    return (`
    <div class="card-body p-2 d-inline-flex border-top align-items-center">
        <div class="w-75">
            ${(topic !== '' ? `<p class="card-text mb-0 text-secondary wd-info-text">${topic}</p>` : ``)}
            ${(userName !== '' ? `<p class="card-text mb-0 fw-bold wd-account-name d-inline-flex">${userName}</p>` : ``)}
            <i class="d-inline-flex fa fa-sm fa-check-circle"></i>
            ${(time ? `<p class="card-text mb-0 text-secondary wd-info-text d-inline-flex">- ${time}</p>` : ``)}
            ${(title !== '' ? `<p class="card-text mb-0 fw-bold wd-post-text">${title}</p>` : ``)}
            ${(tweets ? `<p class="card-text mb-0 text-secondary wd-info-text">${tweets}</p>` : ``)}
        </div>
        <div class="wd-width-150 ms-auto">
            <img class="p-0 border-0 w-100 img-thumbnail float-right" src="../../images/${image}">
        </div>
    </div>
    `)
}

export default postSummaryItem;
