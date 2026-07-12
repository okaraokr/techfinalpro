import { useState, type ReactNode } from "react";
import svgPaths from "../../imports/Frame10/svg-xbu2d4vmev";
import { InstagramButton } from "./InstagramButton";

const faqs = [
  {
    question: "活動場所はどこですか？",
    answer: (
      <>
        <p className="leading-[19px] mb-0">活動毎に違いますが、基本的な活動場所は</p>
        <p className="leading-[19px] mb-0">三鷹市立の小学校です。大きな市民体育館で</p>
        <p className="leading-[19px]">活動することもあります！</p>
      </>
    ),
  },
  {
    question: "レベル感はどれくらいですか？",
    answer: (
      <>
        <p className="leading-[19px] mb-0">「体育の授業よりはレベルが高い」といった</p>
        <p className="leading-[19px] mb-0">感じです！未経験者や初心者も多く、</p>
        <p className="leading-[19px]">ネットの高さも2m25㎝なのでプレーはしやすいと思います！</p>
      </>
    ),
  },
  {
    question: "活動時間は何時ごろですか？",
    answer: (
      <>
        <p className="leading-[19px] mb-0">平日の活動日は18:30～21:00が基本で土日祝日は日によって12:00スタートの日があったり</p>
        <p className="leading-[19px]">します！</p>
      </>
    ),
  },
  {
    question: "活動に参加するときの持ち物は何ですか？",
    answer: (
      <>
        <p className="leading-[19px] mb-0">持ち物としては</p>
        <p className="leading-[19px] mb-0">　・運動着</p>
        <p className="leading-[19px] mb-0">　・体育館履き(バレーボールシューズ)</p>
        <p className="leading-[19px] mb-0">です！必要に応じて飲み物やタオルなども</p>
        <p className="leading-[19px]">ご持参ください！</p>
      </>
    ),
  },
  {
    question: "男女比はどれくらいですか？",
    answer: (
      <>
        <p className="leading-[19px] mb-0">おおよそ男子2: 女子1くらいです！活動日によっては同数や女子が上回る日もあります。</p>
        <p className="leading-[19px]">インカレ内の恋愛もあるとかないとか、、、</p>
      </>
    ),
  },
];

function FAQItem({ question, answer }: { question: string; answer: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full rounded-[21px] bg-[#f8fafc] overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center text-left"
        style={{ paddingTop: 7, paddingBottom: 7 }}
      >
        <div className="relative ml-[6px] shrink-0 size-[26px]">
          <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 26 26">
            <circle cx="13" cy="13" fill="#2A2A2A" r="13" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-bold text-white text-[20px] leading-none" style={{ fontFamily: "Inter, sans-serif" }}>Q</span>
        </div>
        <span className="ml-[7px] flex-1 text-[13px] text-black" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>{question}</span>
        <div
          className="mr-[14px] shrink-0 size-[20px] flex items-center justify-center"
          style={{ transition: "transform 0.3s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <div className="relative size-[20px]">
            <div className="absolute bottom-1/4 left-[10.35%] right-[10.35%] top-[5%]">
              <svg className="block size-full" fill="none" viewBox="0 0 15.8594 14">
                <path d={svgPaths.p2bc65280} fill="#FFD54A" />
              </svg>
            </div>
          </div>
        </div>
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
          transition: "grid-template-rows 0.35s ease, opacity 0.3s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="flex items-start pb-[12px]">
            <div className="relative ml-[6px] mt-[4px] shrink-0 size-[26px]">
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 26 26">
                <circle cx="13" cy="13" fill="#2A2A2A" r="13" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-bold text-white text-[20px] leading-none" style={{ fontFamily: "Inter, sans-serif" }}>A</span>
            </div>
            <div className="ml-[7px] text-[13px] text-black" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>{answer}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// FAQ + Contact を一体化して絶対位置で配置。
// FAQ が伸びると Contact も自動で押し下がる。
export function FAQSection() {
  return (
    <div className="absolute left-0 w-[390px]" style={{ top: 3798 }}>

      {/* FAQ ブロック */}
      <div className="w-full bg-[#6bb8ff] pb-[40px]">
        {/* タイトルバー */}
        <div className="w-full h-[43.595px] bg-[rgba(255,255,255,0.39)] flex items-center justify-center">
          <span className="text-[#f8fafc] text-[24px] text-center" style={{ fontFamily: "'Mochiy Pop One', sans-serif" }}>
            FAQ
          </span>
        </div>

        {/* アコーディオン */}
        <div className="flex flex-col gap-[23px] mx-[19px] mt-[22px] pb-[10px]">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      {/* Contact ブロック — FAQの直下にフローで続く */}
      <div className="w-full bg-[#234e7d] flex flex-col items-center pt-[33px] pb-[40px]">
        <span className="text-white text-[24px]" style={{ fontFamily: "'Mochiy Pop One', sans-serif" }}>
          CONTACT
        </span>
        <div className="mt-[9px] w-[145px] h-px bg-white" />
        <p className="mt-[19px] text-white text-[14px] text-center leading-[1.6]" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          体験希望やご質問がある方は<br />こちらから！
        </p>
        <div className="mt-[15px]">
          <InstagramButton />
        </div>
      </div>

    </div>
  );
}
