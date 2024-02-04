import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";

import { Input } from "./Input";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

interface FormModalProps {
  user?: User | undefined | null;
  isOpen: boolean;
  onClose: () => void;
}

const isLoading = false;

export function FormModal({ user = null, isOpen, onClose }: FormModalProps) {
  const toast = useToast();

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
  );
}
