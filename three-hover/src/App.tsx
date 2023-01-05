import { shaderMaterial, useTexture } from '@react-three/drei';
import { Canvas, extend, Node, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import glsl from 'glslify';
export const ImageFadeMaterial = shaderMaterial(
    {
        effectFactor: 1.2,
        dispFactor: 0.2,
        tex: undefined as any,
        tex2: undefined as any,
        disp: undefined as any,
    },
    glsl` varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,
    glsl` varying vec2 vUv;
      uniform sampler2D tex;
      uniform sampler2D tex2;
      uniform sampler2D disp;
      uniform float _rot;
      uniform float dispFactor;
      uniform float effectFactor;
      void main() {
        vec2 uv = vUv;
        vec4 disp = texture2D(disp, uv);
        vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
        vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
        vec4 _texture = texture2D(tex, distortedPosition);
        vec4 _texture2 = texture2D(tex2, distortedPosition2);
        vec4 finalTexture = mix(_texture, _texture2, dispFactor);
        gl_FragColor = finalTexture;
        #include <tonemapping_fragment>
        #include <encodings_fragment>
      }`
);

extend({ ImageFadeMaterial });

// Add types to ThreeElements elements so primitives pick up on it
declare module '@react-three/fiber' {
    interface ThreeElements {
        imageFadeMaterial: Node<any, typeof ImageFadeMaterial>;
    }
}

const FadingImage: React.FC<{}> = ({}) => {
    const ref = useRef<any>();
    const [texture1, texture2, dispTexture] = useTexture(['/bru.png', '/bru.png', '/13.jpg']);
    const [hovered, setHover] = useState(false);
    useFrame(() => {
        ref.current!.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, hovered ? 1 : 0, 0.075);
    });
    return (
        <mesh onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
            <planeGeometry args={[5, 5]} />
            <imageFadeMaterial ref={ref} tex={texture1} tex2={texture2} disp={dispTexture} toneMapped={false} />
        </mesh>
    );
};
export function ImageHoverApp() {
    return (
        <div style={{ width: '50vw', aspectRatio: '1 / 1' }}>
            <Canvas>
                <FadingImage />
            </Canvas>
        </div>
    );
}

function App() {
    return (
        <>
            <ImageHoverApp />
        </>
    );
}

export default App;
