import svgPaths from "../../imports/Frame12/svg-u0n5a3o147";

interface HamburgerMenuProps {
  onClose: () => void;
}

// Scroll positions matching the absolute layout in Frame17
const SCROLL_TARGETS: Record<string, number> = {
  ABOUT: 326,
  GALLARY: 746,
  "usual activities": 902,
  camp: 1752,
  events: 2692,
  FAQ: 3798,
  CONTACT: 4254,
};

function scrollTo(target: string, onClose: () => void) {
  onClose();
  // Small delay so the menu fade-out doesn't fight the scroll
  setTimeout(() => {
    window.scrollTo({ top: SCROLL_TARGETS[target], behavior: "smooth" });
  }, 100);
}

export function HamburgerMenu({ onClose }: HamburgerMenuProps) {
  return (
    <div className="absolute inset-0 z-50" style={{ width: 390, height: 825 }}>
      {/* Blue background */}
      <div className="absolute inset-0 bg-[#6bb8ff]" />

      {/* MBC — matches Frame17 header position exactly */}
      <div
        className="absolute flex flex-col justify-center text-center text-white"
        style={{
          left: 12,
          top: 7,
          width: 80,
          height: 41,
          fontFamily: "'Zen Maru Gothic', sans-serif",
          fontWeight: 900,
          fontSize: 27,
        }}
      >
        MBC
      </div>

      {/* X button — over the hamburger lines */}
      <button
        onClick={onClose}
        aria-label="メニューを閉じる"
        className="absolute flex items-center justify-center"
        style={{ left: 325, top: 5, width: 57, height: 50 }}
      >
        <div className="-rotate-45" style={{ width: 40, height: 40 }}>
          <svg className="block size-full" fill="none" viewBox="0 0 40 40">
            <path d={svgPaths.p3ed76300} fill="#F8FAFC" />
          </svg>
        </div>
      </button>

      {/* Nav links */}
      <div
        className="absolute flex flex-col items-center justify-center gap-[38px]"
        style={{ left: "50%", top: 148, transform: "translateX(-50%)", width: 213, height: 492 }}
      >
        <NavLink label="ABOUT" onClose={onClose} />

        <div className="flex flex-col items-center gap-[10px]">
          <NavLink label="GALLARY" onClose={onClose} />
          <NavSubLink label="usual activities" onClose={onClose} />
          <NavSubLink label="camp" onClose={onClose} />
          <NavSubLink label="events" onClose={onClose} />
        </div>

        <NavLink label="FAQ" onClose={onClose} />
        <NavLink label="CONTACT" onClose={onClose} />
      </div>
    </div>
  );
}

function NavLink({ label, onClose }: { label: string; onClose: () => void }) {
  return (
    <button
      onClick={() => scrollTo(label, onClose)}
      style={{
        fontFamily: "'Mochiy Pop P One', sans-serif",
        fontSize: 32,
        color: "white",
        textDecoration: "underline",
        textDecorationColor: "white",
        textUnderlineOffset: 4,
        lineHeight: 1.3,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        display: "inline-block",
      }}
    >
      {label}
    </button>
  );
}

function NavSubLink({ label, onClose }: { label: string; onClose: () => void }) {
  return (
    <button
      onClick={() => scrollTo(label, onClose)}
      style={{
        fontFamily: "'Mochiy Pop P One', sans-serif",
        fontSize: 16,
        color: "white",
        textDecoration: "underline",
        textDecorationColor: "white",
        textUnderlineOffset: 3,
        lineHeight: 1.3,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        display: "inline-block",
      }}
    >
      {label}
    </button>
  );
}
