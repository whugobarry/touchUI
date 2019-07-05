var draw = function (ctx,data,radtio){
  var ratio  = radtio;
  var ctx = ctx;
  var data = data;
        var rangeValue = data;
        var nowRange = 0;

        var mW = canvas.width = 340 * ratio;
        var mH = canvas.height = 340 * ratio;
        var lineWidth = 1;

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
            
            // ctx.globalCompositeOperation = 'source-over';
            ctx.lineWidth = 20 * ratio;
            ctx.beginPath();
            ctx.strokeStyle = '#4974fd';
            ctx.arc(r, r, cR, 0, 2 * Math.PI);
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
            for(var x = sX; x < sX + axisLength * ratio; x += 20 * radtio / axisLength){
                //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
                var y = Math.sin((-sX - x) * waveWidth + xOffset) * 0.8 * ratio + 0.1;

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

            drawSin(xOffset+Math.PI*0.7, 'rgba(55,93,253,.4)', 18);
            drawSin(xOffset, 'rgba(55,93,253,.6)', 18);
            // drawText(); 

            xOffset += speed;
            requestAnimationFrame(render);
        }
        render();
}

module.exports = {
    draw
}