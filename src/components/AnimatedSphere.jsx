import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../assets/texture.jpg";

const AnimatedSphere = () => {
  const colorMap = useLoader(TextureLoader, texture);

  return (
    <Sphere visible args={[1, 100, 700]} scale={2}>
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
        map={colorMap}
      />
    </Sphere>
  );
};

export default AnimatedSphere;
