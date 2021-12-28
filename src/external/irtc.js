/*
 * Zealcomm iRTC WebRTC SDK version 4.2.1
 * Copyright (c) 2020 Zealcomm <http://webrtc.zealcomm.com>
 * Homepage: http://webrtc.zealcomm.com
 */
!function(e) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).IRtc = e()
    }
}(function() {
    return function() {
        return function e(t, n, r) {
            function i(a, s) {
                if (!n[a]) {
                    if (!t[a]) {
                        var c = "function" == typeof require && require;
                        if (!s && c)
                            return c(a, !0);
                        if (o)
                            return o(a, !0);
                        var u = new Error("Cannot find module '" + a + "'");
                        throw u.code = "MODULE_NOT_FOUND",
                            u
                    }
                    var d = n[a] = {
                        exports: {}
                    };
                    t[a][0].call(d.exports, function(e) {
                        return i(t[a][1][e] || e)
                    }, d, d.exports, e, t, n, r)
                }
                return n[a].exports
            }
            for (var o = "function" == typeof require && require, a = 0; a < r.length; a++)
                i(r[a]);
            return i
        }
    }()({
        1: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.Base64 = void 0;
            var r = function() {
                var e, t, n, r = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"], i = [];
                for (n = 0; n < r.length; n += 1)
                    i[r[n]] = n;
                var o = function(n) {
                    e = n,
                        t = 0
                }
                    , a = function() {
                    if (!e)
                        return -1;
                    if (t >= e.length)
                        return -1;
                    var n = 255 & e.charCodeAt(t);
                    return t += 1,
                        n
                }
                    , s = function() {
                    if (!e)
                        return -1;
                    for (; ; ) {
                        if (t >= e.length)
                            return -1;
                        var n = e.charAt(t);
                        if (t += 1,
                            i[n])
                            return i[n];
                        if ("A" === n)
                            return 0
                    }
                }
                    , c = function(e) {
                    return 1 === (e = e.toString(16)).length && (e = "0" + e),
                        e = "%" + e,
                        unescape(e)
                };
                return {
                    encodeBase64: function(e) {
                        var t, n;
                        o(e),
                            t = "";
                        var i = new Array(3);
                        for (n = !1; !n && -1 !== (i[0] = a()); )
                            i[1] = a(),
                                i[2] = a(),
                                t += r[i[0] >> 2],
                                -1 !== i[1] ? (t += r[i[0] << 4 & 48 | i[1] >> 4],
                                    -1 !== i[2] ? (t += r[i[1] << 2 & 60 | i[2] >> 6],
                                        t += r[63 & i[2]]) : (t += r[i[1] << 2 & 60],
                                        t += "=",
                                        n = !0)) : (t += r[i[0] << 4 & 48],
                                    t += "=",
                                    t += "=",
                                    n = !0);
                        return t
                    },
                    decodeBase64: function(e) {
                        var t, n;
                        o(e),
                            t = "";
                        var r = new Array(4);
                        for (n = !1; !n && -1 !== (r[0] = s()) && -1 !== (r[1] = s()); )
                            r[2] = s(),
                                r[3] = s(),
                                t += c(r[0] << 2 & 255 | r[1] >> 4),
                                -1 !== r[2] ? (t += c(r[1] << 4 & 255 | r[2] >> 2),
                                    -1 !== r[3] ? t += c(r[2] << 6 & 255 | r[3]) : n = !0) : n = !0;
                        return t
                    }
                }
            }();
            n.Base64 = r
        }
            , {}],
        2: [function(e, t, n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.VideoEncodingParameters = n.VideoCodecParameters = n.VideoCodec = n.AudioEncodingParameters = n.AudioCodecParameters = n.AudioCodec = void 0;
            n.AudioCodec = {
                PCMU: "pcmu",
                PCMA: "pcma",
                OPUS: "opus",
                G722: "g722",
                ISAC: "iSAC",
                ILBC: "iLBC",
                AAC: "aac",
                AC3: "ac3",
                NELLYMOSER: "nellymoser"
            };
            n.AudioCodecParameters = function e(t, n, i) {
                r(this, e),
                    this.name = t,
                    this.channelCount = n,
                    this.clockRate = i
            }
            ;
            n.AudioEncodingParameters = function e(t, n) {
                r(this, e),
                    this.codec = t,
                    this.maxBitrate = n
            }
            ;
            n.VideoCodec = {
                VP8: "vp8",
                VP9: "vp9",
                H264: "h264",
                H265: "h265"
            };
            n.VideoCodecParameters = function e(t, n) {
                r(this, e),
                    this.name = t,
                    this.profile = n
            }
            ;
            n.VideoEncodingParameters = function e(t, n) {
                r(this, e),
                    this.codec = t,
                    this.maxBitrate = n
            }
        }
            , {}],
        3: [function(e, t, n) {
            "use strict";
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        }
                        : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                )(e)
            }
            function i(e, t) {
                return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }
            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }
                )(e)
            }
            function a(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && s(e, t)
            }
            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t,
                            e
                    }
                )(e, t)
            }
            function c(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.MuteEvent = n.ErrorEvent = n.MessageEvent = n.IRtcEvent = n.EventDispatcher = void 0;
            n.EventDispatcher = function() {
                var e = {
                    dispatcher: {}
                };
                e.dispatcher.eventListeners = {},
                    this.addEventListener = function(t, n) {
                        void 0 === e.dispatcher.eventListeners[t] && (e.dispatcher.eventListeners[t] = []),
                            e.dispatcher.eventListeners[t].push(n)
                    }
                    ,
                    this.removeEventListener = function(t, n) {
                        if (e.dispatcher.eventListeners[t]) {
                            var r = e.dispatcher.eventListeners[t].indexOf(n);
                            -1 !== r && e.dispatcher.eventListeners[t].splice(r, 1)
                        }
                    }
                    ,
                    this.clearEventListener = function(t) {
                        e.dispatcher.eventListeners[t] = []
                    }
                    ,
                    this.dispatchEvent = function(t) {
                        e.dispatcher.eventListeners[t.type] && e.dispatcher.eventListeners[t.type].map(function(e) {
                            e(t)
                        })
                    }
            }
            ;
            var u = function e(t) {
                c(this, e),
                    this.type = t
            };
            n.IRtcEvent = u;
            var d = function(e) {
                function t(e, n) {
                    var r;
                    return c(this, t),
                        (r = i(this, o(t).call(this, e))).origin = n.origin,
                        r.message = n.message,
                        r.to = n.to,
                        r
                }
                return a(t, u),
                    t
            }();
            n.MessageEvent = d;
            var f = function(e) {
                function t(e, n) {
                    var r;
                    return c(this, t),
                        (r = i(this, o(t).call(this, e))).error = n.error,
                        r
                }
                return a(t, u),
                    t
            }();
            n.ErrorEvent = f;
            var l = function(e) {
                function t(e, n) {
                    var r;
                    return c(this, t),
                        (r = i(this, o(t).call(this, e))).kind = n.kind,
                        r
                }
                return a(t, u),
                    t
            }();
            n.MuteEvent = l
        }
            , {}],
        4: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = e("./mediastream-factory.js");
            Object.keys(r).forEach(function(e) {
                "default" !== e && "__esModule" !== e && Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return r[e]
                    }
                })
            });
            var i = e("./stream.js");
            Object.keys(i).forEach(function(e) {
                "default" !== e && "__esModule" !== e && Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return i[e]
                    }
                })
            });
            var o = e("./mediaformat.js");
            Object.keys(o).forEach(function(e) {
                "default" !== e && "__esModule" !== e && Object.defineProperty(n, e, {
                    enumerable: !0,
                    get: function() {
                        return o[e]
                    }
                })
            })
        }
            , {
                "./mediaformat.js": 6,
                "./mediastream-factory.js": 7,
                "./stream.js": 10
            }],
        5: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.default = void 0;
            var r = function() {
                var e = function() {}
                    , t = {
                    DEBUG: 0,
                    TRACE: 1,
                    INFO: 2,
                    WARNING: 3,
                    ERROR: 4,
                    NONE: 5
                };
                t.log = window.console.log.bind(window.console);
                var n = function(e) {
                    return "function" == typeof window.console[e] ? window.console[e].bind(window.console) : window.console.log.bind(window.console)
                }
                    , r = function(r) {
                    t.debug = r <= 0 ? n("log") : e,
                        t.trace = r <= 1 ? n("trace") : e,
                        t.info = r <= 2 ? n("info") : e,
                        t.warning = r <= 3 ? n("warn") : e,
                        t.error = r <= 4 ? n("error") : e
                };
                return r(0),
                    t.setLogLevel = r,
                    t
            }();
            n.default = r
        }
            , {}],
        6: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.Resolution = n.TrackKind = n.VideoSourceInfo = n.AudioSourceInfo = void 0;
            n.AudioSourceInfo = {
                MIC: "mic",
                SCREENCAST: "screen-cast",
                FILE: "file",
                MIXED: "mixed"
            };
            n.VideoSourceInfo = {
                CAMERA: "camera",
                SCREENCAST: "screen-cast",
                FILE: "file",
                MIXED: "mixed"
            };
            n.TrackKind = {
                AUDIO: "audio",
                VIDEO: "video",
                AUDIO_AND_VIDEO: "av"
            };
            n.Resolution = function e(t, n) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                    this.width = t,
                    this.height = n
            }
        }
            , {}],
        7: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.MediaStreamFactory = n.StreamConstraints = n.VideoTrackConstraints = n.AudioTrackConstraints = void 0;
            var r, i = s(e("./utils.js")), o = (r = e("./logger.js")) && r.__esModule ? r : {
                default: r
            }, a = s(e("./mediaformat.js"));
            function s(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                return t.default = e,
                    t
            }
            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                    "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                }
            }
            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        }
                        : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                )(e)
            }
            function d(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            n.AudioTrackConstraints = function e(t) {
                if (d(this, e),
                    !Object.values(a.AudioSourceInfo).some(function(e) {
                        return e === t
                    }))
                    throw new TypeError("Invalid source.");
                this.source = t,
                    this.deviceId = void 0
            }
            ;
            n.VideoTrackConstraints = function e(t) {
                if (d(this, e),
                    !Object.values(a.VideoSourceInfo).some(function(e) {
                        return e === t
                    }))
                    throw new TypeError("Invalid source.");
                this.source = t,
                    this.deviceId = void 0,
                    this.resolution = void 0,
                    this.frameRate = void 0
            }
            ;
            function f(e) {
                return "object" === u(e.video) && e.video.source === a.VideoSourceInfo.SCREENCAST
            }
            n.StreamConstraints = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                    , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                d(this, e),
                    this.audio = t,
                    this.video = n
            }
            ;
            var l = function() {
                function e() {
                    d(this, e)
                }
                var t, n, r;
                return t = e,
                    r = [{
                        key: "createMediaStream",
                        value: function(e) {
                            if ("object" !== u(e) || !e.audio && !e.video)
                                return Promise.reject(new TypeError("Invalid constrains"));
                            if (!f(e) && "object" === u(e.audio) && e.audio.source === a.AudioSourceInfo.SCREENCAST)
                                return Promise.reject(new TypeError("Cannot share screen without video."));
                            if (f(e) && i.isChrome() && (!i.sysInfo().runtime.version || i.sysInfo().runtime.version < "72") && (o.default.warning("Screen sharing can not support Chrome version prior to 72,need Extension while Chrome version is below 72"),
                                o.default.info(i.sysInfo().runtime.version)),
                            f(e) && i.isFirefox() && (!i.sysInfo().runtime.version || i.sysInfo().runtime.version < 66))
                                return Promise.reject(new TypeError("Screen sharing can not support Firefox version prior to 66"));
                            if (f(e) && i.isSafari() && (!i.sysInfo().runtime.version || i.sysInfo().runtime.version < 13))
                                return Promise.reject(new TypeError("Screen sharing can not support Safari version prior to 13"));
                            if (f(e) && "object" === u(e.audio) && e.audio.source !== a.AudioSourceInfo.SCREENCAST)
                                return Promise.reject(new TypeError("Cannot capture video from screen cast while capture audio from other source."));
                            if (!e.audio && !e.video)
                                return Promise.reject(new TypeError("At least one of audio and video must be requested."));
                            var t = Object.create({});
                            if ("object" === u(e.audio) && e.audio.source === a.AudioSourceInfo.MIC ? (t.audio = Object.create({}),
                                i.isEdge() ? t.audio.deviceId = e.audio.deviceId : t.audio.deviceId = {
                                    exact: e.audio.deviceId
                                }) : e.audio.source === a.AudioSourceInfo.SCREENCAST ? t.audio = !0 : t.audio = e.audio,
                                "object" === u(e.video) ? (t.video = Object.create({}),
                                "number" == typeof e.video.frameRate && (t.video.frameRate = e.video.frameRate),
                                e.video.resolution && e.video.resolution.width && e.video.resolution.height && (e.video.source === a.VideoSourceInfo.SCREENCAST ? (t.video.width = e.video.resolution.width,
                                    t.video.height = e.video.resolution.height) : (t.video.width = Object.create({}),
                                    t.video.width.exact = e.video.resolution.width,
                                    t.video.height = Object.create({}),
                                    t.video.height.exact = e.video.resolution.height)),
                                "string" == typeof e.video.deviceId && (t.video.deviceId = {
                                    exact: e.video.deviceId
                                }),
                                i.isFirefox() && e.video.source === a.VideoSourceInfo.SCREENCAST && (t.video.mediaSource = "screen")) : t.video = e.video,
                                f(e)) {
                                if (o.default.info("screen share mediaConstraints", e),
                                i.isChrome() && "function" != typeof navigator.mediaDevices.getDisplayMedia) {
                                    if (!e.extensionId)
                                        return Promise.reject(new TypeError("Extension ID must be specified for screen sharing on Chrome."));
                                    var n = ["screen", "window", "tab"];
                                    return e.audio && n.push("audio"),
                                        new Promise(function(t, r) {
                                                chrome.runtime.sendMessage(e.extensionId, {
                                                    getStream: n
                                                }, function(n) {
                                                    if (void 0 === n)
                                                        return r(new Error(chrome.runtime.lastError.message));
                                                    e.audio && "object" !== u(n.options) && o.default.warning("Desktop sharing with audio requires the latest Chrome extension. Your audio constraints will be ignored.");
                                                    var i = Object.create({});
                                                    e.audio && "object" === u(n.options) && (n.options.canRequestAudioTrack ? i.audio = {
                                                        mandatory: {
                                                            chromeMediaSource: "desktop",
                                                            chromeMediaSourceId: n.streamId
                                                        }
                                                    } : o.default.warning("Sharing screen with audio was not selected by user.")),
                                                        i.video = Object.create({}),
                                                        i.video.mandatory = Object.create({}),
                                                        i.video.mandatory.chromeMediaSource = "desktop",
                                                        i.video.mandatory.chromeMediaSourceId = n.streamId,
                                                    e.video.resolution && (i.video.mandatory.maxHeight = i.video.mandatory.minHeight = e.video.resolution.height,
                                                        i.video.mandatory.maxWidth = i.video.mandatory.minWidth = e.video.resolution.width),
                                                    e.video.frameRate && (i.video.mandatory.minFrameRate = e.video.frameRate,
                                                        i.video.mandatory.maxFrameRate = e.video.frameRate),
                                                        t(navigator.mediaDevices.getUserMedia(i))
                                                })
                                            }
                                        )
                                }
                                return "function" == typeof navigator.mediaDevices.getDisplayMedia ? navigator.mediaDevices.getDisplayMedia(t) : navigator.mediaDevices.getUserMedia(t)
                            }
                            return navigator.mediaDevices.getUserMedia(t)
                        }
                    }],
                (n = null) && c(t.prototype, n),
                r && c(t, r),
                    e
            }();
            n.MediaStreamFactory = l
        }
            , {
                "./logger.js": 5,
                "./mediaformat.js": 6,
                "./utils.js": 11
            }],
        8: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.PublishOptions = n.Publication = n.PublicationSettings = n.VideoPublicationSettings = n.AudioPublicationSettings = void 0;
            var r = o(e("./utils.js"))
                , i = (o(e("./mediaformat.js")),
                e("../base/event.js"));
            function o(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                return t.default = e,
                    t
            }
            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        }
                        : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                )(e)
            }
            function s(e) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }
                )(e)
            }
            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t,
                            e
                    }
                )(e, t)
            }
            function u(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function d(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            n.AudioPublicationSettings = function e(t) {
                d(this, e),
                    this.codec = t
            }
            ;
            n.VideoPublicationSettings = function e(t, n, r, i, o) {
                d(this, e),
                    this.codec = t,
                    this.resolution = n,
                    this.frameRate = r,
                    this.bitrate = i,
                    this.keyFrameInterval = o
            }
            ;
            n.PublicationSettings = function e(t, n) {
                d(this, e),
                    this.audio = t,
                    this.video = n
            }
            ;
            var f = function(e) {
                function t(e, n, i, o, c, f) {
                    var l, p, v;
                    return d(this, t),
                        p = this,
                        l = !(v = s(t).call(this)) || "object" !== a(v) && "function" != typeof v ? u(p) : v,
                        Object.defineProperty(u(u(l)), "id", {
                            configurable: !1,
                            writable: !1,
                            value: e || r.createUuid()
                        }),
                        l.stop = n,
                        l.getStats = i,
                        l.getPCSenders = o,
                        l.mute = c,
                        l.unmute = f,
                        l
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && c(e, t)
                }(t, i.EventDispatcher),
                    t
            }();
            n.Publication = f;
            n.PublishOptions = function e(t, n) {
                d(this, e),
                    this.audio = t,
                    this.video = n
            }
        }
            , {
                "../base/event.js": 3,
                "./mediaformat.js": 6,
                "./utils.js": 11
            }],
        9: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.reorderCodecs = function(e, t, n) {
                    if (!n || 0 === n.length)
                        return e;
                    n = "audio" === t ? n.concat(f) : n.concat(l);
                    var r = e.split("\r\n")
                        , i = c(r, "m=", t);
                    if (null === i)
                        return e;
                    var a = r[i].split(" ");
                    a.splice(0, 3);
                    var s = []
                        , v = !0
                        , m = !1
                        , b = void 0;
                    try {
                        for (var h, y = n[Symbol.iterator](); !(v = (h = y.next()).done); v = !0)
                            for (var g = h.value, _ = 0; _ < r.length; _++) {
                                var w = u(r, _, -1, "a=rtpmap", g);
                                if (null !== w) {
                                    var j = d(r[w]);
                                    j && (s.push(j),
                                        _ = w)
                                }
                            }
                    } catch (e) {
                        m = !0,
                            b = e
                    } finally {
                        try {
                            v || null == y.return || y.return()
                        } finally {
                            if (m)
                                throw b
                        }
                    }
                    s = function(e, t) {
                        var n = !0
                            , r = !1
                            , i = void 0;
                        try {
                            for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                                var u = a.value
                                    , d = c(e, "a=fmtp", "apt=" + u);
                                if (null !== d) {
                                    var f = o(e[d]);
                                    t.push(f.pt)
                                }
                            }
                        } catch (e) {
                            r = !0,
                                i = e
                        } finally {
                            try {
                                n || null == s.return || s.return()
                            } finally {
                                if (r)
                                    throw i
                            }
                        }
                        return t
                    }(r, s),
                        r[i] = function(e, t) {
                            var n = e.split(" ").slice(0, 3);
                            return (n = n.concat(t)).join(" ")
                        }(r[i], s);
                    var S = !0
                        , O = !1
                        , P = void 0;
                    try {
                        for (var E, C = a[Symbol.iterator](); !(S = (E = C.next()).done); S = !0) {
                            var k = E.value;
                            -1 === s.indexOf(k) && (r = p(r, k))
                        }
                    } catch (e) {
                        O = !0,
                            P = e
                    } finally {
                        try {
                            S || null == C.return || C.return()
                        } finally {
                            if (O)
                                throw P
                        }
                    }
                    return e = r.join("\r\n")
                }
                ,
                n.setMaxBitrate = function(e, t) {
                    var n = !0
                        , r = !1
                        , o = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                            var c = a.value;
                            c.maxBitrate && (e = i(e, c.codec.name, "x-google-max-bitrate", c.maxBitrate.toString()))
                        }
                    } catch (e) {
                        r = !0,
                            o = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (r)
                                throw o
                        }
                    }
                    return e
                }
            ;
            var r;
            (r = e("./logger.js")) && r.__esModule;
            function i(e, t, n, r) {
                var i = e.split("\r\n");
                i.length <= 1 && (i = e.split("\n"));
                var u = s(i, t)
                    , f = {};
                if (null === u) {
                    var l = c(i, "a=rtpmap", t);
                    if (null === l)
                        return e;
                    var p = d(i[l]);
                    f.pt = p.toString(),
                        f.params = {},
                        f.params[n] = r,
                        i.splice(l + 1, 0, a(f))
                } else
                    (f = o(i[u])).params[n] = r,
                        i[u] = a(f);
                return e = i.join("\r\n")
            }
            function o(e) {
                var t = {}
                    , n = e.indexOf(" ")
                    , r = e.substring(n + 1).split(";")
                    , i = new RegExp("a=fmtp:(\\d+)")
                    , o = e.match(i);
                if (!o || 2 !== o.length)
                    return null;
                t.pt = o[1];
                for (var a = {}, s = 0; s < r.length; ++s) {
                    var c = r[s].split("=");
                    2 === c.length && (a[c[0]] = c[1])
                }
                return t.params = a,
                    t
            }
            function a(e) {
                if (!e.hasOwnProperty("pt") || !e.hasOwnProperty("params"))
                    return null;
                var t = e.pt
                    , n = e.params
                    , r = []
                    , i = 0;
                for (var o in n)
                    r[i] = o + "=" + n[o],
                        ++i;
                return 0 === i ? null : "a=fmtp:" + t.toString() + " " + r.join(";")
            }
            function s(e, t) {
                var n = function(e, t) {
                    var n = c(e, "a=rtpmap", t);
                    return n ? d(e[n]) : null
                }(e, t);
                return n ? c(e, "a=fmtp:" + n.toString()) : null
            }
            function c(e, t, n) {
                return u(e, 0, -1, t, n)
            }
            function u(e, t, n, r, i) {
                for (var o = -1 !== n ? n : e.length, a = t; a < o; ++a)
                    if (0 === e[a].indexOf(r) && (!i || -1 !== e[a].toLowerCase().indexOf(i.toLowerCase())))
                        return a;
                return null
            }
            function d(e) {
                var t = new RegExp("a=rtpmap:(\\d+) [a-zA-Z0-9-]+\\/\\d+")
                    , n = e.match(t);
                return n && 2 === n.length ? n[1] : null
            }
            var f = ["CN", "telephone-event"]
                , l = ["red", "ulpfec"];
            function p(e, t) {
                for (var n = new RegExp("a=(rtpmap|rtcp-fb|fmtp):" + t + "\\s"), r = e.length - 1; r > 0; r--)
                    e[r].match(n) && e.splice(r, 1);
                return e
            }
        }
            , {
                "./logger.js": 5
            }],
        10: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.StreamEvent = n.RemoteStream = n.LocalStream = n.Stream = n.StreamSourceInfo = void 0;
            (r = e("./logger.js")) && r.__esModule;
            var r, i = e("./event.js"), o = function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                return t.default = e,
                    t
            }(e("./utils.js"));
            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        }
                        : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                )(e)
            }
            function s(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? f(e) : t
            }
            function c(e) {
                return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }
                )(e)
            }
            function u(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && d(e, t)
            }
            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t,
                            e
                    }
                )(e, t)
            }
            function f(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function l(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function p(e, t) {
                return t.some(function(t) {
                    return t === e
                })
            }
            n.StreamSourceInfo = function e(t, n) {
                if (l(this, e),
                    !p(t.source, [void 0, "mic", "screen-cast", "file", "mixed"]))
                    throw new TypeError("Incorrect value for audioSourceInfo.source");
                if (!p(n.source, [void 0, "camera", "screen-cast", "file", "encoded-file", "raw-file", "mixed"]))
                    throw new TypeError("Incorrect value for videoSourceInfo.source");
                if (!p(t.status, [void 0, "active", "inactive"]))
                    throw new TypeError("Incorrect value for audioSourceInfo.status");
                if (!p(n.status, [void 0, "active", "inactive"]))
                    throw new TypeError("Incorrect value for videoSourceInfo.status");
                this.audio = t,
                    this.video = n
            }
            ;
            var v = function(e) {
                function t(e, n, r) {
                    var i;
                    if (l(this, t),
                        i = s(this, c(t).call(this)),
                    e && !(e instanceof MediaStream) || "object" !== a(n))
                        throw new TypeError("Invalid stream or sourceInfo.");
                    if (e && (e.getAudioTracks().length > 0 && !n.audio || e.getVideoTracks().length > 0 && !n.video))
                        throw new TypeError("Missing audio source info or video source info.");
                    return Object.defineProperty(f(f(i)), "mediaStream", {
                        configurable: !1,
                        writable: !0,
                        value: e
                    }),
                        Object.defineProperty(f(f(i)), "source", {
                            configurable: !1,
                            writable: !1,
                            value: n
                        }),
                        Object.defineProperty(f(f(i)), "attributes", {
                            configurable: !0,
                            writable: !1,
                            value: r
                        }),
                        i
                }
                return u(t, i.EventDispatcher),
                    t
            }();
            n.Stream = v;
            var m = function(e) {
                function t(e, n, r) {
                    var i;
                    if (l(this, t),
                        !(e instanceof MediaStream))
                        throw new TypeError("Invalid stream.");
                    return i = s(this, c(t).call(this, e, n, r)),
                        Object.defineProperty(f(f(i)), "id", {
                            configurable: !1,
                            writable: !1,
                            value: o.createUuid()
                        }),
                        i
                }
                return u(t, v),
                    t
            }();
            n.LocalStream = m;
            var b = function(e) {
                function t(e, n, r, i, a) {
                    var u;
                    return l(this, t),
                        u = s(this, c(t).call(this, r, i, a)),
                        Object.defineProperty(f(f(u)), "id", {
                            configurable: !1,
                            writable: !1,
                            value: e || o.createUuid()
                        }),
                        Object.defineProperty(f(f(u)), "origin", {
                            configurable: !1,
                            writable: !1,
                            value: n
                        }),
                        u.settings = void 0,
                        u.capabilities = void 0,
                        u
                }
                return u(t, v),
                    t
            }();
            n.RemoteStream = b;
            var h = function(e) {
                function t(e, n) {
                    var r;
                    return l(this, t),
                        (r = s(this, c(t).call(this, e))).stream = n.stream,
                        r
                }
                return u(t, i.IRtcEvent),
                    t
            }();
            n.StreamEvent = h
        }
            , {
                "./event.js": 3,
                "./logger.js": 5,
                "./utils.js": 11
            }],
        11: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.isFirefox = function() {
                    return null !== window.navigator.userAgent.match("Firefox")
                }
                ,
                n.isChrome = function() {
                    return null !== window.navigator.userAgent.match("Chrome")
                }
                ,
                n.isSafari = i,
                n.isEdge = function() {
                    return null !== window.navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)
                }
                ,
                n.createUuid = function() {
                    return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        var t = 16 * Math.random() | 0
                            , n = "x" === e ? t : 3 & t | 8;
                        return n.toString(16)
                    })
                }
                ,
                n.sysInfo = function() {
                    var e = Object.create({});
                    e.sdk = {
                        version: r,
                        type: "JavaScript"
                    };
                    var t = navigator.userAgent
                        , n = /Chrome\/([0-9\.]+)/.exec(t);
                    n ? e.runtime = {
                        name: "Chrome",
                        version: n[1]
                    } : (n = /Firefox\/([0-9\.]+)/.exec(t)) ? e.runtime = {
                        name: "Firefox",
                        version: n[1]
                    } : (n = /Edge\/([0-9\.]+)/.exec(t)) ? e.runtime = {
                        name: "Edge",
                        version: n[1]
                    } : i() ? (n = /Version\/([0-9\.]+) Safari/.exec(t),
                        e.runtime = {
                            name: "Safari"
                        },
                        e.runtime.version = n ? n[1] : "Unknown") : e.runtime = {
                        name: "Unknown",
                        version: "Unknown"
                    };
                    (n = /Windows NT ([0-9\.]+)/.exec(t)) ? e.os = {
                        name: "Windows NT",
                        version: n[1]
                    } : (n = /Intel Mac OS X ([0-9_\.]+)/.exec(t)) ? e.os = {
                        name: "Mac OS X",
                        version: n[1].replace(/_/g, ".")
                    } : (n = /iPhone OS ([0-9_\.]+)/.exec(t)) ? e.os = {
                        name: "iPhone OS",
                        version: n[1].replace(/_/g, ".")
                    } : (n = /X11; Linux/.exec(t)) ? e.os = {
                        name: "Linux",
                        version: "Unknown"
                    } : (n = /Android( ([0-9\.]+))?/.exec(t)) ? e.os = {
                        name: "Android",
                        version: n[1] || "Unknown"
                    } : (n = /CrOS/.exec(t)) ? e.os = {
                        name: "Chrome OS",
                        version: "Unknown"
                    } : e.os = {
                        name: "Unknown",
                        version: "Unknown"
                    };
                    return e.capabilities = {
                        continualIceGathering: !1,
                        unifiedPlan: !0,
                        streamRemovable: "Firefox" !== e.runtime.name
                    },
                        e
                }
            ;
            var r = "4.2.1";
            function i() {
                return /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent)
            }
        }
            , {}],
        12: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.ConferencePeerConnectionChannel = void 0;
            var r, i = (r = e("../base/logger.js")) && r.__esModule ? r : {
                default: r
            }, o = e("../base/event.js"), a = e("../base/mediaformat.js"), s = e("../base/publication.js"), c = e("./subscription.js"), u = e("./error.js"), d = l(e("../base/utils.js")), f = l(e("../base/sdputils.js"));
            function l(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                return t.default = e,
                    t
            }
            function p(e) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        }
                        : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                )(e)
            }
            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                    "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                }
            }
            function m(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }
            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }
                )(e)
            }
            function h(e, t) {
                return (h = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t,
                            e
                    }
                )(e, t)
            }
            var y = function(e) {
                function t(e, n) {
                    var r;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        (r = m(this, b(t).call(this)))._config = e,
                        r._options = null,
                        r._signaling = n,
                        r._pc = null,
                        r._internalId = null,
                        r._pendingCandidates = [],
                        r._subscribePromise = null,
                        r._publishPromise = null,
                        r._subscribedStream = null,
                        r._publishedStream = null,
                        r._publication = null,
                        r._subscription = null,
                        r._disconnectTimer = null,
                        r._ended = !1,
                        r._stopped = !1,
                        r
                }
                var n, r, l;
                return function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && h(e, t)
                }(t, o.EventDispatcher),
                    n = t,
                (r = [{
                    key: "onMessage",
                    value: function(e, t) {
                        switch (e) {
                            case "progress":
                                "soac" === t.status ? this._sdpHandler(t.data) : "ready" === t.status ? this._readyHandler() : "error" === t.status && this._errorHandler(t.data);
                                break;
                            case "stream":
                                this._onStreamEvent(t);
                                break;
                            default:
                                i.default.warning("Unknown notification from MCU.")
                        }
                    }
                }, {
                    key: "publish",
                    value: function(e, t) {
                        var n = this;
                        if (void 0 === t && (t = {
                            audio: !!e.mediaStream.getAudioTracks().length,
                            video: !!e.mediaStream.getVideoTracks().length
                        }),
                        "object" !== p(t))
                            return Promise.reject(new TypeError("Options should be an object."));
                        void 0 === t.audio && (t.audio = !!e.mediaStream.getAudioTracks().length),
                        void 0 === t.video && (t.video = !!e.mediaStream.getVideoTracks().length);
                        var r = !!t.audio
                            , a = !!t.video;
                        if (r === (0 == e.mediaStream.getAudioTracks().length) || a === (0 == e.mediaStream.getVideoTracks().length))
                            return Promise.reject(new u.ConferenceError("options.audio/video is inconsistent with tracks presented in the MediaStream."));
                        if (!(!1 !== t.audio && null !== t.audio || !1 !== t.video && null !== t.video))
                            return Promise.reject(new u.ConferenceError("Cannot publish a stream without audio and video."));
                        if ("object" === p(t.audio)) {
                            if (!Array.isArray(t.audio))
                                return Promise.reject(new TypeError("options.audio should be a boolean or an array."));
                            var s = !0
                                , c = !1
                                , d = void 0;
                            try {
                                for (var f, l = t.audio[Symbol.iterator](); !(s = (f = l.next()).done); s = !0) {
                                    var v = f.value;
                                    if (!v.codec || "string" != typeof v.codec.name || void 0 !== v.maxBitrate && "number" != typeof v.maxBitrate)
                                        return Promise.reject(new TypeError("options.audio has incorrect parameters."))
                                }
                            } catch (e) {
                                c = !0,
                                    d = e
                            } finally {
                                try {
                                    s || null == l.return || l.return()
                                } finally {
                                    if (c)
                                        throw d
                                }
                            }
                        }
                        if ("object" === p(t.video)) {
                            if (!Array.isArray(t.video))
                                return Promise.reject(new TypeError("options.video should be a boolean or an array."));
                            var m = !0
                                , b = !1
                                , h = void 0;
                            try {
                                for (var y, g = t.video[Symbol.iterator](); !(m = (y = g.next()).done); m = !0) {
                                    var _ = y.value;
                                    if (!_.codec || "string" != typeof _.codec.name || void 0 !== _.maxBitrate && "number" != typeof _.maxBitrate || void 0 !== _.codec.profile && "string" != typeof _.codec.profile)
                                        return Promise.reject(new TypeError("options.video has incorrect parameters."))
                                }
                            } catch (e) {
                                b = !0,
                                    h = e
                            } finally {
                                try {
                                    m || null == g.return || g.return()
                                } finally {
                                    if (b)
                                        throw h
                                }
                            }
                        }
                        this._options = t;
                        var w = {};
                        if (this._createPeerConnection(),
                        e.mediaStream.getAudioTracks().length > 0 && !1 !== t.audio && null !== t.audio) {
                            if (e.mediaStream.getAudioTracks().length > 1 && i.default.warning("Publishing a stream with multiple audio tracks is not fully supported."),
                            "boolean" != typeof t.audio && "object" !== p(t.audio))
                                return Promise.reject(new u.ConferenceError("Type of audio options should be boolean or an object."));
                            w.audio = {},
                                w.audio.source = e.source.audio;
                            var j = !0
                                , S = !1
                                , O = void 0;
                            try {
                                for (var P, E = e.mediaStream.getAudioTracks()[Symbol.iterator](); !(j = (P = E.next()).done); j = !0) {
                                    var C = P.value;
                                    this._pc.addTrack(C, e.mediaStream)
                                }
                            } catch (e) {
                                S = !0,
                                    O = e
                            } finally {
                                try {
                                    j || null == E.return || E.return()
                                } finally {
                                    if (S)
                                        throw O
                                }
                            }
                        } else
                            w.audio = !1;
                        if (e.mediaStream.getVideoTracks().length > 0 && !1 !== t.video && null !== t.video) {
                            e.mediaStream.getVideoTracks().length > 1 && i.default.warning("Publishing a stream with multiple video tracks is not fully supported."),
                                w.video = {},
                                w.video.source = e.source.video;
                            var k = e.mediaStream.getVideoTracks()[0].getSettings();
                            w.video.parameters = {
                                resolution: {
                                    width: k.width,
                                    height: k.height
                                },
                                framerate: k.frameRate
                            };
                            var x = !0
                                , I = !1
                                , T = void 0;
                            try {
                                for (var M, R = e.mediaStream.getVideoTracks()[Symbol.iterator](); !(x = (M = R.next()).done); x = !0) {
                                    var A = M.value;
                                    this._pc.addTrack(A, e.mediaStream)
                                }
                            } catch (e) {
                                I = !0,
                                    T = e
                            } finally {
                                try {
                                    x || null == R.return || R.return()
                                } finally {
                                    if (I)
                                        throw T
                                }
                            }
                        } else
                            w.video = !1;
                        return this._publishedStream = e,
                            this._signaling.sendSignalingMessage("publish", {
                                media: w,
                                attributes: e.attributes
                            }).then(function(r) {
                                var a, s = new o.MessageEvent("id",{
                                    message: r.id,
                                    origin: n._remoteId
                                });
                                n.dispatchEvent(s),
                                    n._internalId = r.id,
                                "function" == typeof n._pc.addTransceiver && (w.audio && e.mediaStream.getAudioTracks() > 0 && n._pc.addTransceiver("audio", {
                                    direction: "sendonly"
                                }),
                                w.video && e.mediaStream.getVideoTracks() > 0 && n._pc.addTransceiver("video", {
                                    direction: "sendonly"
                                })),
                                    n._pc.createOffer().then(function(e) {
                                        return t && (e.sdp = n._setRtpReceiverOptions(e.sdp, t)),
                                            e
                                    }).then(function(e) {
                                        return a = e,
                                            n._pc.setLocalDescription(e)
                                    }).then(function() {
                                        n._signaling.sendSignalingMessage("soac", {
                                            id: n._internalId,
                                            signaling: a
                                        })
                                    }).catch(function(e) {
                                        i.default.error("Failed to create offer or set SDP. Message: " + e.message),
                                            n._unpublish(),
                                            n._rejectPromise(e),
                                            n._fireEndedEventOnPublicationOrSubscription()
                                    })
                            }).catch(function(e) {
                                n._unpublish(),
                                    n._rejectPromise(e),
                                    n._fireEndedEventOnPublicationOrSubscription()
                            }),
                            new Promise(function(e, t) {
                                    n._publishPromise = {
                                        resolve: e,
                                        reject: t
                                    }
                                }
                            )
                    }
                }, {
                    key: "subscribe",
                    value: function(e, t) {
                        var n = this;
                        if (void 0 === t && (t = {
                            audio: !!e.capabilities.audio,
                            video: !!e.capabilities.video
                        }),
                        "object" !== p(t))
                            return Promise.reject(new TypeError("Options should be an object."));
                        if (void 0 === t.audio && (t.audio = !!e.capabilities.audio),
                        void 0 === t.video && (t.video = !!e.capabilities.video),
                        void 0 !== t.audio && "object" !== p(t.audio) && "boolean" != typeof t.audio && null !== t.audio || void 0 !== t.video && "object" !== p(t.video) && "boolean" != typeof t.video && null !== t.video)
                            return Promise.reject(new TypeError("Invalid options type."));
                        if (t.audio && !e.capabilities.audio || t.video && !e.capabilities.video)
                            return Promise.reject(new u.ConferenceError("options.audio/video cannot be true or an object if there is no audio/video track in remote stream."));
                        if (!1 === t.audio && !1 === t.video)
                            return Promise.reject(new u.ConferenceError("Cannot subscribe a stream without audio and video."));
                        this._options = t;
                        var r = {};
                        if (t.audio) {
                            if ("object" === p(t.audio) && Array.isArray(t.audio.codecs) && 0 === t.audio.codecs.length)
                                return Promise.reject(new TypeError("Audio codec cannot be an empty array."));
                            r.audio = {},
                                r.audio.from = e.id
                        } else
                            r.audio = !1;
                        if (t.video) {
                            if ("object" === p(t.video) && Array.isArray(t.video.codecs) && 0 === t.video.codecs.length)
                                return Promise.reject(new TypeError("Video codec cannot be an empty array."));
                            r.video = {},
                                r.video.from = e.id,
                            (t.video.resolution || t.video.frameRate || t.video.bitrateMultiplier && 1 !== t.video.bitrateMultiplier || t.video.keyFrameInterval) && (r.video.parameters = {
                                resolution: t.video.resolution,
                                framerate: t.video.frameRate,
                                bitrate: t.video.bitrateMultiplier ? "x" + t.video.bitrateMultiplier.toString() : void 0,
                                keyFrameInterval: t.video.keyFrameInterval
                            })
                        } else
                            r.video = !1;
                        return this._subscribedStream = e,
                            this._signaling.sendSignalingMessage("subscribe", {
                                media: r
                            }).then(function(e) {
                                var a = new o.MessageEvent("id",{
                                    message: e.id,
                                    origin: n._remoteId
                                });
                                n.dispatchEvent(a),
                                    n._internalId = e.id,
                                    n._createPeerConnection(),
                                "function" == typeof n._pc.addTransceiver && (r.audio && n._pc.addTransceiver("audio", {
                                    direction: "recvonly"
                                }),
                                r.video && n._pc.addTransceiver("video", {
                                    direction: "recvonly"
                                }));
                                var s = {
                                    offerToReceiveAudio: !!t.audio,
                                    offerToReceiveVideo: !!t.video
                                };
                                n._isSafari() && (s = void 0),
                                    n._pc.createOffer(s).then(function(e) {
                                        t && (e.sdp = n._setRtpReceiverOptions(e.sdp, t)),
                                            n._pc.setLocalDescription(e).then(function() {
                                                n._signaling.sendSignalingMessage("soac", {
                                                    id: n._internalId,
                                                    signaling: e
                                                })
                                            }, function(e) {
                                                i.default.error("Set local description failed. Message: " + JSON.stringify(e))
                                            })
                                    }, function(e) {
                                        i.default.error("Create offer failed. Error info: " + JSON.stringify(e))
                                    }).catch(function(e) {
                                        i.default.error("Failed to create offer or set SDP. Message: " + e.message),
                                            n._unsubscribe(),
                                            n._rejectPromise(e),
                                            n._fireEndedEventOnPublicationOrSubscription()
                                    })
                            }).catch(function(e) {
                                n._unsubscribe(),
                                    n._rejectPromise(e),
                                    n._fireEndedEventOnPublicationOrSubscription()
                            }),
                            new Promise(function(e, t) {
                                    n._subscribePromise = {
                                        resolve: e,
                                        reject: t
                                    }
                                }
                            )
                    }
                }, {
                    key: "_unpublish",
                    value: function() {
                        this._stopped || (this._stopped = !0,
                            this._signaling.sendSignalingMessage("unpublish", {
                                id: this._internalId
                            }).catch(function(e) {
                                i.default.warning("MCU returns negative ack for unpublishing, " + e)
                            }),
                        this._pc && "closed" !== this._pc.signalingState && this._pc.close())
                    }
                }, {
                    key: "_unsubscribe",
                    value: function() {
                        this._stopped || (this._stopped = !0,
                            this._signaling.sendSignalingMessage("unsubscribe", {
                                id: this._internalId
                            }).catch(function(e) {
                                i.default.warning("MCU returns negative ack for unsubscribing, " + e)
                            }),
                        this._pc && "closed" !== this._pc.signalingState && this._pc.close())
                    }
                }, {
                    key: "_muteOrUnmute",
                    value: function(e, t, n) {
                        var r = this
                            , i = t ? "stream-control" : "subscription-control"
                            , a = e ? "pause" : "play";
                        return this._signaling.sendSignalingMessage(i, {
                            id: this._internalId,
                            operation: a,
                            data: n
                        }).then(function() {
                            if (!t) {
                                var i = e ? "mute" : "unmute";
                                r._subscription.dispatchEvent(new o.MuteEvent(i,{
                                    kind: n
                                }))
                            }
                        })
                    }
                }, {
                    key: "_applyOptions",
                    value: function(e) {
                        if ("object" !== p(e) || "object" !== p(e.video))
                            return Promise.reject(new u.ConferenceError("Options should be an object."));
                        var t = {};
                        return t.resolution = e.video.resolution,
                            t.framerate = e.video.frameRate,
                            t.bitrate = e.video.bitrateMultiplier ? "x" + e.video.bitrateMultiplier.toString() : void 0,
                            t.keyFrameInterval = e.video.keyFrameInterval,
                            this._signaling.sendSignalingMessage("subscription-control", {
                                id: this._internalId,
                                operation: "update",
                                data: {
                                    video: {
                                        parameters: t
                                    }
                                }
                            }).then()
                    }
                }, {
                    key: "_onRemoteStreamAdded",
                    value: function(e) {
                        i.default.debug("Remote stream added."),
                            this._subscribedStream ? this._subscribedStream.mediaStream = e.streams[0] : i.default.warning("Received remote stream without subscription.")
                    }
                }, {
                    key: "_onLocalIceCandidate",
                    value: function(e) {
                        e.candidate ? "stable" !== this._pc.signalingState ? this._pendingCandidates.push(e.candidate) : this._sendCandidate(e.candidate) : i.default.debug("Empty candidate.")
                    }
                }, {
                    key: "_fireEndedEventOnPublicationOrSubscription",
                    value: function() {
                        if (!this._ended) {
                            this._ended = !0;
                            var e = new o.IRtcEvent("ended");
                            this._publication ? (this._publication.dispatchEvent(e),
                                this._publication.stop()) : this._subscription && (this._subscription.dispatchEvent(e),
                                this._subscription.stop())
                        }
                    }
                }, {
                    key: "_rejectPromise",
                    value: function(e) {
                        if (!e)
                            new u.ConferenceError("Connection failed or closed.");
                        this._publishPromise ? (this._publishPromise.reject(e),
                            this._publishPromise = void 0) : this._subscribePromise && (this._subscribePromise.reject(e),
                            this._subscribePromise = void 0)
                    }
                }, {
                    key: "_onIceConnectionStateChange",
                    value: function(e) {
                        e && e.currentTarget && (i.default.debug("ICE connection state changed to " + e.currentTarget.iceConnectionState),
                        "closed" !== e.currentTarget.iceConnectionState && "failed" !== e.currentTarget.iceConnectionState || this._fireEndedEventOnPublicationOrSubscription())
                    }
                }, {
                    key: "_onConnectionStateChange",
                    value: function(e) {
                        "closed" !== this._pc.connectionState && "failed" !== this._pc.connectionState || this._fireEndedEventOnPublicationOrSubscription()
                    }
                }, {
                    key: "_sendCandidate",
                    value: function(e) {
                        this._signaling.sendSignalingMessage("soac", {
                            id: this._internalId,
                            signaling: {
                                type: "candidate",
                                candidate: {
                                    candidate: "a=" + e.candidate,
                                    sdpMid: e.sdpMid,
                                    sdpMLineIndex: e.sdpMLineIndex
                                }
                            }
                        })
                    }
                }, {
                    key: "_createPeerConnection",
                    value: function() {
                        var e = this
                            , t = this._config.rtcConfiguration || {}
                            , n = this._config.rtcConfigurationExtra;
                        d.isChrome() && (t.sdpSemantics = "unified-plan"),
                            this._pc = new RTCPeerConnection(t,n),
                            this._pc.onicecandidate = function(t) {
                                e._onLocalIceCandidate.apply(e, [t])
                            }
                            ,
                            this._pc.ontrack = function(t) {
                                e._onRemoteStreamAdded.apply(e, [t])
                            }
                            ,
                            this._pc.oniceconnectionstatechange = function(t) {
                                e._onIceConnectionStateChange.apply(e, [t])
                            }
                            ,
                            this._pc.onconnectionstatechange = function(t) {
                                e._onConnectionStateChange.apply(e, [t])
                            }
                    }
                }, {
                    key: "_getStats",
                    value: function() {
                        return this._pc ? this._pc.getStats() : Promise.reject(new u.ConferenceError("PeerConnection is not available."))
                    }
                }, {
                    key: "_getPCSenders",
                    value: function() {
                        return this._pc ? this._pc.getSenders() : null
                    }
                }, {
                    key: "_readyHandler",
                    value: function() {
                        var e = this;
                        this._subscribePromise ? (this._subscription = new c.Subscription(this._internalId,function() {
                                e._unsubscribe()
                            }
                            ,function() {
                                return e._getStats()
                            }
                            ,function(t) {
                                return e._muteOrUnmute(!0, !1, t)
                            }
                            ,function(t) {
                                return e._muteOrUnmute(!1, !1, t)
                            }
                            ,function(t) {
                                return e._applyOptions(t)
                            }
                        ),
                            this._subscribedStream.addEventListener("ended", function() {
                                e._subscription.dispatchEvent("ended", new o.IRtcEvent("ended"))
                            }),
                            this._subscribePromise.resolve(this._subscription)) : this._publishPromise && (this._publication = new s.Publication(this._internalId,function() {
                                return e._unpublish(),
                                    Promise.resolve()
                            }
                            ,function() {
                                return e._getStats()
                            }
                            ,function() {
                                return e._getPCSenders()
                            }
                            ,function(t) {
                                return e._muteOrUnmute(!0, !0, t)
                            }
                            ,function(t) {
                                return e._muteOrUnmute(!1, !0, t)
                            }
                        ),
                            this._publishPromise.resolve(this._publication)),
                            this._publishPromise = null,
                            this._subscribePromise = null
                    }
                }, {
                    key: "_sdpHandler",
                    value: function(e) {
                        var t = this;
                        "answer" === e.type && ((this._publication || this._publishPromise) && this._options && (e.sdp = this._setRtpSenderOptions(e.sdp, this._options)),
                            this._pc.setRemoteDescription(e).then(function() {
                                if (t._pendingCandidates.length > 0) {
                                    var e = !0
                                        , n = !1
                                        , r = void 0;
                                    try {
                                        for (var i, o = t._pendingCandidates[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
                                            var a = i.value;
                                            t._sendCandidate(a)
                                        }
                                    } catch (e) {
                                        n = !0,
                                            r = e
                                    } finally {
                                        try {
                                            e || null == o.return || o.return()
                                        } finally {
                                            if (n)
                                                throw r
                                        }
                                    }
                                }
                            }, function(e) {
                                i.default.error("Set remote description failed: " + e),
                                    t._rejectPromise(e),
                                    t._fireEndedEventOnPublicationOrSubscription()
                            }))
                    }
                }, {
                    key: "_errorHandler",
                    value: function(e) {
                        var t = this._publishPromise || this._subscribePromise;
                        if (t)
                            t.reject(new u.ConferenceError(e));
                        else {
                            var n = this._publication || this._subscription;
                            if (n) {
                                var r = new u.ConferenceError(e)
                                    , a = new o.ErrorEvent("error",{
                                    error: r
                                });
                                n.dispatchEvent(a),
                                    this._fireEndedEventOnPublicationOrSubscription()
                            } else
                                i.default.warning("Neither publication nor subscription is available.")
                        }
                    }
                }, {
                    key: "_setCodecOrder",
                    value: function(e, t) {
                        if (this._publication || this._publishPromise) {
                            if (t.audio) {
                                var n = Array.from(t.audio, function(e) {
                                    return e.codec.name
                                });
                                e = f.reorderCodecs(e, "audio", n)
                            }
                            if (t.video) {
                                var r = Array.from(t.video, function(e) {
                                    return e.codec.name
                                });
                                e = f.reorderCodecs(e, "video", r)
                            }
                        } else {
                            if (t.audio && t.audio.codecs) {
                                var i = Array.from(t.audio.codecs, function(e) {
                                    return e.name
                                });
                                e = f.reorderCodecs(e, "audio", i)
                            }
                            if (t.video && t.video.codecs) {
                                var o = Array.from(t.video.codecs, function(e) {
                                    return e.name
                                });
                                e = f.reorderCodecs(e, "video", o)
                            }
                        }
                        return e
                    }
                }, {
                    key: "_setMaxBitrate",
                    value: function(e, t) {
                        return "object" === p(t.audio) && (e = f.setMaxBitrate(e, t.audio)),
                        "object" === p(t.video) && (e = f.setMaxBitrate(e, t.video)),
                            e
                    }
                }, {
                    key: "_setRtpSenderOptions",
                    value: function(e, t) {
                        return e = this._setMaxBitrate(e, t)
                    }
                }, {
                    key: "_setRtpReceiverOptions",
                    value: function(e, t) {
                        return e = this._setCodecOrder(e, t)
                    }
                }, {
                    key: "_onStreamEvent",
                    value: function(e) {
                        var t, n;
                        (this._publication && e.id === this._publication.id ? t = this._publication : this._subscribedStream && e.id === this._subscribedStream.id && (t = this._subscription),
                            t) && ("audio.status" === e.data.field ? n = a.TrackKind.AUDIO : "video.status" === e.data.field ? n = a.TrackKind.VIDEO : i.default.warning("Invalid data field for stream update info."),
                            "active" === e.data.value ? t.dispatchEvent(new o.MuteEvent("unmute",{
                                kind: n
                            })) : "inactive" === e.data.value ? t.dispatchEvent(new o.MuteEvent("mute",{
                                kind: n
                            })) : i.default.warning("Invalid data value for stream update info."))
                    }
                }, {
                    key: "_isSafari",
                    value: function() {
                        return "Safari" === d.sysInfo().runtime.name
                    }
                }]) && v(n.prototype, r),
                l && v(n, l),
                    t
            }();
            n.ConferencePeerConnectionChannel = y
        }
            , {
                "../base/event.js": 3,
                "../base/logger.js": 5,
                "../base/mediaformat.js": 6,
                "../base/publication.js": 8,
                "../base/sdputils.js": 9,
                "../base/utils.js": 11,
                "./error.js": 14,
                "./subscription.js": 21
            }],
        13: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.ConferenceClient = void 0;
            var r, i = b(e("../base/event.js")), o = e("./signaling.js"), a = (r = e("../base/logger.js")) && r.__esModule ? r : {
                default: r
            }, s = e("../base/base64.js"), c = e("./error.js"), u = b(e("../base/utils.js")), d = b(e("../base/stream.js")), f = e("./participant.js"), l = e("./info.js"), p = e("./channel.js"), v = e("./mixedstream.js"), m = b(e("./streamutils.js"));
            function b(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                return t.default = e,
                    t
            }
            var h = 1
                , y = 2
                , g = 3
                , _ = function(e, t) {
                var n = new i.IRtcEvent(e,t);
                return n.participant = t.participant,
                    n
            };
            n.ConferenceClient = function(e, t) {
                Object.setPrototypeOf(this, new i.EventDispatcher),
                    e = e || {};
                var n, r, b = this, w = h, j = t || new o.SioSignaling, S = new Map, O = new Map, P = new Map, E = new Map;
                function C(e, t) {
                    if ("soac" === e || "progress" === e) {
                        if (!E.has(t.id))
                            return void a.default.warning("Cannot find a channel for incoming data.");
                        E.get(t.id).onMessage(e, t)
                    } else
                        "stream" === e ? "add" === t.status ? function(e) {
                            var t = k(e);
                            S.set(t.id, t);
                            var n = new d.StreamEvent("streamadded",{
                                stream: t
                            });
                            b.dispatchEvent(n)
                        }(t.data) : "remove" === t.status ? function(e) {
                            if (S.has(e.id)) {
                                var t = S.get(e.id)
                                    , n = new i.IRtcEvent("ended");
                                S.delete(t.id),
                                    t.dispatchEvent(n)
                            } else
                                a.default.warning("Cannot find specific remote stream.")
                        }(t) : "update" === t.status && ("audio.status" === t.data.field || "video.status" === t.data.field ? E.forEach(function(n) {
                            n.onMessage(e, t)
                        }) : "activeInput" === t.data.field ? function(e) {
                            if (S.has(e.id)) {
                                var t = S.get(e.id)
                                    , n = new v.ActiveAudioInputChangeEvent("activeaudioinputchange",{
                                    activeAudioInputStreamId: e.data.value
                                });
                                t.dispatchEvent(n)
                            } else
                                a.default.warning("Cannot find specific remote stream.")
                        }(t) : "video.layout" === t.data.field ? function(e) {
                            if (S.has(e.id)) {
                                var t = S.get(e.id)
                                    , n = new v.LayoutChangeEvent("layoutchange",{
                                    layout: e.data.value
                                });
                                t.dispatchEvent(n)
                            } else
                                a.default.warning("Cannot find specific remote stream.")
                        }(t) : "." === t.data.field ? function(e) {
                            if (S.has(e.id)) {
                                var t = S.get(e.id);
                                t.settings = m.convertToPublicationSettings(e.media),
                                    t.capabilities = m.convertToSubscriptionCapabilities(e.media);
                                var n = new i.IRtcEvent("updated");
                                t.dispatchEvent(n)
                            } else
                                a.default.warning("Cannot find specific remote stream.")
                        }(t.data.value) : a.default.warning("Unknown stream event from MCU.")) : "text" === e ? function(e) {
                            var t = new i.MessageEvent("messagereceived",{
                                message: e.message,
                                origin: e.from,
                                to: e.to
                            });
                            b.dispatchEvent(t)
                        }(t) : "participant" === e && function(e) {
                            if ("join" === e.action) {
                                e = e.data;
                                var t = new f.Participant(e.id,e.role,e.user);
                                O.set(e.id, t);
                                var n = new _("participantjoined",{
                                    participant: t
                                });
                                b.dispatchEvent(n)
                            } else if ("leave" === e.action) {
                                var r = e.data;
                                if (!O.has(r))
                                    return void a.default.warning("Received leave message from MCU for an unknown participant.");
                                var o = O.get(r);
                                O.delete(r),
                                    o.dispatchEvent(new i.IRtcEvent("left"))
                            }
                        }(t)
                }
                function k(e) {
                    if ("mixed" === e.type)
                        return new v.RemoteMixedStream(e);
                    var t = {
                        source: void 0,
                        status: void 0
                    }
                        , n = {
                        source: void 0,
                        status: void 0
                    };
                    e.media.audio && (t = {
                        source: e.media.audio.source,
                        status: e.media.audio.status
                    }),
                    e.media.video && (n = {
                        source: e.media.video.source,
                        status: e.media.video.status
                    });
                    var r = new d.RemoteStream(e.id,e.info.owner,void 0,new d.StreamSourceInfo(t,n),e.info.attributes);
                    return r.settings = m.convertToPublicationSettings(e.media),
                        r.capabilities = m.convertToSubscriptionCapabilities(e.media),
                        r
                }
                function x(e, t) {
                    return j.send(e, t)
                }
                function I() {
                    var t = Object.create(i.EventDispatcher);
                    t.sendSignalingMessage = x;
                    var n = new p.ConferencePeerConnectionChannel(e,t);
                    return n.addEventListener("id", function(e) {
                        E.set(e.message, n)
                    }),
                        n
                }
                function T() {
                    O.clear(),
                        S.clear()
                }
                j.addEventListener("data", function(e) {
                    C(e.message.notification, e.message.data)
                }),
                    j.addEventListener("disconnect", function() {
                        T(),
                            w = h,
                            b.dispatchEvent(new i.IRtcEvent("serverdisconnected"))
                    }),
                    Object.defineProperty(this, "info", {
                        configurable: !1,
                        get: function() {
                            return r ? new l.ConferenceInfo(r.id,Array.from(O, function(e) {
                                return e[1]
                            }),Array.from(S, function(e) {
                                return e[1]
                            }),n) : null
                        }
                    }),
                    this.join = function(t) {
                        return new Promise(function(i, o) {
                                var a = JSON.parse(s.Base64.decodeBase64(t))
                                    , d = !0 === a.secure
                                    , p = a.host;
                                if ("string" == typeof p)
                                    if (-1 === p.indexOf("http") && (p = d ? "https://" + p : "http://" + p),
                                    w === h) {
                                        w = y;
                                        var v = {
                                            token: t,
                                            userAgent: u.sysInfo(),
                                            protocol: "1.0"
                                        };
                                        j.connect(p, d, v, e.forwardingMarker).then(function(e) {
                                            if (w = g,
                                            void 0 !== (r = e.room).streams) {
                                                var t = !0
                                                    , o = !1
                                                    , a = void 0;
                                                try {
                                                    for (var s, c = r.streams[Symbol.iterator](); !(t = (s = c.next()).done); t = !0) {
                                                        var u = s.value;
                                                        "mixed" === u.type && (u.viewport = u.info.label),
                                                            S.set(u.id, k(u))
                                                    }
                                                } catch (e) {
                                                    o = !0,
                                                        a = e
                                                } finally {
                                                    try {
                                                        t || null == c.return || c.return()
                                                    } finally {
                                                        if (o)
                                                            throw a
                                                    }
                                                }
                                            }
                                            if (e.room && void 0 !== e.room.participants) {
                                                var d = !0
                                                    , p = !1
                                                    , v = void 0;
                                                try {
                                                    for (var m, b = e.room.participants[Symbol.iterator](); !(d = (m = b.next()).done); d = !0) {
                                                        var h = m.value;
                                                        O.set(h.id, new f.Participant(h.id,h.role,h.user)),
                                                        h.id === e.id && (n = O.get(h.id))
                                                    }
                                                } catch (e) {
                                                    p = !0,
                                                        v = e
                                                } finally {
                                                    try {
                                                        d || null == b.return || b.return()
                                                    } finally {
                                                        if (p)
                                                            throw v
                                                    }
                                                }
                                            }
                                            i(new l.ConferenceInfo(e.room.id,Array.from(O.values()),Array.from(S.values()),n))
                                        }, function(e) {
                                            w = h,
                                                o(new c.ConferenceError(e))
                                        })
                                    } else
                                        o(new c.ConferenceError("connection state invalid"));
                                else
                                    o(new c.ConferenceError("Invalid host."))
                            }
                        )
                    }
                    ,
                    this.publish = function(e, t) {
                        return e instanceof d.LocalStream ? P.has(e.mediaStream.id) ? Promise.reject(new c.ConferenceError("Cannot publish a published stream.")) : I().publish(e, t) : Promise.reject(new c.ConferenceError("Invalid stream."))
                    }
                    ,
                    this.subscribe = function(e, t) {
                        return e instanceof d.RemoteStream ? I().subscribe(e, t) : Promise.reject(new c.ConferenceError("Invalid stream."))
                    }
                    ,
                    this.send = function(e, t) {
                        return void 0 === t && (t = "all"),
                            x("text", {
                                to: t,
                                message: e
                            })
                    }
                    ,
                    this.leave = function() {
                        return j.disconnect().then(function() {
                            T(),
                                w = h
                        })
                    }
            }
        }
            , {
                "../base/base64.js": 1,
                "../base/event.js": 3,
                "../base/logger.js": 5,
                "../base/stream.js": 10,
                "../base/utils.js": 11,
                "./channel.js": 12,
                "./error.js": 14,
                "./info.js": 16,
                "./mixedstream.js": 17,
                "./participant.js": 18,
                "./signaling.js": 19,
                "./streamutils.js": 20
            }],
        14: [function(e, t, n) {
            "use strict";
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        }
                        : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                )(e)
            }
            function i(e, t) {
                return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }
            function o(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (o = function(e) {
                        if (null === e || (n = e,
                        -1 === Function.toString.call(n).indexOf("[native code]")))
                            return e;
                        var n;
                        if ("function" != typeof e)
                            throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e))
                                return t.get(e);
                            t.set(e, r)
                        }
                        function r() {
                            return a(e, arguments, c(this).constructor)
                        }
                        return r.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: r,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                            s(r, e)
                    }
                )(e)
            }
            function a(e, t, n) {
                return (a = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                                !0
                        } catch (e) {
                            return !1
                        }
                    }() ? Reflect.construct : function(e, t, n) {
                        var r = [null];
                        r.push.apply(r, t);
                        var i = new (Function.bind.apply(e, r));
                        return n && s(i, n.prototype),
                            i
                    }
                ).apply(null, arguments)
            }
            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t,
                            e
                    }
                )(e, t)
            }
            function c(e) {
                return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }
                )(e)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.ConferenceError = void 0;
            var u = function(e) {
                function t(e) {
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        i(this, c(t).call(this, e))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && s(e, t)
                }(t, o(Error)),
                    t
            }();
            n.ConferenceError = u
        }
            , {}],
        15: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                Object.defineProperty(n, "ConferenceClient", {
                    enumerable: !0,
                    get: function() {
                        return r.ConferenceClient
                    }
                }),
                Object.defineProperty(n, "SioSignaling", {
                    enumerable: !0,
                    get: function() {
                        return i.SioSignaling
                    }
                });
            var r = e("./client.js")
                , i = e("./signaling.js")
        }
            , {
                "./client.js": 13,
                "./signaling.js": 19
            }],
        16: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.ConferenceInfo = void 0;
            n.ConferenceInfo = function e(t, n, r, i) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                    this.id = t,
                    this.participants = n,
                    this.remoteStreams = r,
                    this.self = i
            }
        }
            , {}],
        17: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.LayoutChangeEvent = n.ActiveAudioInputChangeEvent = n.RemoteMixedStream = void 0;
            var r = a(e("../base/stream.js"))
                , i = a(e("./streamutils.js"))
                , o = e("../base/event.js");
            function a(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                return t.default = e,
                    t
            }
            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        }
                        : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                )(e)
            }
            function c(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function u(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }
            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }
                )(e)
            }
            function f(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && l(e, t)
            }
            function l(e, t) {
                return (l = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t,
                            e
                    }
                )(e, t)
            }
            var p = function(e) {
                function t(e) {
                    var n;
                    if (c(this, t),
                    "mixed" !== e.type)
                        throw new TypeError("Not a mixed stream");
                    return (n = u(this, d(t).call(this, e.id, void 0, void 0, new r.StreamSourceInfo("mixed","mixed")))).settings = i.convertToPublicationSettings(e.media),
                        n.capabilities = new i.convertToSubscriptionCapabilities(e.media),
                        n
                }
                return f(t, r.RemoteStream),
                    t
            }();
            n.RemoteMixedStream = p;
            var v = function(e) {
                function t(e, n) {
                    var r;
                    return c(this, t),
                        (r = u(this, d(t).call(this, e))).activeAudioInputStreamId = n.activeAudioInputStreamId,
                        r
                }
                return f(t, o.IRtcEvent),
                    t
            }();
            n.ActiveAudioInputChangeEvent = v;
            var m = function(e) {
                function t(e, n) {
                    var r;
                    return c(this, t),
                        (r = u(this, d(t).call(this, e))).layout = n.layout,
                        r
                }
                return f(t, o.IRtcEvent),
                    t
            }();
            n.LayoutChangeEvent = m
        }
            , {
                "../base/event.js": 3,
                "../base/stream.js": 10,
                "./streamutils.js": 20
            }],
        18: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.Participant = void 0;
            var r = function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                return t.default = e,
                    t
            }(e("../base/event.js"));
            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        }
                        : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                )(e)
            }
            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }
                )(e)
            }
            function a(e, t) {
                return (a = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t,
                            e
                    }
                )(e, t)
            }
            function s(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            var c = function(e) {
                function t(e, n, r) {
                    var a, c, u;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        c = this,
                        a = !(u = o(t).call(this)) || "object" !== i(u) && "function" != typeof u ? s(c) : u,
                        Object.defineProperty(s(s(a)), "id", {
                            configurable: !1,
                            writable: !1,
                            value: e
                        }),
                        Object.defineProperty(s(s(a)), "role", {
                            configurable: !1,
                            writable: !1,
                            value: n
                        }),
                        Object.defineProperty(s(s(a)), "userId", {
                            configurable: !1,
                            writable: !1,
                            value: r
                        }),
                        a
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && a(e, t)
                }(t, r.EventDispatcher),
                    t
            }();
            n.Participant = c
        }
            , {
                "../base/event.js": 3
            }],
        19: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.SioSignaling = void 0;
            var r, i = (r = e("../base/logger.js")) && r.__esModule ? r : {
                default: r
            }, o = function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                return t.default = e,
                    t
            }(e("../base/event.js")), a = e("./error.js"), s = e("../base/base64.js");
            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        }
                        : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                )(e)
            }
            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                    "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                }
            }
            function d(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }
            function f(e) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }
                )(e)
            }
            function l(e, t) {
                return (l = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t,
                            e
                    }
                )(e, t)
            }
            function p(e, t, n, r) {
                "ok" === e || "success" === e ? n(t) : "error" === e ? r(t) : i.default.error("MCU returns unknown ack.")
            }
            var v = function(e) {
                function t() {
                    var e;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        (e = d(this, f(t).call(this)))._socket = null,
                        e._loggedIn = !1,
                        e._reconnectTimes = 0,
                        e._reconnectionTicket = null,
                        e._refreshReconnectionTicket = null,
                        e
                }
                var n, r, c;
                return function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && l(e, t)
                }(t, o.EventDispatcher),
                    n = t,
                (r = [{
                    key: "connect",
                    value: function(e, t, n, r) {
                        var i = this;
                        return new Promise(function(t, a) {
                                var s = {
                                    reconnection: !0,
                                    reconnectionAttempts: 10,
                                    "force new connection": !0,
                                    transports: ["polling", "websocket"]
                                };
                                void 0 !== r && null != r && "" !== r && (s.query = {
                                    forwardingMarker: r
                                }),
                                    i._socket = io(e, s),
                                    ["participant", "text", "stream", "progress"].forEach(function(e) {
                                        i._socket.on(e, function(t) {
                                            i.dispatchEvent(new o.MessageEvent("data",{
                                                message: {
                                                    notification: e,
                                                    data: t
                                                }
                                            }))
                                        })
                                    }),
                                    i._socket.on("reconnecting", function() {
                                        i._reconnectTimes++
                                    }),
                                    i._socket.on("reconnect_failed", function() {
                                        i._reconnectTimes >= 10 && i.dispatchEvent(new o.IRtcEvent("disconnect"))
                                    }),
                                    i._socket.on("connect_error", function(t) {
                                        a("connect_error:".concat(e))
                                    }),
                                    i._socket.on("drop", function() {
                                        i._reconnectTimes = 10
                                    }),
                                    i._socket.on("disconnect", function() {
                                        i._clearReconnectionTask(),
                                        i._reconnectTimes >= 10 && (i._loggedIn = !1,
                                            i.dispatchEvent(new o.IRtcEvent("disconnect")))
                                    }),
                                    i._socket.emit("login", n, function(e, n) {
                                        "ok" === e && (i._loggedIn = !0,
                                            i._onReconnectionTicket(n.reconnectionTicket),
                                            i._socket.on("connect", function() {
                                                i._socket.emit("relogin", i._reconnectionTicket, function(e, t) {
                                                    "ok" === e ? (i._reconnectTimes = 0,
                                                        i._onReconnectionTicket(t)) : i.dispatchEvent(new o.IRtcEvent("disconnect"))
                                                })
                                            })),
                                            p(e, n, t, a)
                                    })
                            }
                        )
                    }
                }, {
                    key: "disconnect",
                    value: function() {
                        var e = this;
                        return !this._socket || this._socket.disconnected ? Promise.reject(new a.ConferenceError("Portal is not connected.")) : new Promise(function(t, n) {
                                e._socket.emit("logout", function(r, i) {
                                    e._reconnectTimes = 10,
                                        e._socket.disconnect(),
                                        p(r, i, t, n)
                                })
                            }
                        )
                    }
                }, {
                    key: "send",
                    value: function(e, t) {
                        var n = this;
                        return new Promise(function(r, i) {
                                n._socket.emit(e, t, function(e, t) {
                                    p(e, t, r, i)
                                })
                            }
                        )
                    }
                }, {
                    key: "_onReconnectionTicket",
                    value: function(e) {
                        var t = this;
                        this._reconnectionTicket = e;
                        var n = JSON.parse(s.Base64.decodeBase64(e))
                            , r = Date.now();
                        if (n.notAfter <= r - 1e4)
                            i.default.warning("Reconnection ticket expires too soon.");
                        else {
                            var o = n.notAfter - r - 6e4;
                            o < 0 && (o = n.notAfter - r - 1e4),
                                this._clearReconnectionTask(),
                                this._refreshReconnectionTicket = setTimeout(function() {
                                    t._socket.emit("refreshReconnectionTicket", function(e, n) {
                                        "ok" === e ? t._onReconnectionTicket(n) : i.default.warning("Failed to refresh reconnection ticket.")
                                    })
                                }, o)
                        }
                    }
                }, {
                    key: "_clearReconnectionTask",
                    value: function() {
                        clearTimeout(this._refreshReconnectionTicket),
                            this._refreshReconnectionTicket = null
                    }
                }]) && u(n.prototype, r),
                c && u(n, c),
                    t
            }();
            n.SioSignaling = v
        }
            , {
                "../base/base64.js": 1,
                "../base/event.js": 3,
                "../base/logger.js": 5,
                "./error.js": 14
            }],
        20: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.convertToPublicationSettings = function(e) {
                    var t, n, a, s, c, u, d, f;
                    e.audio && (e.audio.format && (n = new o.AudioCodecParameters(e.audio.format.codec,e.audio.format.channelNum,e.audio.format.sampleRate)),
                        t = new r.AudioPublicationSettings(n));
                    e.video && (e.video.format && (s = new o.VideoCodecParameters(e.video.format.codec,e.video.format.profile)),
                    e.video.parameters && (e.video.parameters.resolution && (c = new i.Resolution(e.video.parameters.resolution.width,e.video.parameters.resolution.height)),
                        u = e.video.parameters.framerate,
                        d = 1e3 * e.video.parameters.bitrate,
                        f = e.video.parameters.keyFrameInterval),
                        a = new r.VideoPublicationSettings(s,c,u,d,f));
                    return new r.PublicationSettings(t,a)
                }
                ,
                n.convertToSubscriptionCapabilities = function(e) {
                    var t, n;
                    if (e.audio) {
                        var r = [];
                        if (e.audio && e.audio.format && r.push(new o.AudioCodecParameters(e.audio.format.codec,e.audio.format.channelNum,e.audio.format.sampleRate)),
                        e.audio && e.audio.optional && e.audio.optional.format) {
                            var s = !0
                                , d = !1
                                , f = void 0;
                            try {
                                for (var l, p = e.audio.optional.format[Symbol.iterator](); !(s = (l = p.next()).done); s = !0) {
                                    var v = l.value
                                        , m = new o.AudioCodecParameters(v.codec,v.channelNum,v.sampleRate);
                                    r.push(m)
                                }
                            } catch (e) {
                                d = !0,
                                    f = e
                            } finally {
                                try {
                                    s || null == p.return || p.return()
                                } finally {
                                    if (d)
                                        throw f
                                }
                            }
                        }
                        r.sort(),
                            t = new a.AudioSubscriptionCapabilities(r)
                    }
                    if (e.video) {
                        var b = [];
                        if (e.video && e.video.format && b.push(new o.VideoCodecParameters(e.video.format.codec,e.video.format.profile)),
                        e.video && e.video.optional && e.video.optional.format) {
                            var h = !0
                                , y = !1
                                , g = void 0;
                            try {
                                for (var _, w = e.video.optional.format[Symbol.iterator](); !(h = (_ = w.next()).done); h = !0) {
                                    var j = _.value
                                        , S = new o.VideoCodecParameters(j.codec,j.profile);
                                    b.push(S)
                                }
                            } catch (e) {
                                y = !0,
                                    g = e
                            } finally {
                                try {
                                    h || null == w.return || w.return()
                                } finally {
                                    if (y)
                                        throw g
                                }
                            }
                        }
                        b.sort();
                        var O = Array.from(e.video.optional.parameters.resolution, function(e) {
                            return new i.Resolution(e.width,e.height)
                        });
                        e.video && e.video.parameters && e.video.parameters.resolution && O.push(new i.Resolution(e.video.parameters.resolution.width,e.video.parameters.resolution.height)),
                            O.sort(u);
                        var P = Array.from(e.video.optional.parameters.bitrate, function(e) {
                            return function(e) {
                                if ("string" != typeof e || !e.startsWith("x"))
                                    return L.Logger.warning("Invalid bitrate multiplier input."),
                                        0;
                                return Number.parseFloat(e.replace(/^x/, ""))
                            }(e)
                        });
                        P.push(1),
                            P.sort(c);
                        var E = JSON.parse(JSON.stringify(e.video.optional.parameters.framerate));
                        e.video && e.video.parameters && e.video.parameters.framerate && E.push(e.video.parameters.framerate),
                            E.sort(c);
                        var C = JSON.parse(JSON.stringify(e.video.optional.parameters.keyFrameInterval));
                        e.video && e.video.parameters && e.video.parameters.keyFrameInterval && C.push(e.video.parameters.keyFrameInterval),
                            C.sort(c),
                            n = new a.VideoSubscriptionCapabilities(b,O,E,P,C)
                    }
                    return new a.SubscriptionCapabilities(t,n)
                }
            ;
            var r = s(e("../base/publication.js"))
                , i = s(e("../base/mediaformat.js"))
                , o = s(e("../base/codec.js"))
                , a = s(e("./subscription.js"));
            function s(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                return t.default = e,
                    t
            }
            function c(e, t) {
                return e - t
            }
            function u(e, t) {
                return e.width !== t.width ? e.width - t.width : e.height - t.height
            }
        }
            , {
                "../base/codec.js": 2,
                "../base/mediaformat.js": 6,
                "../base/publication.js": 8,
                "./subscription.js": 21
            }],
        21: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.Subscription = n.SubscriptionUpdateOptions = n.VideoSubscriptionUpdateOptions = n.SubscribeOptions = n.VideoSubscriptionConstraints = n.AudioSubscriptionConstraints = n.SubscriptionCapabilities = n.VideoSubscriptionCapabilities = n.AudioSubscriptionCapabilities = void 0;
            i(e("../base/mediaformat.js")),
                i(e("../base/codec.js"));
            var r = e("../base/event.js");
            function i(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                return t.default = e,
                    t
            }
            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        }
                        : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                )(e)
            }
            function a(e) {
                return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }
                )(e)
            }
            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t,
                            e
                    }
                )(e, t)
            }
            function c(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function u(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            n.AudioSubscriptionCapabilities = function e(t) {
                u(this, e),
                    this.codecs = t
            }
            ;
            n.VideoSubscriptionCapabilities = function e(t, n, r, i, o) {
                u(this, e),
                    this.codecs = t,
                    this.resolutions = n,
                    this.frameRates = r,
                    this.bitrateMultipliers = i,
                    this.keyFrameIntervals = o
            }
            ;
            n.SubscriptionCapabilities = function e(t, n) {
                u(this, e),
                    this.audio = t,
                    this.video = n
            }
            ;
            n.AudioSubscriptionConstraints = function e(t) {
                u(this, e),
                    this.codecs = t
            }
            ;
            n.VideoSubscriptionConstraints = function e(t, n, r, i, o) {
                u(this, e),
                    this.codecs = t,
                    this.resolution = n,
                    this.frameRate = r,
                    this.bitrateMultiplier = i,
                    this.keyFrameInterval = o
            }
            ;
            n.SubscribeOptions = function e(t, n) {
                u(this, e),
                    this.audio = t,
                    this.video = n
            }
            ;
            n.VideoSubscriptionUpdateOptions = function e() {
                u(this, e),
                    this.resolution = void 0,
                    this.frameRate = void 0,
                    this.bitrateMultipliers = void 0,
                    this.keyFrameInterval = void 0
            }
            ;
            n.SubscriptionUpdateOptions = function e() {
                u(this, e),
                    this.video = void 0
            }
            ;
            var d = function(e) {
                function t(e, n, r, i, s, d) {
                    var f, l, p;
                    if (u(this, t),
                        l = this,
                        f = !(p = a(t).call(this)) || "object" !== o(p) && "function" != typeof p ? c(l) : p,
                        !e)
                        throw new TypeError("ID cannot be null or undefined.");
                    return Object.defineProperty(c(c(f)), "id", {
                        configurable: !1,
                        writable: !1,
                        value: e
                    }),
                        f.stop = n,
                        f.getStats = r,
                        f.mute = i,
                        f.unmute = s,
                        f.applyOptions = d,
                        f
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && s(e, t)
                }(t, r.EventDispatcher),
                    t
            }();
            n.Subscription = d
        }
            , {
                "../base/codec.js": 2,
                "../base/event.js": 3,
                "../base/mediaformat.js": 6
            }],
        22: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.Conference = n.Base = void 0;
            var r = o(e("./base/export.js"))
                , i = o(e("./conference/export.js"));
            function o(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                return t.default = e,
                    t
            }
            var a = r;
            n.Base = a;
            var s = i;
            n.Conference = s
        }
            , {
                "./base/export.js": 4,
                "./conference/export.js": 15
            }]
    }, {}, [22])(22)
});