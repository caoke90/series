
<link rel="stylesheet" href="<%=seajs.data.base%>../assets/css/main.css">
<div id="page1">
    <header>
        <%=title%>
    </header>
    <div class="container">
        <div class="img">
            <img src="<%=dataPath%>images/<%=image%>" width="100%" />
            <div class="tishi">
                <div class="txt">轻触查看听力原文</div>
                <div class="bg"></div>
            </div>
        </div>
        <div class="info">
            <%-content%>
        </div>
    </div>
    <footer>
        <div class="left">
            <div class="audio_play"></div>
            <div class="audio_pause"></div>
        </div>
        <div class="right">
            <div class="progress"></div>
            <div class="time">00:00/00:00</div>
        </div>
        <audio id="audio" src="<%=dataPath%>images/<%=audio%>">您的浏览器不支持 audio 标签。</audio>
    </footer>
</div>
