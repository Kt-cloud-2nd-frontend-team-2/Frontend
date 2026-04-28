export default function Room() {
  return (
    <>
      {/* 바닥 */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#888" />
      </mesh>

      {/* 벽 */}
      <mesh position={[0, 4, -10]}>
        <boxGeometry args={[20, 10, 0.5]} />
        <meshStandardMaterial color="#ccc" />
      </mesh>

      <mesh position={[0, 4, 10]}>
        <boxGeometry args={[20, 10, 0.5]} />
        <meshStandardMaterial color="#ccc" />
      </mesh>

      <mesh position={[-10, 4, 0]}>
        <boxGeometry args={[0.5, 10, 20]} />
        <meshStandardMaterial color="#ccc" />
      </mesh>

      <mesh position={[10, 4, 0]}>
        <boxGeometry args={[0.5, 10, 20]} />
        <meshStandardMaterial color="#ccc" />
      </mesh>
    </>
  );
}
