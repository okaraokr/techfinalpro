import svgPaths from "./svg-u0n5a3o147";

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Mochiy_Pop_P_One:Regular',sans-serif] gap-[10px] h-[184px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-center text-white w-[133px]">
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid h-[57px] relative shrink-0 text-[32px] underline w-[207px]">GALLARY</p>
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid h-[38px] relative shrink-0 text-[16px] underline w-[207px]">usual activities</p>
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid h-[38px] relative shrink-0 text-[16px] underline w-[207px]">camp</p>
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid h-[38px] relative shrink-0 text-[16px] underline w-[207px]">events</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[133px]">
      <div className="[word-break:break-word] flex flex-col font-['Mochiy_Pop_P_One:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center text-white w-full">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] underline">FAQ</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[133px]">
      <div className="[word-break:break-word] flex flex-col font-['Mochiy_Pop_P_One:Regular',sans-serif] h-[78px] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center text-white w-[213px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] underline">CONTACT</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[38px] h-[492px] items-center justify-center left-[calc(50%-67px)] top-[148px] w-[133px]">
      <div className="[word-break:break-word] flex flex-col font-['Mochiy_Pop_P_One:Regular',sans-serif] h-[45px] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center text-white w-[153px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] underline">ABOUT</p>
      </div>
      <Frame1 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#6bb8ff] h-[825px] left-0 top-0 w-[390px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Zen_Maru_Gothic:Black',sans-serif] h-[41px] justify-center leading-[0] left-[calc(50%-136px)] not-italic text-[27px] text-center text-white top-[27.5px] w-[80px]">
        <p className="leading-[normal]">MBC</p>
      </div>
      <Frame2 />
      <div className="absolute flex items-center justify-center left-[calc(50%+132.39px)] size-[56.569px] top-[-5.89px]">
        <div className="-rotate-45 flex-none">
          <div className="relative size-[40px]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
              <path d={svgPaths.p3ed76300} fill="var(--fill-0, #F8FAFC)" id="Union" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}