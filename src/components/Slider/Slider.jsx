import React, { Component } from "react";
import "./slider.css";
import video from "../../video/1.mp4";

import data from '../data.json';
let mass2=[];
let mass = [
  <img src={`../../assets/1.jpg`} alt="img" />,
  <img src={`../../assets/2.jpg`} alt="img" />,
  <img src={`../../assets/3.jpg`} alt="img" />,
  <video className="video__play" id="miniVideo" preLoad="yes" loop playsInline >
    <source src={video} type="video/mp4" />
    <source src={video} type="video/webm" />
  </video>,
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
    this.setState({ count: this.state.count - 1 });
    let coutPrev = this.state.count - 2;
    if (coutPrev < 0) {
      coutPrev = mass.length - 1;
    }
    if (this.state.count === 0) {
      this.setState({ count: mass.length - 1 });
    }
    if (document.querySelectorAll(".active").length) {
      document.querySelector(".active").classList.remove("active");
    }
    document.querySelectorAll(".photos")[coutPrev].classList.add("active");
    if (document.querySelectorAll(".active__gal").length) {
      document.querySelector(".active__gal").classList.remove("active__gal");
    }
    document.querySelectorAll(".sliderGalery__item")[coutPrev].classList.add("active__gal");
  };

  handleRight = () => {
    if (document.querySelectorAll(".active").length) {
      document.querySelector(".active").classList.remove("active");
    }
    document.querySelectorAll(".photos")[this.state.count].classList.add("active");
    if (document.querySelectorAll(".active__gal").length) {
      document.querySelector(".active__gal").classList.remove("active__gal");
    }
    document.querySelectorAll(".sliderGalery__item")[this.state.count].classList.add("active__gal");
    let newCount = this.state.count + 1;
    this.setState({ count: newCount });
    if (this.state.count === mass.length - 1) {
      this.setState({
        count: 0,
      });
    }
  };
  handeleGalery = (index) => {
    if (this.state.count === mass.length - 1) {
      this.setState({ count: 0 });
    }
    if (document.querySelectorAll(".active").length) {
      document.querySelector(".active").classList.remove("active");
    }
    document.querySelectorAll(".photos")[index].classList.add("active");
    if (document.querySelectorAll(".active__gal").length) {
      document.querySelector(".active__gal").classList.remove("active__gal");
    }
    document.querySelectorAll(".sliderGalery__item")[index].classList.add("active__gal");
    if (index === mass.length - 1) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: index + 1 });
    }
  };

  openImg(index) {
    let showModal = document.querySelector(".slider");
    showModal.classList.toggle("show");
  }
  closeShow() {
    let showModal = document.querySelector(".slider");
    showModal.classList.toggle("show");
  }
  touchRight(e) {
    let image = document.querySelector(".active");
    let widht = image.scrollWidth;
    if (widht / 2 > e.changedTouches[0].pageX) {
      this.handleRight();
    } else {
      this.handleLeft();
    }
  }



  render() {
    document.addEventListener("DOMContentLoaded", function (event) {
      document.querySelectorAll(".photos")[0].classList.add("active");
      document.querySelectorAll("video")[0].setAttribute("controls", "controls");
      document.querySelectorAll("video")[1].setAttribute("autoPlay", "autoplay");
    });


    // (data).map((item)=>(
    //   console.log(item)
    //   // item.imgSlider.map((e)=>(
    //   //   console.log(e)
    //   // ))
    //  ))

if(2 === 2){

}
    data.map((item) =>
      Object.values(item.imgSlider).map((e) => (
        console.log(<img src={e} alt="img" />)
      ))
    )

    return (
      <div className="slider__wrap">
        <div className="slider">
          {mass.map((item, index) => (
            <div key={`${index}__slider`} className="photos" onClick={() => this.handeleGalery(index)}>
              <button className="btn__show" onTouchEnd={(e) => this.touchRight(e)} onClick={(e) => this.openImg(index)}>
              {item}
              </button>
            </div>
          ))}
          <div className="btns">
            <button className="btn__left" onClick={this.handleLeft}></button>
            <button className="btn__right" onClick={this.handleRight}></button>
          </div>
          <button onClick={(e) => this.closeShow()} className="close__show"></button>
        </div>
        <div className="sliderGalery">
          {mass.map((item, index) => (
            <div key={`${index}__galery`} onClick={() => this.handeleGalery(index)}>
              <div className="sliderGalery__item">
              {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Slider;
