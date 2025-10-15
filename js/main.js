document.addEventListener('DOMContentLoaded', () => {
    
    // '반별 환경 상태' 페이지의 탭 전환 기능
    const statusHeader = document.querySelector('.status-header');
    
    if (statusHeader) {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const classDetails = document.querySelectorAll('.class-details');

        statusHeader.addEventListener('click', (e) => {
            const id = e.target.dataset.class; // 클릭된 버튼의 data-class 값
            
            if (id) {
                // 모든 버튼과 내용에서 active 클래스 제거
                tabBtns.forEach(btn => btn.classList.remove('active'));
                classDetails.forEach(detail => detail.classList.remove('active'));

                // 클릭된 버튼과 해당 내용에 active 클래스 추가
                e.target.classList.add('active');
                document.getElementById(id).classList.add('active');
            }
        });
    }
});