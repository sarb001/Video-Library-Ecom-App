import React from 'react';
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

const PlayListModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
               </div>
               <div className="add-new-section">
                 <Button colorScheme='red' >
                    <MdPlaylistAddCircle />  Create New Playlist 
                </Button > 
               </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </>
  )
}

export default PlayListModal