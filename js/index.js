const typewords = ["My name is Anjali.","I'm a learner and a perfectionist","Hope you are doing well!!","Welcome to the Typing Speed Test Website.","I think whatever happens in life is his(God) planning."];

const msg = document.getElementById('msg');
const words = document.getElementById('words');
const btn = document.getElementById('btn');
let start , end;
const play=()=>{
    let randomNum = Math.floor(Math.random()*typewords.length);
    msg.innerText = typewords[randomNum];
    let date = new Date();
    start = date.getTime();
    btn.innerText = "Done";
}
const endPlay=()=>{
    let date = new Date();
    end = date.getTime();
    let total = ((end - start)/1000);
    // console.log(total);

    let totalwords = words.value;
    let wordsCount = wordCounter(totalwords);
    let speed = Math.round((wordsCount/total)*60);
    let finalMsg = "Total typed words: "+wordsCount+"  "+" Total time: "+total+" "+" Your speed: "+speed+"words per minute."+"  ";
    finalMsg += compareWords(msg.innerText,totalwords);
    msg.innerText = finalMsg;
    
}

const compareWords = (str1,str2)=>{
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let cnt =0;

    word1.forEach(function(item,index){
        if(item==word2[index]){
            cnt++;
        }
    })
    let error = (word1.length-cnt);
    return(cnt + "  "+" correct out of "+word1.length+" words. "+" " +"Total errors: "+error);
}

const wordCounter=(str)=>{
    let response = str.split(" ").length;
    // console.log(response);
    return response;
}
btn.addEventListener('click',function(){
   
    if(this.innerText == 'Start'){
        words.disabled = false;
        play();
    }
    else if(this.innerText == 'Done'){
        words.disabled = true;
        btn.innerText = 'Start';
        endPlay();
     
        
    }
})