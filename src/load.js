import { useEffect, useState } from "react";
import "./load.css"; // 스타일시트 임포트

function Load() {
  const [animate1, setAnimate1] = useState(false);

  useEffect(() => {
    // 1.5초 후 애니메이션 시작
    const timer = setTimeout(() => {
      setAnimate1(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#00492C",
        height: "100vh",
        display: "flex",
        padding: "0px",
        margin: "0px",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Lingro+ 로고 : animate1 */}
      <h1
        style={{
          color: "#F2C81B",
          fontFamily: "Cormorant Garamond, serif",
          fontWeight: 600,
          fontSize: animate1 ? "60px" : "128px",
          position: "absolute",
          padding: "0px",
          margin: "0px",
          top: animate1 ? "7%" : "50%",
          left: animate1 ? "13%" : "50%",
          transform: animate1 ? "translate(0, 0)" : "translate(-50%, -50%)",
          opacity: 1,
          transition: "all 1.5s ease-in-out",
        }}
      >
        Lingro+
      </h1>
    </div>
  );
}

export default Load;
