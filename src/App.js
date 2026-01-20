import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Building_1 } from './Components/Buildings/Building_1';

function App() {
  return (
    <div className="App">
      <Canvas
        shadows 
        camera={{position: [3, 3, 3], fov: 75}}
        gl={{
          physicallyCorrectLights: true, // Better for PBR materials like glass
          toneMappingExposure: 1.5  
        }}
      >
        <OrbitControls />
        <ambientLight intensity={0.8} />
        <directionalLight 
          position={[50, 50, 50]} 
          intensity={1.5}
          castShadow
        />
        <Environment preset="night" background />
        <Building_1 position={[0, 0, 0]} scale={1} />
      </Canvas>
    </div>
  );
}

export default App;
