//dom트리가 완성되고 
//렌더링준비가 완료되었을때 widnow객체의 load이벤트가 발생한다. 
// window.addEventListener('load', ()=>{
$(() => {
// alert("start signup")
    const formObj = $(' form.signup')
    const inputIdObj = $('form.signup>input[id=id]')
    const btIdDupchk = $('form.signup>button.iddupchk')
    const btSignup = $('form.signup>button.signup')
    // console.log(formObj)
    //아이디중복확인버튼-일반버튼,
    // btIdDupchk.addEventListener('click',()=>{
    btIdDupchk.click(() => {
        console.log('abc', inputIdObj.val())
        if (inputIdObj.val() == 'id1') {

            alert('이미가입된 아이디입니다.')
        } else {
            // btSignup.style.display = 'block'

            btSignup.show()

        }
    })

    //가입버튼-전송버튼 클릭 ->
    //폼의 서브밋이벤트발생

    //--폼 서브밋이벤트발생시 할 일 START--
    // formObj.addEventListener('submit', (e)=>{
    formObj.submit((e) => {
        alert("1")
        //아이디입력값이 'id1'인 경우
        //이미사용중인 아이디입니다. 경고창을 보여준다. 
        //아이디입력값이 'id1'가 아닌 경우
        //가입버튼을 화면에 보여주기하기 

        //비밀번호1,2가 일치 확인   
        // const pwdObj = document.querySelector('body>form.signup>input[id=pwd]')
        const pwdObj = $('body>form.signup>input[id=pwd]')
        // const pwd1Obj = document.querySelector('#pwd1') 
        const pwd1Obj = $('#pwd1')
        // if(pwdObj.value!=pwd1Obj.value){
        if (pwdObj.val() != pwd1Obj.val()) {
            alert('비밀번호가 일치하지 않습니다.')
            pwdObj.focus();

            return false;
        }
        $(e.target)
            .attr('action', 'http://localhost:8888/back/signup')
            .attr('method', 'post')
        $.ajax({
            url: $(e.target).attr('action'),
            method: $(e.target).attr('method'),
            data: formObj.serialize(),
            //{id:'abc', pwd:'p1', name:'n1'},//"id=abc&pwpd=p1&name=n1",
            // {id: inputIdObj.val(),
            // pwd:pwdObj.val(),
            // name:$('form.signup>input[name=name]').val()
            // },

            success: (responseObj) => {
                //백엔드 json문자열을 js객체로 변환
                // response.setContentType("application/json;charset=utf-8"); 백엔드에서 이걸 써서 json으로 변환시켜주면
                // 밑에 코드를 안써도 알아서 변환해줌
                // const responseObj = JSON.parse(responseData)

                if (responseObj.status == 0) {
                    //가입실패
                    alert('가입실패 ' + responseObj.msg)

                } else {
                    //가입성공
                    alert(responseObj.msg)
                }
            },
            error: () => {
                alert('Error!')
            }
        })
       
        return false
    })

    //--폼 서브밋이벤트발생시 할 일 End--
    // inputIdObj.addEventListener('focus',()=>{
   
        // btSignup.css('display', 'none')

        //--아이디입력란에 'focus'이벤트발생시 할 일 START --
        inputIdObj.focus(() => {
            //--가입버튼 사라지기
            btSignup.hide() 
        
    })
    //--아이디입력란에 focus이벤트발생시 할 일 END --
})