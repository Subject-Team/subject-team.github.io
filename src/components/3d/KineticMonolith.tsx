'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function KineticMonolith() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setIsSupported(false);
        return;
      }
    } catch {
      setIsSupported(false);
      return;
    }

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.8;

    // Renderer setup (threejs-performance optimized)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for the Monolith
    const monolithGroup = new THREE.Group();
    scene.add(monolithGroup);

    // 1. Monolith Outer Shell: Polyhedral Titanium Facets
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 0); // 20-sided faceted geometric monolith
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x181a20, // Dark titanium base
      metalness: 0.88,
      roughness: 0.18,
      flatShading: true,
      transparent: true,
      opacity: 0.94,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    monolithGroup.add(outerMesh);

    // 2. Technical Hairline Wireframe Edges (Hyper Electric Blue)
    const edgesGeo = new THREE.EdgesGeometry(outerGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0x0066ff, // Hyper electric blue
      linewidth: 1.5,
    });
    const wireframeLines = new THREE.LineSegments(edgesGeo, edgesMat);
    monolithGroup.add(wireframeLines);

    // 3. Inner Glowing Quantum Core (Secondary Polyhedron)
    const innerGeo = new THREE.OctahedronGeometry(0.85, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x0066ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    monolithGroup.add(innerMesh);

    // 4. Ambient Orbiting Data Particles (Instanced feeling)
    const particleCount = 48;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.4 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      positions[i] = radius * Math.cos(theta) * Math.cos(phi);
      positions[i + 1] = radius * Math.sin(phi);
      positions[i + 2] = radius * Math.sin(theta) * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x3385ff,
      size: 0.04,
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    monolithGroup.add(particles);

    // Lighting (Titanium specular highlights + Electric blue bounce)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x0066ff, 3.5, 12);
    blueLight.position.set(2, 3, 3);
    scene.add(blueLight);

    const rimLight = new THREE.DirectionalLight(0xe5e7eb, 2.0);
    rimLight.position.set(-3, -2, -2);
    scene.add(rimLight);

    // Mouse Tracking with Inertial Physics (Apple fluid motion)
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotation.y = x * 0.8;
      targetRotation.x = -y * 0.6;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Visibility Observer (Pause when off-screen to preserve GPU/battery)
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth critically-damped spring-like lerp to target pointer
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;

      // Base autonomous rotation + pointer tilt
      outerMesh.rotation.y = elapsedTime * 0.2 + currentRotation.y;
      outerMesh.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2 + currentRotation.x;

      wireframeLines.rotation.copy(outerMesh.rotation);

      // Counter-rotating quantum core
      innerMesh.rotation.y = -elapsedTime * 0.4 - currentRotation.y;
      innerMesh.rotation.z = Math.cos(elapsedTime * 0.25) * 0.3;

      // Pulse inner core scale
      const scale = 0.85 + Math.sin(elapsedTime * 1.8) * 0.05;
      innerMesh.scale.set(scale, scale, scale);

      // Slow particle orbit
      particles.rotation.y = elapsedTime * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      outerGeo.dispose();
      outerMat.dispose();
      edgesGeo.dispose();
      edgesMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!isSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center border border-obsidian-border bg-obsidian-card p-8">
        <div className="w-32 h-32 rounded-full border border-electric/40 flex items-center justify-center text-electric font-mono text-xs">
          [ MONOLITH ]
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
    </div>
  );
}
