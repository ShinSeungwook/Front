$(()=>{
    const formObj = $('form.login')
    
    formObj.submit((e)=>{
        $.ajax({
            url: 'http://localhost:8888/back/login', //back 8888포트에서 Servlet login 정보 가져와야함
            method: 'POST',
            data : formObj.serialize(),
            success: (responseObj)=>{
                if(responseObj.status == 0){
                    //가입실패
                    alert(responseObj.msg)
                    $('form.login>input[name=id]').focus()
                }else{
                    //가입성공
                    alert(responseObj.msg)
                }
            },
            error:(xhr) => {
                alert("에러:"+xhr.status)
            }
        })
            return false
    })
})
