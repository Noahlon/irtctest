
describe('irtc test', function () {

    let count = 0,roomId
    const body1 = {
        server: superServiceId,
        key: superServiceKey
    }

    beforeAll(async function (done) {
       await createLocalStream()
        await  ajax_Fun('http://'+ip+':3131/', 'POST', body1).then(res => {
            console.log('get authorization success')
            Authorization = res
            console.log('change Authorization', Authorization)

            const bodyCreate = {
                name: "noah"
            }
            ajax_3000("/rooms/", 'POST', bodyCreate).then(res => {
                console.log('create room success', res)
                roomId = JSON.parse(res)._id
                console.log('change roomId', roomId)
            }, err => {
                console.log('create room fail', err)
            })
        }, err => {
            console.log('get authorization fail', err)
        })
        await  ajax_3000("/rooms/", 'GET').then(res => {
            console.log('get room list success', res)
        }, err => {
            console.log('get room list fail', err)
        })
        done()

    })
    afterEach(async function (done) {
        count ++
        console.log("当前为第"+count+"测试用例",token,localStream,publicationTemp,subscriptionTemp)
        done()
    })
    it('test ', async function (done) {
        const body = {
            role: 'presenter',
            user: 'testuser'
        }
        await ajax_3000("/rooms/" + roomId + "/tokens", 'POST', body).then(res => {
            console.log('get token success', atob(res))
            token = res
            console.log('token change')
            expect(true).toBe(true)
        }, err => {
            console.log('get token fail', err)
            expect(true).toBe(true)
        })
        done()
    });
    it('cretae local get token join room pub sub 基础功能测试 ', async function (done) {
        const body = {
            role: 'presenter',
            user: 'testuser'
        }
        await ajax_3000("/rooms/" + roomId + "/tokens", 'POST', body).then(res => {
            console.log('get token success', atob(res))
            token = res
            console.log('token change')
            expect(true).toBe(true)
        }, err => {
            console.log('get token fail', err)
            expect(true).toBe(false)
        })
        await client.join(token).then(res => {
            console.log('join room success', res)
            expect(true).toBe(true)
        }, err => {
            console.log('join room fail', err)
            console.log(JSON.parse(err))
            expect(true).toBe(true)
        })
        pubParams = {
            audio: [{codec: {name: audioCodec}, maxBitrate: audioMax}],
            video: [{codec: {name: videoCodec}, maxBitrate: videoMax}]
        }
        await client.publish(localStream, pubParams)
            .then(function (res) {
                publicationTemp = res
                console.log('publish local stream success', res)
                expect(true).toBe(true)
            })
            .catch(function (err) {
                console.log('publish local stream err', err)
                expect(true).toBe(false)
            });

        await client.subscribe(remoteStream).then(res => {
            subscriptionTemp = res
            console.log('subscribe success', res)
            expect(true).toBe(true)
        }, err => {
            console.log('subscribe fail', err.toString(), "remoteStreamId:", remoteStream)
            expect(false).toBe(true)
        })
        client.leave()
        await publicationTemp.stop()
        await subscriptionTemp.stop()

        await ajax_3000("/rooms/" + roomId, 'DELETE').then(res => {
            console.log('delete room success', res, 'roomId:', roomId)
            expect(true).toBe(true)
        }, err => {
            console.log('delete room fail', err)
            expect(true).toBe(false)
        })
        done()
    });

    it(' get start ', async function (done) {
        await createLocalStream()
        const bodyCreate = {
            name: "noah"
        }
        await ajax_3000("/rooms/", 'POST', bodyCreate).then(res => {
            console.log('create room success', res)
            roomId = JSON.parse(res)._id
            console.log('change roomId', roomId)
            expect(true).toBe(true)
        }, err => {
            console.log('create room fail', err)
            expect(true).toBe(false)
        })
        const body = {
            role: 'presenter',
            user: 'testuser'
        }
        await ajax_3000("/rooms/" + roomId + "/tokens", 'POST', body).then(res => {
            console.log('get token success', atob(res))
            token = res
            console.log('token change')
            expect(true).toBe(true)
        }, err => {
            console.log('get token fail', err)
            expect(true).toBe(false)
        })
        await client.join(token).then(res => {
            console.log('join room success', res)
            expect(true).toBe(true)
        }, err => {
            console.log('join room fail', err)
            expect(true).toBe(true)
        })
        pubParams = {
            audio: [{codec: {name: audioCodec}, maxBitrate: audioMax}],
            video: [{codec: {name: videoCodec}, maxBitrate: videoMax}]
        }
        await client.publish(localStream, pubParams)
            .then(function (res) {
                publicationTemp = res
                console.log('publish local stream success', res)
                expect(true).toBe(true)
            })
            .catch(function (err) {
                console.log('publish local strea' +
                    'm err', err)
                expect(true).toBe(false)
            });

        await client.subscribe(remoteStream).then(res => {
            subscriptionTemp = res
            console.log('subscribe success', res)
            expect(true).toBe(true)
        }, err => {
            console.log('subscribe fail', err.toString(), "remoteStreamId:", remoteStream)
            expect(false).toBe(true)
        })
        await publicationTemp.getStats().then(res => {
            expect(true).toBe(true)
            console.log("get start success", res)
        }, err => {
            console.log("get start fail", err)
            expect(true).toBe(false)
        })
        await subscriptionTemp.getStats().then(res => {
            expect(true).toBe(true)
            console.log("subscriptionTemp get start success", res)
        }, err => {
            console.log("subscriptionTemp get start fail", err)
            expect(true).toBe(false)
        })
        client.leave()
        await publicationTemp.stop()
        await subscriptionTemp.stop()
        await ajax_3000("/rooms/" + roomId, 'DELETE').then(res => {
            console.log('delete room success', res, 'roomId:', roomId)
            expect(true).toBe(true)
        }, err => {
            console.log('delete room fail', err)
            expect(true).toBe(false)

        })
        done()
    });
    it('subscription mute', async function (done) {
        await createLocalStream()
        const body1 = {
            server: superServiceId,
            key: superServiceKey
        }
        await ajax_Fun('http://'+ip+':3131/', 'POST', body1).then(res => {
            console.log('get authorization success')
            Authorization = res
            console.log('change Authorization', Authorization)
        }, err => {
            console.log('get authorization fail', err)
        })
        const bodyCreate = {
            name: "noah"
        }
        await ajax_3000("/rooms/", 'POST', bodyCreate).then(res => {
            console.log('create room success', res)
            roomId = JSON.parse(res)._id
            console.log('change roomId', roomId)
            expect(true).toBe(true)
        }, err => {
            console.log('create room fail', err)
            expect(true).toBe(false)
        })
        const body = {
            role: 'presenter',
            user: 'testuser'
        }
        await ajax_3000("/rooms/" + roomId + "/tokens", 'POST', body).then(res => {
            console.log('get token success', atob(res))
            token = res
            console.log('token change')
            expect(true).toBe(true)
        }, err => {
            console.log('get token fail', err)
            expect(true).toBe(false)
        })
        await client.join(token).then(res => {
            console.log('join room success', res)
            expect(true).toBe(true)
        }, err => {
            console.log('join room fail', err)
            expect(true).toBe(true)
        })
        pubParams = {
            audio: [{codec: {name: audioCodec}, maxBitrate: audioMax}],
            video: [{codec: {name: videoCodec}, maxBitrate: videoMax}]
        }
        await client.publish(localStream, pubParams)
            .then(function (res) {
                publicationTemp = res
                console.log('publish local stream success', res)
                expect(true).toBe(true)
            })
            .catch(function (err) {
                console.log('publish local stream err', err)
                expect(true).toBe(false)
            });

        console.log("remoteStream",remoteStream)
        await client.subscribe(remoteStream).then(res => {
            subscriptionTemp = res
            console.log('subscribe success', res)
            expect(true).toBe(true)
        }, err => {
            console.log('subscribe fail', err.toString(), "remoteStreamId:", remoteStream)
            expect(false).toBe(true)
        })

        await subscriptionTemp.mute('video').then(res => {
            expect(true).toBe(true)
            console.log("subscription mute video success", res)
        }, err => {
            expect(true).toBe(false)
            console.log("subscription mute video fail")
        })
        await subscriptionTemp.unmute('video').then(res => {
            expect(true).toBe(true)
            console.log("subscription unmute video success", res)
        }, err => {
            expect(true).toBe(false)
            console.log("subscription unmute video fail", err)
        })
        await subscriptionTemp.mute('audio').then(res => {
            expect(true).toBe(true)
            console.log("subscription mute audio success", res)
        }, err => {
            expect(true).toBe(false)
            console.log("subscription mute audio fail", err)
        })
        await subscriptionTemp.unmute('audio').then(res => {
            expect(true).toBe(true)
            console.log("subscription unmute audio success", res)
        }, err => {
            expect(true).toBe(false)
            console.log("subscription unmute audio fail", err)
        })
        await subscriptionTemp.mute('av').then(res => {
            expect(true).toBe(true)
            console.log("subscription mute av success", res)
        }, err => {
            expect(true).toBe(false)
            console.log("subscription mute av fail", err)
        })
        await subscriptionTemp.unmute('av').then(res => {
            expect(true).toBe(true)
            console.log("subscription unmute av success", res)
        }, err => {
            expect(true).toBe(false)
            console.log("subscription unmute av fail", err)
        })
        await publicationTemp.mute('video').then(res => {
            expect(true).toBe(true)
            console.log("publication mute video success", res)
        }, err => {
            expect(true).toBe(false)
            console.log("publication mute video fail")
        })
        await publicationTemp.unmute('video').then(res => {
            expect(true).toBe(true)
            console.log("publication unmute video success", res)
        }, err => {
            expect(true).toBe(false)
            console.log("publication unmute video fail", err)
        })
        await publicationTemp.mute('audio').then(res => {
            expect(true).toBe(true)
            console.log("publication mute audio success", res)
        }, err => {
            expect(true).toBe(false)
            console.log("publication mute audio fail", err)
        })
        await publicationTemp.unmute('audio').then(res => {
            expect(true).toBe(true)
            console.log("publication unmute audio success", res)
        }, err => {
            expect(true).toBe(false)
            console.log("publication unmute audio fail", err)
        })
        await publicationTemp.mute('av').then(res => {
            expect(true).toBe(true)
            console.log("publication mute av success", res)
        }, err => {
            expect(true).toBe(false)
            console.log("publication mute av fail", err)
        })
        await publicationTemp.unmute('av').then(res => {
            expect(true).toBe(true)
            console.log("publication unmute av success", res)
        }, err => {
            expect(true).toBe(false)
            console.log("publication unmute av fail", err)
        })
        client.leave()
        await publicationTemp.stop()
        await subscriptionTemp.stop()
        await ajax_3000("/rooms/" + roomId, 'DELETE').then(res => {
            console.log('delete room success', res, 'roomId:', roomId)
            expect(true).toBe(true)
        }, err => {
            console.log('delete room fail', err)
            expect(true).toBe(false)

        })
        done()
    });

    it('subscription apply options', async function (done) {
        await createLocalStream()
        const body1 = {
            server: superServiceId,
            key: superServiceKey
        }
        await ajax_Fun('http://'+ip+':3131/', 'POST', body1).then(res => {
            console.log('get authorization success')
            Authorization = res
            console.log('change Authorization', Authorization)
        }, err => {
            console.log('get authorization fail', err)
        })
        const bodyCreate = {
            name: "noah"
        }
        await ajax_3000("/rooms/", 'POST', bodyCreate).then(res => {
            console.log('create room success', res)
            roomId = JSON.parse(res)._id
            console.log('change roomId', roomId)
            expect(true).toBe(true)
        }, err => {
            console.log('create room fail', err)
            expect(true).toBe(false)
        })
        const body = {
            role: 'presenter',
            user: 'testuser'
        }
        await ajax_3000("/rooms/" + roomId + "/tokens", 'POST', body).then(res => {
            console.log('get token success', atob(res))
            token = res
            console.log('token change')
            expect(true).toBe(true)
        }, err => {
            console.log('get token fail', err)
            expect(true).toBe(false)
        })
        await client.join(token).then(res => {
            console.log('join room success', res)
            expect(true).toBe(true)
        }, err => {
            console.log('join room fail', err)
            expect(true).toBe(true)
        })
        pubParams = {
            audio: [{codec: {name: audioCodec}, maxBitrate: audioMax}],
            video: [{codec: {name: videoCodec}, maxBitrate: videoMax}]
        }
        await client.publish(localStream, pubParams)
            .then(function (res) {
                publicationTemp = res
                console.log('publish local stream success', res)
                expect(true).toBe(true)
            })
            .catch(function (err) {
                console.log('publish local stream err', err)
                expect(true).toBe(false)
            });

        await client.subscribe(remoteStream).then(res => {
            subscriptionTemp = res
            console.log('subscribe success', res)
            expect(true).toBe(true)
        }, err => {
            console.log('subscribe fail', err.toString(), "remoteStreamId:", remoteStream)
            expect(false).toBe(true)
        })
        const options = {
            audio: {
                "codecs": [undefined]
            },
            video:
                {
                    "bitrateMultiplier": undefined,
                    "codecs": [undefined],
                    "frameRate": undefined,
                    "keyFrameInterval": undefined,
                    "resolution": {
                        width: 640,
                        height: 480
                    },
                }
        }

        await subscriptionTemp.applyOptions(options).then(res => {
            expect(true).toBe(true)
            console.log('change subscription options success', res)
        }, err => {
            expect(true).toBe(false)
            console.log('change subscription options fail', err)
        })
        client.leave()
        await subscriptionTemp.stop()
        await publicationTemp.stop()
        await ajax_3000("/rooms/" + roomId, 'DELETE').then(res => {
            console.log('delete room success', res, 'roomId:', roomId)
            expect(true).toBe(true)
        }, err => {
            console.log('delete room fail', err)
            expect(true).toBe(false)

        })
        done()
    });

    it('stream list', async function (done) {
        const body1 = {
            server: superServiceId,
            key: superServiceKey
        }
        await ajax_Fun('http://'+ip+':3131/', 'POST', body1).then(res => {
            console.log('get authorization success')
            Authorization = res
            console.log('change Authorization', Authorization)
        }, err => {
            console.log('get authorization fail', err)
        })

        const bodyCreate = {
            name: "noah"
        }
        await ajax_3000("/rooms/", 'POST', bodyCreate).then(res => {
            console.log('create room success', res)
            roomId = JSON.parse(res)._id
            console.log('change roomId', roomId)
            expect(true).toBe(true)
        }, err => {
            console.log('create room fail', err)
            expect(true).toBe(false)
        })

        await ajax_3000("/rooms/" + roomId + "/streams", "GET").then(res => {
            console.log('stream list success', res)
            expect(true).toBe(true)
            done()
        }, err => {
            console.log('stream list fail', err)
            expect(true).toBe(true)

        })
        await ajax_3000("/rooms/" + roomId, 'DELETE').then(res => {
            console.log('delete room success', res, 'roomId:', roomId)
            expect(true).toBe(true)
            done()
        }, err => {
            console.log('delete room fail', err)
            expect(true).toBe(false)
        })
        done()
    });
    it('room create room ,update room,detail room ,room list,delete room相关基础测试', async function (done) {
        const body1 = {
            server: superServiceId,
            key: superServiceKey
        }
        await ajax_Fun('http://'+ip+':3131/', 'POST', body1).then(res => {
            console.log('get authorization success')
            Authorization = res
            console.log('change Authorization', Authorization)
        }, err => {
            console.log('get authorization fail', err)
        })

        const bodyCreate = {
            name: "noah"
        }
        await ajax_3000("/rooms/", 'POST', bodyCreate).then(res => {
            console.log('create room success', res)
            roomId = JSON.parse(res)._id
            console.log('change roomId', roomId)
            expect(true).toBe(true)
        }, err => {
            console.log('create room fail', err)
            expect(true).toBe(false)
        })

      await  ajax_3000("/rooms/", 'GET').then(res => {
            console.log('get room list success', res)
            expect(true).toBe(true)
        }, err => {
            console.log('get room list fail', err)
            expect(true).toBe(false)
        })

        await ajax_3000("/rooms/" + roomId, 'PUT').then(res => {
            console.log('update room success', res)
            expect(true).toBe(true)
        }, err => {
            console.log('update room fail', err)
            expect(true).toBe(false)
        })

        await ajax_3000("/rooms/" + roomId, 'GET').then(res => {
            console.log('get room detail success', res)
            expect(true).toBe(true)
        }, err => {
            console.log('get room detail fail', err)
            expect(true).toBe(false)
        })
        await ajax_3000("/rooms/" + roomId, 'DELETE').then(res => {
            console.log('delete room success', res, 'roomId:', roomId)
            expect(true).toBe(true)
        }, err => {
            console.log('delete room fail', err)
            expect(true).toBe(false)
        })
        done()
    });
});


