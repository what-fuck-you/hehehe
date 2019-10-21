import React from 'react';
import axios from "axios";
import '../css/Comment.css'
import '../font1/iconfont.css'
import tsIcon from "../img/images/day03_01.jpg";
import imgaa from '../img/day02.png'
import imga3 from '../img/day03.png'
import moment from 'moment'
var deviceWidth = document.documentElement.clientWidth;
if(deviceWidth > 1080) deviceWidth = 1080;
document.documentElement.style.fontSize = deviceWidth/10.8 + 'px';



class Comment extends React.Component {
    state={
        changdu:[],
        changdu2:[],
        ad:false
    }
    render(){
        return(
            <div className="iwna">
                <img src={tsIcon} className="day0312" alt=""/>
                <div className="div168">
                    <div className="div122168">
                            <span className="icon iconfont diu om"onClick={()=>{this.props.history.go(-1)}} >&#xe614;</span>
                    </div>
                    <span className="dsaw1ewqe">{this.state.changdu.length+this.state.changdu2.length}条评论</span>
                    <div className="div607"> {/*标签*/}
                        <span className="icon iconfont  diwn">&#xe71b;</span>
                    </div>
                </div>
                {/*占位的*/}
                <div className="zhanweiaaaa"  id="zhanwei"></div>
                {/*评论*/}
                {/*{this.props.location.state.name}*/}
                {/*<button >111111</button>*/}
                <div style={{"width":"10.8rem", }} className="dw1nmic" id="divo">
                    {/*长评论*/}
                  <div className="div142rem">
                      <span className="sd988">{this.state.changdu.length}长评论</span>
                  </div>
                    {this.state.changdu.map((vala,inx) => (
                        <div className="sdw1ds11" key={inx}>
                            {/*上半部分*/}
                            <div className="dadwi1dsadsadwadawdawdwa">
                              <div style={{"width":"1.7rem","height":".75rem","float":"left"}}><img src={vala.avatar} alt="" className="dw00"/> </div>
                                <div className="div7900" >
                                    {vala.author}
                                </div>
                                <div className="dsadwdqdw">
                                    <span className="icon iconfont csawe">&#xe673;</span>{vala.likes}
                                </div>
                            </div>
                            <div className="daww11wd">
                                {vala.content}
                            </div>
                            <div className="daww11wdsadwad">
                                {moment(vala.time).format("MM-DD HH:mm:ss")}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="dsadw1dasmdihsa9fhaewbigsdhfsauer" id="duanping" onClick={this.tianchuan.bind(this)}>
                    {this.state.changdu2.length}条短评
                    <img src={imgaa} className="wdspana"  id="spansss" alt=""></img>
                </div>
                {/*短评语*/}
                <div id="duanpingyun">
                {this.state.changdu2.map((vala,inx) => (
                    <div className="sdw1ds11" key={inx}>
                        {/*下半部分*/}
                        <div className="dadwi1dsadsadwadawdawdwa">
                            <div style={{"width":"1.7rem","height":".75rem","float":"left"}}><img src={vala.avatar} alt="" className="dw00"/> </div>
                            <div className="div7900" >
                                {vala.author}
                            </div>
                            <div className="dsadwdqdw">
                                <span className="icon iconfont csawe">&#xe673;</span>{vala.likes}
                            </div>
                        </div>
                        <div className="daww11wd">
                            {vala.content}
                        </div>
                        <div className="daww11wdsadwad">
                            {moment(vala.time).format("MM-DD HH:mm:ss")}
                        </div>
                    </div>
                ))}
                </div>


            </div>
        )
    }
    componentDidMount(){
        axios.get("/api/4/story/"+this.props.location.state.name+"/long-comments").then((res)=>{
            console.log(res.data);
            this.setState({
                changdu:res.data.comments
            });
        })

        axios.get("/api/4/story/"+this.props.location.state.name+"/short-comments").then((res)=>{
            console.log(res.data);
            this.setState({
                changdu2:res.data.comments
            });
        })
    }

    tianchuan(e){
        console.log(e.target.offsetTop);
        var aaa=document.getElementById("duanpingyun")
        var bbb=document.getElementById("duanping")
        var ospan=document.getElementById("spansss")
        console.log(bbb.offsetHeight);
        if(this.state.ad===false){
            // console.log(1);
            // document.getElementById('duanping').scrollTop = 1800000;
            // document.documentElement.scrollTop
            let o  =bbb.offsetTop;
            // let i = e.target.offsetHeight
            // console.log(i);
            setTimeout(() => {
                document.documentElement.scrollTop = o-90
            },0)
            aaa.style.display="block"
            ospan.src=imga3
            this.state.ad=true
        }else if(this.state.ad===true){
            // console.log(2);
            ospan.src=imgaa
            document.documentElement.scrollTop =0;
            aaa.style.display="none"
            this.state.ad=false
        }


    }
}
export default Comment