function initialize(){
  var flag = true;
  var root_level = 2;
  var root = document.getElementById("contents");
  var heads = document.getElementsByClassName("midashi_anchor");
  for (var i = 0, len = heads.length; i < len; i++) {
    var node = heads[i];
    var child = node.firstChild;
    if(child){
      if(flag){
        flag = false;
        var button = document.createElement("span");
        button.setAttribute("onclick","toggle(this)");
        button.appendChild(document.createTextNode("+"));
        root.appendChild(button);
        root.appendChild(document.createTextNode("–ÚŽŸ"));
        root.setAttribute("style","");
      }
      var level = parseInt(child.tagName[1])
      var div = document.createElement("div");
      div.setAttribute("class", "contents_invisible");

      var button = document.createElement("span");
      button.setAttribute("onclick","toggle(this)");
      button.appendChild(document.createTextNode("+"));

      var link = document.createElement("a");
      link.setAttribute("href","#" + node.name);
      link.appendChild(document.createTextNode(child.textContent));

      div.appendChild(button);
      div.appendChild(link);

      if (root_level >= level)
        while (root_level >= level){
          root = root.parentNode;
          root_level--;
      }
      root.appendChild(div);
      root = div;
      root_level = level;   
    }
  }
}

function toggle(element){
  var button;
  if (element.textContent == "+"){
   button = "-"
  }else{
   button = "+"
  }
  element.removeChild(element.firstChild);
  element.appendChild(document.createTextNode(button));
  var childs = element.parentNode.childNodes;
  for (var i = 2, len = childs.length; i < len; i++) {
    var node = childs[i]
    if (typeof(node.setAttribute) == "function"){
      if (node.getAttribute("class") == "contents_invisible"){
        node.setAttribute("class","contents_visible")
      }else if(node.getAttribute("class") == "contents_visible"){
        node.setAttribute("class","contents_invisible")
      }
    }
  }
}

initialize()