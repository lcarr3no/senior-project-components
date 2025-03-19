import * as React from "react";
import "@aws-amplify/ui-react/styles.css";
import './uploadPage.css';
import { FileUploader } from '@aws-amplify/ui-react-storage';
import {Button, Flex,} from '@aws-amplify/ui-react';
import { Input, Label } from '@aws-amplify/ui-react';
import { useState } from 'react';



function UploadPage ()  {

    const [videoTitle, setVideoTitle] = useState('');
    const [videoDescription, setVideoDescription] = useState('');

    const uploadVideo = () => {


        if(videoTitle === "" || videoDescription === ""){
            alert("Please fill in all fields");
        }else{
            console.log("Uploading...");
            console.log('Title:', videoTitle);
            console.log('Description:', videoDescription);
        }
       
    }

    const cancelUpload = () => {
        console.log("Cancelling...");
        
    }
    const handleUpload = (file) => {
        console.log("Uploading file: ", file);
    }




    
  return (
    <div>

        <h1>Upload Page</h1>
        <p>Upload your video here</p>
        <Flex as="form" direction="row" lenght="50rem" width="50rem" className="">

            
            <Flex direction="column" gap="small" width="25rem" className="div">
                <Flex direction="row" gap="small" className="div">
                    <Label htmlFor="Title">Title:</Label>
                    <Input
                        id="videoTitle" 
                        type="text" 
                        value={videoTitle}
                        onChange={(e) => setVideoTitle(e.target.value)} />
                </Flex>

                <Flex direction="row" gap="small"  className="div">
                    <Label htmlFor="Description" >Description:</Label>
                    <Input 
                        id="videoDescription" 
                        type="text" 
                        value={videoDescription}
                        onChange={(e) => setVideoDescription(e.target.value)} />
                </Flex>

            </Flex>

            <Flex direction="column" gap="small" width="25rem" className="div">
                <FileUploader
                        acceptedFileTypes={['video/*']}
                        path="public/"
                        maxFileCount={1}
                        isResumable
                />
            </Flex>

        </Flex>


        <Flex direction="row" gap="large" width="20rem">
                <Button type="upload" 
                    onClick={uploadVideo}
                    className="btn upload">Upload
                </Button>
                <Button type="cancel" 
                    onClick={cancelUpload}
                    className="btn cancel">Cancel
                </Button>
        </Flex>
      

    </div>
    );
};




export default UploadPage;