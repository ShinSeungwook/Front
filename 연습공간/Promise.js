// Promise is a JavaScript object for asynchronous operation.
// 비동기적인 것을 수행할 때 콜백함수 대신 유용하게 쓰일 수 있는 오브젝트
//state : pending(명령 수행중) -> fulfilled(명령 완료)
//Producer vs Consumer

//1.Producer
//when new Promise is created, the executor runs automatically.
//Promise를 만들었을 때 executor 함수가 자동으로 실행된다.
const promise = new Promise((resolve, reject)=>{
    //doing something heavy work (network, read files)
    console.log('doing something...')
    setTimeout(() => {
        resolve('glenn');
    }, 2000)
});

//2. Consumers : then, catch, finally
promise.then((value)=>{ //value는 Promise가 성공적으로 수행되었을 때 resolve의 parameter불러옴

})