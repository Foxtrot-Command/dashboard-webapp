import React, { useState } from 'react'
import { DropdownButton, Dropdown, OverlayTrigger, Tooltip, Image } from 'react-bootstrap'
import { frames } from './frames';

const FrameSelector = () => {

  const [selectedFrame, setSelectedFrame] = useState('');
  const [isSpell, setIsSpell] = useState<boolean>(false);
  const [active, setActive] = useState<string>('')

  const handleSelection = (data: any, isSpell: boolean, id: string) => {
    setSelectedFrame(data);
    setIsSpell(isSpell);
    setActive(id);
  }

  const component = () => {

    return (
      <DropdownButton id="dropdown-basic-button" title="Seleccionar marco" menuVariant="">
        {Object.entries(frames[0]).map((keys) => {
          return (
            <>
              <Dropdown.Item disabled>➡️ {keys[0].toUpperCase()}</Dropdown.Item>
              {keys[1].map(({ name, path, spell = false }, index: number) => (
                <Dropdown.Item 
                  key={index} 
                  onClick={() => handleSelection(path, spell, name)}
                  active={active === name}
                >
                  <OverlayTrigger
                    key={name}
                    overlay={
                      <Tooltip id="card-tooltip">
                        <Image src={path} width="200px" />
                      </Tooltip>}
                  >
                    <Image
                      src={path}
                      width="32px"
                    />
                  </OverlayTrigger>
                  {name}
                </Dropdown.Item>
              ))}
            </>
          )
        })}
      </DropdownButton>
    )
  }

  return {
    component,
    isSpell,
    selectedFrame
  }
}

export default FrameSelector