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
    //폼의 서브밋이벤트발생
   
    //--폼 서브밋이벤트발생시 할 일 START--
    formObj.addEventListener('submit', 
                              (e)=>{   
         
        if(inputIdObj.value == 'id1'){
            alert('이미사용중인 아이디입니다')
        }else{
            btSignup.style.display = 'block'
        }                       
        e.preventDefault();
    })
    //--폼 서브밋이벤트발생시 할 일 END--

    //--아이디입력란에 'focus'이벤트발생시 할 일 START--
    inputIdObj.addEventListener('focus', ()=>{
        //가입버튼 사라지기
        btSignup.style.display = 'none'
    })
    //--아이디입력란에 'focus'이벤트발생시 할 일 END--
    
})