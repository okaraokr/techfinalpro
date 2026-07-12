import { useState, useEffect } from "react";
import Frame6 from "../imports/Frame27/index";
import newHeroImg from "../imports/image.png";
import mbcLogoImg from "../imports/Frame27/92e5f5409a2194ec00a4d3a5ca2d6651abd07f26.png";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { FAQSection } from "./components/FAQAccordion";
import { CampTimesOverlay } from "./components/CampTimesOverlay";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Enlarge MBC header logo.
    document.querySelectorAll("p").forEach((p) => {
      if (p.textContent?.trim() === "MBC") {
        const parent = p.closest<HTMLElement>("div[class*='absolute']");
        if (parent) {
          parent.style.fontSize = "38px";
          parent.style.width = "100px";
          parent.style.height = "52px";
        }
      }
    });

    // Bring "to 長野" above the ellipse background.
    document.querySelectorAll("p").forEach((p) => {
      if (p.textContent?.trim() === "to 長野") {
        const parent = p.closest<HTMLElement>("div[class*='absolute']");
        if (parent) parent.style.zIndex = "2";
      }
    });

    // Hide "～学生生活に彩りを～" text in hero area.
    document.querySelectorAll("p").forEach((p) => {
      if (p.textContent?.trim().includes("学生生活に")) {
        const parent = p.closest<HTMLElement>("div[class*='absolute']");
        if (parent) parent.style.display = "none";
      }
    });

    // Replace hero image: swap src on Frame27's Intersect img and apply clip-path.
    const INTERSECT_PATH =
      "M390 385.737C384.016 379.723 376.807 375.549 368.508 373.378C358.269 370.7 346.968 371.216 334.985 374.134C325.167 376.525 317.47 376.547 311.52 374.991C305.774 373.489 301.111 370.383 297.255 365.359C290.535 356.606 281.814 350.704 271.37 347.973C261.131 345.295 249.83 345.81 237.847 348.729C228.028 351.12 220.33 351.142 214.38 349.586C208.635 348.083 203.972 344.979 200.115 339.955C193.395 331.201 184.675 325.299 174.23 322.567C163.991 319.889 152.691 320.405 140.708 323.323C130.889 325.715 123.191 325.737 117.241 324.181C111.496 322.678 106.834 319.573 102.978 314.549C96.2575 305.795 87.5362 299.893 77.0918 297.161C66.8524 294.483 55.5518 295 43.5684 297.918C33.7498 300.309 26.0536 300.331 20.1035 298.775C14.3585 297.273 9.69447 294.168 5.83789 289.145C4.03471 286.796 2.08593 284.654 0 282.722V0H390V385.737Z";
    const heroImg = document.querySelector<HTMLImageElement>('[data-name="Intersect"] img');
    if (heroImg) {
      heroImg.src = newHeroImg;
      heroImg.style.clipPath = `path('${INTERSECT_PATH}')`;
      heroImg.style.objectFit = "cover";
    }

    // Fix broken line break in Frame27's 市民大会 description.
    const lineBreaks: [string, string][] = [
      ["近くの市民大会にサークルメンバーで", "近くの市民大会に<br>サークルメンバーで"],
      [
        "MBCは三鷹市を中心として活動を行っている大学・専門学校の学生の集まりです",
        "MBCは三鷹市を中心として活動を<br>行っている大学・専門学校の学生の<br>集まりです",
      ],
    ];
    document.querySelectorAll("p").forEach((p) => {
      const text = p.textContent?.trim() ?? "";
      const match = lineBreaks.find(([src]) => src === text);
      if (match) p.innerHTML = match[1];
      if (["普段の活動", "合宿", "イベント"].includes(text)) {
        const el = p.parentElement as HTMLElement;
        el.style.fontWeight = "900";
        el.style.webkitTextStroke = "0.6px black";
      }
    });

    // Inject fade-in-up animation CSS.
    const fadeStyle = document.createElement("style");
    fadeStyle.textContent = `
      .gallery-fade {
        opacity: 0;
        transform: translateY(22px);
        transition: opacity 0.45s ease, transform 0.45s ease;
      }
      .gallery-fade.in-view {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(fadeStyle);

    const GALLERY_TOP = 746;

    // Event y-ranges: text + ribbon in each range animate together as one group.
    const EVENT_RANGES: [number, number][] = [
      [2780, 2910],  // ゲーム大会
      [3020, 3150],  // 日帰り旅行
      [3250, 3380],  // BBQ
      [3490, 3615],  // 市民大会
    ];

    const pageY = (el: Element) =>
      el.getBoundingClientRect().top + window.scrollY;

    const eventGroups: Element[][] = EVENT_RANGES.map(() => []);
    const standalone: Element[] = [];
    const seen = new Set<Element>();

    const register = (el: Element) => {
      if (seen.has(el)) return;
      seen.add(el);
      el.classList.add("gallery-fade");
      const top = pageY(el);
      const gi = EVENT_RANGES.findIndex(([a, b]) => top >= a && top <= b);
      if (gi !== -1) eventGroups[gi].push(el);
      else standalone.push(el);
    };

    // Register img parent containers.
    document.querySelectorAll("img").forEach((img) => {
      if (pageY(img) >= GALLERY_TOP) {
        const p = img.parentElement;
        if (p) register(p);
      }
    });

    // Register text description containers inside event ranges.
    document.querySelectorAll<HTMLElement>("*").forEach((el) => {
      if (window.getComputedStyle(el).position !== "absolute") return;
      const top = pageY(el);
      const inEvent = EVENT_RANGES.some(([a, b]) => top >= a && top <= b);
      if (!inEvent) return;
      if (el.querySelector("img")) return; // already handled via img path
      if (el.textContent?.trim()) register(el);
    });

    const observers: IntersectionObserver[] = [];

    // Standalone: each element triggers itself.
    const soObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            soObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    standalone.forEach((el) => soObs.observe(el));
    observers.push(soObs);

    // Event groups: first visible element in group fires all at once.
    eventGroups.forEach((group) => {
      if (!group.length) return;
      const gObs = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            group.forEach((el) => el.classList.add("in-view"));
            gObs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      group.forEach((el) => gObs.observe(el));
      observers.push(gObs);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
      fadeStyle.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#dcdcdc] flex justify-center">
      <div className="relative w-[390px] h-[4416px] overflow-x-hidden">
        <Frame6 />

        {/* MBC about section — gradient clipped to exact section shape (diagonal top edge).
            Outer div clips to M0 0 L390 99 V420 H0 Z; inner div has the gradient. */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: 0,
            top: 326,
            width: 390,
            height: 420,
            clipPath: "polygon(0 0, 100% 23.57%, 100% 100%, 0 100%)",
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(107,184,255,0.45) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* MBC header logo — displayed to the left of the MBC text */}
        <img
          src={mbcLogoImg}
          alt="MBC logo"
          className="absolute pointer-events-none"
          style={{ left: 8, top: 6, width: 40, height: 40, objectFit: "contain", zIndex: 3 }}
        />

        {/* Ellipse background behind "to 長野" */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: 95.5 - 52,
            top: 1832.5 - 27,
            width: 104,
            height: 54,
            background: "#F8FAFC",
            borderRadius: "50%",
            zIndex: 1,
          }}
        />

        {/* Gallery tab buttons — scroll to each activity section */}
        {[
          { left: 47,  label: "普段の活動", target: 902  },
          { left: 160, label: "合宿",       target: 1752 },
          { left: 272, label: "イベント",   target: 2692 },
        ].map(({ left, label, target }) => (
          <button
            key={label}
            aria-label={`${label}セクションへ`}
            onClick={() => window.scrollTo({ top: target, behavior: "smooth" })}
            className="absolute z-10 cursor-pointer"
            style={{ left, top: 872, width: 99, height: 30 }}
          />
        ))}

        {/* FAQ section overlay — replaces Frame17's fixed-height FAQ block */}
        <FAQSection />

        {/* Camp timeline time boxes — re-rendered with proper vertical centering */}
        <CampTimesOverlay />


        {/* Clickable overlay on the hamburger icon (3 lines at top-right) */}
        {!menuOpen && (
          <button
            onClick={() => setMenuOpen(true)}
            className="absolute top-0 right-0 w-[55px] h-[55px] z-50"
            aria-label="メニューを開く"
          />
        )}

        {/* Hamburger menu overlay */}
        <div
          className="absolute top-0 left-0 w-[390px] h-[4416px] z-50 pointer-events-none"
          style={{
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.35s ease",
            pointerEvents: menuOpen ? "none" : "none",
          }}
        >
          <div
            className="sticky top-0 w-[390px] h-[825px]"
            style={{ pointerEvents: menuOpen ? "auto" : "none" }}
          >
            <HamburgerMenu onClose={() => setMenuOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}
