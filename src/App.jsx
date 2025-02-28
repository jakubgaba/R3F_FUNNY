import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div id="canvas">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </  mesh>
      </Canvas>
    </div>
  )
}
export default App;
