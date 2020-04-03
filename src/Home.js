import React from 'react';
import {gsap, TweenMax} from 'gsap';
import {withRouter} from 'react-router-dom';
import circles from './static/circles/circles.js'
import { gapi } from 'gapi-script';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      width: null,
      height: null
    };
  }
  componentWillMount(){
    let w = window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
    let h = window.innerHeight;

    let init_circles = [];
      for(let i = 0; i < circles.length; i++){

          init_circles[i] = circles[i];

      }
    this.setState({
      circles: circles,
      width: w,
      height: h,
    });

  }
  async componentDidMount(){
    try{

      this.mouse();


    }
    catch(error){
      alert(error);
    }
  }


  render() {

    return (
      <>
        <span id="cursor" role="img" ref = {cursor => this.cursor = cursor}>🥖</span>

        <div id = "page">
          <div id = "home">
            <div className = "title"> Wheel of Bread </div>
            <p className = "story"></p>

          </div>
          <div id = "web">
          </div>
          <div id = "circles">
            {Object.keys(this.state.circles).map((item, i) => {
              return(
                <div className = "circle-block"
                     key = {'circle_' + i}
                     ref = { circle => this['circle_' + i] = circle }>
                  <div className = "circle-image" style = {{backgroundImage: "url(" +  this.state.circles[i]["path"]+ ")"}}>

                  </div>

                </div>
              )
            })}


          </div>




        </div>
      </>
    );
  }

  mouse(){

    document.addEventListener("mousemove", (e) => {
      TweenMax.to(this.cursor, 0.6, { css: { left: (e.clientX - 15), top: ((e.clientY + window.pageYOffset) - 20)} });
    });
    window.addEventListener('mousewheel', (e) => {
      TweenMax.to(this.cursor, 0.3, { css: { left: (e.clientX - 15), top: ((e.clientY + window.pageYOffset) - 20)}  });
    });

    document.addEventListener("click",(e) => {
      TweenMax.to(this.cursor, 1, {rotation: 270});
      TweenMax.set(this.cursor, {rotation: 0});
    });
  }









}

export default withRouter(Home);
