const music = new Audio('audio/1.mp3');
//music.play();

const songs=[
    {
        id:1,
        songName: `On My Way <br>
         <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/1.jpg"
    },
    {
        id:2,
        songName: `On My Way <br>
         <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/2.jpg"
    },
    {
        id:3,
        songName: `cartoon - on & on <br>
         <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/3.jpg"
    },
    {
        id:4,
        songName: `mortals <br>
         <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/4.jpg"
    },
    {
        id:5,
        songName: `gazi <br>
         <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/5.jpg"
    },
    {
        id:6,
        songName: `elec music <br>
         <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/6.jpg"
    },
    {
        id:7,
        songName: `Agar Tum Saath Ho <br>
         <div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit_img/7.jpg"
    },
    {
        id:8,
        songName: `On My Way <br>
         <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/8.jpg"
    },
    {
        id:9,
        songName: `Dilbar <br>
         <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/9.jpg"
    },
    {
        id:10,
        songName: `Duniya <br>
         <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/10.jpg"
    },
    {
        id:11,
        songName: `On My Way <br>
         <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/11.jpg"
    },
    {
        id:12,
        songName: `On My Way <br>
         <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/12.jpg"
    },
    {
        id:13,
        songName: `On My Way <br>
         <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/13.jpg"
    },
    {
        id:14,
        songName: `On My Way <br>
         <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/14.jpg"
    },
    {
        id:15,
        songName: `On My Way <br>
         <div class="subtitle">Alan Walker</div>`,
        poster: "img/arjit_img/15.jpg"
    }
    

]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})

let controlPlay = document.getElementById('controlPlay');
let wave = document.getElementById('waveID');

controlPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        controlPlay.classList.remove('bi-play-fill');
        controlPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.add('active1');
        controlPlay.classList.remove('bi-pause-fill');
        controlPlay.classList.add('bi-play-fill');
    }
});

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105,105,105, .0)';
    })
}

let index=0;
let poster_control = document.getElementById('poster_control');
let download_song = document.getElementById('download_song'); 
let title_song = document.getElementById('title');


Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index= el.target.id;
        music.src=`audio/arjit_audio/${index}.mp3`;
        poster_control.src=`img/arjit_img/${index}.jpg`;
        music.play();
        controlPlay.classList.remove('bi-play-fill');
        controlPlay.classList.add('bi-pause-fill');
        download_song.href = `audio/arjit_audio/${index}.mp3`;

        let songTitles = songs.filter((elem)=>{
            return elem.id==index;
        });

        songTitles.forEach(elems =>{
            let {songName} = elems;
            title_song.innerHTML=songName;
            download_song.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105, .1)';
        makeAllplays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');

let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_durat=music.duration;

    let mins1=Math.floor(music_durat/60);
    let secs1=Math.floor(music_durat%60);

   //  console.log(mins1 + " " + secs1);

   if(secs1<10)
   {
    secs1=`0${secs1}`;
   }
   currentEnd.innerText=`${mins1}:${secs1}`;

   let mins2=Math.floor(music_curr/60);
   let secs2=Math.floor(music_curr%60);

   //console.log(music_curr);

  if(secs2<10)
  {
   secs2=`0${secs2}`;
  }
  currentStart.innerText=`${mins2}:${secs2}`;

  let progressBar=parseInt((music_curr / music_durat)*100);
  seek.value = progressBar;
  let seekBar=seek.value;
  bar2.style.width=`${seekBar}%`;
  dot.style.left=`${seekBar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
});

let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value==0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }

    if(vol.value>0 && vol.value<50)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    if(vol.value>50)
    {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_val=vol.value;
    vol_bar.style.width=`${vol_val}%`;
    vol_dot.style.left=`${vol_val}%`;
    music.volume= vol_val/100;
});

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    index--;
    if(index<1)
    {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`audio/${index}.mp3`;
        poster_control.src=`img/arjit_img/${index}.jpg`;
        music.play();
        controlPlay.classList.remove('bi-play-fill');
        controlPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((elem)=>{
            return elem.id==index;
        });

        songTitles.forEach(elems =>{
            let {songName} = elems;
            title_song.innerHTML=songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105, .1)';
        makeAllplays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener('click', ()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songItem')).length)
    {
        index = 1;
    }
    music.src=`audio/arjit_audio/${index}.mp3`;
        poster_control.src=`img/arjit_img/${index}.jpg`;
        music.play();
        controlPlay.classList.remove('bi-play-fill');
        controlPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((elem)=>{
            return elem.id==index;
        });

        songTitles.forEach(elems =>{
            let {songName} = elems;
            title_song.innerHTML=songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105, .1)';
        makeAllplays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft +=320.
})

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -=320.
})


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let artists_box = document.getElementsByClassName('artists_box')[0];


pop_art_right.addEventListener('click',()=>{
    artists_box.scrollLeft +=320.
})

pop_art_left.addEventListener('click',()=>{
    artists_box.scrollLeft -=320.
})


let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add("bi-arrow-repeat");
            shuffle.classList.remove("bi-music-note-beamed");
            shuffle.classList.remove("bi-shuffle");
            shuffle.innerHTML='repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove("bi-arrow-repeat");
            shuffle.classList.remove("bi-music-note-beamed");
            shuffle.classList.add("bi-shuffle");
            shuffle.innerHTML='random';
            break;

        case "random":
            shuffle.classList.remove("bi-arrow-repeat");
            shuffle.classList.add("bi-music-note-beamed");
            shuffle.classList.remove("bi-shuffle");
            shuffle.innerHTML='next';
            break;            
    }
});



const next_music = ()=>{
    if (index>=songs.length) {
        index=1;
    } else {
        index++;
    }
    music.src=`audio/${index}.mp3`;
    poster_control.src=`img/${index}.jpg`;
    music.play();
    controlPlay.classList.remove('bi-play-fill');
    controlPlay.classList.add('bi-pause-fill');
    download_song.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((elem)=>{
            return elem.id==index;
    });

    songTitles.forEach(elems =>{
            let {songName} = elems;
            title_song.innerHTML=songName;
            download_song.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105, .1)';
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
}

 
const repeat_music = ()=>{
    index;
    music.src=`audio/${index}.mp3`;
    poster_control.src=`img/${index}.jpg`;
    music.play();
    controlPlay.classList.remove('bi-play-fill');
    controlPlay.classList.add('bi-pause-fill');
    download_song.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((elem)=>{
            return elem.id==index;
    });

    songTitles.forEach(elems =>{
            let {songName} = elems;
            title_song.innerHTML=songName;
            download_song.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105, .1)';
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
}

const random_music = ()=>{
    if (index==songs.length) {
        index=1
    } else {
        index= Math.floor((Math.random() * songs.length) + 1)
    }
    music.src=`audio/${index}.mp3`;
    poster_control.src=`img/${index}.jpg`;
    music.play();
    controlPlay.classList.remove('bi-play-fill');
    controlPlay.classList.add('bi-pause-fill');
    download_song.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((elem)=>{
            return elem.id==index;
    });

    songTitles.forEach(elems =>{
            let {songName} = elems;
            title_song.innerHTML=songName;
            download_song.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105, .1)';
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
}

music.addEventListener('ended', ()=>{
   let b=shuffle.innerHTML;

   switch (b) {
    case 'repeat':
        repeat_music();
        break;
    case 'next':
        next_music();
        break;
    case 'random':
        random_music();
        break;
   }
})







