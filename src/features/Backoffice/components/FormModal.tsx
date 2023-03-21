import { useCallback, useEffect, useRef } from "react";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useToast,
  Box,
} from "@chakra-ui/react";

import { SubmitHandler, useForm } from 'react-hook-form';

import { Input } from './Input';

type User = {
  id: string,
  name: string;
  email: string;
  createdAt: string;
}

interface FormModalProps {
  user?: User | undefined | null;
  isOpen: boolean;
  onClose: () => void;
}

let isLoading = false;



export function FormModal({user = null, isOpen, onClose }: FormModalProps) {



  const toast = useToast();

  const initialRef = useRef();
  const finalRef = useRef();

  const handleCreateUser: SubmitHandler<User> = useCallback(async (values) => {
    isLoading = true;
    let msg = undefined;

    /* if(user) {
      await updateUser({id:user.id, ...values})
      msg = `Usuário ${values.name} alterado com sucesso.`;
    } else {
      await createUser(values);
      msg = `Usuário ${values.name} salvo com sucesso.`;
    } */

    if(msg) {
      toast({
        description:msg,
        status: "success",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
    }

    onClose();

    isLoading = false;
  }, [toast, onClose]);

  return (
    <Modal
      /* initialFocusRef={initialRef}
      finalFocusRef={finalRef} */
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent mx={2}>
        <ModalHeader>Registrar nueva carta</ModalHeader>
        <ModalCloseButton />
        <Box as="form" /* onSubmit={handleSubmit(handleCreateUser)} */>
          <ModalBody pb={6}>
            <Input
              /* ref={initialRef} */
              placeholder="Nombre"
              /* error={errors.name}
              {...register('name')} */
            />

            <Input
              mt={4}
              placeholder="E-mail"
              /* error={errors.email}
              {...register('email')} */
            />
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              isLoading={isLoading}
              colorScheme="green"
              type="submit"
          >
              Guardar
            </Button>

            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </Box>
      </ModalContent>
    </Modal>
  )
}
