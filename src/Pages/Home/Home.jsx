import React, { useEffect } from "react";
import Categories from "../../componets/categoriesBar/Categories";
import Video from "../../componets/video/Video";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideoToHome } from "../../Redux/HomeVideoSlice";

const Home = ({ openSidBar }) => {
  const dispatch = useDispatch();
  const { videos, loading, error } = useSelector((state) => state.homeVideo);

  console.log(videos);
  useEffect(() => {
    dispatch(addVideoToHome());
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>Somthing Went Wrong</p>;
  }

  return (
    <section
      className={`mt-10 md:mt-16 pt-2 md:ml-14 ${
        openSidBar ? "lg:ml-48" : "lg:ml-20"
      } `}
    >
      <Categories />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-20 mx-2 gap-y-4 md:gap-x-2 lg:gap-x-3  VideoScrollBar">
        {videos.map((item, idx) => (
          <Link key={idx} to={"/player"}>
            <Video item={item} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
