<template>
    <v-container>
        <v-card width="900px" height="900px">
            <vue-cropper
                    ref="cropper"
                    :img="option.img"
                    :outputSize="option.outputSize"
                    :outputType="option.outputType"
                    :info="option.info"
                    :canScale="option.canScale"
                    :autoCrop="option.autoCrop"
                    :autoCropWidth="option.autoCropWidth"
                    :autoCropHeight="option.autoCropHeight"
                    :fixed="option.fixed"
                    :fixedNumber="option.fixedNumber"
                    :full="option.full"
                    :fixedBox="option.fixedBox"
                    :canMove="option.canMove"
                    :canMoveBox="option.canMoveBox"
                    :original="option.original"
                    :centerBox="option.centerBox"
                    :height="option.height"
                    :infoTrue="option.infoTrue"
                    :maxImgSize="option.maxImgSize"
                    :enlarge="option.enlarge"
                    :mode="option.mode"
                    @realTime="realTime"
                    @imgLoad="imgLoad">
            </vue-cropper>
        </v-card>
        <br>
        <v-card>
            <label class="btn" for="uploads">选择封面</label>
            <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="selectImg($event)">
            <v-btn color="success" @click="uploadImg('blob')">上传<i class="el-icon-upload"></i></v-btn>
        </v-card>
        <br>
        <v-card width="600px" height="600xp">
            <v-img :src="img64"></v-img>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "UploadImage",
        data(){
            return{
                name:this.Name,
                previews: {},
                option:{
                    img: '',             //裁剪图片的地址
                    outputSize: 1,       //裁剪生成图片的质量(可选0.1 - 1)
                    outputType: 'jpeg',  //裁剪生成图片的格式（jpeg || png || webp）
                    info: true,          //图片大小信息
                    canScale: true,      //图片是否允许滚轮缩放
                    autoCrop: true,      //是否默认生成截图框
                    autoCropWidth: 600,  //默认生成截图框宽度
                    autoCropHeight: 600, //默认生成截图框高度
                    fixed: true,         //是否开启截图框宽高固定比例
                    fixedNumber: [1, 1], //截图框的宽高比例
                    full: false,         //false按原比例裁切图片，不失真
                    fixedBox: true,      //固定截图框大小，不允许改变
                    canMove: false,      //上传图片是否可以移动
                    canMoveBox: true,    //截图框能否拖动
                    original: false,     //上传图片按照原始比例渲染
                    centerBox: true,    //截图框是否被限制在图片里面
                    height: true,        //是否按照设备的dpr 输出等比例图片
                    infoTrue: false,     //true为展示真实输出图片宽高，false展示看到的截图框宽高
                    maxImgSize: 3000,    //限制图片最大宽度和高度
                    enlarge: 1,          //图片根据截图框输出比例倍数
                    mode: '600px 600px'  //图片默认渲染方式
                },
                img64:''
            };
        },
        methods:{
            //初始化函数
            imgLoad (msg) {
                console.log("工具初始化函数====="+msg)
            },
            //选择图片
            selectImg (e) {
                let file = e.target.files[0]
                if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(e.target.value)) {
                    this.$message({
                        message: '图片类型要求：jpeg、jpg、png',
                        type: "error"
                    });
                    return false
                }
                //转化为blob
                let reader = new FileReader()
                reader.onload = (e) => {
                    let data
                    if (typeof e.target.result === 'object') {
                        data = window.URL.createObjectURL(new Blob([e.target.result]))
                    } else {
                        data = e.target.result
                    }
                    this.option.img = data
                }
                //转化为base64
                reader.readAsDataURL(file)
            },
            //上传图片
            uploadImg (type) {
                // let _this = this;
                if (type === 'blob') {
                    //获取截图的blob数据
                    this.$refs.cropper.getCropBlob(async (data) => {
                        this.img64 = URL.createObjectURL(data)
                        localStorage.setItem("img64",this.img64);
                    })
                }
            },
        },
    }
</script>

<style scoped>

</style>
