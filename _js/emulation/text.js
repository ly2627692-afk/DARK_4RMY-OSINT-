function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
function initTypeText(provider, uid){

    let textMD = '$ Connection..host..http://+ %PROVIDER% +/api/%$intec/success..<br>' +
        '$ Account:http://%PROVIDER%/+ %UID% +/a-%/php..<br>'+
        '$ Applying md5()_Algoritm..|<br>$ buffroverflow.c --system--nodir|'+
        '<br> SEDr_hash] !== $_COOa-%/ =hacked.py ï¿½ bash ï¿½ 80x10 <br>$ Applying RSA()_Algoritm... f|<br>'+
        '- $ Applying map_reduce()... SUCCESS!<br>'+
        '$ tar -zcvf password.zip *.password = *******|<br>'+
        '$ Success! Username is: + <strong>'+uid+' </strong> +/encryption/4055001556657& <br>' +
        '$_GET_password from the link below|<br>'+
        '_Successfully accessed. to <& date $ buffroverflow.c --system--nodir||';
    f = 0;

    textMD = replaceAll(textMD, "%PROVIDER%", provider);
    textMD = textMD.replace("%UID%", uid);

    function typestart(){
        f++;
        if( f <= textMD.length )
            document.getElementById("type_text").innerHTML = textMD.substr(0, f);

        setTimeout( typestart, 50 );
    }
    typestart();

}
