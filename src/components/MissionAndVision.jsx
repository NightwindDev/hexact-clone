import React, { Component } from 'react'
import '../App.css'
import Badge from './Badge'
import hexactMission from '../images/hexact-mission.webp'
import hexactVision from '../images/hexact-vision.webp'
import hexactPurpose from '../images/hexact-purpose.webp'

class Vision extends Component {
    render () {
        return (
            <div className={`hexact-vision-card ${this.props.className}`}>
                <img className='mission-img' src={this.props['data-img-src']} alt='' />
                <div className="hexact-vision-card-content">{this.props.children}</div>
            </div>
        )
    }
}

export default
class MissionAndVision extends Component {
    render () {
        return (
            <div className='mission-and-vision'>
                <div className='mission-and-vision-info'>
                    <Badge>MISSION & VISION</Badge>
                    <h1>We innovate to be your success partner</h1>
                    <h2>Hexact's vision and mission guide our current and future decisions, and we appreciate all our company stands for and aspires to accomplish every single day.</h2>
                </div>
                <div className='hexact-visions'>
                    <Vision data-img-src={hexactMission}>
                        <div className="svg-wrapper">
                            <svg width="110" height="29" viewBox="0 0 110 29" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="28" height="28" rx="4" fill="#4262FF"></rect><path d="M16.4 8.5L16 6.5H7V23.5H9V16.5H14.6L15 18.5H22V8.5H16.4Z" fill="white"></path><path d="M52.976 9.812V19.5H51.702V12.276L48.482 19.5H47.586L44.352 12.262V19.5H43.078V9.812H44.45L48.034 17.82L51.618 9.812H52.976ZM58.3706 9.742V19.5H57.0966V9.742H58.3706ZM65.5959 19.598C64.9519 19.598 64.3732 19.486 63.8599 19.262C63.3559 19.0287 62.9592 18.7113 62.6699 18.31C62.3806 17.8993 62.2312 17.428 62.2219 16.896H63.5799C63.6266 17.3533 63.8132 17.7407 64.1399 18.058C64.4759 18.366 64.9612 18.52 65.5959 18.52C66.2026 18.52 66.6786 18.3707 67.0239 18.072C67.3786 17.764 67.5559 17.372 67.5559 16.896C67.5559 16.5227 67.4532 16.2193 67.2479 15.986C67.0426 15.7527 66.7859 15.5753 66.4779 15.454C66.1699 15.3327 65.7546 15.202 65.2319 15.062C64.5879 14.894 64.0699 14.726 63.6779 14.558C63.2952 14.39 62.9639 14.1287 62.6839 13.774C62.4132 13.41 62.2779 12.9247 62.2779 12.318C62.2779 11.786 62.4132 11.3147 62.6839 10.904C62.9546 10.4933 63.3326 10.176 63.8179 9.952C64.3126 9.728 64.8772 9.616 65.5119 9.616C66.4266 9.616 67.1732 9.84467 67.7519 10.302C68.3399 10.7593 68.6712 11.366 68.7459 12.122H67.3459C67.2992 11.7487 67.1032 11.422 66.7579 11.142C66.4126 10.8527 65.9552 10.708 65.3859 10.708C64.8539 10.708 64.4199 10.848 64.0839 11.128C63.7479 11.3987 63.5799 11.7813 63.5799 12.276C63.5799 12.6307 63.6779 12.92 63.8739 13.144C64.0792 13.368 64.3266 13.5407 64.6159 13.662C64.9146 13.774 65.3299 13.9047 65.8619 14.054C66.5059 14.2313 67.0239 14.4087 67.4159 14.586C67.8079 14.754 68.1439 15.02 68.4239 15.384C68.7039 15.7387 68.8439 16.224 68.8439 16.84C68.8439 17.316 68.7179 17.764 68.4659 18.184C68.2139 18.604 67.8406 18.9447 67.3459 19.206C66.8512 19.4673 66.2679 19.598 65.5959 19.598ZM75.7727 19.598C75.1287 19.598 74.55 19.486 74.0367 19.262C73.5327 19.0287 73.136 18.7113 72.8467 18.31C72.5574 17.8993 72.408 17.428 72.3987 16.896H73.7567C73.8034 17.3533 73.99 17.7407 74.3167 18.058C74.6527 18.366 75.138 18.52 75.7727 18.52C76.3794 18.52 76.8554 18.3707 77.2007 18.072C77.5554 17.764 77.7327 17.372 77.7327 16.896C77.7327 16.5227 77.63 16.2193 77.4247 15.986C77.2194 15.7527 76.9627 15.5753 76.6547 15.454C76.3467 15.3327 75.9314 15.202 75.4087 15.062C74.7647 14.894 74.2467 14.726 73.8547 14.558C73.472 14.39 73.1407 14.1287 72.8607 13.774C72.59 13.41 72.4547 12.9247 72.4547 12.318C72.4547 11.786 72.59 11.3147 72.8607 10.904C73.1314 10.4933 73.5094 10.176 73.9947 9.952C74.4894 9.728 75.054 9.616 75.6887 9.616C76.6034 9.616 77.35 9.84467 77.9287 10.302C78.5167 10.7593 78.848 11.366 78.9227 12.122H77.5227C77.476 11.7487 77.28 11.422 76.9347 11.142C76.5894 10.8527 76.132 10.708 75.5627 10.708C75.0307 10.708 74.5967 10.848 74.2607 11.128C73.9247 11.3987 73.7567 11.7813 73.7567 12.276C73.7567 12.6307 73.8547 12.92 74.0507 13.144C74.256 13.368 74.5034 13.5407 74.7927 13.662C75.0914 13.774 75.5067 13.9047 76.0387 14.054C76.6827 14.2313 77.2007 14.4087 77.5927 14.586C77.9847 14.754 78.3207 15.02 78.6007 15.384C78.8807 15.7387 79.0207 16.224 79.0207 16.84C79.0207 17.316 78.8947 17.764 78.6427 18.184C78.3907 18.604 78.0174 18.9447 77.5227 19.206C77.028 19.4673 76.4447 19.598 75.7727 19.598ZM84.1295 9.742V19.5H82.8555V9.742H84.1295ZM92.6848 19.598C91.7795 19.598 90.9535 19.388 90.2068 18.968C89.4601 18.5387 88.8675 17.946 88.4288 17.19C87.9995 16.4247 87.7848 15.566 87.7848 14.614C87.7848 13.662 87.9995 12.808 88.4288 12.052C88.8675 11.2867 89.4601 10.694 90.2068 10.274C90.9535 9.84467 91.7795 9.63 92.6848 9.63C93.5995 9.63 94.4301 9.84467 95.1768 10.274C95.9235 10.694 96.5115 11.282 96.9408 12.038C97.3701 12.794 97.5848 13.6527 97.5848 14.614C97.5848 15.5753 97.3701 16.434 96.9408 17.19C96.5115 17.946 95.9235 18.5387 95.1768 18.968C94.4301 19.388 93.5995 19.598 92.6848 19.598ZM92.6848 18.492C93.3661 18.492 93.9775 18.3333 94.5188 18.016C95.0695 17.6987 95.4988 17.246 95.8068 16.658C96.1241 16.07 96.2828 15.3887 96.2828 14.614C96.2828 13.83 96.1241 13.1487 95.8068 12.57C95.4988 11.982 95.0741 11.5293 94.5328 11.212C93.9915 10.8947 93.3755 10.736 92.6848 10.736C91.9941 10.736 91.3781 10.8947 90.8368 11.212C90.2955 11.5293 89.8661 11.982 89.5488 12.57C89.2408 13.1487 89.0868 13.83 89.0868 14.614C89.0868 15.3887 89.2408 16.07 89.5488 16.658C89.8661 17.246 90.2955 17.6987 90.8368 18.016C91.3875 18.3333 92.0035 18.492 92.6848 18.492ZM108.899 19.5H107.625L102.501 11.73V19.5H101.227V9.728H102.501L107.625 17.484V9.728H108.899V19.5Z" fill="#4262FF"></path></svg>
                        </div>
                        <h3>Hexact Mission</h3>
                        <p>Our mission is to empower you with the true power of the cloud + AI to delegate and scale work, so you can change the world.</p>
                    </Vision>
                    <Vision data-img-src={hexactVision} className='reverse'>
                        <div className="svg-wrapper">
                            <svg width="98" height="28" viewBox="0 0 98 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="28" rx="4" fill="#4262FF"></rect><path d="M14 8C9.45455 8 5.57273 10.488 4 14C5.57273 17.512 9.45455 20 14 20C18.5455 20 22.4273 17.512 24 14C22.4273 10.488 18.5455 8 14 8ZM14 18C11.4909 18 9.45455 16.208 9.45455 14C9.45455 11.792 11.4909 10 14 10C16.5091 10 18.5455 11.792 18.5455 14C18.5455 16.208 16.5091 18 14 18ZM14 11.6C12.4909 11.6 11.2727 12.672 11.2727 14C11.2727 15.328 12.4909 16.4 14 16.4C15.5091 16.4 16.7273 15.328 16.7273 14C16.7273 12.672 15.5091 11.6 14 11.6Z" fill="white"></path><path d="M51.142 9.242L47.46 19H45.99L42.308 9.242H43.666L46.732 17.656L49.798 9.242H51.142ZM55.7729 9.242V19H54.4989V9.242H55.7729ZM62.9983 19.098C62.3543 19.098 61.7756 18.986 61.2623 18.762C60.7583 18.5287 60.3616 18.2113 60.0723 17.81C59.7829 17.3993 59.6336 16.928 59.6243 16.396H60.9823C61.0289 16.8533 61.2156 17.2407 61.5423 17.558C61.8783 17.866 62.3636 18.02 62.9983 18.02C63.6049 18.02 64.0809 17.8707 64.4263 17.572C64.7809 17.264 64.9583 16.872 64.9583 16.396C64.9583 16.0227 64.8556 15.7193 64.6503 15.486C64.4449 15.2527 64.1883 15.0753 63.8803 14.954C63.5723 14.8327 63.1569 14.702 62.6343 14.562C61.9903 14.394 61.4723 14.226 61.0803 14.058C60.6976 13.89 60.3663 13.6287 60.0863 13.274C59.8156 12.91 59.6803 12.4247 59.6803 11.818C59.6803 11.286 59.8156 10.8147 60.0863 10.404C60.3569 9.99333 60.7349 9.676 61.2203 9.452C61.7149 9.228 62.2796 9.116 62.9143 9.116C63.8289 9.116 64.5756 9.34467 65.1543 9.802C65.7423 10.2593 66.0736 10.866 66.1483 11.622H64.7483C64.7016 11.2487 64.5056 10.922 64.1603 10.642C63.8149 10.3527 63.3576 10.208 62.7883 10.208C62.2563 10.208 61.8223 10.348 61.4863 10.628C61.1503 10.8987 60.9823 11.2813 60.9823 11.776C60.9823 12.1307 61.0803 12.42 61.2763 12.644C61.4816 12.868 61.7289 13.0407 62.0183 13.162C62.3169 13.274 62.7323 13.4047 63.2643 13.554C63.9083 13.7313 64.4263 13.9087 64.8183 14.086C65.2103 14.254 65.5463 14.52 65.8263 14.884C66.1063 15.2387 66.2463 15.724 66.2463 16.34C66.2463 16.816 66.1203 17.264 65.8683 17.684C65.6163 18.104 65.2429 18.4447 64.7483 18.706C64.2536 18.9673 63.6703 19.098 62.9983 19.098ZM71.355 9.242V19H70.081V9.242H71.355ZM79.9104 19.098C79.005 19.098 78.179 18.888 77.4324 18.468C76.6857 18.0387 76.093 17.446 75.6544 16.69C75.225 15.9247 75.0104 15.066 75.0104 14.114C75.0104 13.162 75.225 12.308 75.6544 11.552C76.093 10.7867 76.6857 10.194 77.4324 9.774C78.179 9.34467 79.005 9.13 79.9104 9.13C80.825 9.13 81.6557 9.34467 82.4024 9.774C83.149 10.194 83.737 10.782 84.1664 11.538C84.5957 12.294 84.8104 13.1527 84.8104 14.114C84.8104 15.0753 84.5957 15.934 84.1664 16.69C83.737 17.446 83.149 18.0387 82.4024 18.468C81.6557 18.888 80.825 19.098 79.9104 19.098ZM79.9104 17.992C80.5917 17.992 81.203 17.8333 81.7444 17.516C82.295 17.1987 82.7244 16.746 83.0324 16.158C83.3497 15.57 83.5084 14.8887 83.5084 14.114C83.5084 13.33 83.3497 12.6487 83.0324 12.07C82.7244 11.482 82.2997 11.0293 81.7584 10.712C81.217 10.3947 80.601 10.236 79.9104 10.236C79.2197 10.236 78.6037 10.3947 78.0624 10.712C77.521 11.0293 77.0917 11.482 76.7744 12.07C76.4664 12.6487 76.3124 13.33 76.3124 14.114C76.3124 14.8887 76.4664 15.57 76.7744 16.158C77.0917 16.746 77.521 17.1987 78.0624 17.516C78.613 17.8333 79.229 17.992 79.9104 17.992ZM96.1242 19H94.8502L89.7262 11.23V19H88.4522V9.228H89.7262L94.8502 16.984V9.228H96.1242V19Z" fill="#4262FF"></path></svg>
                        </div>
                        <h3>Hexact Vision</h3>
                        <p>Hexact is inventing the OS for the cloud-powered world of tomorrow.</p>
                    </Vision>
                    <Vision data-img-src={hexactPurpose}>
                        <div className="svg-wrapper">
                            <svg width="115" height="29" viewBox="0 0 115 29" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="28" height="28" rx="4" fill="#4262FF"></rect><path fillRule="evenodd" clipRule="evenodd" d="M7.04551 7.5H20.9545L23 12.3545L14 22.5L5 12.3545L7.04551 7.5Z" fill="white"></path><path d="M49.602 12.598C49.602 13.41 49.322 14.0867 48.762 14.628C48.2113 15.16 47.3667 15.426 46.228 15.426H44.352V19.5H43.078V9.742H46.228C47.3293 9.742 48.1647 10.008 48.734 10.54C49.3127 11.072 49.602 11.758 49.602 12.598ZM46.228 14.376C46.9373 14.376 47.46 14.222 47.796 13.914C48.132 13.606 48.3 13.1673 48.3 12.598C48.3 11.394 47.6093 10.792 46.228 10.792H44.352V14.376H46.228ZM54.3914 9.742V15.916C54.3914 16.784 54.6014 17.428 55.0214 17.848C55.4508 18.268 56.0434 18.478 56.7994 18.478C57.5461 18.478 58.1294 18.268 58.5494 17.848C58.9788 17.428 59.1934 16.784 59.1934 15.916V9.742H60.4674V15.902C60.4674 16.714 60.3041 17.4 59.9774 17.96C59.6508 18.5107 59.2074 18.9213 58.6474 19.192C58.0968 19.4627 57.4761 19.598 56.7854 19.598C56.0948 19.598 55.4694 19.4627 54.9094 19.192C54.3588 18.9213 53.9201 18.5107 53.5934 17.96C53.2761 17.4 53.1174 16.714 53.1174 15.902V9.742H54.3914ZM69.6907 19.5L67.3667 15.51H65.8267V19.5H64.5527V9.742H67.7027C68.44 9.742 69.0607 9.868 69.5647 10.12C70.078 10.372 70.4607 10.7127 70.7127 11.142C70.9647 11.5713 71.0907 12.0613 71.0907 12.612C71.0907 13.284 70.8947 13.8767 70.5027 14.39C70.12 14.9033 69.5414 15.244 68.7667 15.412L71.2167 19.5H69.6907ZM65.8267 14.488H67.7027C68.3934 14.488 68.9114 14.32 69.2567 13.984C69.602 13.6387 69.7747 13.1813 69.7747 12.612C69.7747 12.0333 69.602 11.5853 69.2567 11.268C68.9207 10.9507 68.4027 10.792 67.7027 10.792H65.8267V14.488ZM81.5543 12.598C81.5543 13.41 81.2743 14.0867 80.7143 14.628C80.1636 15.16 79.3189 15.426 78.1803 15.426H76.3043V19.5H75.0303V9.742H78.1803C79.2816 9.742 80.1169 10.008 80.6863 10.54C81.2649 11.072 81.5543 11.758 81.5543 12.598ZM78.1803 14.376C78.8896 14.376 79.4123 14.222 79.7483 13.914C80.0843 13.606 80.2523 13.1673 80.2523 12.598C80.2523 11.394 79.5616 10.792 78.1803 10.792H76.3043V14.376H78.1803ZM89.5217 19.598C88.6164 19.598 87.7904 19.388 87.0437 18.968C86.297 18.5387 85.7044 17.946 85.2657 17.19C84.8364 16.4247 84.6217 15.566 84.6217 14.614C84.6217 13.662 84.8364 12.808 85.2657 12.052C85.7044 11.2867 86.297 10.694 87.0437 10.274C87.7904 9.84467 88.6164 9.63 89.5217 9.63C90.4364 9.63 91.267 9.84467 92.0137 10.274C92.7604 10.694 93.3484 11.282 93.7777 12.038C94.207 12.794 94.4217 13.6527 94.4217 14.614C94.4217 15.5753 94.207 16.434 93.7777 17.19C93.3484 17.946 92.7604 18.5387 92.0137 18.968C91.267 19.388 90.4364 19.598 89.5217 19.598ZM89.5217 18.492C90.203 18.492 90.8144 18.3333 91.3557 18.016C91.9064 17.6987 92.3357 17.246 92.6437 16.658C92.961 16.07 93.1197 15.3887 93.1197 14.614C93.1197 13.83 92.961 13.1487 92.6437 12.57C92.3357 11.982 91.911 11.5293 91.3697 11.212C90.8284 10.8947 90.2124 10.736 89.5217 10.736C88.831 10.736 88.215 10.8947 87.6737 11.212C87.1324 11.5293 86.703 11.982 86.3857 12.57C86.0777 13.1487 85.9237 13.83 85.9237 14.614C85.9237 15.3887 86.0777 16.07 86.3857 16.658C86.703 17.246 87.1324 17.6987 87.6737 18.016C88.2244 18.3333 88.8404 18.492 89.5217 18.492ZM101.158 19.598C100.514 19.598 99.9349 19.486 99.4215 19.262C98.9175 19.0287 98.5209 18.7113 98.2315 18.31C97.9422 17.8993 97.7929 17.428 97.7835 16.896H99.1415C99.1882 17.3533 99.3749 17.7407 99.7015 18.058C100.038 18.366 100.523 18.52 101.158 18.52C101.764 18.52 102.24 18.3707 102.586 18.072C102.94 17.764 103.118 17.372 103.118 16.896C103.118 16.5227 103.015 16.2193 102.81 15.986C102.604 15.7527 102.348 15.5753 102.04 15.454C101.732 15.3327 101.316 15.202 100.794 15.062C100.15 14.894 99.6315 14.726 99.2395 14.558C98.8569 14.39 98.5255 14.1287 98.2455 13.774C97.9749 13.41 97.8395 12.9247 97.8395 12.318C97.8395 11.786 97.9749 11.3147 98.2455 10.904C98.5162 10.4933 98.8942 10.176 99.3795 9.952C99.8742 9.728 100.439 9.616 101.074 9.616C101.988 9.616 102.735 9.84467 103.314 10.302C103.902 10.7593 104.233 11.366 104.308 12.122H102.908C102.861 11.7487 102.665 11.422 102.32 11.142C101.974 10.8527 101.517 10.708 100.948 10.708C100.416 10.708 99.9815 10.848 99.6455 11.128C99.3095 11.3987 99.1415 11.7813 99.1415 12.276C99.1415 12.6307 99.2395 12.92 99.4355 13.144C99.6409 13.368 99.8882 13.5407 100.178 13.662C100.476 13.774 100.892 13.9047 101.424 14.054C102.068 14.2313 102.586 14.4087 102.978 14.586C103.37 14.754 103.706 15.02 103.986 15.384C104.266 15.7387 104.406 16.224 104.406 16.84C104.406 17.316 104.28 17.764 104.028 18.184C103.776 18.604 103.402 18.9447 102.908 19.206C102.413 19.4673 101.83 19.598 101.158 19.598ZM109.514 10.778V14.04H113.07V15.09H109.514V18.45H113.49V19.5H108.24V9.728H113.49V10.778H109.514Z" fill="#4262FF"></path></svg>
                        </div>
                        <h3>Hexact Purpose</h3>
                        <p>We are the equalizer. Our movement makes automation, AI, and growth universally accessible - from solopreneurs to SMEs to Fortune 500 companies.</p>
                    </Vision>
                </div>
            </div>
        )
    }
}