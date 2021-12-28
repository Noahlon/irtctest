function ajax_Fun(url, method, params) {
    return new Promise((resolve, reject) => {
        let xhr;
        // 实例化js原生ajax对象
        if (window.XMLHttpRequest) { //兼容ie 7 8 9 chrome
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) { //兼容ie 5 6
            xhr = new ActiveXObject("Micorsoft.XMLHTTP");
        }
        // xhr调用WEG一顿操作
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        // xhr.setRequestHeader("If-Modified-Since", "0");  //设置浏览器不使用缓存
        // xhr.setRequestHeader("origin", "");
        if (Authorization){
            xhr.setRequestHeader("Authorization", Authorization)
        }
        // 发送序列化后的ajax请求
        if (params) {
            xhr.send(JSON.stringify(params));
        } else {
            xhr.send(null);
        }
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                resolve(xhr.responseText);
            } else if (xhr.status !== 200) {
                reject(xhr.status);
            }
        }
    });
}
function ajax_3000(urlTemp, method, params, Authorization) {
    urlTemp = url + urlTemp
    return new Promise((resolve, reject) => {
        ajax_Fun(urlTemp, method, params, Authorization).then(res=>{
            resolve(res)
        },err=>{
            reject(err)
        })
    })
}