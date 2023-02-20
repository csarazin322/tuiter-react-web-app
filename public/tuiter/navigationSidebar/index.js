const navigationSidebar = () => {
    return (`
        <div class="list-group">
            <a class="list-group-item list-group-item-action" href="#">
                <i class="fab fa-twitter"></i>
            </a>
            <a class="list-group-item list-group-item-action" href="../home.html">
                <i class="fa fa-home"></i>
                <p class="d-none d-xl-inline-block mb-0">Home</p>
            </a>
            <a class="list-group-item list-group-item-action active" href="#">
                <i class="fa fa-hashtag"></i>
                <p class="d-none d-xl-inline-block mb-0">Explore</p>
            </a>
            <a class="list-group-item list-group-item-action" href="../notifications.html">
                <i class="fa fa-bell"></i>
                <p class="d-none d-xl-inline-block mb-0">Notifications</p>
            </a>
            <a class="list-group-item list-group-item-action" href="../mail.html">
                <i class="fa fa-envelope"></i>
                <p class="d-none d-xl-inline-block mb-0">Mail</p>
            </a>
            <a class="list-group-item list-group-item-action" href="../bookmarks.html">
                <i class="fa fa-bookmark"></i>
                <p class="d-none d-xl-inline-block mb-0">Bookmarks</p>
            </a>
            <a class="list-group-item list-group-item-action" href="../lists.html">
                <i class="fa fa-list"></i>
                <p class="d-none d-xl-inline-block mb-0">Lists</p>
            </a>
            <a class="list-group-item list-group-item-action" href="../profile.html">
                <i class="fa fa-user"></i>
                <p class="d-none d-xl-inline-block mb-0">Profile</p>
            </a>
            <a class="list-group-item list-group-item-action" href="../more.html">
                <i class="fa fa-plus-circle"></i>
                <p class="d-none d-xl-inline-block mb-0">More</p>
            </a>
        </div>
        <a class="btn btn-primary w-100 mt-2 rounded-pill" href="../tuit.html">
            Tuit
        </a>
    `)
}

export default navigationSidebar;