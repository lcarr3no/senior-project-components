import React from "react";
import NavBar from '../ui-components/navBar/navBar';
import VideoCard from "../ui-components/video/videoCard";
import { Collection } from "@aws-amplify/ui-react";
import './homePage.css';
import sampleVideos from '../assets/sampleVideos';


function HomePage() {

    const videos = sampleVideos;

  
  return (
      <div>
            <NavBar />
          
          <h1>Home Page</h1>
          
          <div className="feed">
              <Collection
                type= "list"
                direction="row"
                 gap="30px"
                 wrap="wrap"
                items={videos}
                isPaginated={true}
                paginationType="pages"
                itemsPerPage={9}
              >
                  {(item, index) => (
                      <VideoCard
                          key={index}
                          title={item.title}
                          channelName={item.channelName}
                          views={item.views}
                          time={item.time}
                          avatar={item.avatar}
                          thumbnail={item.thumbnail}
                      />
                )}
              
              </Collection>

          </div>


      </div>
  );
}

export default HomePage;