import "./App.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/AnimatedSphere";
// import { OrbitalControls } from "@react-three/drei";

function App() {
  return (
    <div className="bg-gray-800 h-screen text-white p-4">
      <Canvas className="canvas">
        {/* <OrbitalControls enableZoom={false} /> */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
