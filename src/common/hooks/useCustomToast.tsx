import { useRef, useCallback } from 'react';
import { Box, createStandaloneToast, Icon, ToastId, ToastProps, UseToastOptions } from '@chakra-ui/react';
import { IoAlertCircleOutline, IoCheckmarkCircleOutline, IoInformationCircleOutline } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';

interface CustomToastOptions extends Omit<ToastProps, 'id'> {
  toastTitle: string;
  toastMessage: string;
}

const enum Status {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
  LOADING = 'loading',
}

const IconAndColorMap = {
  [Status.SUCCESS]: {
    icon: IoCheckmarkCircleOutline,
    color: 'green.500',
  },
  [Status.ERROR]: {
    icon: IoAlertCircleOutline,
    color: 'primary.500',
  },
  [Status.INFO]: {
    icon: IoInformationCircleOutline,
    color: 'orange.500',
  },
  [Status.WARNING]: {
    icon: IoAlertCircleOutline,
    color: 'yellow',
  },
  [Status.LOADING]: {
    icon: IoAlertCircleOutline,
    color: 'gray',
  },
}


export const useCustomToast = () => {
  const toastIdRef = useRef<ToastId>();
  const { toast } = createStandaloneToast();

  const showCustomToast = useCallback(({ toastTitle, toastMessage, ...rest }: CustomToastOptions) => {

    const { status = Status.SUCCESS } = rest;

    toastIdRef.current = toast({
      isClosable: true,
      variant: "elegant",
      title: toastTitle,
      description: toastMessage,
      duration: 4000,
      icon: <Icon as={IconAndColorMap[status].icon} boxSize={6} color={IconAndColorMap[status].color} />,
      ...rest,
    });
  }, [toast]);

  return showCustomToast;
};
