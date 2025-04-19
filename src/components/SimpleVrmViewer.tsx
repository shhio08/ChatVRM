import React, { useEffect, useRef, useContext } from "react";
import { ViewerContext } from "../features/vrmViewer/viewerContext";
import { buildUrl } from "@/utils/buildUrl";

const SimpleVrmViewer = () => {
  const { viewer } = useContext(ViewerContext);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Viewerのセットアップ
    viewer.setup(canvas);
    // 固定のVRMファイルをロード
    viewer.loadVrm(buildUrl("/okon_05.vrm"));

    // クリーンアップ処理
    return () => {
      viewer.unloadVRM();
    };
  }, [viewer]);

  return <canvas ref={canvasRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default SimpleVrmViewer;
