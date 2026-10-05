"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const noise = (x: number, z: number) =>
  Math.sin(x * 0.11 + 1.3) * Math.cos(z * 0.09) + Math.sin(x * 0.23 + z * 0.17) * 0.5 + Math.sin(x * 0.5 - z * 0.41 + 2) * 0.22;
const smooth = (t: number) => { t = Math.min(1, t); return t * t * (3 - 2 * t); };
const hAt = (x: number, z: number) => (noise(x, z) * 6 + 4) * (0.12 + 0.88 * smooth(Math.abs(x) / 26)) - 2;

export default function Landscape() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dm = matchMedia("(prefers-color-scheme: dark)");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 300);
    const amb = new THREE.AmbientLight(0xffffff, 0.6 * Math.PI);
    const sun = new THREE.DirectionalLight(0xfff1d0, 0.9 * Math.PI);
    sun.position.set(-30, 40, -20);
    scene.add(amb, sun);

    // terrain
    const g = new THREE.PlaneGeometry(150, 220, 110, 150);
    g.rotateX(-Math.PI / 2);
    const p = g.attributes.position;
    const cols: number[] = [];
    const c = new THREE.Color();
    for (let i = 0; i < p.count; i++) {
      const y = hAt(p.getX(i), p.getZ(i));
      p.setY(i, y);
      c.set(y < -1.6 ? 0xd9c99b : y < 3 ? 0x6aa04c : y < 7 ? 0x3f7239 : y < 10.5 ? 0x8b857a : 0xf3f6f8);
      c.offsetHSL(0, 0, (Math.random() - 0.5) * 0.06);
      cols.push(c.r, c.g, c.b);
    }
    g.setAttribute("color", new THREE.Float32BufferAttribute(cols, 3));
    g.computeVertexNormals();
    const terrain = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 1 }));
    scene.add(terrain);

    // water
    const water = new THREE.Mesh(
      new THREE.PlaneGeometry(150, 220),
      new THREE.MeshStandardMaterial({ color: 0x3b7fa6, transparent: true, opacity: 0.8, roughness: 0.2 })
    );
    water.rotation.x = -Math.PI / 2;
    water.position.y = -1.6;
    scene.add(water);

    // trees
    const COUNT = 450;
    const trees = new THREE.InstancedMesh(
      new THREE.ConeGeometry(0.7, 2.6, 6),
      new THREE.MeshStandardMaterial({ color: 0x2c5a2e, flatShading: true }),
      COUNT
    );
    const d = new THREE.Object3D();
    for (let n = 0; n < COUNT; ) {
      const x = (Math.random() - 0.5) * 110, z = (Math.random() - 0.5) * 200, y = hAt(x, z);
      if (y > -1.2 && y < 5.5) {
        const s = 0.7 + Math.random() * 0.9;
        d.position.set(x, y + 1.3 * s, z);
        d.scale.set(s, s, s);
        d.updateMatrix();
        trees.setMatrixAt(n++, d.matrix);
      }
    }
    scene.add(trees);

    let mx = 0, my = 0, tx = 0, ty = 0, sy = 0, raf = 0;

    const draw = (t: number) => {
      mx += (tx - mx) * 0.05;
      my += (ty - my) * 0.05;
      const z = 75 - sy * 130;
      camera.position.set(mx * 4, Math.max(hAt(0, z), -1.2) + 5.5 - my * 1.2, z);
      const lz = z - 25;
      camera.lookAt(mx * -6, Math.max(hAt(0, lz), -1.2) + 3, lz);
      water.position.y = -1.6 + Math.sin(t * 0.001) * 0.05;
      renderer.render(scene, camera);
    };
    const theme = () => {
      const dusk = dm.matches;
      const sky = new THREE.Color(dusk ? 0x1b2147 : 0xbcd9ee);
      scene.background = sky;
      scene.fog = new THREE.Fog(sky, 35, 150);
      amb.intensity = (dusk ? 0.35 : 0.6) * Math.PI;
      sun.intensity = (dusk ? 0.5 : 0.9) * Math.PI;
      sun.color.set(dusk ? 0xff9a62 : 0xfff1d0);
      if (reduce) draw(0);
    };
    const resize = () => {
      renderer.setSize(innerWidth, innerHeight, false);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      if (reduce) draw(0);
    };
    const onMove = (e: PointerEvent) => { tx = (e.clientX / innerWidth) * 2 - 1; ty = (e.clientY / innerHeight) * 2 - 1; };
    const onScroll = () => {
      sy = scrollY / Math.max(1, document.body.scrollHeight - innerHeight);
      if (reduce) draw(0);
    };
    const loop = (t: number) => { draw(t); raf = requestAnimationFrame(loop); };

    dm.addEventListener("change", theme);
    addEventListener("pointermove", onMove);
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", resize);
    theme();
    resize();
    if (reduce) draw(0); else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      dm.removeEventListener("change", theme);
      removeEventListener("pointermove", onMove);
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", resize);
      g.dispose(); trees.geometry.dispose(); water.geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={ref} id="c" aria-hidden="true" />;
}
