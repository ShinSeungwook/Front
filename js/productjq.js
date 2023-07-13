    //product.html?=prodNo=C0001
//search결과 ? 다음부터 ?prodNo=C0001
//substring(1)결과 = prodNo=C0001                                
//split('=') : [0] prodNo[1]은 C0001
//상품이미지는 상품번호 이미지로 변경

$(()=>{
    //상품번호
   const prodNo=sessionStorage.getItem('prodNo')
//    alert(prodNo)
    $.ajax({
        url: 'http://localhost:8888/back/product' ,
        method: 'get',
        data: `prodNo=${prodNo}`,
        success: (responseObj)=>{
            //{"prodNo":C0001, "prodName":아메리카노,"prodPrice":1000}
           const prodName = responseObj.prodName
           const prodPrice = responseObj.prodPrice
        //    alert(prodName +"=="+ prodPrice)
           $('div.product_view>div.product_view_detail>h4>span.ko').html(prodName)
           $('div.product_view>div.product_view_detail>h4>span.price').html(prodPrice)

        },
        error: (xhr)=>{//xmlHttpRequest
            alert('error'+xhr.status)
        }
    })
    $('div.product_view>div.product_view_pic>img').attr('src', `../images/${prodNo}.jpg`)
})