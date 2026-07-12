// Wave dividers placed in the genuine empty zones between sections.
// Each wave sits entirely within the previous section's unused bottom space,
// so it never overlaps the next section's content.

const WAVE_PATH =
  "M390 67.0361C387.209 66.2974 384.667 65.3006 382.346 64.0918C359.599 52.2446 333.095 53.3834 305.332 63.0234C283.176 70.7167 268.079 69.5777 257.546 64.0918C234.799 52.2445 208.296 53.3835 180.532 63.0234C158.376 70.7166 143.279 69.5777 132.746 64.0918C109.999 52.2444 83.495 53.3833 55.7314 63.0234C33.5751 70.7165 18.4783 69.5777 7.94531 64.0918C5.34497 62.7375 2.6948 61.5548 0 60.5332V0H390V67.0361Z";

const H = 68;

interface WaveProps {
  top: number;
  fromColor: string;
  toColor: string;
}

function Wave({ top, fromColor, toColor }: WaveProps) {
  return (
    <div
      className="absolute left-0 w-[390px] pointer-events-none"
      style={{ top, height: H, zIndex: 6 }}
    >
      <div className="absolute inset-0" style={{ background: toColor }} />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 390 ${H}`}
        fill="none"
        preserveAspectRatio="none"
      >
        <path d={WAVE_PATH} fill={fromColor} />
      </svg>
    </div>
  );
}

export function WaveDividers() {
  return (
    <>
      {/*
        合宿 (#ffe079) → イベント (#ffd54a)
        合宿セクションのbgは top=1752, h=940 → ends at 2692
        合宿内コンテンツ最終要素（帰宅写真）は ~2578 で終了
        → 波を top=2624 に置く（bottom=2692 = イベント開始ぴったり）
        コンテンツとの余白 ~46px を確保
      */}
      <Wave top={2624} fromColor="#ffe079" toColor="#ffd54a" />

      {/*
        イベント (#ffd54a) → FAQ (#6bb8ff)
        イベントbgは top=2692, h=1065 → ends at 3757
        イベント内コンテンツ最終要素（市民大会テキスト）は ~3714 で終了
        FAQSectionは top=3798 から開始（青背景）
        → 波を top=3730 に置く（bottom=3798 = FAQSection開始ぴったり）
        コンテンツとの余白 ~16px + 空きゾーン84px 内に収まる
      */}
      <Wave top={3730} fromColor="#ffd54a" toColor="#6bb8ff" />
    </>
  );
}
