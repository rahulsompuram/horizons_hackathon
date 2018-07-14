var ffmpeg = require('ffmpeg');


try {
    var process = new ffmpeg('./sampleAudio/obamaMom.mp4');

    process.then((video) => {

    console.log("AUDIO 1", video.metadata);

    video.setAudioCodec('flac');
    // console.log("GOT PAST SET AUDIO");
    video.setAudioChannels(1);

    console.log("AUDIO 2", video.metadata);

      // video.fnExtractSoundToMP3('./sampleAudio/kennedy.flac', function(error, file) {
      //     if (!error) {
      //         console.log('Audio file: ' + file);
      //     } else {
      //         console.log(error);
      //     }
      // });

      //  console.log(video.metadata);
    // FFmpeg configuration
      //  console.log("CONFIG", video.info_configuration);
    })
    .catch((err) => {
        console.log('Error: ' + err);
    });
} catch (e) {
    console.log(e.code);
    console.log(e.msg);
}
