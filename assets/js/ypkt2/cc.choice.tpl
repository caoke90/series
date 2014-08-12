<div class="block choice" emit="container">
    <div class="title"><%=$('<div>'+title+'</div>').text()%></div>
    <div class="module">
        <ul>
            <% for(var i=0;i< options.length;i++){ %>
            <li><%=cc.Word[i]%>. <%= options[i].text %></li>
            <% }%>
        </ul>
    </div>
    <div class="answer">
        <ul>
            <li>你的答案：<font></font><span></span></li>
            <li>正确答案：</li>
        </ul>
    </div>
</div>