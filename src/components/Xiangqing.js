// https://news-at.zhihu.com/api/4/news/3892357
import React from 'react'
import axios from 'axios'
// import App from "../App";
import 'antd-mobile/dist/antd-mobile.css';
import tsIcon from '../img/images/day03_01.jpg';
import '../font1/iconfont.css'
import "../css/Xiangqing.css"
import "../font/iconfont.css"


var deviceWidth = document.documentElement.clientWidth;
if(deviceWidth > 1080) deviceWidth = 1080;
document.documentElement.style.fontSize = deviceWidth/10.8 + 'px';


class Xiangqing extends React.Component {
    state={
        data1:[],
        html:"",
        changdu:"",
        changdu2:"",

        id:this.props.location.state.name
    }
    render(){

        return(
            <div className="dic1080">
                <link href={this.state.data1.css} rel="stylesheet" />
                {/*顶部的*/}
                <div className="div252">
                    <img src={tsIcon} className="day0312" alt=""/>
                    {/*导航栏*/}
                    <div className="div168">
                        <div className="div122168">
                            <span className="icon iconfont diu om" onClick={()=>{this.props.history.push({ pathname:'/Index'})} }>
                                &#xe614;</span>
                        </div>
                        <div className="div607">
                            <div className="div1512">
                                <span className="icon iconfont diu" onClick={this.hui.bind(this)}>&#xe633;</span>
                            </div>
                            <div className="div1512">
                                {/*收藏*/}
                                <span className="icon iconfont diu" onClick={this.Collecta.bind(this)}>&#xe65f;</span>
                            </div>
                            <div className="div1512">
                                <span className="icon iconfont diu" onClick={this.Comment1.bind(this)}>&#xe616;</span>
                                {this.state.changdu+this.state.changdu2}
                            </div>
                            <div className="div1512">
                                <span className="icon iconfont diu">&#xe673;</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*占位的*/}
                {/*<div className="zhanwei" ></div>*/}
                {/*<div>*/}
                {/*    <img src={this.state.data1.image} className="imgs"/>*/}
                {/*    <span className="ospan">*/}
                {/*              {this.state.data1.title}*/}
                {/*</span>*/}
                {/*</div>*/}
                <div dangerouslySetInnerHTML={{ __html: this.state.html }}  />

                {/*{this.props.location.state.name}*/}
{/*分享页面*/}
                <div className="qunbu" id="qunbu" onClick={this.btn.bind(this.id)}>
                    <div className="div9361082" id="div9361082">
                        <div className="divx180">分享</div>
                        <div className="div740802">

                            <div className="div740224">
                                <div className="closnw">
                                    <span className="icon iconfont div169164">&#xe636;</span>
                                    新浪微博
                                </div>
                                <div className="closnw">
                                    <span className="icon iconfont div169164222">&#xe637;</span>
                                    微信
                                </div>
                                <div className="closnw">
                                    <span className="icon iconfont div169164222">&#xe8c1;</span>
                                    微信朋友圈
                                </div>

                            </div>
                            <div className="div740224">
                                <div className="closnw">
                                    <span className="icon iconfont div169164222a">&#xe695;</span>
                                    印象笔记
                                </div>
                                <div className="closnw">
                                    <span className="icon iconfont locato">&#xe69c;</span>
                                    有道云笔记
                                </div>
                                <div className="closnw">
                                    <span className="icon iconfont locatoqq">&#xe617;</span>
                                    qq
                                </div>

                            </div>
                            <div className="div740224">
                                <div className="closnw">
                                    <span className="icon iconfont sdiii">&#xe6dd;</span>
                                    更多
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.get("/api/4/news/"+this.state.id).then((res)=>{
            // console.log(res.data);
            // this.state.datea.push(res.data);
            this.setState({
                data1:res.data,
                html:res.data.body
            });
            var imgplaceholder=document.getElementsByClassName("img-place-holder")[0]
            var imga=document.createElement('img')
            var ospan=document.createElement('p')
            imga.classList.add("imgs")
            ospan.classList.add("ospan")
            imga.src=this.state.data1.image;
            ospan.innerHTML=this.state.data1.title
            imgplaceholder.appendChild(imga)
            imgplaceholder.appendChild(ospan)
            // imgplaceholder.appendChild(ospan)
            // console.log(imgplaceholder);
        })
        // https://news-at.zhihu.com/api/4/story/#{id}/long-comments
        axios.get("/api/4/story/"+this.props.location.state.name+"/long-comments").then((res)=>{
            // console.log(res.data);
            this.setState({
                changdu:res.data.comments.length
            });
        })

        axios.get("/api/4/story/"+this.props.location.state.name+"/short-comments").then((res)=>{
            // console.log(res.data);
            this.setState({
                changdu2:res.data.comments.length
            });
        })


    }
    btn(e){
        let aa=document.getElementById("qunbu");
        if(e.target.id==='qunbu'){
            aa.style.display="none"
        }



    }
    hui(){
        let aa=document.getElementById("qunbu")
        aa.style.display="block"
    }

    Collecta(){
        // this.props.history.push({ pathname:'/Collect',state:{name : this.state.data1.images,idaa:this.state.data1.title, } })
        let obj = {
            id:this.state.data1.id,
            title:this.state.data1.title,
            img:this.state.data1.images,
        }
        sessionStorage.setItem(this.props.location.state.name,JSON.stringify(obj))
    }

    Comment1(){
        // console.log(this.state.data1.id);
        this.props.history.push({ pathname:'/Comment',state:{name : this.state.data1.id } })
    }

}
export default Xiangqing;