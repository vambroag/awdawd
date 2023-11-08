// app.js
document.addEventListener("DOMContentLoaded", function () {
  var nextButton = document.getElementById("next");
  if (nextButton) {
    nextButton.addEventListener("click", function () {
      navigateToNextPage();
    });
  }
});

function navigateToNextPage() {
  window.location.href = "name.html";
}

// app.js

document.addEventListener("DOMContentLoaded", function () {
  var nextButton = document.getElementById("next");
  if (nextButton) {
    nextButton.addEventListener("click", function () {
      navigateToNextPage();
    });
  }
});

function navigateToNextPage() {
  // 이름을 가져오는 코드
  var name = document.getElementById("namebox").value;

  // 이름이 제공되었는지 확인
  if (name.trim() !== "") {
    // 이름을 로컬 스토리지에 저장
    localStorage.setItem("userName", name);

    // 페이지 전환
    window.location.href = "start.html";
  } else {
    // 이름이 제공되지 않은 경우 처리
    alert("이름을 입력하세요!");
  }
}

// name.html이 로드되었을 때 저장된 이름이 있다면 텍스트 업데이트
document.addEventListener("DOMContentLoaded", function () {
  var storedName = localStorage.getItem("userName");

  if (storedName) {
    var textElement = document.getElementById("text");
    if (textElement) {
      textElement.innerHTML =
        storedName +
        "!<br />지구에 떠다니는 쓰레기를<br />마우스로 움직여서<br />올바른 쓰레기통에 넣어주면 돼!";
    }
  }
});
