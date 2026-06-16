// Overlays the camp timeline time boxes to perfectly center the text vertically.
// The imported Frame17 boxes are h-[16px] but text positioning is ~1.5px off.
// Camp section starts at page top=1752, left=19. Boxes are at left=151 within that.

const BOX_LEFT = 19 + 151; // 170px from container left
const BOX_W = 50;
const BOX_H = 16;
const CAMP_TOP = 1752;

const times = [
  { label: "11:00", top: 161 }, // Day1
  { label: "13:30", top: 229 },
  { label: "14:30", top: 303 },
  { label: "16:30", top: 371 },
  { label: "18:30", top: 439 },
  { label: "22:00", top: 507 },
  { label: "8:00",  top: 671 }, // Day2
  { label: "11:00", top: 743 },
  { label: "16:00", top: 810 },
];

export function CampTimesOverlay() {
  return (
    <>
      {times.map(({ label, top }, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-center rounded-[5px] bg-[#234e7d]"
          style={{
            left: BOX_LEFT,
            top: CAMP_TOP + top,
            width: BOX_W,
            height: BOX_H,
          }}
        >
          <span
            style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              fontWeight: 500,
              fontSize: 14,
              color: "white",
              lineHeight: 1,
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </>
  );
}
