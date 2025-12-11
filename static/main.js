// 간단 공용 스크립트
// - 모바일 메뉴 열기/닫기
// - 작성자 메모(dev-note) 카드 토글

document.addEventListener("DOMContentLoaded", () => {
  // 모바일 내비게이션 토글
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("is-open");
    });
  }

  // 작성자 메모 토글 (dev-note 카드)
  const devNoteToggleBtn = document.querySelector(".dev-note-toggle");
  const devNotes = document.querySelectorAll(".dev-note");

  if (devNoteToggleBtn && devNotes.length > 0) {
    devNoteToggleBtn.addEventListener("click", () => {
      devNotes.forEach((note) => {
        note.classList.toggle("is-hidden");
      });
    });
  }
});
