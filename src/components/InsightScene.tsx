import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./styles/InsightScene.css";

const nodeData = [
  { label: "Behavior", position: [-1.9, 0.8, 0.2], color: "#2f6f73" },
  { label: "Motivation", position: [-0.75, 1.35, -0.5], color: "#8a4f7d" },
  { label: "Perception", position: [1.15, 0.95, 0.25], color: "#d69f45" },
  { label: "Research", position: [1.75, -0.25, -0.45], color: "#2f6f73" },
  { label: "Message", position: [0.35, -1.25, 0.35], color: "#8a4f7d" },
  { label: "Insight", position: [-1.35, -0.75, -0.25], color: "#d69f45" },
];

const InsightScene = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0.25, 7.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const insightGroup = new THREE.Group();
    scene.add(insightGroup);

    const ambientLight = new THREE.AmbientLight("#ffffff", 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight("#f3fbf9", 2.6);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight("#b58aa8", 4, 12);
    fillLight.position.set(-4, -2, 3);
    scene.add(fillLight);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.86, 2),
      new THREE.MeshPhysicalMaterial({
        color: "#e7f4f1",
        emissive: "#2f6f73",
        emissiveIntensity: 0.08,
        metalness: 0.18,
        roughness: 0.24,
        transmission: 0.18,
        transparent: true,
        opacity: 0.82,
        clearcoat: 0.7,
      })
    );
    insightGroup.add(core);

    const wireCore = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.93, 1),
      new THREE.MeshBasicMaterial({
        color: "#2f6f73",
        transparent: true,
        opacity: 0.16,
        wireframe: true,
      })
    );
    insightGroup.add(wireCore);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: "#8a4f7d",
      opacity: 0.26,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const rings = [1.55, 2.1, 2.65].map((radius, index) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.008, 12, 120),
        ringMaterial.clone()
      );
      ring.rotation.set(
        Math.PI / 2.25,
        index * 0.72,
        Math.PI / (2.5 + index)
      );
      insightGroup.add(ring);
      return ring;
    });

    const nodeGeometry = new THREE.SphereGeometry(0.105, 24, 24);
    const nodes = nodeData.map((item) => {
      const material = new THREE.MeshPhysicalMaterial({
        color: item.color,
        emissive: item.color,
        emissiveIntensity: 0.18,
        roughness: 0.35,
        metalness: 0.08,
      });
      const node = new THREE.Mesh(nodeGeometry, material);
      node.position.fromArray(item.position);
      insightGroup.add(node);
      return node;
    });

    const linePoints: THREE.Vector3[] = [];
    nodes.forEach((node, index) => {
      const nextNode = nodes[(index + 1) % nodes.length];
      linePoints.push(node.position.clone(), nextNode.position.clone());
      linePoints.push(new THREE.Vector3(0, 0, 0), node.position.clone());
    });

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
    const lines = new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({
        color: "#36545c",
        transparent: true,
        opacity: 0.26,
      })
    );
    insightGroup.add(lines);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 120;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index++) {
      particlePositions[index * 3] = THREE.MathUtils.randFloatSpread(6.2);
      particlePositions[index * 3 + 1] = THREE.MathUtils.randFloatSpread(4.8);
      particlePositions[index * 3 + 2] = THREE.MathUtils.randFloatSpread(3.6);
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: "#6d8790",
        size: 0.022,
        transparent: true,
        opacity: 0.42,
      })
    );
    insightGroup.add(particles);

    let width = 0;
    let height = 0;
    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;
    let scrollTarget = 0;
    let scrollValue = 0;

    const resize = () => {
      const rect = mount.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const updateScroll = () => {
      const rect = mount.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      scrollTarget = THREE.MathUtils.clamp(
        1 - rect.top / viewportHeight,
        0,
        2
      );
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
      pointerY = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;
    };

    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      scrollValue += (scrollTarget - scrollValue) * 0.055;

      insightGroup.rotation.y = elapsed * 0.16 + pointerX * 0.18 + scrollValue * 0.55;
      insightGroup.rotation.x = -0.1 + pointerY * 0.11 - scrollValue * 0.18;
      insightGroup.position.y = Math.sin(elapsed * 0.7) * 0.08 - scrollValue * 0.12;
      core.rotation.y = elapsed * 0.28;
      core.rotation.x = elapsed * 0.18;
      wireCore.rotation.y = -elapsed * 0.18;
      particles.rotation.y = elapsed * 0.035;

      rings.forEach((ring, index) => {
        ring.rotation.z += 0.0015 + index * 0.0007;
        ring.rotation.x += 0.0009;
      });

      nodes.forEach((node, index) => {
        const pulse = 1 + Math.sin(elapsed * 1.8 + index) * 0.08;
        node.scale.setScalar(pulse);
      });

      camera.position.z = 7.2 - scrollValue * 0.34;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    resize();
    updateScroll();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", updateScroll, { passive: true });
    mount.addEventListener("pointermove", handlePointerMove);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateScroll);
      mount.removeEventListener("pointermove", handlePointerMove);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      nodeGeometry.dispose();
      lineGeometry.dispose();
      particleGeometry.dispose();
      core.geometry.dispose();
      wireCore.geometry.dispose();
      rings.forEach((ring) => ring.geometry.dispose());
    };
  }, []);

  return (
    <div className="insight-scene" ref={mountRef} aria-hidden="true">
      <div className="insight-scene-label label-behavior">Behavior</div>
      <div className="insight-scene-label label-research">Research</div>
      <div className="insight-scene-label label-insight">Insight</div>
    </div>
  );
};

export default InsightScene;
