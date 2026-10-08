"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Grid
    const gridHelper = new THREE.GridHelper(60, 30, 0x000000, 0x000000);
    gridHelper.material.opacity = 0.04;
    gridHelper.material.transparent = true;
    gridHelper.rotation.x = Math.PI / 2;
    gridHelper.position.z = -10;
    scene.add(gridHelper);

    // Vehicle wireframe outline
    const vehicleShape = new THREE.Shape();
    vehicleShape.moveTo(-4, 0);
    vehicleShape.lineTo(-3.5, 1.2);
    vehicleShape.lineTo(-1, 1.8);
    vehicleShape.lineTo(2, 1.8);
    vehicleShape.lineTo(3.5, 1);
    vehicleShape.lineTo(4, 0);
    vehicleShape.lineTo(3.5, -0.5);
    vehicleShape.lineTo(2, -0.8);
    vehicleShape.lineTo(-1, -0.8);
    vehicleShape.lineTo(-3.5, -0.5);
    vehicleShape.closePath();

    const extrudeSettings = { depth: 0.1, bevelEnabled: false };
    const geometry = new THREE.ExtrudeGeometry(vehicleShape, extrudeSettings);
    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    });
    const vehicle = new THREE.Mesh(geometry, material);
    vehicle.scale.set(1.5, 1.5, 1);
    vehicle.position.set(0, 0, 0);
    scene.add(vehicle);

    // Data nodes
    const nodes: THREE.Mesh[] = [];
    const nodeGeometry = new THREE.SphereGeometry(0.15, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.3,
    });

    for (let i = 0; i < 12; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
      const angle = (i / 12) * Math.PI * 2;
      const radius = 8 + Math.random() * 6;
      node.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.5,
        -5 + Math.random() * 3
      );
      scene.add(node);
      nodes.push(node);
    }

    // Connection lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.03,
    });
    const lines: THREE.Line[] = [];
    for (let i = 0; i < 6; i++) {
      const points = [];
      const startAngle = (i / 6) * Math.PI * 2;
      for (let j = 0; j <= 20; j++) {
        const t = j / 20;
        points.push(
          new THREE.Vector3(
            Math.cos(startAngle + t * 0.5) * (5 + t * 10),
            Math.sin(startAngle + t * 0.3) * 3,
            -8 + t * 5
          )
        );
      }
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
      lines.push(line);
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      vehicle.rotation.z = Math.sin(Date.now() * 0.0003) * 0.02;
      vehicle.position.x = mouseX * 2;
      vehicle.position.y = -mouseY * 1;

      nodes.forEach((node, i) => {
        node.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
        const mat = node.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.15 + Math.sin(Date.now() * 0.002 + i * 0.5) * 0.15;
      });

      camera.position.x = mouseX * 1;
      camera.position.y = mouseY * 0.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
