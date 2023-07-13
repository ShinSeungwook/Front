
    $(()=>{

    //.first 첫번째, 혹은 .last 마지막 객체 찾기
    let resultObj2 = $('input[type=text]').last() 
    // .eq(1,2,...) -> n번째 인덱스찾기
    // let resultObj2 = $('input[type=text]').eq(1) 1번 인덱스찾기
    console.log(resultObj2)

    // resultObj2.value = 'HELLO'
    resultObj2.val('HELLO')

    // resultObj2.maxLength = 10; //<input type="" value="" maxLength=10>
    resultObj2.attr('maxLength', 10)

    // resultObj2.style.color = 'blue';
    // resultObj2.css('color','blue')

    // resultObj2.style.backgroundColor = 'yellow'
    // resultObj2.css('background-color','yellow')
    //위에 두개 .css 합쳐버리기
    resultObj2.css({"color": 'blue',
                    "background-color": 'yellow'
                  })


    //버튼쪽 jQuery로 수정하기              
    let num = 0;
    let op;

    // let bts = document.querySelectorAll('button');
    let bts = $('button')
    // for(let i=0; i<bts.length; i++){
    // bts[i].addEventListener("click", ()=>{
    bts.click((e)=>{ //반복문for문 while문 필요 없음    
        // switch(bts[i].innerHTML){
        switch($(e.target).html()){
            case '=':
                // resultObj2.value = num;
                resultObj2.val(num)
                op=undefined;
                break;
            case '+':
            case '-':
                // op = bts[i].innerHTML;
                op = $(e.target).html()
                break;
            default :
                // resultObj2.value = bts[i].innerHTML;
                resultObj2.val($(e.target).html())
                if(op == '+'){
                    // num += parseInt(resultObj2.value) //문자->정수
                    num += parseInt(resultObj2.val())
                }else if(op == '-'){
                    // num -= parseInt(resultObj2.value) //문자->정수
                    num -= parseInt(resultObj2.val())
                }else{
                    // num = parseInt(resultObj2.value) //문자->정수
                    num = parseInt(resultObj2.val())
                }

                // num = Number(resultObj2.value) //문자->숫자
        }
        
        // console.log(bts[i].innerHTML, num)
        console.log($(e.target).html(), num)
        
    })
    //} for문 종료
    

    //DOM트리에서 all checkbox 객체 찾기
    let chkAllObj = $('fieldset.all>input[type=checkbox]')
    // document.querySelector('fieldset.all>input[type=checkbox]')
    
    //DOM트리에서 one,two,three checkbox 객체 찾기
    let chkObjs = $('fieldset.each>input[type=checkbox]')
    // document.querySelectorAll('fieldset.each>input[type=checkbox]')

    //---all checkbox객체에서 클릭되었을 때 할 일 START---
    // chkAllObj.addEventListener('click', (e)=>{
    chkAllObj.click((e)=>{
        // chkObjs.forEach((chk)=>{
            // chk.checked = e.target.checked
           $(chkObjs).prop('checked',
                $(e.target).prop('checked')
           )
        // })
    })
    //---all checkbox객체에서 클릭되었을 때 할 일 END---
    
    //---차량 대분류를 선택했을 때 할일 START---
    // let carTypeObj =
    //     document.querySelector('div.car>select.type'); //대분류

    let carTypeObj = $('div.car>select.type')
    // let carType2Obj =
    //     document.querySelector('div.car>select.type2'); //중분류
    
    let carType2Obj = $('div.car>select.type2')

    // carTypeObj.addEventListener('click',() =>{
    //     console.log('clicked')
    // })
    carTypeObj.click(()=>{
        console.log('clicked')
    })

    // carTypeObj.addEventListener('change',(e) =>{
        carTypeObj.change((e) =>{
        // console.log(e.target.value, 'changed')
        console.log($(e.target).val(), 'changed')

        switch($(e.target).val()) {
            case 'sedan':
                // let type1 = ['쏘나타', '더 뉴 아반테', '디 올 뉴 그랜저', '디 올 뉴 그랜저Hybrid']
                let type1 = [
                    {name: '쏘나타', id : 'sonata'},
                    {name:'더 뉴 아반테', id: 'avante'},
                    {name:'디 올 뉴 그랜저', id: 'grandure'},
                    {name:'디 올 뉴 그랜저Hybrid', id: 'hybrid'}
                ]
                // carType2Obj.innerHTML = '<option>선택하세요</option>'
                carType2Obj.html('<option>선택하세요</option>')
                // carType2Obj.innerHTML += '<option value="'+ type1[0].id +'">' + type1[0].name + '</option>'
                carType2Obj.html(carType2Obj.html() + 
                '<option value="'+ type1[0].id +'">' + type1[0].name + '</option>' )
                // carType2Obj.innerHTML += '<option value="'+ type1[1].id +'">' + type1[1].name + '</option>'
                carType2Obj.html(carType2Obj.html() + 
                '<option value="'+ type1[1].id +'">' + type1[1].name + '</option>' )
                // carType2Obj.innerHTML += `<option value="${type1[2].id}">${type1[2].name}</option>`
                carType2Obj.html(carType2Obj.html() + 
                `<option value="${type1[2].id}">${type1[2].name}</option>` )
                // carType2Obj.innerHTML += `<option value="${type1[3].id}">${type1[3].name}</option>`
                carType2Obj.html(carType2Obj.html() + 
                `<option value="${type1[3].id}">${type1[3].name}</option>` )
                // carType2Obj.style.display = 'inline-block'
                carType2Obj.show()
                break;


            case 'suv':
                // let type2 = ['팰리세이드', '베뉴', '코나']
                let type2 = [
                    {name: '팰리세이드', id : 'palisade'},
                    {name:'베뉴', id: 'venue'},
                    {name:'코나', id: 'kona'}
                ]
                // carType2Obj.innerHTML = '<option>선택하세요</option>'
                carType2Obj.html( '<option>선택하세요</option>')

                for (let i=0; i<type2.length;i++){
                    // carType2Obj.innerHTML += 
                    // `<option value="${type2[i].id}">${type2[i].name}</option>`
                    carType2Obj.html(carType2Obj.html() + 
                    `<option value="${type2[i].id}">${type2[i].name}</option>`
                     )}
                // carType2Obj.style.display = 'inline-block'
                carType2Obj.show()
                break;

            case 'truck':
                let type3 = ['선택하세요', '마이티', '파비스', '엑시언트', '엑시언트수소트럭'];
                // let type3 = [
                //     {name: '마이티', id : 'mighty'},
                //     {name:'더 뉴 파비스', id: 'pavise'},
                //     {name:'뉴파워트럭', id: 'powertruck'}
                // ]
                // carType2Obj.innerHTML += '<option>' + type2[0] + '</option>'
                // carType2Obj.innerHTML += '<option>' + type2[1] + '</option>'
                // carType2Obj.innerHTML += '<option>' + type2[2] + '</option>'
                // carType2Obj.innerHTML += '<option>' + type2[3] + '</option>'
                
                // carType2Obj.innerHTML = '<option>선택하세요</option>'
                // for (let i=0; i<type3.length;i++){
                //     carType2Obj.innerHTML += `<option value="${type3[i].id}">${type3[i].name}</option>`
                // }

                // let options = document.querySelectorAll('div.car>select.type2>option')
                // options를 처음부터 다시 찾기보다는 이전에 찾아놓은 carType2Obj를 이용해서 찾는 방법 ↓
                let options = carType2Obj.childNodes

                // options.forEach((value)=>{
                //     carType2Obj.removeChild(value)
                //     console.log("지우기",value)
                // })


                //1 : Element node, 2: Attrivute, 3: Text node
                // options.forEach((option)=>{
                    // console.log(option, option.nodeType)
                    // if(option.nodeType == 1){
                        // carType2Obj.removeChild(option)
                     
                    // }
                // })
                carType2Obj.empty()

                type3.forEach((value)=>{//type2의 값(value)을 0번인덱스부터 꺼내온다
                    // let optionObj = document.createElement('option') //<option> 생성
                    let optionObj = $('<option>') // createElement랑 같은 효과임
                    
                    // let txtObj = document.createTextNode(value) //텍스트 노드에 type3 배열의 값 넣기
                    
                    // optionObj.appendChild(txtObj) //위에서 생성한 <option>의 하위에 select
                    optionObj.text(value)
                    // carType2Obj.appendChild(optionObj)
                   carType2Obj.append(optionObj)
                })
                // carType2Obj.style.display = 'inline-block'
                carType2Obj.show()
                break;
            default: //중분류의 display => none
                // carType2Obj.style.display = 'none'
                carType2Obj.hide()

        }
        
    })
    //---차량 대분류를 선택했을 때 할일 END---
    
    //--입력란에 키보드입력할 때 할 일 START--
    //DOMkeyboard입력요소 객체 찾기
    const txtObj = $('div.keyboard>input[type=text]')
    // document.querySelector('div.keyboard>input[type=text]')
    // txtObj.addEventListener('keyup', (e)=>{
        txtObj.keyup((e)=>{
        // console.log(e.key, e.target.value)
        console.log(e.key, $(e.target).val())
        if(e.key == 'Enter') {
            this.alert('Enter를 입력했습니다')
        }else {
            // e.target.value = e.target.value.toUpperCase()
            $(e.target).val($(e.garget).val().toUpperCase())
        }
        
    })
    //--입력란에 키보드입력할 때 할 일 END--

    //--전송버튼 클릭할 때 할 일 START--
    // const btsubmitObj =
        // document.querySelector('div.form>form>button')
        const btsubmitObj = $('div.form>form>button')

    //TODO : 콘솔에 '전송버튼이 클릭되었습니다' 출력
    // btsubmitObj.addEventListener('click', ()=>{
        btsubmitObj.click(()=>{
        alert("전송버튼이 클릭되었습니다")
    })
    //--전송버튼 클릭할 때 할 일 END--

    //--폼의 submit이벤트 발생할떄 할 일 START--
    //전송 시에 하고 싶은 일은 form의 submit 이벤트에 처리는 것 권장
    const formObj = $('div.form>form')
    // document.querySelector('div.form>form')
    

    // formObj.addEventListener('submit', (e) =>{
        formObj.submit((e)=>{
        alert("submit이벤트가 발생했습니다")
        // e.preventDefault()
        return false
    })

    //--폼의 submit이벤트 발생할떄 할 일 END--


    //--a객체의 click이벤트 발생할 때 할 일 START--
    const linkDivObj = $('div.link') 
            // document.querySelector('div.link')
    // linkDivObj.addEventListener('click', (e)=>{
        linkDivObj.click((e)=>{
        // e.target.style.backgroundColor = 'blue'
        $(e.target).css('background-color','blue')
    })
    
    const aObj = $('div.link>a')
    //  document.querySelector('div.link>a')
    // aObj.addEventListener('click', (e)=>{
        aObj.click((e)=>{
        this.alert('링크 클릭')
        // e.preventDefault() //기본 이벤트처리를 막아라
        // e.stopPropagation() //이벤트 전파를 중지한다
        return false
    })
    //--a객체의 click이벤트 발생할 때 할 일 END--


})