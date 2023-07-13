
$(()=>{ //DOM이 준비 되었는지 확인
    const formObj = $('form.login') //html파일의 from태그의 login클래스를 변수로 할당
    
    formObj.submit((e)=>{//form이 제출될 때 발생할 이벤트처리 jQuery문 사용
        $.ajax({ //ajax 요청 설정
            url: 'http://localhost:8888/back/login', //back 8888포트에서 Servlet login 정보 가져와야함
            method: 'POST',
            data : formObj.serialize(),
            success: (responseObj)=>{
                if(responseObj.status == 0){
                    //가입실패
                    alert(responseObj.msg) //out.print("{\"status\": 0, \"msg\": \"로그인실패\"}");
                    //로그인에 실패 했다면 커서를 id칸에 포커스함
                    $('form.login>input[name=id]').focus()
                }else{
                    //가입성공
                    //out.print("{\"status\": 1, \"msg\": \"로그인성공\"}");
                    alert(responseObj.msg)
                }
            },
            error:(xhr) => {
                alert("에러:"+xhr.status)
            }
        })
            return false //폼 제출 중단 : ajax만 수행하도록 함 
    })
})
