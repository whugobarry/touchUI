var draw = function (ctx,data){
  var ctx = ctx;
  var data = data;
        var rangeValue = data;
        var nowRange = 0;

        var mW = canvas.width = 340;
        var mH = canvas.height = 340;
        var lineWidth = 0.5;

        var r = mH / 2;
        var cR = r - 32 * lineWidth;

        var sX = 0;
        var axisLength = mW;
        var waveWidth = 0.008;
        var waveHeight = 6;
        var speed = 0.09;
        var xOffset = 0;

        ctx.lineWidth = lineWidth;

        var IsdrawCircled = false;
        var drawCircle = function(){
            ctx.lineWidth = 10
            ctx.beginPath();
            ctx.strokeStyle = '#0e29fb';
            ctx.arc(r, r, cR+1, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(r, r, cR, 0, 2 * Math.PI);
            ctx.clip();
            IsdrawCircled = true;
        }

        var drawSin = function(xOffset, color, waveHeight){
            ctx.save();

            var points=[];  //用于存放绘制Sin曲线的点

            ctx.beginPath();
            //在整个轴长上取点
            for(var x = sX; x < sX + axisLength; x += 20 / axisLength){
                //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
                var y = Math.sin((-sX - x) * waveWidth + xOffset) * 0.8 + 0.1;

                var dY = mH * (1 - nowRange / 100 );

                points.push([x, dY + y * waveHeight]);
                ctx.lineTo(x, dY + y * waveHeight);     
            }

            //封闭路径
            ctx.lineTo(axisLength, mH);
            ctx.lineTo(sX, mH);
            ctx.lineTo(points[0][0],points[0][1]);
            ctx.fillStyle = color;
            ctx.fill();

            ctx.restore();
        };

        var render = function(){
            ctx.clearRect(0, 0, mW, mH);

            rangeValue = data;

            if(IsdrawCircled == false){
                drawCircle();   
            }

            if(nowRange <= rangeValue){
                var tmp = 1;
                nowRange += tmp;
            }

            if(nowRange > rangeValue){
                var tmp = 1;
                nowRange -= tmp;
            }

            drawSin(xOffset+Math.PI*0.7, '#5988fe', 18);
            drawSin(xOffset, '#375dfd', 18);
            // drawText(); 

            xOffset += speed;
            requestAnimationFrame(render);
        }

        var drawText = function(){
            ctx.save();

            var size = 0.4*cR;
            ctx.font = size + 'px Microsoft Yahei';
            ctx.textAlign = 'center';
            ctx.fillStyle = "rgba(06, 85, 128, 0.5)";
            ctx.fillText(~~nowRange + '%', r, r + size / 2);

            ctx.restore();
        };

        render();
}

module.exports = {
    draw
}