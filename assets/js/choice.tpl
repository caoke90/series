
<div class="pageBox">
    <header>
    </header>
    <div class="container">
        <div class="block choice">
            <div class="title"><%=title%></div>
            <div class="module">
                <ul>
                    <% for(var i=0;i< options.length;i++){ %>
                    <li><%=cc.Word[i]%>. <%= options[i].text %></li>
                    <% }%>
                    <!--<li class="on">A. She is black and blue all over.  </li>-->
                    <!--<li class="ok">B. She is black and blue all over.  </li>-->
                    <!--<li class="error">C. She is black and blue all over.  </li>-->
                    <!--<li>D. She is bandandandandand blue ae alllack andandandandand blue alllack and blue all over.  </li>-->
                </ul>
            </div>
            <div class="answer">
                <ul>
                    <li>你的答案：<font>B</font><span class="ok"></span></li>
                    <li>正确答案：A</li>
                </ul>
            </div>
        </div>
        <div class="block choice">
            <div class="title"><%=title%></div>
            <div class="module">
                <ul>
                    <% for(var i=0;i< options.length;i++){ %>
                    <li><%=cc.Word[i]%>. <%= options[i].text %></li>
                    <% }%>
                    <!--<li class="on">A. She is black and blue all over.  </li>-->
                    <!--<li class="ok">B. She is black and blue all over.  </li>-->
                    <!--<li class="error">C. She is black and blue all over.  </li>-->
                    <!--<li>D. She is bandandandandand blue ae alllack andandandandand blue alllack and blue all over.  </li>-->
                </ul>
            </div>
            <div class="answer">
                <ul>
                    <li>你的答案：<font>B</font><span class="ok"></span></li>
                    <li>正确答案：A</li>
                </ul>
            </div>
        </div>
    </div>
    <footer>

    </footer>
</div>
