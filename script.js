// ボタンと出力先の要素を取得
const runBtn = document.getElementById("runBtn");
const output = document.getElementById("output");

// ボタンをクリックした時の処理
runBtn.addEventListener("click", () => {
  // 画面を一度クリア
  output.innerHTML = "";

  // 1から100までループ
  for (let i = 1; i <= 100; i++) {
    let result = "";

    // FizzBuzzの条件分岐！
    if (i % 15 === 0) {
      result = "FizzBuzz";
    } else if (i % 3 === 0) {
      result = "Fizz";
    } else if (i % 5 === 0) {
      result = "Buzz";
    } else {
      result = i;
    }

    // 画面にリストとして追加
    const li = document.createElement("li");
    li.textContent = result;
    output.appendChild(li);
  }
});
