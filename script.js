const menuList = [
    { name: "삼겹살 & 소주", emoji: "🥓", category: "한식 / 고기" },
    { name: "치킨 & 맥주", emoji: "🍗", category: "야식 / 치킨" },
    { name: "매콤한 떡볶이", emoji: "🍢", category: "분식" },
    { name: "따끈한 국밥", emoji: "🍲", category: "한식" },
    { name: "신선한 초밥", emoji: "🍣", category: "일식" },
    { name: "얼큰한 짬뽕", emoji: "🍜", category: "중식" },
    { name: "바삭한 돈까스", emoji: "🍱", category: "일식/양식" },
    { name: "페퍼로니 피자", emoji: "🍕", category: "양식" },
    { name: "육즙 가득 수제버거", emoji: "🍔", category: "양식" },
    { name: "꾸덕한 파스타", emoji: "🍝", category: "양식" },
    { name: "부드러운 카레", emoji: "🍛", category: "일식/인도" },
    { name: "노릇노릇 생선구이", emoji: "🐟", category: "한식" },
    { name: "고소한 곱창구이", emoji: "🥘", category: "한식 / 고기" },
    { name: "멕시칸 타코", emoji: "🌮", category: "세계요리" },
    { name: "시원한 쌀국수", emoji: "🍜", category: "아시안" },
    { name: "불고기 덮밥", emoji: "🍚", category: "한식" },
    { name: "매운 닭발", emoji: "🐾", category: "야식 / 안주" },
    { name: "족발 & 보쌈", emoji: "🍖", category: "한식 / 야식" },
    { name: "마라탕 & 꿔바로우", emoji: "🍲", category: "중식" },
    { name: "담백한 월남쌈", emoji: "🥗", category: "아시안 / 다이어트" }
];

const emojiEl = document.getElementById("emoji");
const menuNameEl = document.getElementById("menu-name");
const menuCategoryEl = document.getElementById("menu-category");
const recommendBtn = document.getElementById("recommend-btn");

let isSpinning = false;

function recommendMenu() {
    if (isSpinning) return;
    
    isSpinning = true;
    recommendBtn.disabled = true;
    
    emojiEl.classList.remove("pop-animation");
    emojiEl.classList.add("spinning");
    menuNameEl.textContent = "추천 중...";
    menuCategoryEl.textContent = "오늘의 운명적인 메뉴는?";

    let counter = 0;
    const duration = 15; // 바퀴 수
    
    // 슬롯머신처럼 이모지가 빠르게 바뀌는 효과
    const interval = setInterval(() => {
        const tempIndex = Math.floor(Math.random() * menuList.length);
        emojiEl.textContent = menuList[tempIndex].emoji;
        counter++;

        if (counter >= duration) {
            clearInterval(interval);
            
            // 최종 선정
            const finalIndex = Math.floor(Math.random() * menuList.length);
            const selected = menuList[finalIndex];

            emojiEl.classList.remove("spinning");
            emojiEl.textContent = selected.emoji;
            menuNameEl.textContent = selected.name;
            menuCategoryEl.textContent = selected.category;
            
            emojiEl.classList.add("pop-animation");

            isSpinning = false;
            recommendBtn.disabled = false;
        }
    }, 100);
}

recommendBtn.addEventListener("click", recommendMenu);