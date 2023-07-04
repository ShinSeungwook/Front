//dom트리가 완성되고 
//렌더링준비가 완료되었을때 window객체의 load이벤트가 발생한다
window.addEventListener('load', ()=>{
    //DOM트리에서 form객체찾기
    const formObj = document.querySelector('form.signup')
    
    //아이디입력란 객체찾기
    const inputIdObj = document.querySelector('form.signup>input[name=id]')

    //아이디중복확인버튼 객체찾기
    const btIdDupchk = document.querySelector('form.signup>button.iddupchk')

    //가입버튼 객체찾기
    const btSignup = document.querySelector('form.signup>button.signup')
    
    
    //아이디중복확인버튼 클릭->
    if(inputIdObj.value == 'id1'){
        alert('이미사용중인 아이디입니다')
    }else{
        btSignup.style.display = 'block'
    }                       
    e.preventDefault();
})
    //폼의 서브밋이벤트발생
   
    //--폼 서브밋이벤트발생시 할 일 START--
    formObj.addEventListener('submit', 
                              (e)=>{   

    //비밀번호 일치 확인
    const pwdObj = document.querySelector('form.signup>input[name="pwd]')
    const pwd1Obj = document.querySelector('form.signup>input[name="pwd1]')
    if(pwdObj.value != pwd1Obj.value){
        alert('비밀번호가 일치하지 않습니다.')
        pwdObj.focus()
    }
         
       
    //--폼 서브밋이벤트발생시 할 일 END--

    //--아이디입력란에 'focus'이벤트발생시 할 일 START--
    inputIdObj.addEventListener('focus', ()=>{
        //가입버튼 사라지기
        btSignup.style.display = 'none'
    })
    //--아이디입력란에 'focus'이벤트발생시 할 일 END--
    
})