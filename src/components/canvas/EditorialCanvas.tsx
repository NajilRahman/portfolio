import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const EditorialCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Three.js Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Fully transparent background
    mount.appendChild(renderer.domElement);

    // Floating 3D Geometric Objects (Icosahedron & Octahedron wireframes)
    const objectsGroup = new THREE.Group();
    scene.add(objectsGroup);

    const geo1 = new THREE.IcosahedronGeometry(4, 1);
    const mat1 = new THREE.MeshBasicMaterial({
      color: 0x7c5cff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const mesh1 = new THREE.Mesh(geo1, mat1);
    mesh1.position.set(-18, 10, -10);
    objectsGroup.add(mesh1);

    const geo2 = new THREE.OctahedronGeometry(5, 0);
    const mat2 = new THREE.MeshBasicMaterial({
      color: 0x9275ff,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const mesh2 = new THREE.Mesh(geo2, mat2);
    mesh2.position.set(22, -12, -15);
    objectsGroup.add(mesh2);

    const geo3 = new THREE.TetrahedronGeometry(3, 0);
    const mat3 = new THREE.MeshBasicMaterial({
      color: 0x7c5cff,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const mesh3 = new THREE.Mesh(geo3, mat3);
    mesh3.position.set(-14, -18, -8);
    objectsGroup.add(mesh3);

    // Star Dust Particles
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.9,
      color: 0x7c5cff,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Tracking Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Inertia mouse interpolation
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      // Rotate floating geometric shapes
      mesh1.rotation.x = elapsedTime * 0.2;
      mesh1.rotation.y = elapsedTime * 0.3;
      mesh1.position.y = 10 + Math.sin(elapsedTime * 0.5) * 1.5;

      mesh2.rotation.x = elapsedTime * 0.15;
      mesh2.rotation.z = elapsedTime * 0.25;
      mesh2.position.y = -12 + Math.cos(elapsedTime * 0.4) * 1.5;

      mesh3.rotation.y = elapsedTime * 0.3;
      mesh3.rotation.z = elapsedTime * 0.2;

      // Parallax movement
      objectsGroup.position.x = mouseX * 2;
      objectsGroup.position.y = -mouseY * 2;

      particles.rotation.y = elapsedTime * 0.008 + mouseX * 0.05;
      particles.rotation.x = elapsedTime * 0.005 + mouseY * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      geo1.dispose();
      mat1.dispose();
      geo2.dispose();
      mat2.dispose();
      geo3.dispose();
      mat3.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
