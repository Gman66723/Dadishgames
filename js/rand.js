function login(URL){
        var i = (new Date).getTime();
        var u='http://auth.contentkeeper.com/login.html';
        //console.log(u);
        if(URL){
                window.location.href=u + '?'+ i + '&target='+ URL;
        }else{  
                window.location.href=u + '?'+ i;
        }
}

function continueLogout(target){
        window.open("notice.html", "Notice", "toolbar=0,menubar=0,location=0,height=280,width=420,left=2048");
        if(target){
                if(target.indexOf(":443?ck_sni") != -1){
                        target = target.substr(0, target.indexOf(":443?ck_sni"));
                }

                if(target.indexOf("http") == 0){
                        window.location.href=target;
                }else{  
                        window.location.href='http://'+ target;
                }
        }else{  
                window.history.go(-2);
        }
}

function logout(){
        var i = (new Date).getTime();
        var u='http://auth.contentkeeper.com/logout.html';
        //console.log(u);
        window.location.href=u + '?'+ i;
}

function replace(string,text,by){
        // Replaces text with by in string
        var i = string.indexOf(text), newstr = '';
        if ((!i) || (i == -1))
                return string;
        newstr += string.substring(0,i) + by;
        if (i+text.length < string.length)
                newstr += replace(string.substring(i+text.length,string.length),text,by);
        return newstr;
}

function getParm(string,parm){
        // returns value of parm from string
        var startPos = string.indexOf(parm + "=");
        if (startPos > -1){
                startPos = startPos + parm.length + 1;
                var endPos = string.indexOf("&",startPos);
                if (endPos == -1){
                        endPos = string.length;
                }
                var result = string.substring(startPos,endPos);
                return unescape(result);
        }
        return '';
}
