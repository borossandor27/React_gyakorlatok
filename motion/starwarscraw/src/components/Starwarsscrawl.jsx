import { useEffect, useRef, useState } from "react";
import { gsap } from "https://cdn.skypack.dev/gsap";

const crawlText = `Egy távoli galaxisban, réges-régen...

A Galaktikus Birodalom egyre erősebb lesz. A Lázadó Szövetség titokban új bázisukat építi, miközben kémei megszerzik a Birodalom leghatalmasabb fegyverének, a HALÁLCSILLAGNAK terveit.

A gonosz Darth Vader üldözi őket a csillagok között, hogy visszaszerezze az ellopott terveket és megsemmisítse az ellenállást, mielőtt az elérheti otthonát és megmentheti a galaxist...

A Lázadók egy fiatal hős, Luke Skywalker vezetésével indulnak el, hogy megmentsék a galaxist a sötét erőktől...

`;

export default function StarWarsCrawl() {
  const containerRef = useRef(null);
  const crawlRef = useRef(null);
  const introRef = useRef(null);
  const titleRef = useRef(null);
  const [phase, setPhase] = useState("intro"); // intro | title | crawl | done

  useEffect(() => {
    const tl = gsap.timeline();

    // Phase 1: "Réges-régen..." intro text fade in then out
    tl.fromTo(
      introRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.in" }
    )
      .to(introRef.current, { opacity: 1, duration: 2.5 })
      .to(introRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => setPhase("title"),
      });

    // Phase 2: EPISODE IV title zoom out
    tl.fromTo(
      titleRef.current,
      { opacity: 1, scale: 8 },
      {
        opacity: 0,
        scale: 0.2,
        duration: 6,
        ease: "power1.in",
        onComplete: () => setPhase("crawl"),
      }
    );

    // Phase 3: Crawl text scrolling up in perspective
    tl.fromTo(
      crawlRef.current,
      { y: "100%" },
      {
        y: "-160%",
        duration: 50,
        ease: "none",
        onComplete: () => setPhase("done"),
      }
    );

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'News Cycle', 'Georgia', serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Stars background */}
      <Stars />

      {/* Phase 1: Intro sentence */}
      <div
        ref={introRef}
        style={{
          position: "absolute",
          color: "#4fc3f7",
          fontSize: "clamp(1.2rem, 3vw, 2rem)",
          letterSpacing: "0.1em",
          textAlign: "center",
          opacity: 0,
          zIndex: 10,
          fontStyle: "italic",
        }}
      >
        Réges-régen, egy távoli galaxisban...
      </div>

      {/* Phase 2: Episode title */}
      <div
        ref={titleRef}
        style={{
          position: "absolute",
          textAlign: "center",
          opacity: phase === "title" || phase === "intro" ? 1 : 0,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            color: "#FFE81F",
            fontSize: "clamp(1rem, 3vw, 1.8rem)",
            letterSpacing: "0.4em",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          IV. EPIZÓD
        </div>
        <div
          style={{
            color: "#FFE81F",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            fontWeight: "900",
            letterSpacing: "0.05em",
            lineHeight: 1,
            textTransform: "uppercase",
          }}
        >
          EGY ÚJ
          <br />
          REMÉNY
        </div>
      </div>

      {/* Phase 3: Crawl */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "100%",
          perspective: "400px",
          perspectiveOrigin: "50% 100%",
          overflow: "hidden",
          opacity: phase === "crawl" || phase === "done" ? 1 : 0,
          transition: "opacity 0.5s",
        }}
      >
        <div
          ref={crawlRef}
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "50%",
            transform: "translateX(-50%) rotateX(20deg)",
            transformOrigin: "50% 100%",
            width: "55%",
            maxWidth: "700px",
            textAlign: "justify",
            color: "#FFE81F",
            fontSize: "clamp(1rem, 2.2vw, 1.5rem)",
            lineHeight: 1.8,
            fontWeight: "bold",
            letterSpacing: "0.05em",
            padding: "0 1rem",
          }}
        >
          {crawlText.split("\n").map((line, i) => (
            <p
              key={i}
              style={{
                margin: "0 0 1.5em 0",
                textTransform: line === line.toUpperCase() && line.length > 3
                  ? "uppercase"
                  : "none",
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.85) 100%)",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: "linear-gradient(to top, #000 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 6,
        }}
      />
    </div>
  );
}

function Stars() {
  const stars = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    opacity: Math.random() * 0.7 + 0.3,
  }));

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
      {stars.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: "#fff",
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}