!function(){
    var duration = 50;
    function writeCode(prefix,code,fn){
        let container=document.querySelector('#code')
        let n = 0
        let id = setTimeout(function run(){
            n += 1
            container.innerHTML = code.substring(0,n)
            styleTags.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            
            if(n < code.length){
               setTimeout(run,duration)
            }else{
                fn && fn.call()
            }
        },duration)
    }

    
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
        .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
        console.log(duration)
     })
    
    let css =`
/*大家好,我是 Camilia! 今天给大家画一只皮卡丘*/

/*首先，先来一张皮卡丘的皮*/

#preview{
    border:1px solid black;
    display:flex;
    align-items:center;
    background: #FEE433;
}
.wrapper{
    height:182px;
    width:100%;
    position:relative;
}

/*接着，画皮卡丘的鼻子*/

.nose{
    width:0px;
    height:0px;
    border:14px solid black;
    position:absolute;
    border-radius:14px;
    border-color:black transparent transparent;
    left:50%;
    top:26px;
    margin-left:-14px;
}

/*接着画它的眼睛*/

.eye{
    width:48px;
    height:48px;
    border:2px solid black;
    position:absolute;
    border-radius:50%;
    top:1px;
    background: #2E2E2E; 
}

/*然后，画眼睛里的眼珠子*/

.eye.left::before, .eye.right::before{
    content:'';
    display:block;
    width:22px;
    height:22px;
    background: white;
    border-radius:50%;
    position:absolute;
    left:5px;
    top:1px;
}

/*把眼睛放到正确的位置*/

.eye.left{
    left:50%;
    margin-left:-115px;
}
.eye.right{
    right:50%;
    margin-right:-115px;
}
/*接着是画皮卡丘的脸蛋*/

.face{
    width:68px;
    height:68px;
    position:absolute;
    top:85px;
    border:2px solid black;
    border-radius:50%;
    background: #FF0000; 
}
.face.left{
    right:50%;
    margin-right:92px;
}
.face.right{
    left:50%;
    margin-left:92px; 
}

/*接着画它的嘴巴*/

/*先画上嘴唇*/

.upperLip{
    height:20px;
    width:60px;
    border:2px solid black;
    position:absolute;
    background: #FEE433;
}
.upperLip.left{
    right:50%;
    top:50px;
    border-bottom-left-radius:30px 20px;
    border-top:none;
    border-right:none;
    transform:rotate(-20deg);
}
.upperLip.right{
    left:50%;
    top:50px;
    border-bottom-right-radius:30px 20px;
    border-top:none;
    border-left:none;   
    transform:rotate(20deg);
}

/*再画下嘴唇*/

.mouth-wrapper{
    height:130px;
    width:122px;
    position:absolute;
    left:50%;
    top:56px;
    margin-left:-61px;
    display:flex;
    justify-content:center;
    overflow:hidden;
}
.lowerLip{
    height:400px;
    width:106px;
    border:1px solid black;
    position:absolute;
    bottom:0;
    border-radius:53px/200px;
    background: #9B000A;
    display:flex;
    justify-content:center;
    overflow:hidden;
}

/*最后画上小舌头*/

.lowerLip::after{
    content:'';
    position:absolute;
    height:110px;
    width:110px;
    background: #FF485F;
    bottom:-5px;
    border-radius:50%;
}

/*好啦，一只皮卡丘送给你*/`
    writeCode('',css)
}()