
//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화

let num = [0,0,0,0,0,0,0,0,1];


//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;
//메시지표시함수
const showMsg = (m)=>{
    document.querySelector("#msg").innerHTML = m;
}
//Board_clear함수
const boardInit =()=>{
    const board = document.querySelectorAll(".boardBox");
    console.log(board);
    for(let item of board){
    item.innerHTML='';
    }
    cnt=0
    selNum.length=0;
    
}

const showall=()=>{
    let idx =num.indexOf(1) + 1;
    console.log('last: ',idx);
    
    document.querySelector("#box"+idx).innerHTML = 
    `<img src ="./images/hart.png"/>`;
}   

//show함수
const show = (n)=>{ 
    if(shuffleFlag==false){
    showMsg("폭탄을 섞겠습니다.");
    boxShuffle();
    return;
    }

    cnt ++; 
    selNum.push(n);
    console.log(selNum);
    let img;

    if(num[n-1]==0) {
    img='hart';
    }
    else{
    img='boom'
    shuffleFlag=false;
    showMsg("폭탄이 터졌습니다.");
    }
    document.querySelector("#box"+n).innerHTML = 
    `<img src ="./images/${img}.png"/>`;    

    if(cnt==8){
    showMsg("폭탄을 피했습니다.");
    shuffleFlag=false;
    showall();
    return;
        
    }

    

    

}
 

/*
const show = (idx)=>{    
    selNum[idx-1]='1';
    console.log(selNum);
    if(selNum[idx-1] == num[idx-1]){
        
        console.log("같음");
    }

    console.log(selNum[idx]);

    cnt++;
}
    */


//폭탄섞기 함수
const boxShuffle =()=>{
    if(shuffleFlag){
        showMsg('폭탄을 이미 섞으셨습니다. 게임을 진행하세요');
        return;
    }
    else{
    num.sort(()=> Math.random() - 0.5);
    shuffleFlag = true;    
    boardInit();
    console.log(num);
    }
    
}
/*
const boxShuffle =()=>{
    num.sort(()=> Math.random() - 0.5);    
    selNum=[];

    console.log("arr_num : " + num);
    console.log("arr_selNum : " + selNum);
}
*/


/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{

});