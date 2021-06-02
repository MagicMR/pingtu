<template>
   <v-container>
        <v-card width="600px" height="600px">
            <canvas id="myCanvas" width="600px" height="600px"></canvas>
        </v-card>
       <br>
        <v-card>
            <v-btn @click="Ready">准备</v-btn>
            <v-btn @click="Start">开始</v-btn>
        </v-card>
       <br>
        <v-card width="600px" height="600px">
            <v-row no-gutters>
                <v-col cols="4" class="my-0 py-0">
                    <canvas class="py-0 my-0" width="200" height="200" id="img1"></canvas>
                </v-col>
                <v-col cols="4" class="my-0 py-0">
                    <canvas width="200" height="200" id="img2"></canvas>
                </v-col>
                <v-col cols="4" class="my-0 py-0">
                    <canvas width="200" height="200" id="img3"></canvas>
                </v-col>
                <v-col cols="4" class="my-0 py-0">
                    <canvas width="200" height="200" id="img4"></canvas>
                </v-col>
                <v-col cols="4" class="my-0 py-0">
                    <canvas width="200" height="200" id="img5"></canvas>
                </v-col>
                <v-col cols="4" class="my-0 py-0">
                    <canvas width="200" height="200" id="img6"></canvas>
                </v-col>
                <v-col cols="4" class="my-0 py-0">
                    <canvas width="200" height="200" id="img7"></canvas>
                </v-col>
                <v-col cols="4" class="my-0 py-0">
                    <canvas width="200" height="200" id="img8"></canvas>
                </v-col>
                <v-col cols="4" class="my-0 py-0">
                    <canvas width="200" height="200" id="img9"></canvas>
                </v-col>
            </v-row>
        </v-card>
       <v-img :src="im"></v-img>
   </v-container>
</template>

<script>
    export default {
        name: "SplitImage",
        data() {
            return {
                im:'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'
            }
        },
        methods: {
            Ready() {
                let myCanvas = document.getElementById("myCanvas");
                let cxt = myCanvas.getContext("2d");
                let image = new Image();
                image.src = localStorage.getItem("img64")
                cxt.drawImage(image, 0, 0, 600, 600)
            },
            Start() {
                let myCanvas = document.getElementById("myCanvas");
                let cxt = myCanvas.getContext("2d");
                var arr = [];        //将切的图片存到数组里面
                var q = 1;
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 3; j++) {
                        var data = cxt.getImageData(j * 200, i * 200, 200 ,200);      //类似于“复制”功能
                        var img = document.getElementById("img" + q)
                        var newcxt = img.getContext("2d");
                        newcxt.putImageData(data, 0, 0);    //类似“粘贴”功能
                        arr.push(img.toDataURL(q + ".png"))     //toDataURL()方法的两个参数：DataURL(type, encoderOptions) type指定转换为base64编码后图片的格式，如：image/png、image/jpeg、image/webp等等，默认为image/png格式；
                        // console.log(img.toDataURL(q + ".png"))     //toDataURL()方法的两个参数：DataURL(type, encoderOptions) type指定转换为base64编码后图片的格式，如：image/png、image/jpeg、image/webp等等，默认为image/png格式；
                        q++;
                        // this.im = img.toDataURL(q + ".png")
                    }
                }
                localStorage.setItem("ptImages",JSON.stringify(arr))
            }
        }
    }
</script>

<style scoped>

</style>
