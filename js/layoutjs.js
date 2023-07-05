window.addEventListener('load',()=>{
    const btObj = document.querySelector('header>nav>ul>li.login>a');
    const bt2Obj = document.querySelector('header>nav>ul>li.signup>a');
    const pObj = document.querySelector('section'); //바꿀내용
    const p2Obj = document.querySelector('section'); //바꿀내용

    //로그인 클릭 되었을 때 할 일 START
    btObj.addEventListener('click',(e)=>{
        e.preventDefault(); //새로고침 방지

        //XMLHttpRequest object 생성
        const xhttp = new XMLHttpRequest();

        //콜백함수 정의
        xhttp.onload = (e)=>{
            pObj.innerHTML = e.target.responseText;
        };

        //요청보내기
        xhttp.open("GET", "login.html");
        xhttp.send();
    });
    //가입 클릭 되었을 때 할 일 START
    bt2Obj.addEventListener('click',(e)=>{
        e.preventDefault(); //새로고침 방지

        //XMLHttpRequest object 생성
        const xhttp = new XMLHttpRequest();

        //콜백함수 정의
        xhttp.onload = (e)=>{
            p2Obj.innerHTML = e.target.responseText;
        };

        //요청보내기
        xhttp.open("GET", "signup.html");
        xhttp.send();
    });
    //로그인 클릭 되었을 때 할 일 END    
});