<template>


      <div class="about" style="width:3000px;height:3000px;background:black;border-right:1px red solid;textAlign:right">
    This is an about page
  </div>


</template>
<script>
//代理模式
        let Flower = function() {

        }
        let xiaoMing = {
            //将花给B
            sendFlower: function(target) {
                let flower = new Flower()
                target.receiveFlower(flower)
            }
        }
        let B = {
            //将花给A
            receiveFlower: function(flower) {
                //监听A的心情，给A的listenGoodMood方法传入方法，在合适的时间执行
                A.listenGoodMood(function() {
                    A.receiveFlower(flower)
                })
            }
        }
        let A = {
            receiveFlower: function(flower) {
                console.log('收到花'+ JSON.stringify(flower))
            },
            listenGoodMood: function(fn) {
                setTimeout(function() {
                    fn()
                }, 1000)
            }
        }
        //启动送花的方法
        xiaoMing.sendFlower(B)

</script>
<style scope>
</style>

