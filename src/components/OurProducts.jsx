import React, { Component } from 'react'
import '../App.css'
import Badge from './Badge'

class ProductCard extends Component {
    render () {
        return (
            <div className='product-card'>
                <svg className={this.props.className} width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M24.2019 50.8102L25.637 48.3991C25.9428 47.885 26.4711 47.5889 27.0844 47.5889H29.957C30.5703 47.5889 31.0965 47.883 31.4044 48.3991L32.8396 50.8102C33.1451 51.324 33.1451 51.9146 32.8396 52.4287L31.4044 54.8398C31.0986 55.3539 30.5703 55.65 29.957 55.65H27.0844C26.4711 55.65 25.9449 55.3556 25.637 54.8398L24.2019 52.4287C23.8962 51.9146 23.8962 51.3261 24.2019 50.8102Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M24.2019 41.3343L25.637 38.9232C25.9428 38.4091 26.4711 38.113 27.0844 38.113H29.957C30.5703 38.113 31.0965 38.4071 31.4044 38.9232L32.8396 41.3343C33.1451 41.8484 33.1451 42.4387 32.8396 42.9528L31.4044 45.3639C31.0986 45.878 30.5703 46.1742 29.957 46.1742H27.0844C26.4711 46.1742 25.9449 45.8801 25.637 45.3639L24.2019 42.9528C23.8962 42.4369 23.8962 41.8484 24.2019 41.3343Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M24.2019 13.0495L25.637 10.6384C25.9428 10.1243 26.4711 9.82808 27.0844 9.82808H29.957C30.5703 9.82808 31.0965 10.1224 31.4044 10.6384L32.8396 13.0495C33.1451 13.5634 33.1451 14.154 32.8396 14.668L31.4044 17.0792C31.0986 17.5932 30.5703 17.8894 29.957 17.8894H27.0844C26.4711 17.8894 25.9449 17.5952 25.637 17.0792L24.2019 14.668C23.8962 14.152 23.8962 13.5634 24.2019 13.0495Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M24.2019 3.5714L25.637 1.16026C25.9428 0.64624 26.4711 0.350006 27.0844 0.350006H29.957C30.5703 0.350006 31.0965 0.644287 31.4044 1.16026L32.8396 3.5714C33.1451 4.08541 33.1451 4.67592 32.8396 5.18993L31.4044 7.60109C31.0986 8.1151 30.5703 8.41132 29.957 8.41132H27.0844C26.4711 8.41132 25.9449 8.11707 25.637 7.60109L24.2019 5.18993C23.8962 4.67592 23.8962 4.08541 24.2019 3.5714Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.9428 46.2812L17.2646 44.0604C17.548 43.5858 18.0318 43.3149 18.5966 43.3149H21.2423C21.8071 43.3149 22.2929 43.5858 22.5742 44.0604L23.8981 46.2812C24.1815 46.7562 24.1815 47.2994 23.8981 47.7724L22.5742 49.9932C22.2908 50.4682 21.8071 50.7387 21.2423 50.7387H18.5986C18.0338 50.7387 17.548 50.4682 17.2666 49.9932L15.9447 47.7724C15.6594 47.2994 15.6594 46.7562 15.9428 46.2812Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.9428 8.52072L17.2646 6.29988C17.548 5.82511 18.0318 5.55438 18.5966 5.55438H21.2423C21.8071 5.55438 22.2929 5.82511 22.5742 6.29988L23.8981 8.52072C24.1815 8.99549 24.1815 9.53697 23.8981 10.0117L22.5742 12.2325C22.2908 12.7073 21.8071 12.978 21.2423 12.978H18.5986C18.0338 12.978 17.548 12.7073 17.2666 12.2325L15.9447 10.0117C15.6594 9.53892 15.6594 8.99549 15.9428 8.52072Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.00404 41.7907L9.07076 39.9996C9.29957 39.617 9.6902 39.3973 10.1457 39.3973H12.2793C12.7347 39.3973 13.1255 39.617 13.3542 39.9996L14.421 41.7907C14.6497 42.1734 14.6497 42.6107 14.421 42.9933L13.3542 44.7844C13.1255 45.1671 12.7347 45.3868 12.2793 45.3868H10.1457C9.6902 45.3868 9.29957 45.1671 9.07076 44.7844L8.00404 42.9933C7.7773 42.6128 7.7773 42.1734 8.00404 41.7907Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.79473 32.2767L8.93245 30.3677C9.17536 29.9597 9.59237 29.7262 10.0782 29.7262H12.3514C12.8373 29.7262 13.2543 29.9597 13.4972 30.3677L14.6348 32.2767C14.8777 32.6846 14.8777 33.1496 14.6348 33.5578L13.4972 35.4666C13.2543 35.8748 12.8373 36.108 12.3514 36.108H10.0761C9.5903 36.108 9.17329 35.8748 8.93038 35.4666L7.79279 33.5578C7.55182 33.1496 7.55182 32.6829 7.79473 32.2767Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.79473 22.8722L8.93245 20.9633C9.17536 20.5553 9.59237 20.3217 10.0782 20.3217H12.3514C12.8373 20.3217 13.2543 20.5553 13.4972 20.9633L14.6348 22.8722C14.8777 23.2802 14.8777 23.7453 14.6348 24.1533L13.4972 26.0622C13.2543 26.4702 12.8373 26.7038 12.3514 26.7038H10.0761C9.5903 26.7038 9.17329 26.4702 8.93038 26.0622L7.79279 24.1533C7.55182 23.7472 7.55182 23.2802 7.79473 22.8722Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.00404 13.4348L9.07076 11.6436C9.29957 11.261 9.6902 11.0413 10.1457 11.0413H12.2793C12.7347 11.0413 13.1255 11.261 13.3542 11.6436L14.421 13.4348C14.6497 13.8174 14.6497 14.2549 14.421 14.6374L13.3542 16.4286C13.1255 16.8112 12.7347 17.0309 12.2793 17.0309H10.1457C9.6902 17.0309 9.29957 16.8112 9.07076 16.4286L8.00404 14.6374C7.7773 14.2549 7.7773 13.8174 8.00404 13.4348Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M1.8743 37.4872L2.44313 36.5299C2.56458 36.3257 2.77309 36.2081 3.018 36.2081H4.15767C4.40058 36.2081 4.60909 36.3257 4.73255 36.5299L5.30138 37.4872C5.42284 37.6913 5.42284 37.9248 5.30138 38.1307L4.73255 39.0862C4.61109 39.2903 4.40262 39.408 4.15767 39.408H3.018C2.77509 39.408 2.56659 39.2903 2.44313 39.0862L1.8743 38.1307C1.75284 37.9248 1.75284 37.6913 1.8743 37.4872Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.987775 27.9173L1.85213 26.4675C2.03632 26.1575 2.35416 25.9809 2.72257 25.9809H4.45128C4.81972 25.9809 5.13752 26.1575 5.32174 26.4675L6.1861 27.9173C6.37032 28.2274 6.37032 28.5824 6.1861 28.8903L5.32174 30.3402C5.13752 30.6502 4.81972 30.8267 4.45128 30.8267H2.72257C2.35416 30.8267 2.03632 30.6502 1.85213 30.3402L0.987775 28.8903C0.803554 28.5824 0.803554 28.2274 0.987775 27.9173Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M1.8743 18.6069L2.44313 17.6496C2.56458 17.4456 2.77309 17.3278 3.018 17.3278H4.15767C4.40058 17.3278 4.60909 17.4456 4.73255 17.6496L5.30138 18.6069C5.42284 18.811 5.42284 19.0445 5.30138 19.2486L4.73255 20.2039C4.61109 20.4079 4.40262 20.5257 4.15767 20.5257H3.018C2.77509 20.5257 2.56659 20.4079 2.44313 20.2039L1.8743 19.2486C1.75284 19.0445 1.75284 18.811 1.8743 18.6069Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M41.0576 46.2812L39.7336 44.0604C39.4503 43.5858 38.9664 43.3149 38.4017 43.3149H35.7562C35.1911 43.3149 34.7054 43.5858 34.424 44.0604L33.1021 46.2812C32.8188 46.7562 32.8188 47.2994 33.1021 47.7724L34.424 49.9932C34.7075 50.4682 35.1911 50.7387 35.7562 50.7387H38.4017C38.9664 50.7387 39.4524 50.4682 39.7336 49.9932L41.0576 47.7724C41.339 47.2994 41.339 46.7562 41.0576 46.2812Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M41.0576 8.52072L39.7336 6.29988C39.4503 5.82511 38.9664 5.55438 38.4017 5.55438H35.7562C35.1911 5.55438 34.7054 5.82511 34.424 6.29988L33.1021 8.52072C32.8188 8.99549 32.8188 9.53697 33.1021 10.0117L34.424 12.2325C34.7075 12.7073 35.1911 12.978 35.7562 12.978H38.4017C38.9664 12.978 39.4524 12.7073 39.7336 12.2325L41.0576 10.0117C41.339 9.53892 41.339 8.99549 41.0576 8.52072Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M48.9929 41.7907L47.9261 39.9996C47.6972 39.617 47.3066 39.3973 46.851 39.3973H44.7176C44.262 39.3973 43.8714 39.617 43.6426 39.9996L42.5757 41.7907C42.3472 42.1734 42.3472 42.6107 42.5757 42.9933L43.6426 44.7844C43.8714 45.1671 44.262 45.3868 44.7176 45.3868H46.851C47.3066 45.3868 47.6972 45.1671 47.9261 44.7844L48.9929 42.9933C49.2215 42.6128 49.2215 42.1734 48.9929 41.7907Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M49.2037 32.2767L48.0661 30.3677C47.8232 29.9597 47.4062 29.7262 46.9205 29.7262H44.6473C44.1613 29.7262 43.7443 29.9597 43.5014 30.3677L42.3638 32.2767C42.1209 32.6846 42.1209 33.1496 42.3638 33.5578L43.5014 35.4666C43.7443 35.8748 44.1613 36.108 44.6473 36.108H46.9205C47.4062 36.108 47.8232 35.8748 48.0661 35.4666L49.2037 33.5578C49.4466 33.1496 49.4466 32.6829 49.2037 32.2767Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M49.2037 22.8722L48.0661 20.9633C47.8232 20.5553 47.4062 20.3217 46.9205 20.3217H44.6473C44.1613 20.3217 43.7443 20.5553 43.5014 20.9633L42.3638 22.8722C42.1209 23.2802 42.1209 23.7453 42.3638 24.1533L43.5014 26.0622C43.7443 26.4702 44.1613 26.7038 44.6473 26.7038H46.9205C47.4062 26.7038 47.8232 26.4702 48.0661 26.0622L49.2037 24.1533C49.4466 23.7472 49.4466 23.2802 49.2037 22.8722Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M48.9929 13.4348L47.9261 11.6436C47.6972 11.261 47.3066 11.0413 46.851 11.0413H44.7176C44.262 11.0413 43.8714 11.261 43.6426 11.6436L42.5757 13.4348C42.3472 13.8174 42.3472 14.2549 42.5757 14.6374L43.6426 16.4286C43.8714 16.8112 44.262 17.0309 44.7176 17.0309H46.851C47.3066 17.0309 47.6972 16.8112 47.9261 16.4286L48.9929 14.6374C49.2215 14.2549 49.2215 13.8174 48.9929 13.4348Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M55.1258 37.4872L54.5549 36.5299C54.4334 36.3257 54.2252 36.2081 53.9802 36.2081H52.8404C52.5975 36.2081 52.389 36.3257 52.2675 36.5299L51.6967 37.4872C51.5751 37.6913 51.5751 37.9248 51.6967 38.1307L52.2675 39.0862C52.389 39.2903 52.5975 39.408 52.8404 39.408H53.9802C54.223 39.408 54.4315 39.2903 54.5549 39.0862L55.1258 38.1307C55.2473 37.9248 55.2473 37.6913 55.1258 37.4872Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M56.0103 27.9173L55.1459 26.4675C54.9617 26.1575 54.6441 25.9809 54.2757 25.9809H52.5469C52.1785 25.9809 51.8606 26.1575 51.6764 26.4675L50.812 27.9173C50.6278 28.2274 50.6278 28.5824 50.812 28.8903L51.6764 30.3402C51.8606 30.6502 52.1785 30.8267 52.5469 30.8267H54.2757C54.6441 30.8267 54.9617 30.6502 55.1459 30.3402L56.0103 28.8903C56.1945 28.5824 56.1945 28.2274 56.0103 27.9173Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M55.1258 18.6069L54.5549 17.6496C54.4334 17.4456 54.2252 17.3278 53.9802 17.3278H52.8404C52.5975 17.3278 52.389 17.4456 52.2675 17.6496L51.6967 18.6069C51.5751 18.811 51.5751 19.0445 51.6967 19.2486L52.2675 20.2039C52.389 20.4079 52.5975 20.5257 52.8404 20.5257H53.9802C54.223 20.5257 54.4315 20.4079 54.5549 20.2039L55.1258 19.2486C55.2473 19.0445 55.2473 18.811 55.1258 18.6069Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M25.1421 33.0172L26.2656 31.132C26.5045 30.7297 26.9173 30.4982 27.3972 30.4982H29.6422C30.1218 30.4982 30.5327 30.7279 30.7738 31.132L31.8971 33.0172C32.136 33.4196 32.136 33.8804 31.8971 34.2828L30.7738 36.168C30.5349 36.5703 30.1218 36.7997 29.6422 36.7997H27.3972C26.9173 36.7997 26.5064 36.5703 26.2656 36.168L25.1421 34.2828C24.9032 33.8804 24.9032 33.4196 25.1421 33.0172Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M25.1421 21.7102L26.2656 19.8249C26.5045 19.4227 26.9173 19.1913 27.3972 19.1913H29.6422C30.1218 19.1913 30.5327 19.4208 30.7738 19.8249L31.8971 21.7102C32.136 22.1124 32.136 22.5735 31.8971 22.9756L30.7738 24.8611C30.5349 25.2632 30.1218 25.4947 29.6422 25.4947H27.3972C26.9173 25.4947 26.5064 25.2652 26.2656 24.8611L25.1421 22.9756C24.9032 22.5735 24.9032 22.1124 25.1421 21.7102Z" fill="white"></path></svg>
                {this.props.children}
            </div>
        )
    }
}

