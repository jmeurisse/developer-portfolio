import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const [animationData, setAnimationData] = useState<any | null>(null);

  // Load the JSON file from the public folder on the client side
  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const res = await fetch(`/lottie/${animationPath}`);
        const data = await res.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Failed to load animation:', error);
      }
    };

    fetchAnimation();
  }, [animationPath]);

  if (!animationData) return <p>Loading animation...</p>;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div onClick={() => null}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default GreetingLottie;
