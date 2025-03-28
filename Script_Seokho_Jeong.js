const wrapper_1 = document.querySelector('.wrapper_1');
const wrapper_2 = document.querySelector('.wrapper_2');

const nextLink = document.querySelector('.next_link');
const backLink = document.querySelector('.back_link');

// iconclose.addEventListener('click', () =>{
//     wrapper.classList.remove('active-popup');
// });

// 페이지 로드 시 컨테이너에 active-popup 클래스를 추가하여 보이게 함
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        wrapper_1.classList.add('active-popup');
        wrapper_2.classList.add('active-popup');
    }, 1000);
});

nextLink.addEventListener('click', () =>{
    wrapper_2.classList.remove('deactive'); // 비활성화 상태 제거
    wrapper_2.classList.add('active');
    
});

backLink.addEventListener('click', () =>{
    wrapper_2.classList.remove('active'); // 비활성화 상태 제거
    wrapper_2.classList.add('deactive');

});

