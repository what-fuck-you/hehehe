import React from 'react';
import tsIcon from "../img/images/day03_01.jpg";
// import Axios from 'axios'
import '../css/Collect.css'
class Collect extends React.Component {
    constructor(){
        super();
        this.state={
                imga:[],
                tile:[],
                data:[],
        }
    }

    render() {
        return(
            <div>
                <div className="collextday01">
                    <div className="collectday02">
                        <span className="icon iconfont" onClick={()=>{this.props.history.push({ pathname:'/Index'})} }>&#xe605;</span>
                    </div>
                    <div className="collectday03"><span>{this.state.data.length}条收藏</span></div>
                </div>
                {this.state.data.map((aaa,index)=>{
                    return (
                        <div key={index} className="disniea">
                            <div className="divse11">
                                {aaa.title}
                            </div>
                            <div className="sd0000">
                                <img src={aaa.img} alt=""  className="imgcs"/>
                            </div>
                        </div>
                    )

                })}

            </div>
        )
    }
    // componentDidMount(){
    //     // this.setState({
    //     //     imga:this.props.location.state.name,
    //     //     tile:this.props.location.state.idaa
    //     // })
    //     let arr=[];
    //     for(var i=0;i<sessionStorage.length;i++);
    //     console.log(sessionStorage.length);
    //     arr.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))));
    //     console.log(arr);
    //     this.setState({
    //         data:arr
    //     })
    //     console.log(this.state.data);
    // }


    componentDidMount() {
        let arr = [];
        for(var i = 0 ; i <sessionStorage.length ; i++ )
            arr.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))));
        console.log(arr);
        this.setState({
            data:arr
        })
        // console.log(this.state.data);
    }

}
export default Collect
