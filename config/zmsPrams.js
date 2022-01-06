let remoteStream
let  audioSource = 'mic', videoSource = 'camera', localStream, localMediaStream, pubParams, videoCodec = 'vp8', audioCodec = 'pcma', audioMax = 200, videoMax = 200
let publicationTemp, subscriptionTemp, pubTempId, pubTrackType, subTrackType, key, serverId, partId
let muteOption={
    pub:{
        video:'unmute',
        audio:'unmute',
    },
    sub:{
        video:'unmute',
        audio:'unmute',
    }
}
const changeMute = (kind,type,subOrPub) => {
    if (subOrPub ==="sub"){
        if (kind === "video"){
            muteOption.sub.video = type
        }else {
            muteOption.sub.audio = type
        }

    }else {
        if (kind === "video"){
            muteOption.pub.video = type
        }else {
            muteOption.pub.audio = type
        }
    }
}
let ajaxMap = new Map();
let pubList = new Map();
let subList = new Map()
let { 
    LocalStream,
    MediaStreamFactory,
    StreamSourceInfo,
    StreamConstraints,
    MediaStreamDeviceConstraints,
    AudioTrackConstraints,
    VideoTrackConstraints,
    Resolution,
} = IRtc.Base, {
    ConferenceClient,
    SioSignaling
} = IRtc.Conference;
let client = new ConferenceClient();

const conferenceClient = () => {
    let streamaddedListener = (eve) => {
        // let remoteStream = eve.stream;
        remoteStream = eve.stream
        console.log('change remote stream id ', remoteStream)
        console.log("remoteStream", remoteStream)
        streamEvent(eve.stream)
    }
    let participantjoinedListener = (eve) => {
        let participant = eve.participant;
        console.log('participant', participant)
    }
    let messagereceivedListener = (eve) => {
        let msg = eve.msg;
        let from = eve.from;
        let to = eve.to;
        console.log('message,from,to', msg, from, to)
    }
    let serverdisconnectedListener = () => {
        console.log('server disconnected');
    }

    client.addEventListener("streamadded", streamaddedListener);
    client.addEventListener('participantjoined', participantjoinedListener);
    client.addEventListener('messagereceived', messagereceivedListener);
    client.addEventListener("serverdisconnected", serverdisconnectedListener);

}


function streamEvent(stream) {
    let enedListener = (event) => {
        if (stream instanceof LocalStream) {
            console.log(`local stream ${stream.id} is ended`);
            // localStreams.delete(stream.source.video);
        } else {
            console.log(`remote stream ${stream.id} is ended`);
            // remoteStreamMap.delete(stream.id);
        }
        // destroyStreamUi(stream);
    };
    let activeaudioinputchangeListener = (event) => {
        console.log('activeaudioinputchange event triggered: ', event);
    };
    let layoutchangeListener = (event) => {
        console.log('layoutchange event triggered: ', event);
    };
    let update = (event) => {
        console.log('streamupdate event triggered: ', event, stream.id);
    }
    stream.addEventListener('ended', enedListener);
    stream.addEventListener('activeaudioinputchange', activeaudioinputchangeListener);
    stream.addEventListener('layoutchange', layoutchangeListener);
    stream.addEventListener('update', update);

}

function createLocalStream() {
    const mediaStreamDeviceConstraints = {
        audio: {
            deviceId: undefined,
            source: audioSource,
            // extensionId: "caamnkgooanlpocmehlanokfmcjobblm"
        },
        video: {
            deviceId: undefined,
            resolution: {
                height: 480,
                width: 640
            },
            source: videoSource
        }
    }
    const streamSourceInfo = {
        audio: audioSource,
        video: videoSource
    }
    return new Promise((resolve, reject) => {
        MediaStreamFactory.createMediaStream(mediaStreamDeviceConstraints)
            .then((mediaStream) => {
                console.log('create media stream success: ', mediaStream.toString());
                localStream = new LocalStream(mediaStream, streamSourceInfo, {testAttributes: 'test'})
                localMediaStream = mediaStream
                console.log(mediaStream)
                resolve(mediaStream)
            }, (err) => {
                console.log('create mediaStream failed: ', err);
                reject(err)
            })
    })
}


conferenceClient()

