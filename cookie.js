
function createCookie()
{
    var uname=document.getElementById('uname');
    var age=document.getElementById('age');
    var gendr=document.querySelectorAll("input[type='radio']");
    var selectedGndr;
    var img;
    var visists=0;
     for(var i=0;i<gendr.length;i++){
         if(gendr[i].checked){
            selectedGndr=gendr[i].value;
          
         }
        
     }
     if(selectedGndr=="male"){
         img=1;
     }
     else if(selectedGndr=="female"){
         img=2;
     }


    var color=document.getElementById('color');
    var indx=color.selectedIndex;
    var selectedVal=color.options[indx].value;

    var today=new Date();
    today.setMonth(today.getMonth()+1);
   
    document.cookie="username="+uname.value+";expires="+today.toUTCString();
    document.cookie="age="+age.value+";expires="+today.toUTCString();
    document.cookie="gender="+selectedGndr+";expires="+today.toUTCString();
    document.cookie="img="+img+";expires="+today.toUTCString();
    document.cookie="color="+selectedVal+";expires="+today.toUTCString();
    document.cookie="visits="+visists+";expires="+today.toUTCString();

    location.href="profile.html";


}

function allCookieList()
{
    var info=document.cookie;
    var cookie=info.split(';');
    var arr=[];
    for(var i=0;i<cookie.length;i++)
    {
        arr[cookie[i].trim().split('=')[0]]=cookie[i].trim().split('=')[1];

    }
    return arr;
}

function displayData()
{
    var data=allCookieList();
 
    var name=data['username'];
    var mycolor=data["color"];
    var spn=document.getElementById('spn');
    spn.innerHTML=name;
    spn.style.color=mycolor;
    var imag=data["img"];
    if(imag=='1'){
        document.getElementById("persn").setAttribute('src','../images/1.jpg');

    }
    else if(imag=='2'){
        document.getElementById("persn").setAttribute('src','../images/2.jpg');
    }

    var visit=data["visits"];
  
   
    if (document.cookie.indexOf('visits')==-1) {
        document.cookie ='visits=0;';

    }
    else{
        Number(visit++);
        document.cookie ='visits='+visit+";";
    }
    

    var num=document.getElementById("num");
    num.style.color=mycolor;
    num.innerHTML=visit;


}

function getCookie(cookieName)
{
    var cookie=allCookieList();
    return cookie[cookieName];

}
function hasCookie(cookieName)
{
   var cookie= getCookie(cookieName);
    if(cookie==null){
        return false;
    }
    else{
        return true;
    }
}
function deleteCookie(cookieName)
{
    var today=new Date();
    today.setMonth(today.getMonth()-1);
    if(hasCookie(cookieName))
    {
        document.cookie=cookieName+"=;expires="+today.toUTCString();
        return 'deleted successfully';
    }
    else{
        return "This cookie doesn't exist";
    }
 
}

function deleteAllCookies()
{
    var today=new Date();
    today.setMonth(today.getMonth()-1);
    if(document.cookie!=''){
        document.cookie="username=;expires="+today.toUTCString();
        document.cookie="age=;expires="+today.toUTCString();
        document.cookie="gender=;expires="+today.toUTCString();
        document.cookie="img=;expires="+today.toUTCString();
        document.cookie="color=;expires="+today.toUTCString();
        document.cookie="visits=;expires="+today.toUTCString();
        
      return 'deleted successfully';
    }
    else{
        return 'There is no Cookie';
    }

 
}

