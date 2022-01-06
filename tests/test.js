describe('irtc test', function () {
    let count = 1,roomId,token = null
    const body1 = {
        server: superServiceId,
        key: superServiceKey
    }
    beforeEach(async function () {
        console.log("开始第"+count+"条测试用例")
        const bodyCreate = {
            name: "noah"
        }
        await createLocalStream()
        await ajax_Fun('http://'+ip+':3131/', 'POST', body1).then( res => {
            console.log('get authorization success')
            Authorization = res
        }, err => {
            console.log('get authorization fail', err)
        })
        await ajax_3000("/rooms/", 'POST', bodyCreate).then(res => {
            console.log('create room success')
            roomId = JSON.parse(res)._id
        }, err => {


            console.log('create room fail')
        })
        const body = {
            role: 'presenter',
            user: 'testuser'
        }
        await ajax_3000("/rooms/" + roomId + "/tokens", 'POST', body).then(res => {
            console.log('get token success', atob(res))
            token = res
        }, err => {
            console.log('get token fail', err)
        })
        await  ajax_3000("/rooms/", 'GET').then(res => {
            console.log('get room list success',JSON.parse(res).length)
        }, err => {
            console.log('get room list fail')
        })
    })
    afterEach(async function () {
        await  ajax_3000("/rooms/", 'GET').then(res => {
            console.log('get room list success',JSON.parse(res).length)
            JSON.parse(res).forEach(resId=>{
                 ajax_3000("/rooms/" + resId.id, 'DELETE').then(mes => {
                    console.log('delete room success', mes, 'roomId:', roomId)
                }, err => {
                    console.log('delete room fail', err)
                })
            })
        }, err => {
            console.log('get room list fail',err.toString())
        })
        console.log("当前为第"+count+"测试用例结果",token,localStream,publicationTemp,subscriptionTemp)
        console.log("第"+count+"条测试用例结束")
        count ++
    })
    it('基础功能测试', async function (done) {
        await client.join(token).then(res => {
            console.log('join room success')
            expect(true).toBe(true)
        }, err => {
            console.log('join room fail', err.toString())
            expect(true).toBe(false)
            done()
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
        done()
    });
    it('get start ',async function (done) {
        console.log("roomId",roomId)
        await client.join(token).then(res => {
            console.log('join room success')
            expect(true).toBe(true)
        }, err => {
            console.log('join room fail', err.toString())
            expect(true).toBe(false)
            done()
        })
        pubParams = {
            audio: [{codec: {name: audioCodec}, maxBitrate: audioMax}],
            video: [{codec: {name: videoCodec}, maxBitrate: videoMax}]
        }
        await client.publish(localStream, pubParams).then(function (res) {
                publicationTemp = res
                console.log('publish local stream success', res)
                expect(true).toBe(true)
            }).catch(function (err) {
                console.log('publish local stream err', err.toString())
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
            console.log("subscriptionTemp get start success", res.toString())
        }, err => {
            console.log("subscriptionTemp get start fail", err)
            expect(true).toBe(false)
        })
        done()
    });

});