import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export default function ThreeBackground() {
  const mountRef = useRef(null);
  const { currentTheme } = useTheme();
  const materialsRef = useRef({ wire: null, blueWire: null, points: null });

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(THREE.Color.NAMES[currentTheme.bg] || currentTheme.bg, 0.015);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group for 3D floating shapes
    const group = new THREE.Group();
    scene.add(group);

    // Materials
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: currentTheme.threeMesh,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });

    const blueWireframeMaterial = new THREE.MeshBasicMaterial({
      color: currentTheme.threeColor,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });

    const cyanPointMaterial = new THREE.PointsMaterial({
      color: currentTheme.threeColor,
      size: 0.15,
      transparent: true,
      opacity: 0.6,
    });

    materialsRef.current = {
      wire: wireframeMaterial,
      blueWire: blueWireframeMaterial,
      points: cyanPointMaterial,
    };

    // Create 3D floating geometries
    const meshes = [];
    const geometries = [
      new THREE.IcosahedronGeometry(2, 1),
      new THREE.BoxGeometry(2.5, 2.5, 2.5),
      new THREE.TorusGeometry(2, 0.6, 12, 24),
      new THREE.OctahedronGeometry(2, 0),
      new THREE.DodecahedronGeometry(2.2, 0),
    ];

    for (let i = 0; i < 24; i++) {
      const geom = geometries[i % geometries.length];
      const mat = i % 2 === 0 ? wireframeMaterial : blueWireframeMaterial;
      const mesh = new THREE.Mesh(geom, mat);

      mesh.position.x = (Math.random() - 0.5) * 60;
      mesh.position.y = (Math.random() - 0.5) * 60;
      mesh.position.z = (Math.random() - 0.5) * 40;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      const scale = Math.random() * 0.8 + 0.6;
      mesh.scale.set(scale, scale, scale);

      mesh.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.008,
        rotSpeedY: (Math.random() - 0.5) * 0.008,
        floatSpeed: (Math.random() - 0.5) * 0.005,
        initialY: mesh.position.y,
      };

      group.add(mesh);
      meshes.push(mesh);
    }

    // Floating 3D Starfield/Particle Cloud
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 80;
      particlePositions[i + 1] = (Math.random() - 0.5) * 80;
      particlePositions[i + 2] = (Math.random() - 0.5) * 50;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleSystem = new THREE.Points(particleGeometry, cyanPointMaterial);
    scene.add(particleSystem);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y = targetX * 0.5;
      group.rotation.x = -targetY * 0.5;

      // Rotate individual meshes
      meshes.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.rotSpeedX;
        mesh.rotation.y += mesh.userData.rotSpeedY;
        mesh.position.y =
          mesh.userData.initialY + Math.sin(elapsedTime + mesh.position.x) * 1.5;
      });

      // Slowly rotate particle field
      particleSystem.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update material colors dynamically on theme change
  useEffect(() => {
    if (materialsRef.current.wire) {
      materialsRef.current.wire.color.setHex(currentTheme.threeMesh);
      materialsRef.current.blueWire.color.setHex(currentTheme.threeColor);
      materialsRef.current.points.color.setHex(currentTheme.threeColor);
    }
  }, [currentTheme]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-70 transition-opacity duration-500"
    />
  );
}
