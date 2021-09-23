
//all global variable for reset
const arrObg = [];
let objGenerate = document.querySelector('#obgGenerate');
let objReset = document.querySelector('#objReset');
let objData = 1;
let ObjDelay = 1;
let ObjGenerateStatus = false;

let objReceive = document.querySelector('#obgReceive');
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let currentElem = 0;
let receiveDelay = 2;
let ObjectReceiverStatus = false;
let isArray = false
let queue = document.getElementById('queue')



//reset function
 const reset =()=>{
     objData = 1;
     ObjDelay = 1;
     ObjGenerateStatus = false;

     objReceive = document.querySelector('#obgReceive');
     counter1 = 0;
     counter2 = 0;
     counter3 = 0;
     currentElem = 0;
     receiveDelay = 2;
     ObjectReceiverStatus = false;
     isArray = false;
}


//reset action
objReset.addEventListener('click', reset)

//object generator function
export const  ObjectGenerator =()=>{

    //New object creator
    function objGenerateF(data){
        //Indicator listener
        isIndicators();
      let Obj = {
            data:data
        }
        arrObg.push(Obj);
        let timeOut
        if(ObjGenerateStatus){
            timeOut = setTimeout(()=>{objGenerateF(objData)}, ObjDelay)
      }else{
            clearTimeout(timeOut);
      }
        //create object value and delay for timeout
      rand();
        return true;
    }

    //create object value and delay for timeout
    function rand() {
        objData = Math.floor(Math.random()*100)+1;
        ObjDelay = Math.floor(Math.random()*10)+1;
        ObjDelay = ObjDelay * 1000;
    }
    //Object generate start event
    objGenerate.addEventListener('click', ()=>{
        ObjGenerateStatus =!ObjGenerateStatus;
        objGenerateF(objData);
    });
}


//Show indicator status function
function isIndicators(){

    if(arrObg.length){
        queue.style.backgroundColor = 'green'
    }else{
        queue.style.backgroundColor = 'red'
    }

    if(!ObjGenerateStatus){
        objGenerate.style.backgroundColor = 'red'
    }else{
        objGenerate.style.backgroundColor = 'green'
    }

    if(!ObjectReceiverStatus){
        objReceive.style.backgroundColor = 'red'
    }else {
        objReceive.style.backgroundColor = 'green'
    }
}

isIndicators();

// Object receiver function
export const ObjectReceiver =()=>{
    function getObj() {
        isIndicators();
        document.querySelector('#counter1').innerHTML=counter1;
        document.querySelector('#counter2').innerHTML=counter2;
        document.querySelector('#counter3').innerHTML=counter3;
       let data;

       if(arrObg.length && arrObg[currentElem]){
           data = arrObg[currentElem].data;
       }else{
           data = null
       }

       if(data!=null){
           if(data <30){
               counter1++;
           }else if(data>30 && data <70){
               counter2++;
           }else {
               counter3++;
           }
           currentElem++;
       }
       if(data===null){
           receiveDelay ++;
       }

       let interval;
       if(ObjectReceiverStatus){
           interval =setTimeout(getObj, receiveDelay*1000);
       }else{
           clearTimeout(interval);
       }
    }
    // Object receive start event
    objReceive.addEventListener('click',()=>{
        ObjectReceiverStatus =!ObjectReceiverStatus;
        getObj();
    });
}



