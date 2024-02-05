import React, { useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { DraggableBox } from './DraggableBox';

interface PartnershipSVGProps {
  showBox: boolean;
  selectedImage: string | null;
}

const PartnershipSVG = (props: PartnershipSVGProps) => {
  const nodeRef = useRef(null);
  const { showBox, selectedImage } = props;

  return (
    <Box w={{ base: "100%", md: "75%" }} mt="0" h="100%" maxH="500px" bg="whiteAlpha.100" p="20px" borderRadius={8}>
      <svg viewBox="0 0 1024 512" id="partnership_identifier">
        <g>
          <image
            type="MSBitmapLayer"
            x="0"
            y="0"
            width="1024"
            height="512"
            href="/images/generators/partnership/partnership_background.png"
          />
          ;
        </g>
        <g>
          <image
            type="MSBitmapLayer"
            x="145"
            y="130"
            width="300"
            height="200"
            href="/images/fxd_logo.svg"
          />
          ;
        </g>

        <svg width="2" height="115" x="490" y="180">
          <rect
            width="2"
            height="115"
            style={{
              fill: "rgba(255, 255, 255, 1)",
            }}
          />
        </svg>

        <rect
          width="400"
          height="270"
          x="500"
          y="100"
          style={{
            fill: "rgba(255, 255, 255, 0.1)",
            stroke: "rgba(255, 255, 255, 0.6)",
            strokeWidth: "1",
            display: showBox ? "inline" : "none",
          }}
        />

        <DraggableBox
          nodeRef={nodeRef}
          bounds={{ top: -70, left: -50, right: 50, bottom: 60 }}
          grid={[10, 10]}
        >
          <g ref={nodeRef}>
            {!selectedImage ? (
              <svg height="140" width="500" x="550" y="170">
                <rect
                  width="300"
                  height="200"
                  style={{
                    fill: "rgba(0, 0, 0, 0.3)",
                    stroke: "rgba(255, 255, 255, 0.6)",
                    strokeWidth: "1",
                  }}
                ></rect>
                <text
                  x="150"
                  y="90"
                  fontSize="50px"
                  textAnchor="middle"
                  fill="white"
                  fontFamily={"Montserrat"}
                  fontWeight="600"
                >
                  ?
                </text>
              </svg>
            ) : (
              <image
                type="MSBitmapLayer"
                x="550"
                y="130"
                width="300"
                height="200"
                href={selectedImage}
              />
            )}
          </g>
        </DraggableBox>

        <text
          x="520"
          y="470"
          fontSize="50px"
          textAnchor="middle"
          fill="#d6dae3"
          stroke="black"
          strokeWidth="0px"
          letterSpacing="0px"
          fontFamily={"Inversionz Unboxed"}
          fontWeight="400"
        >
          Official Partnership
        </text>
      </svg>
    </Box>
  );
};

export default PartnershipSVG;
