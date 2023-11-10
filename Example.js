import { useState } from "react";

const Example = () => {
  const [selected, setSelected] = useState("Banana");
  
  const OPTIONS = ["김밥", "바나나우유", "떡볶이"];
  return (
    <>
    <p style={{ textAlign: "center" }}>
      연습이 내일의 나를 만든다.
      <br />
      맘꺼 연습하렴!
    </p>

    <select
    value={selected}
    onChange={(e) => setSelected(e.target.value)}
    >
    <option value="김밥">김밥</option>
    <option value="바나나우유">바나나우유</option>
    <option value="떡볶이">떡볶이</option>
    </select>
    <div>선택한 음식은: {selected}요</div>
    </>
  );
};

export default Example;
