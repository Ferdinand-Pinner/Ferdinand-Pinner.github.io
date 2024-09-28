"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Mesh, Color, MeshStandardMaterial, Object3D } from "three";

interface PyramidGridProps {
  size: number;
}

const createPyramidMesh = (
  size: number,
  position: [number, number, number],
  ref: React.Ref<Mesh>
): JSX.Element => (
  <mesh ref={ref} position={position}>
    <tetrahedronGeometry args={[size / 1.8]} />
    <meshStandardMaterial />
  </mesh>
);

const setMaterialProperties = (
  material: MeshStandardMaterial,
  color: Color
) => {
  material.color.set(color);
  material.transparent = true;
  material.opacity = 0.8;
  material.metalness = 0.4;
  material.roughness = 0.2;
};

const generateColor = (elapsedTime: number, index: number): Color => {
  return new Color(
    (Math.sin(elapsedTime * 3 + index) * 0.5 + 0.5) * 1.5,
    (Math.sin(elapsedTime * 3 + index + 2) * 0.5 + 0.5) * 1.5,
    (Math.sin(elapsedTime * 3 + index + 4) * 0.5 + 0.5) * 1.5
  );
};

const getRandomRotationSpeed = () => {
  return [
    Math.random() * 0.002, // Speed for X-axis
    Math.random() * 0.002, // Speed for Y-axis
    Math.random() * 0.002, // Speed for Z-axis
  ];
};

const updatePyramids = (
  meshRefs: React.RefObject<Mesh[]>,
  elapsedTime: number
): void => {
  if (meshRefs.current) {
    meshRefs.current.forEach((mesh, index) => {
      if (mesh) {
        const material = mesh.material as MeshStandardMaterial;
        const color = generateColor(elapsedTime, index);
        setMaterialProperties(material, color);

        const [rotationSpeedX, rotationSpeedY, rotationSpeedZ] =
          getRandomRotationSpeed();

        mesh.rotation.x += rotationSpeedX;
        mesh.rotation.y += rotationSpeedY;
        mesh.rotation.z += rotationSpeedZ;
      }
    });
  }
};

const calculateGridDimensions = (
  viewport: { width: number; height: number },
  size: number
) => {
  const rows = Math.ceil(viewport.height / size);
  const cols = Math.ceil(viewport.width / size);
  return { rows, cols };
};

const PyramidGrid = ({ size }: PyramidGridProps) => {
  const meshRefs = useRef<Mesh[]>([]);
  const { viewport } = useThree();
  const { rows, cols } = calculateGridDimensions(viewport, size);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    updatePyramids(meshRefs, elapsedTime);
  });

  const createPyramidGrid = () => {
    const pyramids = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * size - (cols * size) / 2;
        const y = row * size - (rows * size) / 2;

        const pyramidMesh = createPyramidMesh(size, [x, y, 0], (el) => {
          if (el) {
            meshRefs.current.push(el);
          }
        });

        pyramids.push(pyramidMesh);
      }
    }
    return pyramids;
  };

  return <>{createPyramidGrid()}</>;
};

const PulsatingPyramids = () => {
  const size = 1;

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 60 }}
      style={{ background: "black" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[0, 10, 10]}
        intensity={1}
        target={new Object3D()} // Create a target for the light
      />
      <PyramidGrid size={size} />
    </Canvas>
  );
};

export default PulsatingPyramids;
