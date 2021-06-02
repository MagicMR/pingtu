<template>
    <v-container>
        <v-card width="900px" height="900px">
            <v-row no-gutters >
                <v-col cols="4"
                       class="py-0"
                    v-for="(imgSrc,i) in imgList" :key="i">
                    <img width="300px" height="300px" class="py-0 my-0" :src="imgSrc" @click="swapPosition($event)"/>
                </v-col>
            </v-row>
        </v-card>
        <v-btn @click="getImages">开始游戏</v-btn>
    </v-container>
</template>

<script>
    export default {
        name: "pt",
        data(){
            return{
                number:9,
                imgList:'',
                originalArray:[],
                imgBlack:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAFKUlEQVR4Xu3VsRHDMAwEQbEd9t+f3YDl4NJf5Qiw4I3Ovffz+AgQ+ClwBOJlEHgXEIjXQeCPgEA8DwIC8QYINAF/kOZmakRAICOHtmYTEEhzMzUiIJCRQ1uzCQikuZkaERDIyKGt2QQE0txMjQgIZOTQ1mwCAmlupkYEBDJyaGs2AYE0N1MjAgIZObQ1m4BAmpupEQGBjBzamk1AIM3N1IiAQEYObc0mIJDmZmpEQCAjh7ZmExBIczM1IiCQkUNbswkIpLmZGhEQyMihrdkEBNLcTI0ICGTk0NZsAgJpbqZGBAQycmhrNgGBNDdTIwICGTm0NZuAQJqbqREBgYwc2ppNQCDNzdSIgEBGDm3NJiCQ5mZqREAgI4e2ZhMQSHMzNSIgkJFDW7MJCKS5mRoREMjIoa3ZBATS3EyNCAhk5NDWbAICaW6mRgQEMnJoazYBgTQ3UyMCAhk5tDWbgECam6kRAYGMHNqaTUAgzc3UiIBARg5tzSYgkOZmakRAICOHtmYTEEhzMzUiIJCRQ1uzCQikuZkaERDIyKGt2QQE0txMjQgIZOTQ1mwCAmlupkYEBDJyaGs2AYE0N1MjAgIZObQ1m4BAmpupEQGBjBzamk1AIM3N1IiAQEYObc0mIJDmZmpEQCAjh7ZmExBIczM1IiCQkUNbswkIpLmZGhEQyMihrdkEBNLcTI0ICGTk0NZsAgJpbqZGBAQycmhrNgGBNDdTIwICGTm0NZuAQJqbqREBgYwc2ppNQCDNzdSIgEBGDm3NJiCQ5mZqREAgI4e2ZhMQSHMzNSIgkJFDW7MJCKS5mRoREMjIoa3ZBATS3EyNCAhk5NDWbAICaW6mRgQEMnJoazYBgTQ3UyMCAhk5tDWbgECam6kRAYGMHNqaTUAgzc3UiIBARg5tzSYgkOZmakRAICOHtmYTEEhzMzUiIJCRQ1uzCQikuZkaERDIyKGt2QQE0txMjQgIZOTQ1mwCAmlupkYEBDJyaGs2AYE0N1MjAgIZObQ1m4BAmpupEQGBjBzamk1AIM3N1IiAQEYObc0mIJDmZmpEQCAjh7ZmExBIczM1IiCQkUNbswkIpLmZGhEQyMihrdkEBNLcTI0ICGTk0NZsAgJpbqZGBAQycmhrNgGBNDdTIwICGTm0NZuAQJqbqREBgYwc2ppNQCDNzdSIgEBGDm3NJiCQ5mZqREAgI4e2ZhMQSHMzNSIgkJFDW7MJCKS5mRoREMjIoa3ZBATS3EyNCAhk5NDWbAICaW6mRgQEMnJoazYBgTQ3UyMCAhk5tDWbgECam6kRAYGMHNqaTUAgzc3UiIBARg5tzSYgkOZmakRAICOHtmYTEEhzMzUiIJCRQ1uzCQikuZkaERDIyKGt2QQE0txMjQgIZOTQ1mwCAmlupkYEBDJyaGs2AYE0N1MjAgIZObQ1m4BAmpupEQGBjBzamk1AIM3N1IiAQEYObc0mIJDmZmpEQCAjh7ZmExBIczM1IiCQkUNbswkIpLmZGhEQyMihrdkEBNLcTI0ICGTk0NZsAgJpbqZGBAQycmhrNgGBNDdTIwICGTm0NZuAQJqbqREBgYwc2ppNQCDNzdSIgEBGDm3NJiCQ5mZqREAgI4e2ZhMQSHMzNSIgkJFDW7MJCKS5mRoREMjIoa3ZBATS3EyNCAhk5NDWbAICaW6mRgQEMnJoazYBgTQ3UyMCAhk5tDWbgECam6kRAYGMHNqaTUAgzc3UiIBARg5tzSYgkOZmakRAICOHtmYTEEhzMzUi8AU75yqADUt0bgAAAABJRU5ErkJggg=='
            }
        },
        methods:{
            getImages(){
                let imgs= JSON.parse(localStorage.getItem("ptImages"))
                this.originalArray= imgs
                imgs[8]=this.imgBlack
                imgs.sort(function() {
                    return 0.5 - Math.random()
                })
                this.imgList= imgs
            },
            swapPosition(e){
                let img64=e.target.src;
                let number = this.imgList.indexOf(img64);
                let currect = this.imgList.indexOf(this.imgBlack);
                console.log(currect)
                console.log(typeof this.imgList[currect])
                // let aList = this.imgList
                if (number-3>=0 && number-3===currect){
                    let temp = this.imgList[number]
                    this.$set(this.imgList,number,this.imgList[currect])
                    this.$set(this.imgList,currect,temp)
                    return
                }
                if (number+3>=0 && number+3===currect){
                    let temp = this.imgList[number]
                    this.$set(this.imgList,number,this.imgList[currect])
                    this.$set(this.imgList,currect,temp)
                    return
                }
                if (number-1>=0 && number-1===currect){
                    let temp = this.imgList[number]
                    this.$set(this.imgList,number,this.imgList[currect])
                    this.$set(this.imgList,currect,temp)
                    return
                }
                if (number+1>=0 && number+1===currect){
                    let temp = this.imgList[number]
                    this.$set(this.imgList,number,this.imgList[currect])
                    this.$set(this.imgList,currect,temp)
                    return
                }
                // this.imgList = aList
            }
        }
    }
</script>

<style scoped>

</style>
