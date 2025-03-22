import React from "react";
import "./videoCard.css";
import {Card,Image,Flex, Text, Avatar } from '@aws-amplify/ui-react';


function VideoCard(props) {

    return (
        <Card className="videoCard" variation='outlined' maxWidth="350px" maxHeight="250px" >
            <Image  
                className="videoThumbnail"
                src={props.thumbnail} 
                alt={props.title} 
            />
            <div>
                <Text isTruncated={true} className="videoTitle">{props.title}</Text>
                <Flex gap="1rem" className="videoInfo">
                    <Avatar  className="videoAvatar"src={props.avatar} />
                    <Text className="videoChannelName">{props.channelName}</Text>
                </Flex>
      
                <Flex gap="1rem" className="videoSecondInfo">
                    <Text className="videoData">
                        {props.views} views :  {props.time}
                    </Text>
                </Flex>
            </div>
            
        </Card>
    );
}

export default VideoCard;