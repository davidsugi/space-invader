import React, { useEffect, useRef, useState } from 'react';
import * as stores from "../stores";
import { Container } from "./style";
import Player from '@/components/Player';
import player from "../asset/spaceinvaders.svg"

export default function LandingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [playerX, setPlayerX] = useState(0);
  const [bullets, setBullets] = useState<{x:number,y:number}[]>([]);
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext('2d');

  const drawPlayer = () => {
    if(ctx){
      ctx.fillStyle = 'blue';
      const img = new Image();
      img.src = player;

      ctx.drawImage(img,playerX, (canvas?.height ?? 0) - 40, 40, 40)
    }
  };

  const drawBullets = () => {
    if(ctx){
      ctx.fillStyle = 'red';
      bullets.forEach((bullet) => {
        ctx.fillRect(bullet.x, bullet.y, 5, 10);
      });
    }
  };

  const moveBullets = () => {
    setBullets((prevBullets) =>
      prevBullets.map((bullet) => ({
        ...bullet,
        y: bullet.y - 5, // Adjust the bullet's speed and direction as needed
      }))
    );
  };

  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === 'ArrowLeft') {
      setPlayerX((prevX) => prevX - 35);
    } else if (event.key === 'ArrowRight') {
      setPlayerX((prevX) => prevX + 35);
    } else if (event.key === ' ') {
      setBullets((prevBullets) => [
        ...prevBullets,
        { x: playerX + 18, y:(canvas?.height ?? 0) - 30 },
      ]);
    }
  };

  const updateGame = () => {
    ctx?.clearRect(0, 0, canvas?.width ?? 0, canvas?.height ??0);
    drawPlayer();
    drawBullets();
    moveBullets();
  };

  const gameLoop = () => {
    updateGame();
    requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    const animationId = requestAnimationFrame(gameLoop);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animationId);
    };
  }, [playerX, bullets]);

  return <canvas ref={canvasRef} width={800} height={600} />;
}