export default
class OurProducts extends Component {
    render () {
        return (
            <div className='ourproducts'>
                <div className='ourproducts-info'>
                    <Badge>OUR PRODUCTS</Badge>
                    <h1>Business Intelligence Solutions</h1>
                    <h2>Empowered by artificial intelligence, data mining, and machine learning.</h2>
                    <a href='/#'>Learn more <span>&gt;</span></a>
                </div>
                <div className='ourproducts-card'>
                    <ProductCard className='purple'>
                        <div className="product-card-info">
                            <h6>Hexomatic</h6>
                            <p>Hexomatic is a no-code, data extraction and work automation platform.</p>
                        </div>
                    </ProductCard>
                    <ProductCard className='orange'>
                        <div className="product-card-info">
                            <h6>Hexospark</h6>
                            <p>Hexospark is an all-in-one email and CRM platform designed to spark productivity.</p>
                        </div>
                    </ProductCard>
                    <ProductCard className='light-blue'>
                        <div className="product-card-info">
                            <h6>Hexowatch</h6>
                            <p>Hexowatch is a virtual recon drone, monitoring any page or website for changes.</p>
                        </div>
                    </ProductCard>
                    <ProductCard className='green'>
                        <div className="product-card-info">
                            <h6>Hexometer</h6>
                            <p>Hexometer provides 24/7 website monitoring to catch problems before they affect your business.</p>
                        </div>
                    </ProductCard>
                </div>
            </div>
        )
    }
}