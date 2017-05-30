var d = ["Як вас звати?", "Скільки вам років?", "Де ви прцюєте або вчитеся?", "Ви курите?", "Вам подобається програмування?"];
function list(arrayList){
    var c= [];
    for(i=0;i<arrayList.length;i++){
        c.push(prompt(d[i]));
        var li = document.createElement("li");
        document.getElementById("list").appendChild(li);
        li.id = "myList"+i;
        li.className = "myLi";
        var span= document.createElement("span");
        document.getElementById("myList"+i).appendChild(span);
        span.id = "span"+i;
        span.className = "span";


        var p = document.createElement("p");
        p.innerText = d[i];
        document.getElementById("span"+i).appendChild(p);
        p.className = "asking";

        var str = document.createElement("strong");
        str.innerText = c[i];
        document.getElementById("span"+i).appendChild(str);
        str.className = "answering";
    }
}

list(d);