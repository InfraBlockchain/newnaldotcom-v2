"use client";

type ScrollToSovereigntyProps = {
  className: string;
};

export function ScrollToSovereignty({ className }: ScrollToSovereigntyProps) {
  const scrollToSovereignty = () => {
    const target = document.getElementById("data-sovereignty");

    if (!target) return;

    window.history.replaceState(null, "", "#data-sovereignty");
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 64,
      behavior: "smooth",
    });
  };

  return (
    <button className={className} type="button" onClick={scrollToSovereignty}>
      Newnal aios 소개 보기 <span aria-hidden="true">↓</span>
    </button>
  );
}
