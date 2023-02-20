import navigationSidebar from "../navigationSidebar/index.js";
import whoToFollowList from "../whoToFollowList/index.js";
import exploreBody from "./exploreBody.js";

function exploreComponent() {
    $('#wd-explore').append(`
       <div class="row mt-4 mb-4">
       <div class="col-2 col-md-2 col-lg-1 col-xl-2">
         ${navigationSidebar()}
       </div>
       <div class="col-10 col-lg-7 col-xl-6">
        ${exploreBody()}
       </div>
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        ${whoToFollowList}
       </div>
  </div>

   `);
}

$(exploreComponent);