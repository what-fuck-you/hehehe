import React from 'react';
import Axios from 'axios'
import 'antd-mobile/dist/antd-mobile.css';
import { Carousel, WingBlank } from 'antd-mobile';
import "../../node_modules/swiper/css/swiper.min.css"
import tsIcon from '../img/images/day03_01.jpg'; //引入的图片
import "../css/Index.css"
import "../font/iconfont.css"
import moment from 'moment'
import { Drawer, List, NavBar, Icon } from 'antd-mobile';

var deviceWidth = document.documentElement.clientWidth;
if(deviceWidth > 1080) deviceWidth = 1080;
document.documentElement.style.fontSize = deviceWidth/10.8 + 'px';



class Index extends React.Component {
    state = {
        data: ['1', '2', '3', '4'],
        imgHeight: 176,
        slideIndex: 2,
        date:[],
        sji:"",
        datea:[],
        open: false,
        // ida:""
    }

    onOpenChange = (...args) => {
        // console.log(args);

        if(!this.state.open){
            document.body.style.overflow='hidden'
        }else{
            document.body.style.overflow=''
        }

        this.setState({ open: !this.state.open });
    }



    componentDidUpdate() {
        // After the new child element is rendered, change the slideIndex
        // https://github.com/FormidableLabs/nuka-carousel/issues/327
        if (this.state.slideIndex !== this.state.data.length - 1) {
            /* eslint react/no-did-update-set-state: 0 */
            this.setState({ slideIndex: this.state.data.length - 1 });
        }
    }
    render() {

        const sidebar = (
            <div>
                <div className="apb">
                     <div className="div916333">
                         <div className="daw1d1sad">
                             <div className="divw1d22323">
                                 <span className="sadwdasdwskkkkkkkkk"></span>
                                 <span>哈哈哈</span>
                             </div>
                         </div>
                         <div className="adw11111">
                             <div className="adw111112">
                                 <span className="icon iconfont fonys" onClick={this.Collecta1.bind(this)}>&#xe65f;</span>
                                 <span className="sdawd1112">我的收藏</span>
                             </div>
                             <div className="adw11111dsa">
                                 <span className="icon iconfont fonys">&#xe639;</span>
                                 <span className="sdawd1112">离线下载</span>
                             </div>
                         </div>
                         <div className="dawd111">
                             <span className="icon iconfont sdawccc">&#xe630;</span>
                             <span className="sdawccc111">首页</span>
                         </div>

                     </div>
                </div>
            </div>
        );

        return(
            <div className="odiv">
                <img src={tsIcon} className="day0312" alt=""/>
                <div className="odvi8" >
                    {/*<Icon type="unordered-list" />*/}
                    <div className="inde">
                        <span className="iconfont icon-caidan cai" onClick={this.onOpenChange}></span>

                    </div>
                    <div className="indea">
                        首页
                    </div>
                    <div className="div234">
                        <span className="iconfont icon-lingdang cai"></span>
                        <span className="iconfont icon-gengduo cai lis"></span>
                    </div>
                </div>
                <div className="zhanwei" ></div>
                {/*轮播图*/}

                <div className="div675">
                    <WingBlank style={{margin: 0 }}>
                        <Carousel className="dsaw"
                            autoplay={false}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                        >
                            {this.state.data.map(val => (
                                <a
                                    key={val}
                                    href="www.baidui.com"
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight,margin: 0 }}
                                >
                                    <img  className="dsaw"
                                        src={val.image}
                                        alt="hhh"
                                        style={{ width: '10.8rem',height:'6.75rem', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                    <span className="span446">
                                        {val.title}
                                    </span>
                                </a>
                            ))}
                        </Carousel>
                    </WingBlank>
                </div>
                <div className="div100">
                    <div className="div154"><span className="dw1">今日热点</span></div>
                    {this.state.date.map((vala,inx) => (
                    <div className="div1033297" key={inx} onClick={()=>{ this.props.history.replace('/Xiangqing') ;}}>
                        <div className="div644216">
                                <span>
                                    {vala.title}
                                </span>
                        </div>
                        <div className="div248217">
                            {/*{vala.images}*/}
                            <img src={vala.images} className="daisdu" alt="hh" />
                        </div>
                    </div>
                ))}

{/*好多的评论*/}
                    {this.state.datea.map((vala,inx) => {
                        return (
                            <div key={inx}>
                                <div className="div154"><span className="dw1">
                                    {moment(vala.date).format("MM月DD日-dddd ")}
                                </span></div>
                                {vala.stories.map((idn,aa)=>{
                                    return(
                                        <div key={aa}>
                                            <div className="div1033297"  onClick={()=>{ this.props.history.replace({ pathname:'/Xiangqing',state:{name : idn.id } });
                                                // this.props.router.push()
                                            }}>
                                                <div className="div644216">
                                                <span>
                                                    {idn.title}
                                                </span>
                                                </div>
                                                <div className="div248217">
                                                    <img src={idn.images} className="daisdu" alt="呵呵"/>
                                                </div>
                                            </div>
                                        </div>
                                        )


                                })}

                            </div>
                        )
                    })}
                </div>

         {/*<div className="div2158"></div>*/}

                <Drawer
                    className="my-drawer"
                    style={{width:0}}
                    enableDragHandle
                    // contentStyle={{ color: '#A6A6A6', textAlign: 'center', }}
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', }}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                    overlayStyle={{position:'fixed',}}
                    sidebarStyle={{position:'fixed',}}
                    dragHandleStyle={{width:0}}
                >
                    {/*Click upper-left corner*/}
                </Drawer>

            </div>
        )
    }
    componentDidMount() {
        Axios.get('/api/4/news/latest').then((res)=>{
            // console.log(res.data);
            // console.log(this.state.sji);
            this.setState({
                date:res.data.stories,
                // ida:res.data.id,
                sji:res.data.date

            });
            // console.log(this.state.sji);
            //定时器
            setTimeout(() => {
                this.setState({
                    data:res.data.top_stories

                });
            }, 100);
            // this.state.date=res.data
            window.addEventListener('scroll',this.Scroll.bind(this))
        })





    }
    Scroll(){
        // 可视高+滚动高>=滚动内容高
        // var a=document.
        //变量scrollTop是滚动条滚动时，离顶部的距离
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        //变量windowHeight是可视区的高度
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //变量scrollHeight是滚动条的总高度
        var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        if(scrollTop+windowHeight>=scrollHeight){
        Axios.get("/api/4/news/before/"+this.state.sji).then((res)=>{
            // console.log(res.data);
            // console.log(res.data.stories);
            this.state.datea.push(res.data);
            this.setState({
                datea:this.state.datea,
                sji:res.data.date
            });
        })
        }
    }


    // btn(){
    //     console.log("111");
    // }
    Collecta1(){
        this.props.history.push({pathname:'/Collect'})
    }


}

// ReactDOM.render(<Index />, mountNode);
export default Index
