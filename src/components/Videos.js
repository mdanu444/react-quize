import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { NavLink } from "react-router-dom";
import useVideoList from "./../hooks/useVideoList";
import classes from "./../styles/Videos.module.css";
import Video from "./Video";
export default function Videos() {
  const [page, setPage] = useState(1);
  const { error, loading, videos, hasMore } = useVideoList(page);

  return (
    <div className={classes.videos}>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <NavLink to="quize" key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </NavLink>
            ) : (
              <Video
                key={video.youtubeID}
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && (
        <div className="">No Video Found!</div>
      )}
      {error && <div>There was en error.</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
