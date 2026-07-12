import imgImage2 from "../../imports/Group1/459b15fd56cd41c8afefa9336051c4dda964e07b.png";

export function InstagramButton() {
  return (
    <a
      href="https://www.instagram.com/v_alleyball0611?igsh=MWZhNnJ5NGU2ZXow"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-[8px] bg-[#f8fafc] rounded-[18.5px] px-[12px]"
      style={{ width: 138, height: 38.405 }}
    >
      <img
        src={imgImage2}
        alt="Instagram"
        className="shrink-0"
        style={{ width: 36, height: 36, objectFit: "contain" }}
      />
      <span
        className="text-[16px] text-black"
        style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        Instagram
      </span>
    </a>
  );
}
