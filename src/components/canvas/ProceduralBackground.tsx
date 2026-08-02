import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ProceduralBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
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
    renderer.setClearColor(0x08090c, 1);
    mount.appendChild(renderer.domElement);

    // Dynamic Ambient Glowing Energy Orbs (Soft Mesh Halos - Zero Wireframes)
    const createGlowOrb = (color: number, radius: number, x: number, y: number, z: number) => {
      const geo = new THREE.SphereGeometry(radius, 32, 32);
      const mat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      scene.add(mesh);
      return mesh;
    };

    const orb1 = createGlowOrb(0x6366f1, 14, -18, 12, -15); // Indigo
    const orb2 = createGlowOrb(0xec4899, 16, 20, -10, -20); // Hot Pink / Magenta
    const orb3 = createGlowOrb(0x06b6d4, 12, -10, -18, -10); // Cyan

    // Soft Floating Light Particles
    const particleCount = 90;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const indigo = new THREE.Color(0x6366f1);
    const magenta = new THREE.Color(0xec4899);
    const cyan = new THREE.Color(0x06b6d4);
    const palette = [indigo, magenta, cyan];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 70;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 70;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d')!;
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const particleMat = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      map: new THREE.CanvasTexture(canvas),
      transparent: true,
      opacity: 0.5,
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
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Mouse Inertia
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Animate Liquid Glow Orbs (Soft drifting organic motion)
      orb1.position.x = -18 + Math.sin(elapsedTime * 0.4) * 6 + mouseX * 4;
      orb1.position.y = 12 + Math.cos(elapsedTime * 0.3) * 5 + mouseY * 4;

      orb2.position.x = 20 + Math.cos(elapsedTime * 0.35) * 7 - mouseX * 4;
      orb2.position.y = -10 + Math.sin(elapsedTime * 0.45) * 6 - mouseY * 4;

      orb3.position.x = -10 + Math.sin(elapsedTime * 0.5) * 5;
      orb3.position.y = -18 + Math.cos(elapsedTime * 0.4) * 5;

      // Particle rotation
      particles.rotation.y = elapsedTime * 0.015 + mouseX * 0.1;
      particles.rotation.x = elapsedTime * 0.01 + mouseY * 0.1;

      camera.lookAt(0, 0, 0);
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
