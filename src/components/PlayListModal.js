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


const PlayListModal = ({maindata}) => {

    console.log('playlist Modal  1 -',maindata);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { userState , userDispatch } = useUserData();
    const { auth } = useAuth();
    const [isCreateNewActive,setisCreateNewActive] = useState(false);
    const {playlistName,setplaylistName} = useState("");

     const handleaddnewplaylist = (e) => {
        e.preventDefault();
        AddNewPlaylist(userState.playlist,auth.token,userDispatch);
     };

  return (
    <>
<>
        <Button onClick={onOpen}> Save to Playlist  </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> Save to .... </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               <div className="new-checkbox-sections">
                <input type = "checkbox" />
                <label>  </label>
               </div>
               <div className="add-new-section">

                {isCreateNewActive ? (
                    <>
                        <form onSubmit={handleaddnewplaylist}>
                            <label>
                                Name : <input  type='text' 
                                 placeholder = 'Enter  Playlist Name'
                                //  onChange={() => }
                                 required 
                                 />
                            </label>
                        </form>
                        <button> Create  </button>
                     </>
                )  : (
                    <>
                     <Button colorScheme = 'red'>
                         <MdPlaylistAddCircle />  Create New Playlist 
                     </Button > 
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