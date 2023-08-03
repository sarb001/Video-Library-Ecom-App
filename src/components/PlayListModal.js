import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'

import {MdPlaylistAddCircle} from 'react-icons/md';
import { useUserData } from '../Context/UserDataContext';
import { AddNewPlaylist } from '../utils/AddNewPlaylist';
import { useAuth } from '../Context/authContext';
import IsVideoinPlayList from '../utils/IsVideoinPlayList';
import Removevideofromplaylist from '../utils/Removevideofromplaylist';
import AddVideotoplaylist from '../utils/AddVideotoplaylist';


const PlayListModal = ({maindata}) => {

    console.log('playlist Modal  1 -',maindata);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { userState , userDispatch } = useUserData();
    const { auth } = useAuth();
    const [isCreateNewActive,setisCreateNewActive] = useState(false);
    const {playlistName,setplaylistName} = useState("");

     const handleaddnewplaylist = (e) => {
        console.log('  handle add  new =');
        setisCreateNewActive((prev) => !prev);
        e.preventDefault();
        AddNewPlaylist(userState.playlist,auth.token,userDispatch);
     };

     const handleplaylistvideo = (playlistId,title,videoId) => {
        const isChecked = IsVideoinPlayList(userState.playlist,videoId,playlistId);
        if(isChecked){
            Removevideofromplaylist(
                playlistId,
                videoId,
                auth.token,
                userDispatch
            )
        }else{
            AddVideotoplaylist(
                playlistId,
                title,
                maindata,
                auth.token,
                userDispatch
            )
        }
     }



  return (
    <>
<>
        <Button onClick={onOpen}> Save to Playlist  </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> Save to .... </ModalHeader>
            <button  onClick = {() => setisCreateNewActive((prev) => !prev)}> 
                   Reset 
          </button>
            <ModalCloseButton />
            <ModalBody>
               <div className="new-checkbox-sections">

                {userState.playlist.length > 0 && 
                    userState.playlist.map((item) => (
                         <div className="input-section" key = {item._id}>
                                <input type = "checkbox"  
                                name = {item.title}
                                id   = {item._id}
                                checked = {IsVideoinPlayList(userState.playlist,maindata._id,item._id)}
                                onChange={() => handleplaylistvideo(
                                        item._id,
                                        item.title,
                                        maindata._id
                                )} />
                            <label  htmlFor = {item._id}> {item.title} </label>
                           </div>
                        ))}
               </div>
               <div className="add-new-section">

                {isCreateNewActive ? (
                    <>
                        <form onSubmit = {handleaddnewplaylist}>
                            <label>
                                Name : <input  type = 'text' 
                                 placeholder = 'Enter  Playlist Name'
                                 value = {playlistName}
                                 onChange={(e) => setplaylistName(e.target.value)}
                                 required 
                                 />
                            </label>
                        <button> Create  </button>
                        </form>
                     </>
                )  : (
                    <>
                    <button  
                    onClick={() =>  setisCreateNewActive((prev) => !prev)} > 
                    Create New Playlist  </button>
                    </>
                )}
                
               </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </>
  )
}

export default PlayListModal