import React, { Component } from 'react';

import "./slider.css"

    let mass = [
      <img src={`../../assets/1.jpg`} alt="img" />,
      <img src={`../../assets/2.jpg`} alt="img" />,
      <img src={`../../assets/3.jpg`} alt="img" />,
      <iframe id="Youtube" className="iframe" width="353px" height="473px" src="https://www.youtube-nocookie.com/embed/PUHlmS4J-M0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      <img src={`../../assets/5.jpg`} alt="img" />,
      <img src={`../../assets/6.jpg`} alt="img" />,
      <img src={`../../assets/7.jpg`} alt="img" />,
      <img src={`../../assets/8.jpg`} alt="img" />,
      <img src={`../../assets/9.jpg`} alt="img" />,
    ];
    let mass2 = [
      <img src={`../../assets/1.jpg`} alt="img" />,
      <img src={`../../assets/2.jpg`} alt="img" />,
      <img src={`../../assets/3.jpg`} alt="img" />,
      <img src={`../../assets/4.jpg`} alt="img" />,
      <img src={`../../assets/5.jpg`} alt="img" />,
      <img src={`../../assets/6.jpg`} alt="img" />,
      <img src={`../../assets/7.jpg`} alt="img" />,
      <img src={`../../assets/8.jpg`} alt="img" />,
      <img src={`../../assets/9.jpg`} alt="img" />,
      
    ];

class Slider extends Component {
  state = {
    count: 1,
  };

  handleLeft = () => {
    console.log("count", this.state.count);
    let newCount = this.state.count - 1;
    console.log("newCount", newCount);

    this.setState({ count: newCount });
    
    console.log("count", this.state.count);


    if (this.state.count === 0) {
      this.setState({ count: mass.length-1 });}
      
    if (document.querySelectorAll(".active").length) {
      document.querySelector(".active").classList.remove("active");
      var player = document.getElementById('Youtube');
      console.log(player.src = "");
    }

      document.querySelectorAll(".photos")[this.state.count].classList.add("active");

      if (document.querySelectorAll(".active__gal").length) {
        console.log(document.querySelector(".active__gal").classList.remove("active__gal"));
      }
    document.querySelectorAll(".sliderGalery__item")[this.state.count].classList.add("active__gal");
    var player = document.getElementById('Youtube');
   player.src = "https://www.youtube-nocookie.com/embed/PUHlmS4J-M0";

  };

  handleRight = () => {
    if (document.querySelectorAll(".active").length) {
      document.querySelector(".active").classList.remove("active");
      var player = document.getElementById('Youtube');
      console.log(player.src = "");
    }
    document.querySelectorAll(".photos")[this.state.count].classList.add("active");
    if (document.querySelectorAll(".active__gal").length) {
        console.log(document.querySelector(".active__gal").classList.remove("active__gal"));
      }
    document.querySelectorAll(".sliderGalery__item")[this.state.count].classList.add("active__gal");

    let newCount = this.state.count + 1;
    this.setState({ count: newCount });

    if (this.state.count === mass.length-1) {
      this.setState({
        count: 0,
      });
    }
    var player = document.getElementById('Youtube');
    player.src = "https://www.youtube-nocookie.com/embed/PUHlmS4J-M0";
  };




  

  handeleGalery = (index) => {
    if (this.state.count === mass.length-1) {
      this.setState({ count: 0 });
    }
    if (document.querySelectorAll(".active").length) {
      document.querySelector(".active").classList.remove("active");
      var player = document.getElementById('Youtube');
      console.log(player.src = "");
    }
      document.querySelectorAll(".photos")[index].classList.add("active");




      if (document.querySelectorAll(".active__gal").length) {
        console.log(document.querySelector(".active__gal").classList.remove("active__gal"));
      }
      document.querySelectorAll(".sliderGalery__item")[index].classList.add("active__gal");


    if (index === mass.length-1) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: index + 1 });
    }
    var player = document.getElementById('Youtube');
    player.src = "https://www.youtube-nocookie.com/embed/PUHlmS4J-M0";

    // на весь экран

  };

  openImg(index){
    // let img = document.querySelector(".photos");
    let fff = document.querySelector(".slider");
   
        fff.classList.toggle('show');

}

  render() {
    document.addEventListener("DOMContentLoaded", function (event) {
      document.querySelectorAll(".photos")[0].classList.add("active");
      
    });

    // let img = document.querySelector(".photos");
    // img.addEventListener("click", function (event) {
    //  console.log('fdfd');
    // });

    return (
        <div className="slider__wrap">
      <div className="slider">
    
          {mass.map((item, index) => (
          <div className="photos" onClick={() => this.handeleGalery(index)}>
            <button className="btn__show" onClick={()=>(this.openImg(index))}> {item}</button>
            
          </div>
        ))}
    
        <div className="btns">
          <button className="btn__left" onClick={this.handleLeft}>left</button>
          <button className="btn__right" onClick={this.handleRight}>right</button>
        </div>
      </div>
      <div className="fff"></div>
              <div className="sliderGalery">
              {mass2.map((item, index) => (
                <div onClick={() => this.handeleGalery(index)}>
                  <div className="sliderGalery__item"> {item} </div>
                </div>
              ))}
            </div>
            </div>
    );
  }
}

export default Slider;