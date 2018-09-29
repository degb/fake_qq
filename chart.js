var chart = (function () {
var $btn = document.querySelector('.chart_send');
var $txt = document.querySelector('.chart_content');
var $right = document.querySelector('.main__right');
var chartBox = document.querySelector('.chart-box__main');

    return {
        init: function () {
            this.event()
        },
        event: function () {
            var _this = this;
            var params = {
                success: function(data) {
                    var _data=data.text;
                    _this.replydom(_data);
                     chartBox.scrollTop = chartBox.scrollHeight - chartBox.clientHeight;
                     $txt.value = '';
                }
            }
            $btn.onclick = function () {
                // 获取文本框的值
                var val = $txt.value.trim();
             
                if (val) {
                    // 如果文本框有内容
                   
                    _this.chartdom(val);
                    // //发送
                    sendAjax('http://www.tuling123.com/openapi/api?key=6849f0d1e7334ca8bcced88694fc07c4&info='+val+'&userid=1234567',params)
		

                    // 聊天内容加入以后在计算高度
                    chartBox.scrollTop = chartBox.scrollHeight - chartBox.clientHeight;
                    // 清空文本
                    $txt.value = '';

                }
            }
            $txt.onkeydown = function (ev) {
                ev = ev || window.event;
                var keyCode = ev.keyCode || ev.which;
                if (ev.ctrlKey) {
                    if (keyCode == 13) {
                        $btn.click();
                    }
                }
            }
        },
        chartdom(val, imgAvter) {
            imgAvter = imgAvter || 'img/xiaolan.jpg'
            var $li = document.createElement('li');
            $li.className = 'main__right';
            var span = document.createElement('span');
            span.className = 'main_bg';
            var $text = document.createTextNode(val);
            span.appendChild($text);
            $li.appendChild(span);
            span = document.createElement('span');
            span.className = 'main_avater';
            var $img = document.createElement('img');
            $img.src = imgAvter;
            span.appendChild($img);
            $li.appendChild(span);
            chartBox.appendChild($li);
        },
        replydom(_data, imgAvter) {
            var $li = document.createElement('li');
            $li.className = 'main__left';
            imgAvter = imgAvter || 'img/xiaoming.jpg'
            span = document.createElement('span');
            span.className = 'main_avater';
            var $img = document.createElement('img');
            $img.src = imgAvter;
            span.appendChild($img);
            $li.appendChild(span);
            var span = document.createElement('span');
            span.className = 'main_bg';
            var $text = document.createTextNode(_data);
            span.appendChild($text);
            $li.appendChild(span);
            chartBox.appendChild($li);
        }
       
    }
}())
