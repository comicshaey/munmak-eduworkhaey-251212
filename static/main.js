// 공용 스크립트
// - 모바일 메뉴 열기/닫기
// - 작성자 메모(dev-note) 카드 토글
// - 우클릭(컨텍스트 메뉴) 방지

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

// 우클릭 방지 (도메인 전체 적용)
// 너무 과한 차단은 아니고, 컨텍스트 메뉴만 막아둔다.
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
