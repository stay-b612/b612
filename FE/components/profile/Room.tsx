import React, { useEffect, useState } from 'react';
import { Center, useGLTF } from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils';
import { motion } from 'framer-motion-3d';
import { useRecoilState } from 'recoil';
import roomIndexAtom from 'store/profile/roomIndexAtom';

function Room() {
  const room = useGLTF('/little-prince.glb');

  return (
    <>
      <ambientLight />
      <Center position={[0, 0, 0]} rotation={[0, degToRad(-90), 0]}>
        <group>
          <primitive object={room.scene} />
        </group>
      </Center>
      <RetroComputer />
      {/* <Avatar y={height} /> */}
    </>
  );
}

export default Room;

function RetroComputer() {
  const computer = useGLTF(
    'https://mmrd-glb.s3.ap-northeast-2.amazonaws.com/common/retro_computer_monitor.glb'
  );
  const [roomIndex, setRoomIndex] = useRecoilState(roomIndexAtom);

  const [y, setY] = useState(1);
  useEffect(() => {
    const id = setTimeout(() => {
      if (y > 0) setY(-1);
      else setY(1);
    }, 1000);
    return () => clearTimeout(id);
  }, [y]);

  return (
    <motion.group
      animate={{ y: roomIndex === 1 ? 0 : y }}
      transition={{ duration: 1 }}
    >
      <Center scale={8} position={[-20, 5, 0]} onClick={() => setRoomIndex(1)}>
        <motion.primitive object={computer.scene} />
      </Center>
    </motion.group>
  );
}
