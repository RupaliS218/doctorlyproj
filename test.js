
import React, { Component } from "react";
import { Redirect, Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { withTranslation } from 'react-i18next';

import { connect } from "react-redux";

import { clearMessage } from "./../../actions/message";

import { history } from './../../helpers/history';


import $ from 'jquery';
import jQuery from 'jquery';

import "./../../assets/website/css/styles.css"

import logoImg from './../../assets/website/img/logo-01.png';
import "./../../assets/website/css/styles.css"
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Popup from "../website/Popup"

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Carousel from 'react-bootstrap/Carousel';
import FloatingLabel from "react-bootstrap-floating-label";

import './../../assets/css/bootstrap.min.css'

import logo from  './../../assets/website/img/livebid/logo.png';
import home_icon from './../../assets/website/img/livebid/home_icon.svg';
// import home_icon from './../../assets/website/img/livebid/home_icon.svg';
import video_icon from './../../assets/website/img/livebid/video_icon.svg';
import Rectangle from './../../assets/website/img/livebid/Rectangle-294.svg';
import user_icon from './../../assets/website/img/livebid/user_icon.svg';
import Language from './LanguageSelection'
import avatarImg2 from './../../assets/img/profiles/avatar-02.jpg';
import avatarImg3 from './../../assets/img/profiles/avatar-03.jpg';
import avatarImg4 from './../../assets/img/profiles/avatar-04.jpg';
import avatarImg5 from './../../assets/img/profiles/avatar-05.jpg';
import avatarImg6 from './../../assets/img/profiles/avatar-06.jpg';
import avatarImg8 from './../../assets/img/profiles/avatar-08.jpg';
import avatarImg9 from './../../assets/img/profiles/avatar-09.jpg';
import avatarImg13 from './../../assets/img/profiles/avatar-13.jpg';
import avatarImg17 from './../../assets/img/profiles/avatar-17.jpg';
import avatarImg21 from './../../assets/img/profiles/avatar-21.jpg';
import SmallLogoImg from './../../assets/img/small-logo.png';


import {UserLogin,register,ForgotPassword,OTPCheck,UpdatePassword,GoogleLoginUser,Notifications} from "./../../actions/website/Home"
import {toast} from 'react-toastify';
import GoogleLogin from 'react-google-login';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Header extends Component {

  constructor(props) {
    super(props);

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.ShowNotification=this.ShowNotification.bind(this);
    this.handleLoginwithgoogle=this.handleLoginwithgoogle.bind(this);
    this.onChangeEmailID = this.onChangeEmailID.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeMobile=this.onChangeMobile.bind(this);
    this.handleOtpCheckForgot=this.handleOtpCheckForgot.bind(this)
    this.handleSavePasswordSubmit = this.handleSavePasswordSubmit.bind(this);
    this.onChangeName=this.onChangeName.bind(this);
    this.onChangeSavePassword=this.onChangeSavePassword.bind(this);
    this.onChangeConfirmSavePassword=this.onChangeConfirmSavePassword.bind(this);
    this.onChangeOtpOneForgot = this.onChangeOtpOneForgot.bind(this);
    this.handlSubmitForgotPassword=this.handlSubmitForgotPassword.bind(this);
    this.onChangeRegiserMobile=this.onChangeRegiserMobile.bind(this);
   this.onChangeRegisterEmailID=this.onChangeRegisterEmailID.bind(this);
   this.onChangeRegisterPassword=this.onChangeRegisterPassword.bind(this);
   this.onChangeForgotMail = this.onChangeForgotMail.bind(this);

    this.state = { showPopup: false ,email_id:"",listNotification:[],forgot_mail:"",otponeforgot:"",mailWithOtp:"",
    password:"", mobile_no:"",name:"",register_email_id:"",showactivemenu:'',register_mobile_no:"",register_password:"",save_password:"",confirm_save_password:"", isNotification:" ", isShowNotification:" "};

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
   console.log("component did mount fired")
    var lang
    lang = localStorage.getItem("userId");
    // console.log("value of lang is")
    // console.log(lang)
    if(lang!=null){
      console.log(lang)
      this.setState({
        showPopup: true,
      });
    }
this.ShowNotification()
  }


  ShowNotification= () => {
    console.log("Notification")
    const { dispatch, history } = this.props;
    dispatch(Notifications())
    .then((response) => {

      console.log(response)
      this.setState({
        listNotification:response.data
      });

      // $("#savePasswordModal").modal("hide");

      // this.setState({
      //   loading: false,
      // });
    })
    .catch((response) => {


      // this.setState({
      //   forgot_pass_token: "",
      // });

      toast.error("something went wrong please try again.", {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeonClick: true, pauseOnHover: true, draggable: true, progress: undefined, });

      // this.setState({
      //   loading: false
      // });
    });

  }

  
  onChangeEmailID(e) {
    console.log("email id is i")
    console.log(e.target.value)
    this.setState({
      email_id: e.target.value,
      mobile_no:e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeRegiserMobile(e) {
    this.setState({
      register_mobile_no: e.target.value,
    });
  }
  onChangeRegisterEmailID(e) {
    this.setState({
      register_email_id: e.target.value,
    });
  }
  onChangeRegisterPassword(e) {
    this.setState({
      register_password: e.target.value,
    });
  }
  onChangeMobile(e) {
    this.setState({
      mobile_no: e.target.value,
    });
  }
  onChangeOtpOneForgot(e) {
    //console.log("one");
    //console.log(e.target.value);
    this.setState({
      otponeforgot: e.target.value,
    });

    $("#otptwoforgot").focus();
  }
  onChangeForgotMail(e) {
    //console.log("one");
    //console.log(e.target.value);
    this.setState({
      forgot_mail: e.target.value,
      mailWithOtp:e.target.value,
    });
  }
  onChangeSavePassword(e){
    this.setState({
        save_password: e.target.value,
    });
  }

  onChangeConfirmSavePassword(e){
    this.setState({
        confirm_save_password: e.target.value,
    });
  }

  handleSavePasswordSubmit(e) {
    console.log("save password")
    e.preventDefault();
var isValid = true;
    // this.setState({
    //   loading: true,
    // });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (typeof this.state.save_password !== "undefined" && typeof this.state.confirm_save_password !== "undefined") {

          

      if (this.state.save_password != this.state.confirm_save_password) {
  
        isValid = false;
       // let error_msg_str = "Passwords don't match!!!!.";

        //    $('#save_password_error_message').html(error_msg_str).css('color', 'red');
       // errors["password"] = "Passwords don't match.";
        //toast.error("Passwords don't match", {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeonClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
  
      }
  
  }
    // var validation_str=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;

     if(isValid) 
     {
    
        if (this.checkBtnOtpForgotSend.context._errors.length === 0 ) {
console.log("entering now update")
          dispatch(UpdatePassword(this.state.save_password, this.state.confirm_save_password, this.state.forgot_mail, this.state.forgot_pass_token))
            .then((response) => {

              this.setState({
                save_password: "",
                confirm_save_password:""
              });

              $("#savePasswordModal").modal("hide");

              // this.setState({
              //   loading: false,
              // });
            })
            .catch((response) => {
       

              this.setState({
                forgot_pass_token: "",
              });

              toast.error("something went wrong please try again.", {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeonClick: true, pauseOnHover: true, draggable: true, progress: undefined, });

              // this.setState({
              //   loading: false
              // });
            });
        } else {
            this.setState({
                forgot_pass_token: "",
            });
          toast.error("something went wrong please try again.", {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeonClick: true, pauseOnHover: true, draggable: true, progress: undefined, });

          // this.setState({
          //   loading: false,
          // });
        }

    }
    else{
        
        //let error_msg_str = "1. Your password must be between 8 and 20 characters.<br/>2. Your password must contain at least one uppercase, or capital, letter (ex: A, B, C, etc.)<br/>3. Your password must contain at least one lowercase letter (ex: a, b, c, etc.)<br/>4. Your password must contain at least one number digit (ex: 0, 1, 2, 3, etc.)<br/>5. Your password must contain at least one special character -for example: $, #, @, !,%,^,&,*,(,)";
        
        //let error_msg_str = "Password should be between 8-20 characters and should have atleast one uppercase, one lowercase, one numerical and one special character.";
        let error_msg_str = "Passwords don't match!!!!.";
        $('#save_password_error_message').html(error_msg_str).css('color', 'red');

        // this.setState({
        //     loading: false,
        // });
    }
  }
  handleLoginwithgoogle = (response) => {
    console.log("response from goggle login")
    console.log(response)
    const { dispatch, history } = this.props;

    
    // response.profileObj.email
      dispatch(GoogleLoginUser('john@test.com'))
        .then((response) => {

          this.setState({
            loading: false
          });

          console.log("response:");
          console.log(response);

          if(response && typeof response !=="undefined" && response.length>0){
            // if(response[0].type==='user'){
            //   history.push("/web");
            // }else{
            //   if(response[0].type==='ngo'){
            //     history.push("/ngo/home");
            //   }else{
            //     history.push("/");     
            //   }
            // }

          }else{
           history.push("/web"); 
          }
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
  }
  // handleLoginwithgoogle(e){
  //   e.preventDefault();
  //   console.log("submit btuon")
  //     console.log(e)
    
  //     // this.Addmodalform.validateAll();
    
  //       const { dispatch, history } = this.props;
    
  //       if (this.checkBtn.context._errors.length === 0) {
  //         dispatch(GoogleLogin("this.state.email_id"))
  //           .then((response) => {
             
  //             if(response.success || response.success ==="true" || response.success ===true){
  //               toast.success('successful..!', {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
  //               this.setState({
  //                 showPopup: true,
  //                 email_id:"",
  //                 mobile_no:"",
  //                 password:"",
  //               });
  //               $('#popuplogin').modal('hide')
  //           }else{
    
  //             toast.error(response.message, {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeonClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
  //             this.setState({
  //               showPopup: false,
  //               email_id:"",
  //               mobile_no:"",
  //               password:"",
  //             });
  //             $('#popuplogin').modal('hide')
  //           }
  //           })
  //           // .catch(() => {
             
  //           //   toast.error("something went wrong..!!", {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
  //           //   $('#popuplogin').modal('hide')
  //           // });
  //       } else {
          
  //         toast.error("something went wrong..!!", {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
  //         this.setState({
  //           showPopup: false,
  //           email_id:"",
  //           password:"",
  //         });
  //       }

  // }
  handleLoginSubmit(e) {
    e.preventDefault();
console.log("submit btuon")
  

  // this.Addmodalform.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(UserLogin(this.state.email_id, this.state.mobile_no, this.state.password))
        .then((response) => {
         
          if(response.success || response.success ==="true" || response.success ===true){
            toast.success('successful..!', {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
            this.setState({
              showPopup: true,
              email_id:"",
              mobile_no:"",
              password:"",
            });
            $('#popuplogin').modal('hide')
        }else{

          toast.error(response.message, {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeonClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
          this.setState({
            showPopup: false,
            email_id:"",
            mobile_no:"",
            password:"",
          });
          $('#popuplogin').modal('hide')
        }
        })
        // .catch(() => {
         
        //   toast.error("something went wrong..!!", {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
        //   $('#popuplogin').modal('hide')
        // });
    } else {
      
      toast.error("something went wrong..!!", {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
      this.setState({
        showPopup: false,
        email_id:"",
        password:"",
      });
    }
  }
  handleSubmit=(e)=>{
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.Addform.validateAll();
	$('#createad').modal('hide');

   
  }
  handleOtpCheckForgot(e) {
    console.log("handle otp checked")
    e.preventDefault();

    console.log("handle otp checked 1")
    // this.setState({
    //   loading: true,
    // });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtnOtpForgotSend.context._errors.length === 0) {
      
      // var otp = this.state.otponeforgot+this.state.otptwoforgot+this.state.otpthreeforgot+this.state.otpfourforgot;
      console.log("handle otp checked 2")
      dispatch(OTPCheck(this.state.otponeforgot,this.state.mailWithOtp))
        .then((response) => {
          console.log("handle otp checked rsp")
          console.log(response.success)
          if(response.success || response.success ==="true"){
            console.log("375 otp verified");
            this.setState({
              otponeforgot: "",
            });
            $("#otpModalForgot").modal("hide");
            $("#savePasswordModal").modal("show");

          //  toast.success(response.message, {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeonClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
          }else{
            //console.log("379");
           // toast.error(response.message, {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeonClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
            // this.setState({
            //     loading: false,
            //   });
          }
        })
      }
     
  }
  handlSubmitForgotPassword(e) {
    e.preventDefault();

    // this.setState({
    //   loading: true,
    // });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtnForgot.context._errors.length === 0) {

      dispatch(ForgotPassword(this.state.forgot_mail))
        .then((response) => {

          if(response.success || response.success ==="true"){
            console.log("375");
            // this.setState({
            //   forgot_pass_token: response.data.forgot_pass_token,
            // });
            $("#ForgotPassModal").modal("hide");
            $("#otpModalForgot").modal("show");
this.setState({
  forgot_mail:""
})
            toast.success(response.message, {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeonClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
          }else{
            //console.log("379");
            toast.error(response.message, {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeonClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
            // this.setState({
            //     loading: false,
            //   });
          }
        })
      }
  }
  handleRegisterSubmit=(e)=>{
    e.preventDefault();

    this.setState({
      loading: true,
    });
    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(register(this.state.name, this.state.register_mobile_no,this.state.register_email_id   ,this.state.register_password   ))
        .then((response) => {
         console.log("success register")
          if(response.success || response.success ==="true" || response.success ===true){
            toast.success('successful..!', {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
            this.setState({
              name: "",
              register_email_id:"",
              register_mobile_no:"",
              register_password:"",
            });
            $('#popupregister').modal('hide')
        }else{
          console.log("else register")
          toast.error(response.message, {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeonClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
          this.setState({
            name: "",
            register_email_id:"",
            register_mobile_no:"",
            register_password:"",
          });
          $('#popupregister').modal('hide')
        }
        })
        // .catch(() => {
         
        //   toast.error("something went wrong..!!", {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
        //   $('#popupregister').modal('hide')
        // });
    } else {
      
      toast.error("something went wrong..!!", {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
      this.setState({
        name: "",
        register_email_id:"",
        register_mobile_no:"",
        register_password:"",
      });
      $('#popupregister').modal('hide')
   
    }

   
	$('#popupregister').modal('hide');

   
  }

  showRegister=(e) =>{
    $('#popupregister').modal('show')
    $('#popuplogin').modal('hide')
  }
  showActive = (id) => {
    console.log("show active triggered")
    console.log(id)
    this.setState({
      showactivemenu:id
    })

  }
showLogin =(e) =>{
  this.setState({email_id:"",password:""},()=>{ $('#popuplogin').modal('show')});
  // localStorage.removeItem("userId")
  $('#popuplogin').modal('show')
}
showLogout=(e) =>{
  localStorage.removeItem("userId")
 // localStorage.clear()
  this.setState({
    showPopup: false,
  });

 // $('#popuplogin').modal('show')
}

notificationFun=() =>{
  console.log("notificationFun: ");
  //console.log(this.state.isShowNotification);
}


  render() {

    const { isLoggedIn, message } = this.props;

    
    return (
      <React.Fragment>
      <header>
	
	<div className="bottom-header fixed-top navback ">
	<div className="container">
		<div className="row">
			<div className="col-2">
				<div className="logo">
					<NavLink exact to="/web"><img src={logo}/></NavLink>
				</div>
			</div>
				<div className="menulist-item col-10"  id="mySidenav">	
								<div className="row">
									<nav id='cssmenu'>
										<div id="head-mobile" ></div>
										<button className="button navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav" >
                    <li  ><NavLink exact to='/web' activeClassName="main-menu-selected-active"><img src={home_icon}/>{this.props.t('Home')} </NavLink></li>
                    {/* <li><a href="#"><img src={video_icon}/> LIVE AUTION</a></li> */}
                    <li ><NavLink exact to="/web/live_auction" activeClassName="main-menu-selected-active"><img src={video_icon}/>{this.props.t('liveBid')} </NavLink></li>
                    <li ><NavLink exact to="/web/normal_auction" activeClassName="main-menu-selected-active"><img src={Rectangle}/>{this.props.t('NormalAds')}  </NavLink></li>
                    {this.state.showPopup ===true? (
                     <>
                     <li ><NavLink exact to= "/web/myads" activeClassName="main-menu-selected-active"><img src={Rectangle}/> {this.props.t('myProducts')} </NavLink></li>
                    <li ><NavLink exact to="/web/mybids" activeClassName="main-menu-selected-active" ><img src={Rectangle}/>{this.props.t('MyBids')} </NavLink></li>
                    </>
                    ):(null
                    
                    )}
                    <li ><NavLink exact to="/web/contacts" activeClassName="main-menu-selected-active"><img src={user_icon}/> {this.props.t('contact')} </NavLink></li>
                                       </ul>
                    </div>
										
									</nav>
                  {this.state.showPopup ===false? (
                     <>
									 <div className="signup-btn">
                     <button className="btn signpubtn btn-primary-Login "  onClick={this.showLogin	}>{this.props.t('Login')}</button>
										{/* <a href="javascript:void(0)" onClick={this.showLogin	} >E-SERVICES LOGIN</a> */}
										{/* <a href="javascript:void(0)" onClick={this.showRegister	} >SIGN UP</a>  */}
									</div> 
                  </>
                    ):(
                      <div className="signup-btn">
                         <button className="btn signpubtn btn-primary-Login"  onClick={this.showLogout	}>{this.props.t('logout')}</button>
                    	{/* <a href="javascript:void(0)" onClick={this.showLogout	} >{this.props.t('logout')}</a> */}
                    </div>
                    )}
                    <ul class="nav user-menu flagmargin">
                    <Language/>
                    </ul>
     
            {/* <button onClick={(e) => {
              console.log("isNotification click");
              console.log(this.state.isNotification);
              console.log(typeof this.state.isNotification);
              if(!this.state.isNotification ===" show" || this.state.isNotification ==="" || this.state.isNotification ===" " || ((this.state.isNotification).trim() ==="")){
                console.log("if");
                this.setState({ isNotification: " show" })
              }else{
                console.log("else");
                this.setState({ isNotification: " "})
              } 
            } }> Submit </button> */}
            
            <a onClick={(e) => {
              console.log("isNotification click");
              console.log(this.state.isNotification);
              console.log(typeof this.state.isNotification);
              if(!this.state.isNotification ===" show" || this.state.isNotification ==="" || this.state.isNotification ===" " || ((this.state.isNotification).trim() ==="")){
                console.log("if");
                this.setState({ isNotification: " show" })
              }else{
                console.log("else");
                this.setState({ isNotification: " "})
              } 
            } }>
              <i className="fa fa-bell-o fa-2x fabell" ></i> <span className="badge badge-pill">3</span>
            </a>

            <div className={"dropdown-menu notifications" + this.state.isNotification}>
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                {this.state.listNotification && typeof this.state.listNotification !=="undefined" & this.state.listNotification.length > 0 && this.state.listNotification.map((itemmsg,l) => (
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar-ws pt-2" >
                          {itemmsg.product_img.length>0?
                          (
                            <img alt="" src={itemmsg.product_img} />

                          ):(
                            <img alt="" src={logo} />
                          )
                          }
                        </span>
                        <div className="media-body">
                          <p className="noti-details pl-1">
                            <span className="noti-title pl-2">{itemmsg.title} <a href={"/web/product/info/" + itemmsg.product_id} className="pt-0">View</a></span> <FontAwesomeIcon icon="fa-solid fa-clock"/> 
                          {/* <span className="noti-title">{itemmsg.start_time}</span> */}
                          <span className="noti-title"></span>
                          </p>
                          {/* <p className="noti-time"><span className="notification-time">4 mins ago</span></p> */}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
                </ul>
                {/* //   <li className="notification-message">
                //     <a href="activities.html">
                //       <div className="media">
                //         <span className="avatar">
                //           <img alt="" src={avatarImg3} />
                //         </span>
                //         <div className="media-body">
                //           <p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
                //           <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                //         </div>
                //       </div>
                //     </a>
                //   </li>
                //   <li className="notification-message">
                //     <a href="activities.html">
                //       <div className="media">
                //         <span className="avatar">
                //           <img alt="" src={avatarImg6} />
                //         </span>
                //         <div className="media-body">
                //           <p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                //           <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                //         </div>
                //       </div>
                //     </a>
                //   </li>
                //   <li className="notification-message">
                //     <a href="activities.html">
                //       <div className="media">
                //         <span className="avatar">
                //           <img alt="" src={avatarImg17} />
                //         </span>
                //         <div className="media-body">
                //           <p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
                //           <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                //         </div>
                //       </div>
                //     </a>
                //   </li>
                //   <li className="notification-message">
                //     <a href="activities.html">
                //       <div className="media">
                //         <span className="avatar">
                //           <img alt="" src={avatarImg13} />
                //         </span>
                //         <div className="media-body">
                //           <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
                //           <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                //         </div>
                //       </div>
                //     </a>
                //   </li>
                // </ul> */}
              </div>
              <div className="topnav-dropdown-footer">
                <a href="activities.html">View all Notifications</a>
              </div>
            </div>
								</div>
								
					</div>	
			</div>
		</div>
	</div>
	
	<div className="modal fade" id="createad" data-keyboard="false" data-backdrop="static">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
      <div className="modal-header border-0 pb-0">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>

	  <Form onSubmit={this.handleSubmit} ref={(c) => { this.Addform = c; }}>
        <div className="modal-header border-0 pb-0">
			 <input type="text" className="form-control" placeholder="Mobile Number" required />
			 <button className="btn btn-primary " type="submit">Submit</button>
          {/* <button type="button" className="close" data-dismiss="modal">&times;</button> */}
        </div>
        <div className="modal-body text-center pb-5 pt-0">
		</div>
		</Form>
		</div>
		</div>
		</div>
<div className="modal fade" id="popuplogin" data-keyboard="false" data-backdrop="static">
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content login-form-outer-box">
          <div className="modal-header border-0 pb-0">
            <div className="login-form-logo">
              <span><a href="index.html"><img class="login-form-logo-img" src={logo}/></a></span>              
            </div>
            {/* <div class="login-form-ver-div"><span class="login-form-txt-sm">Login</span></div> */}
            <button type="button" className="close" data-dismiss="modal">&times;</button>
												  
												   
																									 
          </div>

          <Form onSubmit={this.handleLoginSubmit} autoComplete="none" >
											 
																									 
								
            <div class="login-form-inner-s1">
              <>
              <div class="lf-input1">                        
                {/* <FloatingLabel controlId="floatingInput" label={this.state.email_id} value={this.state.email_id} className="mb-3" onChange={this.onChangeEmailID }>
                   <input type="text" placeholder="Email/Mobile" className="login-form-input lf-input1" onChange={event => console.log(event.target.value) } /> 
                </FloatingLabel> */}
                <input type="text" className="form-control" placeholder={this.props.t('email_mob_no')} id="description" name="edit_description"value={this.state.email_id} onChange={this.onChangeEmailID } required />
			
              </div>
              <div class="lf-input2">
                {/* <FloatingLabel controlId="floatingPassword" type="password" label={this.state.password===""?"Password":""} onChange={this.onChangePassword}>
                  <Form.Control type="password" placeholder="Password" className="login-form-input lf-input2" />
                </FloatingLabel> */}
                 <input type="password" className="form-control mt-4" placeholder="Password" id="description" name="edit_description"value={this.state.password}onChange={this.onChangePassword} required />
              </div>
              </>
              <div className="form-group text-center">
                            <button className="btn btn-primary account-btn mt-4" type="submit">{this.props.t('Login')}</button>
                          {/* <NavLink to={"/admin/dashboard"} className="btn btn-primary account-btn" type="submit">Login</NavLink>*/}
              </div>            
                          
              <div className="form-group">
                {/* <p className="login-form-txt-sm text-dark mt-4 mb-3"> <span className="line">or log in using </span></p> */}
                {/* <a href="" className=""> <i className="fa fa-google-plus social-icon"></i></a> */}
                <span className="line">{this.props.t('Or')} {this.props.t('Login')} {this.props.t('using')} </span>
                <div className="gmail-icon">
                  <GoogleLogin clientId="717053916277-ilet50nnp42igetfdgv5m5apcr50u43c.apps.googleusercontent.com"
                  buttonText="Google" className="gmail-icon"
                  onSuccess={this.handleLoginwithgoogle}
                  onFailure={this.handleLoginwithgoogle}
                  cookiePolicy={'single_host_origin'}
                 />
                </div>
              </div>
                          
              
              <div id="create-account-wrap">
                <p class="login-form-txt-sm">{this.props.t('Not_a_mem')}? <a href="javascript:void(0)" onClick={this.showRegister	}>{this.props.t('create_acc')}</a></p><p></p>
              </div>
            </div>
            <div className="account-footer">
                          <p class="login-form-txt-sm"><a href="" data-toggle="modal" data-target="#ForgotPassModal">Forgot password?</a></p>
            </div>  
                      <CheckButton
                          style={{ display: "none" }}
                          ref={(c) => {
                            this.checkBtn = c;
                          }}
                        />
                      {/*<div className="account-footer">
                        <p>Don't have an account yet? <a href="register.html">Register</a></p>
                      </div>*/}
                    </Form>
		</div>
		</div>
		</div>
   
   {/*<div className="row">
     <div className="col-6">
     <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" onClick={(e) => {
              console.log("isNotification click");
              console.log(this.state.isNotification);
              console.log(typeof this.state.isNotification);
              if(!this.state.isNotification ===" show" || this.state.isNotification ==="" || this.state.isNotification ===" " || ((this.state.isNotification).trim() ==="")){
                console.log("if");
                this.setState({ isNotification: " show" })
              }else{
                console.log("else");
                this.setState({ isNotification: " "})
              } 
            } } >
              <i className="fa fa-bell-o" ></i> <span className="badge badge-pill">3</span>
          </a>
            <div className={"dropdown-menu notifications" + this.state.isNotification}>
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={avatarImg2} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
                          <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={avatarImg3} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
                          <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={avatarImg6} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                          <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={avatarImg17} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
                          <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={avatarImg13} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
                          <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="activities.html">View all Notifications</a>
              </div>
            </div>
     </div>
     <div className="col-6">
   
       </div>
   </div>*/} 
   
            <div className="modal fade" id="savePasswordModal" data-keyboard="false" data-backdrop="static">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content pt-0 pb-4 px-3">
                <div className="modal-header border-0 pb-0">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="container">
                  <Form
                  onSubmit={this.handleSavePasswordSubmit}
                  ref={(c) => {
                    this.form = c;
                  }}>

                    <h3 className="size18  mt-0">Set New Password</h3>
                    <div className="row  ">
                        <div className="col-md-10 col-12 pl-md-0 position-relative">
                            <div className="row">
                                <div className="col-12  pb-2">
                                    <input type="password" className="form-control h-small" placeholder="New Password" name="save_password" id="save_password" onChange={this.onChangeSavePassword} value={this.state.save_password} autoComplete="off" required/>
                                </div>
                                <div className="col-12  pb-2">
                                    <input type="password" className="form-control h-small" placeholder="Confirm New Password" name="confirm_save_password" id="confirm_save_password" onChange={this.onChangeConfirmSavePassword} value={this.state.confirm_save_password} autoComplete="off" required/>
                                </div>
                                <span id='save_password_error_message'></span>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0 text-right ">
                        <div className="post-icons d-flex flex-wrap justify-content-end">

                            <button className="btn btn-primary">Change Password </button>
                        </div>
                    </div>

                    {/*{message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message}
                      </div>
                    </div>
                  )}*/}
                  <CheckButton
                    style={{ display: "none" }}
                    ref={(c) => {
                      this.checkBtnChangePassword = c;
                    }}
                  />

                </Form>


                </div>
            </div>
        </div>
    </div>
            <div className="modal fade" id="otpModalForgot" data-keyboard="false" data-backdrop="static">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-header border-0 pb-0">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        {/* <div className="modal-body text-center pb-5 pt-0">
          <img src={SmallLogoImg} alt="" /> */}
          <p id="otpinp"> Please enter the OTP sent to your registered mobile number/ email.</p>
            <Form
            onSubmit={this.handleOtpCheckForgot}
            ref={(c) => {
              this.form = c;
            }}>
              <div className="d-inline-block container">
              <input type="text" className="form-control" placeholder=" " id="otponeforgot"
                value={this.state.otponeforgot}
                onChange={this.onChangeOtpOneForgot}  autoComplete="off" required/>
              </div>
              {/* <div className="d-inline-block">
              <input type="text" className="form-control" placeholder=" " id="otptwoforgot"
                value={this.state.otptwoforgot}
                onChange={this.onChangeOtpTwoForgot} minLength="1" maxLength="1" autoComplete="off" required />
              </div>
              <div className="d-inline-block">
              <input type="text" className="form-control" placeholder=" " id="otpthreeforgot"
                value={this.state.otpthreeforgot}
                onChange={this.onChangeOtpThreeForgot} minLength="1" maxLength="1" autoComplete="off" required/>
              </div>
              <div className="d-inline-block">
              <input type="text" className="form-control" placeholder=" " id="otpfourforgot"
                value={this.state.otpfourforgot}
                onChange={this.onChangeOtpFourForgot} minLength="1" maxLength="1" autoComplete="off" required/>
              </div> */}
                <button className="btn btn-primary mt-3 mx-auto d-block"
                 >Submit</button>
            {/*{message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}*/}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtnOtpForgotSend = c;
              }}
            />

          </Form>
  
        {/* </div> */}
      </div>
    </div>
  </div>
            <div className="modal fade" id="ForgotPassModal" data-keyboard="false" data-backdrop="static">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">

        <div className="modal-header border-0 pb-0">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>

        <div className="modal-body text-center pb-5 pt-0">
          <h3>Forgot Password</h3>
          <p id="forgotpwdlbl">Please enter your email address </p>
          <Form
            onSubmit={this.handlSubmitForgotPassword}
            ref={(c) => {
              this.form = c;
            }}>
            <div className="form-group">
              <input type="email" className="form-control" placeholder=" " id="forgot_mail" name="forgot_mail" value={this.state.forgot_mail} autocomplete="off" required autoComplete="off" onChange={this.onChangeForgotMail} />
              
            </div>
            <button className="btn btn-primary mt-3 mx-auto d-block"
                 >Submit</button>
          {/*{message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}*/}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtnForgot = c;
              }}
            />

          </Form>
        </div>
      </div>
    </div>
  </div>
<div className="modal fade" id="popupregister" data-keyboard="false" data-backdrop="static">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content reg-form-outer-box">
      <div className="modal-header border-0 pb-0">
          <div className="login-form-logo">
              <span><a href="index.html"><img class="login-form-logo-img" src={logo}/></a></span>              
          </div>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
      <Form onSubmit={this.handleRegisterSubmit}  >
                      <div class="lf-input1">                        
                        {/* <FloatingLabel controlId="floatingInput" label={this.state.name===""?"Full Name":""} className="mb-3" onChange={this.onChangeName}>
                          <Form.Control type="text" placeholder="Full Name" className="login-form-input lf-input1" />
                        </FloatingLabel> */}
                          <input type="text" className="form-control mt-4" placeholder="Name" id="description" name="edit_description"value={this.state.name} onChange={this.onChangeName} required />
                      </div>
                      <div class="lf-input2">
                        {/* <FloatingLabel controlId="floatingInput" label={this.state.register_mobile_no===""?"Mobile":""} onChange={this.onChangeRegiserMobile}>
                          <Form.Control type="tel" placeholder="Mobile" className="login-form-input lf-input2"/>
                        </FloatingLabel> */}
                         <input type="text" className="form-control mt-4" placeholder="Email" id="description" name="edit_description"value={this.state.register_mobile_no} onChange={this.onChangeRegiserMobile} required />
                      </div>
                      <div class="lf-input3">
                        {/* <FloatingLabel controlId="floatingInput" label={this.state.register_email_id===""?"Email":""} onChange={this.onChangeRegisterEmailID}>
                          <Form.Control type="email" placeholder="Email" className="login-form-input lf-input3"/>
                        </FloatingLabel> */}
                         <input type="text" className="form-control mt-4" placeholder="Mobile No" id="description" name="edit_description"value={this.state.register_email_id} onChange={this.onChangeRegisterEmailID} required />
                      </div>
                      <div class="lf-input5">
                        {/* <FloatingLabel controlId="floatingPassword" type ="password" label={this.state.register_password===""?"Password":""} onChange={this.onChangeRegisterPassword}>
                          <Form.Control type="password" placeholder="Password" className="login-form-input lf-input5"/>
                        </FloatingLabel> */}
                          <input type="text" className="form-control mt-4" placeholder="Password" id="description" name="edit_description"value={this.state.register_password} onChange={this.onChangeRegisterPassword} required />
                      </div>
                      
{/*                       
                      <div className="form-group">
                        <label>Full Name</label>
                        <input className="form-control" type="text" value={this.state.name} onChange={this.onChangeName} required/>
                      </div> */}

                      {/* <div className="form-group">
                        <label>Mobile</label>
                        <input className="form-control" type="number" value={this.state.register_mobile_no} onChange={this.onChangeRegiserMobile} required />
                      </div> */}
                      {/* <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" value={this.state.register_email_id} onChange={this.onChangeRegisterEmailID} required/>
                      </div> */}
                      {/* <div className="form-group">
                        <div className="row">
                          <div className="col">
                            <label>Password</label>
                          </div>
                         
																				  
											  
								
								   
                        </div>
                        <input className="form-control" type="password" value={this.state.register_password} onChange={this.onChangeRegisterPassword} required/>
                      </div> */}
                      <div className="form-group text-center">
                        <button className="btn btn-primary account-btn mt-4" type="submit">Register</button>
                       {/* <NavLink to={"/admin/dashboard"} className="btn btn-primary account-btn" type="submit">Login</NavLink>*/}
                      </div>
                   
                      <CheckButton
                          style={{ display: "none" }}
                          ref={(c) => {
                            this.checkBtn = c;
                          }}
                        />
                      {/*<div className="account-footer">
                        <p>Don't have an account yet? <a href="register.html">Register</a></p>
                      </div>*/}
                    </Form>
		</div>
		</div>
		</div>
</header>
      
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {

  const { user } = state.auth;
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    user,
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(withTranslation()(Header));