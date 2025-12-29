(() => {
  const slides = Array.from(document.querySelectorAll(".slide"));
  if (!slides.length) return;

  let idx = 0;
  const intervalMs = 6000; // 每 6 秒換一張

  // 保證只有一張 is-active
  function show(nextIdx) {
    slides.forEach((s, i) => {
      const active = i === nextIdx;
      s.classList.toggle("is-active", active);
      s.setAttribute("aria-hidden", active ? "false" : "true");
    });
    idx = nextIdx;
  }

  function next() {
    const nextIdx = (idx + 1) % slides.length;
    show(nextIdx);
  }

  // 有些情況是「JS 沒有真的跑」：先強制初始化一次
  show(0);

  // 自動播放
  setInterval(next, intervalMs);
})();