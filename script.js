console.log('This is a typing speed app')


const typingArray = [
  'Google LLC is an United States based multinational technology company that specializes in Internet-related services',
  'Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California',
  'Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc',
  'The companys rapid growth since incorporation has triggered a chain of products, acquisitions, and partnerships beyond Googles core search engine',
  'Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet'
]
const typingData = document.getElementById('typingData');
const typingArea = document.getElementById('typingArea');
const displayMsg = document.getElementById('msg');
const btn = document.getElementById('btn');
let startTime, endTime;

// function for create random sentencs.
function playgame() {
  let indexNumber = Math.floor(Math.random() * typingArray.length);
  typingData.innerText = typingArray[indexNumber];
  startTime = new Date().getTime();
  // console.log(typingData.innerText.split(' ').length);
}

// function to check the tying speed
function endgame() {
  endTime = new Date().getTime();
  let totalTime = ((endTime - startTime) / 1000);

  let totalStr = typingArea.value.trim();
  let countStr = typingCount(totalStr);
  let count = Math.round((countStr / totalTime) * 60);
  
  let msg = `Your typing speed is ${count} words per minutes. `;
  msg += errorCount(typingData.innerText, totalStr);

  displayMsg.classList.add('showmsg');
  displayMsg.innerText = msg;
}

// function to check the typing words total length
function typingCount(str) {
  let response = str.split(' ').length;
  return response;
}

// function to check the typing sentences & show sentences same or not
function errorCount(pStr, enterStr) {
  let cnt = 0;
  let str1 = pStr.split(' ');
  // console.log(str1); 
  let str2 = enterStr.split(' ');
  // console.log(str2);
  str1.forEach(function(item, index){
    if (item == str2[index]) {
      cnt++;
    }
  });
  let errorWord = str1.length - cnt;
  return `You type ${cnt} correct words out of ${str1.length}. Total number of errors is ${errorWord}`
}

// apply click event on a button
btn.addEventListener('click', function () {
  if (this.innerText == 'Start') {
    typingArea.disabled = false;
    displayMsg.classList.remove('showmsg');
    btn.innerText = 'Done';
    playgame();
  } else if (this.innerText == 'Done') {
    typingArea.disabled = true;
    btn.innerText = 'Start';
    endgame();
  }
});


  
  
    
