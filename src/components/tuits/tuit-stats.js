import React from "react";

const TuitStats = ({tuit, likeTuit = () => {}, unlikeTuit = () => {}}) => {
    return (
      <div className="row mt-2">
        <div className="col">
          <i className="far fa-message me-1"></i>
          {tuit.stats && tuit.stats.replies}
        </div>
        <div className="col">
          <i className="far fa-retweet me-1"></i>
          {tuit.stats && tuit.stats.retuits}
        </div>
        <div className="col">
          <span onClick={() => likeTuit(tuit)}>
          {
            tuit.stats && tuit.stats.likes > 0 &&
              <i className="fa-regular fa-thumbs-up"></i>
          }
          {
            tuit.stats && tuit.stats.likes <= 0 &&
              <i className="fa-light fa-thumbs-up"></i>
          }
            {tuit.stats && tuit.stats.likes}
          </span>
        </div>
        <div className="col">
          <span onClick={() => unlikeTuit(tuit)}>
            <i class="fa-light fa-thumbs-down"></i>
            {tuit.stats && tuit.stats.likes}
          </span>
        </div>
        <div className="col">
          <i className="far fa-inbox-out"></i>
        </div>
      </div>
    );
}
export default TuitStats;