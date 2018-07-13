function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function')
    {
        window.onload = func;
    }
    else
    {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }
    else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/drinks.gif");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var  desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    //document.getElementsByTagName("body")[0].appendChild(description);
    //document.getElementsByTagName("body")[0].appendChild(placeholder);
    /* document.body.appendChild(description);
     document.body.appendChild(placeholder);
     var gallery = document.getElementById("imagegallery");
     gallery.parentNode.insertBefore(description,gallery);
     gallery.parentNode.insertBefore(placeholder,gallery);*/
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}
function prepareGallery () {
    if(!document.getElementsByTagName||!document.getElementById) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        links[i].onclick = function () {
            // showPic(this);
            // return !showPic(this);
            return showPic(this);
        }
        links[i].onkeypress = links[i].onclick;
        /* links[i].onkeypress = function () {
             return showPic(this)? false: true;
         }
         */
        /* if(links[i].getAttribute("class")=="poopUp")
         {
             links[i].onclick = function () {
                 popUp(this.getAttribute("href"));
                 return false;
             }
         }*/
    }
}

function showPic(whichpic) {
    if(!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if(!document.getElementById("description")) return false;
    if(whichpic.getAttribute("title")) {
        var text = whichpic.getAttribute("title");
    }
    else {
        var text = "";
    }
    var description = document.getElementById("description");
       // alert(description.childNodes[0].nodeValue);
        //alert(description.firstChild.nodeValue);
    if(description.firstChild.nodeType == 3){
       description.firstChild.nodeValue = text;
       }
       return false;
    }

/* function countBodyChildren() {
     var body_Element = document.getElementsByTagName("body")[0];
     alert(body_Element.childNodes.length);
 }*/
//window.onload = countBodyChildren;
//window.onload = preparelinks;

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);

