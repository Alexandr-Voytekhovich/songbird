import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import './info-field.scss';
import 'react-h5-audio-player/src/styles.scss';

const InfoField = () => {
  return (
    <div className="info-field">
      <div className="info-field__description-field">
        <img src="./assets/img/example.png" alt="example"></img>
        <div className="description-field__info-block">
          <h3>Павук обыкновенный</h3>
          <p>Description of spider</p>
          <AudioPlayer
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            onPlay={e => console.log("onPlay")}
          />
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo ad omnis, itaque totam perferendis. Quasi esse laborum necessitatibus commodi, sed est exercitationem autem odit deserunt quam quidem totam quis amet. Laboriosam, possimus labore. Ullam velit veritatis fugiat vitae alias, animi adipisci, iusto tempore non dignissimos recusandae voluptates distinctio labore doloribus doloremque mollitia id deleniti repudiandae aut libero nihil aliquam! Dolorum, eveniet illo. Impedit praesentium corrupti inventore vitae temporibus numquam qui id libero voluptates? Praesentium nisi suscipit quasi distinctio! Nostrum ducimus atque amet eius ad labore minima est quibusdam et impedit itaque a quia voluptatum culpa ab quaerat, nemo laborum.</p>
    </div>
  )
}

export default InfoField;