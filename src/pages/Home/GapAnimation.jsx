import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// Example uses a remote .lottie file; replace the URL or import a local .lottie asset

const GapAnimation = () => {
  return (
    <div className="py-16 flex justify-center items-center">
      <div className="w-full max-w-2xl">
        <DotLottieReact
          src="https://lottie.host/42ae4800-38e6-4a8b-bccb-c1f7a1c45232/IPkyHDJTJX.lottie"
          loop
          autoplay
          speed={0.8}
          style={{ width: "100%", height: "auto", minHeight: "400px" }}
        />
      </div>
    </div>
  );
};

export default GapAnimation;
