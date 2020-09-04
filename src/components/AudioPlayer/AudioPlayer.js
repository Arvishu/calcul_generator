import React,{useState} from 'react';
import './AudioPlayer.css'

import piste from './../../ressources/ForêtTropicaleMix.mp3';


export default function AudioPlayer(){
    const [playing, setPlaying] = useState(false);
    const[style,setStyle]=useState('buttonPauseStyle')

function toggle (){
    const audioEl = document.getElementsByClassName("audio-element")[0]
    setPlaying(!playing)

if(playing===true){
     audioEl.play()
     setStyle('buttonPauseStyle')
}else{
    audioEl.pause()
    setStyle('buttonPlayStyle')
}
}

function onClick (e){
    e.preventDefault();
    toggle()
   
   
}
return(
    <div title="Cliquez pour activer/désactiver le son" >
       <button className={style}  onClick={onClick}></button>
        <audio loop autoPlay className="audio-element">
            <source src={piste} ></source>
        </audio>
    </div>
)
}




