import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';
//const Avatar = (props) => {
class Avatar extends Component{
    constructor(){
        super();
        this.state = {
            name:"Thank you Sir and Mam for Making our Online Semester Interesting"
        }
    }
    namechange(){
        this.setState({
            name:"This Is Awesome"
        })
    }
    render(){
        const avatarlistarray =[
            {
                id:1,
                name:"Kiran Sir",
                work:"Osm Singer!!"
            },
            {
                id:2,
                name:"Krupali Mam",
                work:"OP Singer!!"
            },
            {
                id:3,
                name:"Batch IIIT Surat ",
                work:"Can Only Thank"
            },
            {
                id:4,
                name:"ME",
                work:"Happy"
            }
        ]
        const arrayavatarcard = avatarlistarray.map((avatarcard,i) => {
            return <Avatarlist key={i} id={avatarlistarray[i].name}
                                name={avatarlistarray[i].name}
                                work={avatarlistarray[i].work}/>
        })
        return (<div className="mainpage">
        <h1 class="tc">{this.state.name}</h1>
        {arrayavatarcard}
        <button onClick={() => this.namechange()}>Subscribe</button>
    </div>
        )
    }
}
 /*   const avatarlistarray =[
        {
            id:1,
            name:"Sparsh",
            work:"Mongodb"
        },
        {
            id:2,
            name:"Ishu",
            work:"ExpressJs"
        },
        {
            id:3,
            name:"Chhotu",
            work:"Reactjs"
        },
        {
            id:4,
            name:"J",
            work:"NodeJs"
        }
    ]
    const avatarlistarray =[
        {
            id:1,
            name:"Sparsh",
            work:"Mongodb"
        },
        {
            id:2,
            name:"Ishu",
            work:"ExpressJs"
        },
        {
            id:3,
            name:"Chhotu",
            work:"Reactjs"
        },
        {
            id:4,
            name:"J",
            work:"NodeJs"
        }
    ]
    return (<div className="mainpage">
        <h1 class="tc">Welcome to Avatar World</h1>
        {arrayavatarcard}
        <button class="tr">Subscribe</button>
    </div>
        
    )
}*/

export default Avatar;
