import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DGlobe: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Inner Core Sphere
    const coreGeo = new THREE.SphereGeometry(5.8, 64, 64);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0e0e12,
      transparent: true,
      opacity: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreMesh);

    // Wireframe Outer Globe (Latitude & Longitude lines)
    const wireGeo = new THREE.SphereGeometry(6, 32, 24);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x7c5cff,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    globeGroup.add(wireMesh);

    // Dotted Surface Nodes (Simulating digital globe points)
    const dotsCount = 400;
    const dotsGeo = new THREE.BufferGeometry();
    const dotPositions = new Float32Array(dotsCount * 3);

    for (let i = 0; i < dotsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotsCount);
      const theta = Math.sqrt(dotsCount * Math.PI) * phi;
      const radius = 6.05;

      dotPositions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      dotPositions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      dotPositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    dotsGeo.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3));

    const dotsMat = new THREE.PointsMaterial({
      color: 0x9275ff,
      size: 0.12,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const dotsMesh = new THREE.Points(dotsGeo, dotsMat);
    globeGroup.add(dotsMesh);

    // Outer Atmospheric Glowing Ring
    const ringGeo = new THREE.RingGeometry(6.6, 7.2, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x7c5cff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    globeGroup.add(ringMesh);

    // Mouse Interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) {
        // Soft hover tracking
        const rect = mount.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotationY = x * 0.3;
        targetRotationX = y * 0.3;
        return;
      }

      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      globeGroup.rotation.y += deltaX * 0.008;
      globeGroup.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    mount.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous rotation
      if (!isDragging) {
        globeGroup.rotation.y += 0.003 + (targetRotationY - globeGroup.rotation.y * 0.1) * 0.01;
        globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.05;
      }

      ringMesh.rotation.z = elapsedTime * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      dotsGeo.dispose();
      dotsMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[360px] sm:h-[480px] cursor-grab active:cursor-grabbing relative select-none"
    />
  );
};
