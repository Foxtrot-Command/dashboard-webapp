'use client';

import { Box, BoxProps, ButtonProps, keyframes, Text } from '@chakra-ui/react';
import style from './ctabutton.module.css';
import Link from 'next/link';

type variant = 'red' | 'blue';
type BoxPlusButton = BoxProps & ButtonProps;
interface CTAButtonProps extends BoxPlusButton {
  width: string | Record<string, string> | {};
  height: string | Record<string, string> | {};
  text?: string;
  href?: URL | string;
  isAnimatedOnHover?: boolean;
  variant?: variant,
  disabled?: boolean;
}

const variants: Record<variant, Record<string, string>> = {
  red: { top: "#2E1819", bottom: "#23272E" },
  blue: { top: "#252c36", bottom: "#48556d" }
}

const CTAButton = (props: CTAButtonProps) => {

  const {
    variant = 'red',
    width = '290px', height = '60px',
    text = "",
    href,
    isAnimatedOnHover = true,
    disabled,
    ...restProps } = props;

  const EmToPixel = () => (Number(width.toString().split("px")[0]) / 16 - 3.6);

  const moveLight = keyframes`
    from {transform: translateX(1em) skewX(-45deg);opacity:1;}
    to {transform: translateX(${EmToPixel()}em) skewX(-45deg);opacity:0;}
  `;

  return (
    <Box w={width} h={height} opacity={disabled ? 0.5 : 1} userSelect="none">
      {href ?
        <Link href={href || '#'}>
          <Box {...restProps}>

            <Box
              className={style.boxBorder}
              position="relative"
              w={width}
              h={height}
              zIndex={2}
              _after={{
                background: `linear-gradient(180deg, rgba(35, 39, 46, 0.4) 0%, rgba(62, 71, 81, 0) 100%), linear-gradient(180deg, rgba(35, 39, 46, 0) 0%, rgba(65, 39, 34, 0.2) 39.06%, ${variants[variant].top} 90.62%), linear-gradient(0deg, ${variants[variant].bottom}, ${variants[variant].bottom})`
              }}
              _hover={{
                '&::before': {
                  animation: isAnimatedOnHover ? `${moveLight} 0.7s` : 'none',
                }
              }}
            >
              <Text
                position="absolute"
                h={height}
                w={width}
                display="flex"
                top={0}
                bottom={0}
                justifyContent="center"
                textAlign="center"
                alignItems="center"
                as="h3"
                color="neutrals.200"
                fontWeight="semibold"
                fontSize="16px"
                whiteSpace="nowrap"
                zIndex={2}
                transition='opacity 0.5s ease-in-out'
                _hover={{
                  opacity: 0.6,
                  transition: 'opacity 0.5s ease-in-out',
                }}
              >
                {text}
              </Text>
              {props.children}
            </Box>
          </Box>
        </Link>
        :
        <Box onClick={props.onClick} {...restProps}>

          <Box
            className={style.boxBorder}
            position="relative"
            w={width}
            h={height}
            zIndex={2}
            _after={{
              background: `linear-gradient(180deg, rgba(35, 39, 46, 0.4) 0%, rgba(62, 71, 81, 0) 100%), linear-gradient(180deg, rgba(35, 39, 46, 0) 0%, rgba(65, 39, 34, 0.2) 39.06%, ${variants[variant].top} 90.62%), linear-gradient(0deg, ${variants[variant].bottom}, ${variants[variant].bottom})`
            }}
            _hover={{
              '&::before': {
                animation: isAnimatedOnHover ? `${moveLight} 0.7s` : 'none',
              }
            }}
          >
            <Text
              position="absolute"
              h={height}
              w={width}
              display="flex"
              top={0}
              bottom={0}
              justifyContent="center"
              textAlign="center"
              alignItems="center"
              as="h3"
              color="neutrals.200"
              fontWeight="semibold"
              fontSize="16px"
              whiteSpace="nowrap"
              zIndex={2}
              transition='opacity 0.5s ease-in-out'
              _hover={{
                opacity: 0.6,
                transition: 'opacity 0.5s ease-in-out',
              }}
            >
              {text}
            </Text>
            {props.children}
          </Box>
        </Box>
      }

    </Box>
  );
};

export default CTAButton;
