function randomString(e) {
    e = e || 32;
    let t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        a = t.length,
        n = "";
    for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}
function calculateSignature(toSign, key) {
    sha256.hmac(key, toSign);
    let signed = window.btoa(sha256.hmac(key, toSign))
    // let hex = HmacSHA256(toSign, key);
    // let signed = ZMS_REST.Base64.encodeBase64(hex);
    return signed;
}


function getRequestHeader() {
    let timestamp = new Date().getTime();
    let cnounce = randomString(8);
    let toSign = timestamp + ',' + cnounce;
    let header = 'MAuth realm=http://marte3.dit.upm.es,mauth_signature_method=HMAC_SHA256';
    let signed = calculateSignature(toSign, superServiceKey);
    header += ',mauth_serviceid=';
    header += superServiceId;
    header += ',mauth_cnonce=';
    header += cnounce;
    header += ',mauth_timestamp=';
    header += timestamp;
    header += ',mauth_signature=';
    header += signed;
    console.log("header",header)
    return header
    // return {'Authorization': header, "Content-Type": "application/json"}
}
// Authorization = getRequestHeader(superServiceId,superServiceKey)