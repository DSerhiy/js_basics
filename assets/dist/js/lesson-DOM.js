// Напишите функцию, которая выводит в HTML 
// документ нумерованный список песен:

const playList = [
  {
   author: "Led Zeppelin",
   song:"Stairway to heaven"
  },
  {
   author: "Queen",
   song:"Bohemian rhapsody"
  },
  {
   author: "Lynyrd Skynyrd",
   song:"Free bird"
  },
  {
   author: "Deep Purple",
   song:"Smoke on the water"
  },
  {
   author: "Jimi Hendrix",
   song:"All along the watchtower"
  },    
  {
   author: "AC/DC",
   song:"Back in black"
  },
  {
   author: "Queen",
   song:"We will rock you"
  },
  {
   author: "Metallica",
   song:"Enter Sandman"
  }
 ];

(() => {
   const HTMLPlayList = getHTMLPlayList(playList);
   const wrapperForPlaylist = document.querySelector('.wrapper-for-playlist');
   wrapperForPlaylist.innerHTML = HTMLPlayList;
})();

/**
 * processes the array of following structure:
 * Array [{author: String, song: String}, ...] and 
 * returns the ordered list in HTML format
 * @param {*} playList  - Array [{author: String, song: String}, ...]
 */
function getHTMLPlayList(playList) {
  let out = `<ol class="playlist">\n`;
  playList.forEach((element, index)=>{
    out += 
    `<li class="playlist__item">\n` +
    `<img class="playlist__photo" src="assets/img/itunes-note-brands.svg" alt="img">\n` +
    `<span class="playlist__author">${index+1}. &nbsp&nbsp${element.author} -</span>\n` +
    `<span class="playlist__song">${element.song}</span>\n` +
    `</li>\n`
  });
  out +=  `</ol>`;
  return out;  
}

