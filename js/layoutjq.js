$(() => { //DOM 준비 
    const loginbt = $('body>header>nav>ul>li.login');
    const signupbt = $('body>header>nav>ul>li.signup');
  
    const menuObj = $('body>header>nav>ul>li.productlist')
    const section = $('section');

    //     //로그인 클릭 되었을 때 할 일 START
    loginbt.click(() => {
        $.ajax({
            url: './login.html',
            success: (responseData) => {
                section.html(responseData)
            },
            error: (jqXhr, status) => {
                alert(`status: ${status}, jqXhr.status:${jqXhr.status}`)
            }
        })
        return false
        
    });

    signupbt.click((e) => {
        $.ajax({
            url: './signupjq.html',
            success: (responseData) => {
                section.html(responseData)
            },
            error: (jqXhr, status) => {
                alert(`status: ${status}, jqXhr.status:${jqXhr.status}`)
            }
        })
        return false
    });

    menuObj.click((e) => {
     location.href="./productlist.html"
    });


});
