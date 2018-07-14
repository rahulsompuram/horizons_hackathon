// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');
var ffmpeg = require('ffmpeg');

// Creates a client
const client = new speech.SpeechClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const gcsUri = 'gs://pfaulkneraudio/obamaMomM.flac';
const encoding = 'FLAC';
//const sampleRateHertz = 44100;
const languageCode = 'en-US';

const config = {
    encoding: encoding,
    //sampleRateHertz: sampleRateHertz,
    languageCode: languageCode,
    enableWordTimeOffsets: true,
};

const audio = {
    uri: gcsUri,
};

const request = {
    config: config,
    audio: audio,
};

var startTimeArr = [];
var wordArr = [];
var words = [];


// Detects speech in the audio file. This creates a recognition job that you
// can wait for now, or get its result later.
client
  .longRunningRecognize(request)
  .then(data => {
      const operation = data[0];
    // Get a Promise representation of the final result of the job
      return operation.promise();
  })
  .then(data => {
      // console.log("DATA", data);
      const response = data[0];
      const transcription = response.results
      .map(result => {
          words.push(result.alternatives[0].words.map(obj => Object.assign(obj)));
          return result.alternatives[0].transcript;
      })
      .join('\n');
      console.log(`Transcription: ${transcription}`);

  })
  .then(() => {

    for (var i = 0; i < words.length; i++) {
      for (var j = 0; j < words[i].length; j++) {
        startTimeArr.push(words[i][j].startTime.seconds.low);
        wordArr.push(words[i][j].word);
      }
    }

    console.log("startTimeArr ----", startTimeArr, startTimeArr.length);
    console.log("wordArr -----", wordArr, wordArr.length);

  })
  .catch(err => {
      console.error('ERROR:', err);
  });
