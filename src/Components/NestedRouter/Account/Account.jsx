import React, { useContext, useEffect } from 'react'
import "./Account.css"
import account from "../../../image/changeAccount.png"
import img1 from "../../../image/welcome2.png"
import { speechContext } from '../../Context/Store.jsx'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Account = () => {
  let { userData, dataUser, logOut } = useContext(speechContext);
  // dataUser();
  
  let deleteAccount = async () => {
    try {
      const { data } = await axios.delete(`https://speech-emotion.onrender.com/delete/${userData?._id}`)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <h2 className='sub-title py-3 '>Account</h2>
      <div className='parent-account my-3 d-flex align-items-center justify-content-between p-2'>
        <img src={img1} className='logo-account1 rounded-circle' />
        <div>
          <h2 className='username'>UserName </h2>
          <br />
          <h6 className='sub-title name text-capitalize'>{userData?.first_name}</h6>
        </div>
      </div>
      <div className='details'>
        <div className=' d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center justify-content-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='logo-account' viewBox="0 0 38 61" fill="none">
              <path d="M4.07692 50.1952C3.56906 50.6639 3.09697 51.1721 2.66483 51.7153C2.55841 51.8475 2.74253 52.0371 2.84894 51.9049C3.28108 51.3616 3.75317 50.8534 4.26103 50.3848C4.38603 50.27 4.20192 50.0821 4.07692 50.1952Z" fill="white" />
              <path d="M13.3043 42.4572L5.68139 46.6993C4.13096 47.5638 2.83624 48.8436 1.93414 50.4035C1.03204 51.9634 0.556094 53.7454 0.556641 55.5609V59.8708H37.8183V55.5609C37.8198 53.7432 37.3435 51.9589 36.4401 50.3973C35.5367 48.8357 34.2398 47.5549 32.6868 46.6906L25.0639 42.4485" fill="#7EA0F9" />
              <path d="M22.4 33.7137V38.1019C22.4001 38.7911 22.6157 39.4619 23.0148 40.0151L24.7377 42.4014C24.9137 42.6445 24.994 42.9471 24.9627 43.2486C24.9314 43.5501 24.7907 43.8283 24.5688 44.0276L19.0285 47.3601C19.0028 47.3833 18.9698 47.3962 18.9356 47.3966C18.9014 47.3962 18.8685 47.3833 18.8427 47.3601L13.3058 44.0294C13.0839 43.8301 12.9432 43.5518 12.9119 43.2503C12.8806 42.9488 12.9609 42.6463 13.1369 42.4032L14.8598 40.0169C15.2589 39.4637 15.4745 38.7928 15.4746 38.1037V33.7137" fill="#F9D4BB" />
              <path d="M22.6197 38.5177V36.7297H15.6943V38.2499C17.4324 39.5474 19.5641 39.8396 22.6197 38.5177Z" fill="#E2B89C" />
              <path d="M22.3175 33.7139V37.1124C22.2986 37.5763 22.307 38.041 22.3428 38.5039C22.4112 39.1005 22.6276 39.6689 22.9712 40.1544L23.2887 40.5945L24.4846 42.252C24.6179 42.4108 24.7313 42.586 24.8224 42.7738C24.9024 42.9857 24.9065 43.2199 24.8342 43.4347C24.8014 43.5331 24.7523 43.6249 24.689 43.706C24.6653 43.7356 24.6383 43.7617 24.613 43.7912C24.5876 43.8208 24.5893 43.8173 24.613 43.8017C24.3393 43.9895 24.0353 44.1495 23.7498 44.3095L21.9982 45.3409L19.1369 47.0245C19.1149 47.0385 19.0457 47.0646 19.1183 47.0385H19.2568L19.1909 47.028L19.3818 47.2854V47.2489C19.381 47.208 19.3713 47.1677 19.3532 47.1312C19.3352 47.0947 19.3093 47.0628 19.2777 47.0381C19.246 47.0133 19.2092 46.9963 19.1702 46.9882C19.1312 46.9801 19.0909 46.9813 19.0524 46.9915L18.9866 47.0019H19.1251C19.2011 47.0298 19.1251 47.0019 19.1014 46.9863L18.9494 46.8976L18.4089 46.5828L16.6877 45.5862L13.7013 43.8469C13.6743 43.8312 13.6456 43.8173 13.6203 43.7999C13.6777 43.8417 13.6203 43.7878 13.6034 43.7756C13.5814 43.7529 13.5605 43.7291 13.5409 43.7043C13.4708 43.6133 13.418 43.5094 13.3855 43.3982C13.3431 43.2397 13.3392 43.073 13.3739 42.9126C13.4086 42.7522 13.4811 42.603 13.5848 42.4781L14.6675 40.9771C15.0324 40.471 15.4394 39.9805 15.6708 39.3926C15.9022 38.8047 15.9124 38.1751 15.9124 37.5299V33.7139C15.9124 33.6429 15.885 33.5747 15.8362 33.5245C15.7874 33.4743 15.7212 33.446 15.6523 33.446C15.5833 33.446 15.5171 33.4743 15.4683 33.5245C15.4195 33.5747 15.3921 33.6429 15.3921 33.7139V37.1577C15.3921 37.6464 15.4344 38.1734 15.3431 38.6534C15.2521 39.1124 15.0622 39.5445 14.7874 39.9179L14.3753 40.4884L13.1929 42.1181C13.0012 42.3601 12.8763 42.6509 12.8314 42.9599C12.7774 43.4208 12.9632 44.0034 13.3584 44.2661C13.6422 44.4539 13.9496 44.6139 14.2435 44.7878L16.0306 45.8314C16.9731 46.3793 17.9072 46.9515 18.8616 47.4785C18.9605 47.5307 19.0741 47.5455 19.1825 47.5202L18.8531 47.2628V47.2994C18.8536 47.3578 18.8724 47.4144 18.9068 47.4609C18.9412 47.5073 18.9894 47.5409 19.044 47.5568C19.1537 47.5821 19.2686 47.5667 19.3683 47.5133L19.5017 47.435L20.0203 47.1289L21.7229 46.1271L24.7785 44.3287C25.4541 43.9269 25.5774 42.906 25.1349 42.2763C24.8157 41.8224 24.4863 41.3771 24.1603 40.9267L23.5894 40.137C23.4393 39.9407 23.3027 39.7338 23.1806 39.5178C22.9549 39.0811 22.8388 38.5933 22.8428 38.0986C22.8428 37.9247 22.8428 37.7629 22.8428 37.596V33.7139C22.8428 33.6429 22.8154 33.5747 22.7666 33.5245C22.7178 33.4743 22.6516 33.446 22.5827 33.446C22.5137 33.446 22.4475 33.4743 22.3987 33.5245C22.3499 33.5747 22.3225 33.6429 22.3225 33.7139H22.3175Z" fill="#474B58" />
              <path d="M9.37347 54.9468L7.88536 59.6689L7.70801 58.3888L7.81442 56.6704L9.37347 54.9468Z" fill="#86B7E2" />
              <path d="M7.90386 59.8707V58.1593V55.4477V54.8216C7.90386 54.7683 7.8833 54.7172 7.84671 54.6796C7.81013 54.6419 7.76051 54.6207 7.70876 54.6207C7.65702 54.6207 7.6074 54.6419 7.57081 54.6796C7.53423 54.7172 7.51367 54.7683 7.51367 54.8216V56.5331V59.2446V59.8707C7.51367 59.924 7.53423 59.9751 7.57081 60.0128C7.6074 60.0504 7.65702 60.0716 7.70876 60.0716C7.76051 60.0716 7.81013 60.0504 7.84671 60.0128C7.8833 59.9751 7.90386 59.924 7.90386 59.8707Z" fill="#474B58" />
              <path d="M7.94692 57.0879L9.4063 55.2895L9.61575 55.0303C9.77622 54.8338 9.50089 54.5485 9.34043 54.7468L7.88104 56.5452L7.67159 56.8044C7.51113 57.0009 7.78645 57.2861 7.94692 57.0879Z" fill="#474B58" />
              <path d="M30.2031 54.9104L31.6912 59.6325L31.8686 58.3524L31.7622 56.634L30.2031 54.9104Z" fill="#86B7E2" />
              <path d="M32.0611 59.8306V58.1191V55.4076V54.7867C32.0611 54.7334 32.0405 54.6823 32.0039 54.6447C31.9674 54.607 31.9177 54.5858 31.866 54.5858C31.8142 54.5858 31.7646 54.607 31.728 54.6447C31.6915 54.6823 31.6709 54.7334 31.6709 54.7867V56.4981V59.2097V59.8306C31.6709 59.8839 31.6915 59.935 31.728 59.9726C31.7646 60.0103 31.8142 60.0315 31.866 60.0315C31.9177 60.0315 31.9674 60.0103 32.0039 59.9726C32.0405 59.935 32.0611 59.8839 32.0611 59.8306Z" fill="#474B58" />
              <path d="M31.9057 56.7678L30.4463 54.9607L30.2369 54.7015C30.068 54.5032 29.8011 54.7885 29.9616 54.985L31.421 56.7834L31.6372 57.0478C31.8061 57.2461 32.073 56.9608 31.9125 56.7643L31.9057 56.7678Z" fill="#474B58" />
              <path d="M10.6712 44.8974L9.02096 45.8384C8.32335 46.2349 7.62068 46.6263 6.93491 47.0437C6.13939 47.5201 5.37893 48.0561 4.65968 48.6473C4.52962 48.7551 4.71373 48.9447 4.84379 48.8369C5.88372 48.0044 6.99266 47.2676 8.15782 46.635L10.1476 45.501L10.8047 45.127C10.9516 45.0435 10.8199 44.8122 10.6729 44.8957L10.6712 44.8974Z" fill="white" />
              <path d="M11.9787 44.1528L11.1882 44.6032C11.0412 44.6867 11.173 44.918 11.3199 44.8346L12.1104 44.3841C12.2574 44.3006 12.1256 44.0693 11.9787 44.1528Z" fill="white" />
              <path d="M13.1016 42.1894L10.399 43.6886L6.27589 45.988L5.48032 46.4384C4.35059 47.0689 3.34885 47.9168 2.52945 48.936C1.03453 50.8106 0.217819 53.1614 0.218751 55.587C0.218751 56.9622 0.218751 58.3374 0.218751 59.7126V59.8343C0.219626 59.9051 0.247313 59.9727 0.295907 60.0227C0.344501 60.0728 0.410157 60.1013 0.478873 60.1022H36.2339C36.717 60.1022 37.2001 60.1109 37.6832 60.1022H37.7473C37.8161 60.1013 37.8817 60.0728 37.9303 60.0227C37.9789 59.9727 38.0066 59.9051 38.0075 59.8343V55.8618C38.0197 54.9778 37.9359 54.0951 37.7575 53.2303C37.4785 51.9643 36.9696 50.764 36.2575 49.6926C35.5341 48.605 34.6171 47.6684 33.555 46.9324C33.1428 46.6471 32.7104 46.4106 32.2746 46.1671L28.366 43.993C27.3036 43.4017 26.2496 42.7947 25.1787 42.219L25.1263 42.1894C24.8324 42.0259 24.5689 42.4868 24.8645 42.652L27.4978 44.1165L31.626 46.4141L32.4841 46.8906C34.0103 47.7366 35.2833 48.9956 36.1656 50.5318C37.0479 52.068 37.506 53.8232 37.4906 55.6079V59.8308L37.7507 59.563H1.99231C1.51092 59.563 1.02277 59.5369 0.543059 59.563H0.478873L0.738996 59.8308V55.907C0.723443 55.0639 0.798788 54.2216 0.963647 53.3955C1.23579 52.1482 1.73998 50.9669 2.44837 49.917C3.16035 48.863 4.06726 47.964 5.11716 47.2715C5.48877 47.028 5.87895 46.8176 6.26576 46.6019L10.1845 44.4191C11.225 43.84 12.2824 43.2869 13.3076 42.6799L13.36 42.6503C13.6539 42.4868 13.3921 42.0242 13.0982 42.1876L13.1016 42.1894Z" fill="#474B58" />
              <path d="M28.8279 51.8665H19.7743C19.7323 51.8665 19.6982 51.9015 19.6982 51.9447V57.6356C19.6982 57.6789 19.7323 57.7139 19.7743 57.7139H28.8279C28.8698 57.7139 28.9039 57.6789 28.9039 57.6356V51.9447C28.9039 51.9015 28.8698 51.8665 28.8279 51.8665Z" fill="white" />
              <path opacity="0.15" d="M28.934 57.3244H20.3568C20.2739 57.3244 20.1944 57.2905 20.1358 57.2302C20.0772 57.1698 20.0443 57.088 20.0443 57.0026V51.7987C20.0417 51.775 20.0417 51.7511 20.0443 51.7274C19.9756 51.7439 19.9144 51.7838 19.8705 51.8406C19.8267 51.8975 19.8028 51.9679 19.8027 52.0405V57.2444C19.8027 57.3297 19.8357 57.4116 19.8943 57.4719C19.9529 57.5323 20.0323 57.5662 20.1152 57.5662H28.6976C28.7681 57.5661 28.8365 57.5415 28.8917 57.4963C28.9469 57.4512 28.9856 57.3881 29.0016 57.3174C28.9794 57.3223 28.9567 57.3246 28.934 57.3244Z" fill="#7EA0F9" />
              <path d="M19.7158 52.8475L19.7192 51.8526L21.6431 51.6926L28.7069 51.8839L28.9704 53.7258L19.5908 53.8337L19.7158 52.8475Z" fill="#FFE66A" />
              <path d="M19.5449 53.8738L19.6767 52.8441V51.8162L21.6377 51.6527L28.732 51.8458L29.0073 53.759H28.9634L19.5449 53.8738ZM19.7577 51.891V52.8528L19.6378 53.792L28.9279 53.6859L28.6745 51.9223L21.6462 51.731L19.7577 51.891Z" fill="#5A6281" />
              <path d="M28.5748 57.5122H20.0516C19.9637 57.5122 19.8827 57.4965 19.8827 57.3834C19.8827 57.2704 19.8827 57.1573 19.8827 57.046V53.3431C19.8827 52.9674 19.859 52.5813 19.8827 52.2056C19.8827 52.103 19.9519 52.0682 20.0398 52.0665H28.3924C28.4526 52.0629 28.5129 52.0629 28.5731 52.0665C28.7099 52.0839 28.6914 52.2074 28.6914 52.3117V57.2478C28.6914 57.3487 28.715 57.5035 28.5748 57.5122C28.3248 57.5261 28.3231 57.9278 28.5748 57.9139C28.6463 57.9109 28.7165 57.893 28.7811 57.8613C28.8457 57.8296 28.9034 57.7848 28.9507 57.7296C28.9981 57.6743 29.0341 57.6098 29.0565 57.5399C29.079 57.4699 29.0875 57.396 29.0815 57.3226V52.3309C29.093 52.2371 29.0846 52.1419 29.0569 52.0519C29.0292 51.9618 28.9828 51.879 28.9211 51.8091C28.7184 51.6091 28.3552 51.6682 28.0968 51.6682H22.5987C21.7424 51.6682 20.886 51.6595 20.0313 51.6682C19.9621 51.6652 19.893 51.6763 19.8281 51.701C19.7631 51.7256 19.7035 51.7633 19.6527 51.8118C19.602 51.8604 19.5611 51.9188 19.5324 51.9837C19.5038 52.0486 19.4879 52.1187 19.4857 52.19V52.463V56.2286C19.4857 56.613 19.4739 56.9991 19.4857 57.3834C19.4862 57.5249 19.5409 57.6605 19.6381 57.7605C19.7352 57.8605 19.8669 57.9169 20.0043 57.9174H20.2509H28.5748C28.627 57.9174 28.6771 57.8961 28.714 57.8581C28.7509 57.8201 28.7716 57.7685 28.7716 57.7148C28.7716 57.661 28.7509 57.6095 28.714 57.5715C28.6771 57.5335 28.627 57.5122 28.5748 57.5122Z" fill="#474B58" />
              <path d="M19.6803 53.9327H27.7508C28.1241 53.9327 28.5008 53.9501 28.8741 53.9327H28.891C28.9427 53.9327 28.9923 53.9115 29.0289 53.8739C29.0655 53.8362 29.0861 53.7851 29.0861 53.7318C29.0861 53.6785 29.0655 53.6274 29.0289 53.5898C28.9923 53.5521 28.9427 53.5309 28.891 53.5309H20.8255C20.4522 53.5309 20.0755 53.5135 19.7022 53.5309H19.6853C19.6336 53.5309 19.584 53.5521 19.5474 53.5898C19.5108 53.6274 19.4902 53.6785 19.4902 53.7318C19.4902 53.7851 19.5108 53.8362 19.5474 53.8739C19.584 53.9115 19.6336 53.9327 19.6853 53.9327H19.6803Z" fill="#474B58" />
              <path d="M5.96561 21.911C7.20166 21.911 8.20367 20.4206 8.20367 18.582C8.20367 16.7435 7.20166 15.2531 5.96561 15.2531C4.72956 15.2531 3.72754 16.7435 3.72754 18.582C3.72754 20.4206 4.72956 21.911 5.96561 21.911Z" fill="#FBCDAC" />
              <path d="M4.24669 19.7873C4.24669 17.9489 5.24834 16.4584 6.48476 16.4584C7.1452 16.4584 7.73808 16.8828 8.14684 17.5576C7.85632 16.2201 7.01176 15.2531 6.01688 15.2531C4.78045 15.2531 3.77881 16.7436 3.77881 18.582C3.76705 19.3658 3.96642 20.1376 4.3548 20.8118C4.28238 20.4754 4.24612 20.1319 4.24669 19.7873Z" fill="#E2B89C" />
              <path d="M3.5332 18.5821C3.5332 19.7996 3.98251 21.2884 5.11252 21.8867C5.34452 22.014 5.60055 22.088 5.86298 22.1036C6.12542 22.1192 6.38802 22.0761 6.63271 21.9772C7.15169 21.7428 7.58057 21.3379 7.85225 20.8258C8.52789 19.6257 8.58026 18.0325 8.05832 16.7628C7.63436 15.7314 6.65636 14.7801 5.48919 15.1175C4.28823 15.4653 3.70042 16.8567 3.56867 18.0221C3.54849 18.2069 3.53834 18.3927 3.53827 18.5786C3.53827 18.6319 3.55882 18.683 3.59541 18.7207C3.632 18.7583 3.68162 18.7795 3.73336 18.7795C3.7851 18.7795 3.83473 18.7583 3.87131 18.7207C3.9079 18.683 3.92845 18.6319 3.92845 18.5786C3.93521 17.5055 4.2933 16.1749 5.2865 15.6358C5.47423 15.5308 5.6824 15.4703 5.89575 15.4589C6.1091 15.4475 6.32224 15.4853 6.51954 15.5697C6.96421 15.7871 7.32607 16.1505 7.54821 16.6028C7.82899 17.1557 7.98954 17.7649 8.01871 18.3881C8.04788 19.0114 7.94497 19.6337 7.71712 20.2118C7.37085 21.0814 6.56177 21.9511 5.5652 21.6502C5.05847 21.4919 4.66659 21.0606 4.40985 20.5962C4.08413 19.9791 3.91779 19.2861 3.92677 18.5838C3.92699 18.5301 3.90647 18.4785 3.86973 18.4403C3.83298 18.4021 3.78302 18.3806 3.73083 18.3803C3.67864 18.3801 3.6285 18.4012 3.59144 18.4391C3.55437 18.4769 3.53343 18.5284 3.5332 18.5821Z" fill="#474B58" />
              <path d="M4.42167 17.8186L5.11758 19.4796C5.18346 19.6379 5.40811 19.5005 5.34223 19.3439L4.6497 17.6864C4.58382 17.5281 4.35917 17.6655 4.42505 17.8221L4.42167 17.8186Z" fill="#474B58" />
              <path d="M5.11758 17.6845L4.42505 19.3421C4.35917 19.4986 4.58382 19.6343 4.6497 19.4777L5.34223 17.8202C5.40811 17.6637 5.18346 17.528 5.11758 17.6845Z" fill="#474B58" />
              <path d="M32.8338 21.4712C34.0698 21.4712 35.0718 19.9807 35.0718 18.1422C35.0718 16.3037 34.0698 14.8132 32.8338 14.8132C31.5977 14.8132 30.5957 16.3037 30.5957 18.1422C30.5957 19.9807 31.5977 21.4712 32.8338 21.4712Z" fill="#FBCDAC" />
              <path d="M34.573 19.3736C34.573 17.5352 33.5714 16.0446 32.3349 16.0446C31.6745 16.0446 31.0816 16.469 30.6729 17.1439C30.96 15.8081 31.8046 14.8411 32.8028 14.8411C34.0392 14.8411 35.0409 16.3316 35.0409 18.17C35.0526 18.9538 34.8533 19.7256 34.4649 20.3998C34.5374 20.0629 34.5737 19.7187 34.573 19.3736Z" fill="#E2B89C" />
              <path d="M30.3994 18.142C30.3994 19.3595 30.8487 20.8483 31.9787 21.4467C32.2107 21.5739 32.4668 21.6479 32.7292 21.6635C32.9916 21.6792 33.2542 21.636 33.4989 21.5371C34.0179 21.3027 34.4468 20.8978 34.7185 20.3857C35.3941 19.1856 35.4465 17.5924 34.9245 16.3228C34.5006 15.2914 33.5226 14.34 32.3554 14.6774C31.1544 15.0253 30.5666 16.4167 30.4349 17.582C30.4147 17.7668 30.4046 17.9526 30.4045 18.1386C30.4045 18.1918 30.425 18.2429 30.4616 18.2806C30.4982 18.3183 30.5478 18.3394 30.5996 18.3394C30.6513 18.3394 30.7009 18.3183 30.7375 18.2806C30.7741 18.2429 30.7947 18.1918 30.7947 18.1386C30.7947 17.0619 31.1663 15.7384 32.1561 15.1905C32.3438 15.0855 32.552 15.025 32.7653 15.0136C32.9787 15.0022 33.1918 15.04 33.3891 15.1244C33.8338 15.3418 34.1957 15.7052 34.4178 16.1575C34.6986 16.7104 34.8591 17.3196 34.8883 17.9429C34.9175 18.5661 34.8146 19.1884 34.5867 19.7665C34.2404 20.6362 33.4314 21.5058 32.4348 21.2049C31.9281 21.0466 31.5362 20.6153 31.2794 20.1509C30.9525 19.5353 30.7844 18.8436 30.7913 18.142C30.7913 18.0885 30.7706 18.0372 30.7339 17.9994C30.6972 17.9615 30.6473 17.9403 30.5954 17.9403C30.5434 17.9403 30.4935 17.9615 30.4568 17.9994C30.4201 18.0372 30.3994 18.0885 30.3994 18.142Z" fill="#474B58" />
              <path d="M19.1363 0.335449H19.1346C12.0672 0.335449 6.33789 6.23488 6.33789 13.5122V23.8417C6.33789 31.119 12.0672 37.0185 19.1346 37.0185H19.1363C26.2037 37.0185 31.9329 31.119 31.9329 23.8417V13.5122C31.9329 6.23488 26.2037 0.335449 19.1363 0.335449Z" fill="#F9D4BB" />
              <path d="M19.5125 34.1277C16.1219 34.1167 12.8732 32.7249 10.4757 30.2562C8.07816 27.7874 6.72651 24.4423 6.71582 20.951V23.8399C6.72651 27.3312 8.07816 30.6764 10.4757 33.1451C12.8732 35.6138 16.1219 37.0056 19.5125 37.0166C22.9037 37.0065 26.1532 35.6151 28.5515 33.1463C30.9497 30.6775 32.3019 27.3318 32.3126 23.8399V20.9492C32.3023 24.4414 30.9504 27.7876 28.5521 30.2568C26.1538 32.726 22.904 34.1176 19.5125 34.1277Z" fill="#E2B89C" />
              <path d="M19.1626 36.6827C17.2172 36.6831 15.2989 36.2118 13.5632 35.307C11.8539 34.4172 10.3653 33.1362 9.21135 31.5621C8.05745 29.988 7.269 28.1627 6.90646 26.2262C6.73487 25.1609 6.66247 24.0811 6.69026 23.0016V15.0914C6.69026 14.2583 6.66492 13.4182 6.72235 12.5868C6.86182 10.5971 7.45249 8.66883 8.44693 6.95681C9.41752 5.28383 10.7413 3.85717 12.3201 2.78255C13.9352 1.68387 15.7776 0.989374 17.6999 0.754559C20.5874 0.415062 23.4997 1.11985 25.9381 2.74824C28.3765 4.37662 30.1892 6.82727 31.0658 9.68051C31.4612 11.0256 31.6538 12.4252 31.6367 13.8304V21.3928C31.6367 22.2044 31.6367 23.0161 31.6367 23.8278C31.6398 25.658 31.2614 27.4676 30.5269 29.1343C29.7298 30.9157 28.5546 32.4901 27.0879 33.7416C24.861 35.6457 22.0572 36.6874 19.1626 36.6862C18.7454 36.6862 18.7437 37.3558 19.1626 37.3558C22.1913 37.3454 25.124 36.2609 27.467 34.2848C29.8101 32.3087 31.4204 29.5617 32.0269 26.5062C32.2245 25.3619 32.311 24.2001 32.2853 23.0381V15.0096C32.2853 14.1191 32.3123 13.2199 32.2346 12.3329C32.0539 10.2494 31.4057 8.23749 30.3411 6.4559C29.2987 4.72272 27.8949 3.24995 26.2315 2.14424C24.5334 1.02018 22.6062 0.314859 20.6001 0.0831993C18.5749 -0.150524 16.5248 0.109851 14.6156 0.843262C12.7519 1.56087 11.0696 2.70226 9.69386 4.18238C8.31814 5.6625 7.28451 7.44319 6.66999 9.39179C6.23609 10.8188 6.02347 12.3074 6.03995 13.8026V21.471C6.03995 22.2595 6.03995 23.048 6.03995 23.8365C6.03951 25.6114 6.37859 27.369 7.03782 29.009C7.69706 30.649 8.66354 32.1393 9.8821 33.3946C11.1006 34.65 12.5474 35.646 14.1398 36.3257C15.7321 37.0053 17.4389 37.3554 19.1626 37.3558C19.2493 37.3558 19.3324 37.3204 19.3937 37.2573C19.455 37.1941 19.4895 37.1085 19.4895 37.0193C19.4895 36.93 19.455 36.8444 19.3937 36.7813C19.3324 36.7182 19.2493 36.6827 19.1626 36.6827Z" fill="#474B58" />
              <path d="M33.1575 17.8221L33.85 19.4796C33.9159 19.6379 34.1405 19.5005 34.0747 19.3439L33.3821 17.6864C33.3162 17.5281 33.0916 17.6655 33.1575 17.8221Z" fill="#474B58" />
              <path d="M33.852 17.6865L33.1594 19.344C33.0935 19.5006 33.3182 19.6362 33.3841 19.4797L34.0766 17.8222C34.1425 17.6656 33.9178 17.53 33.852 17.6865Z" fill="#474B58" />
              <path d="M18.875 15.7733V23.0505C18.875 23.1215 18.9024 23.1896 18.9512 23.2399C19 23.2901 19.0661 23.3183 19.1351 23.3183C19.2041 23.3183 19.2703 23.2901 19.3191 23.2399C19.3678 23.1896 19.3952 23.1215 19.3952 23.0505V15.7733C19.3952 15.7023 19.3678 15.6342 19.3191 15.5839C19.2703 15.5337 19.2041 15.5055 19.1351 15.5055C19.0661 15.5055 19 15.5337 18.9512 15.5839C18.9024 15.6342 18.875 15.7023 18.875 15.7733Z" fill="#474B58" />
              <path d="M17.4306 24.1948C17.8697 24.9792 18.7818 25.6002 19.6703 25.2384C20.1429 25.0218 20.551 24.6796 20.8527 24.247C20.8996 24.1957 20.9257 24.1279 20.9257 24.0574C20.9257 23.987 20.8996 23.9191 20.8527 23.8678C20.8037 23.8179 20.7375 23.7899 20.6686 23.7899C20.5996 23.7899 20.5335 23.8179 20.4845 23.8678C20.2504 24.2064 19.9464 24.4873 19.5943 24.6905C19.5404 24.7194 19.4838 24.7427 19.4254 24.7601L19.3325 24.7862C19.3207 24.7862 19.216 24.8088 19.2599 24.8018C19.2036 24.8061 19.1472 24.8061 19.091 24.8018H18.9947C19.047 24.8018 18.9643 24.8018 18.9474 24.7931C18.8901 24.7814 18.8337 24.7657 18.7785 24.7462L18.7042 24.7166C18.7548 24.7392 18.667 24.6975 18.6552 24.6905C18.6062 24.6644 18.5589 24.6366 18.5133 24.6053L18.4508 24.5618C18.4356 24.5514 18.3646 24.4957 18.4102 24.5322C18.2673 24.4091 18.1361 24.2723 18.0184 24.1235C17.9897 24.0905 18.0285 24.1374 18.0319 24.1409L18.0099 24.1113L17.9761 24.0626L17.9255 23.9878C17.9103 23.9652 17.8968 23.9409 17.8832 23.9183C17.8475 23.8591 17.7907 23.8167 17.7251 23.7999C17.6594 23.7832 17.59 23.7934 17.5315 23.8285C17.473 23.8636 17.4302 23.9207 17.4119 23.9878C17.3937 24.0549 17.4016 24.1267 17.4339 24.1879L17.4306 24.1948Z" fill="#474B58" />
              <path d="M13.6359 29.5831C13.943 29.4218 14.197 29.1707 14.3659 28.8612C14.5348 28.5518 14.6111 28.1978 14.5851 27.8438C14.5314 27.4491 14.3879 27.073 14.1662 26.7463C13.9821 26.4611 13.5311 26.7289 13.7169 27.0159C13.8323 27.1855 13.9259 27.3696 13.9956 27.5638C14.0448 27.6998 14.0721 27.8431 14.0767 27.9882C14.0856 28.1139 14.0683 28.2402 14.026 28.3586C14.026 28.3812 14.0108 28.4038 14.0024 28.4282C13.9906 28.4578 13.994 28.4525 14.0024 28.4282L13.9838 28.4699C13.9578 28.5242 13.9291 28.5771 13.8977 28.6282L13.8504 28.6995C13.8098 28.7604 13.8504 28.6995 13.8284 28.7291C13.8065 28.7587 13.7693 28.8004 13.7372 28.8334C13.7051 28.8665 13.6696 28.903 13.6342 28.9343C13.5987 28.9656 13.5075 29.0369 13.5784 28.9848C13.5137 29.0357 13.4454 29.0816 13.3741 29.1222C13.0768 29.2787 13.3386 29.7413 13.6359 29.5848V29.5831Z" fill="#474B58" />
              <path d="M24.3168 29.1221C24.2455 29.0816 24.1772 29.0356 24.1124 28.9847C24.1834 29.0369 24.0753 28.9517 24.0567 28.9343C24.0381 28.9169 23.9857 28.8682 23.9536 28.8334C23.9216 28.7986 23.8928 28.7656 23.8624 28.729C23.832 28.6925 23.881 28.7603 23.8405 28.6995L23.7932 28.6282C23.7618 28.577 23.733 28.5242 23.707 28.4699L23.6885 28.4281C23.6986 28.4525 23.6986 28.4554 23.6885 28.4368C23.6783 28.4107 23.6699 28.3847 23.6614 28.3568C23.6192 28.2384 23.6019 28.1122 23.6108 27.9864C23.6423 27.6348 23.7661 27.2988 23.9689 27.0141C24.1547 26.7271 23.7037 26.4575 23.5195 26.7445C23.1902 27.2559 22.9723 27.8907 23.1581 28.4994C23.2863 28.8864 23.5306 29.2214 23.8557 29.456C23.9169 29.5044 23.9819 29.5474 24.0499 29.5848C24.3472 29.7413 24.6107 29.2786 24.3117 29.1221H24.3168Z" fill="#474B58" />
              <path d="M29.3882 15.7958C29.3882 15.7958 25.1265 15.5053 22.9476 15.5627C22.4594 15.5749 22.0203 15.2775 21.9679 14.7783C21.9542 14.6479 21.9687 14.516 22.0104 14.3921C22.0522 14.2682 22.12 14.1553 22.2092 14.0617C22.2984 13.968 22.4066 13.8959 22.5261 13.8505C22.6456 13.8051 22.7734 13.7875 22.9003 13.7991C24.4458 13.9417 27.9862 14.3905 29.3882 15.7958Z" fill="#80766E" />
              <path d="M22.9481 15.0808C22.4954 15.093 22.0849 14.8373 21.9869 14.4008C21.9651 14.4982 21.9594 14.5988 21.9701 14.6982C22.0224 15.1973 22.4616 15.4965 22.9497 15.4826C25.127 15.4252 29.3903 15.7156 29.3903 15.7156C29.2239 15.5515 29.0417 15.4052 28.8464 15.2791C27.6252 15.2043 24.6507 15.0356 22.9481 15.0808Z" fill="#6D645E" />
              <path d="M29.3874 15.5957C28.7793 15.554 28.1729 15.5192 27.5648 15.4879C26.3926 15.4253 25.2187 15.3731 24.0464 15.3592C23.7812 15.3592 23.516 15.3592 23.2509 15.3592C22.9857 15.3592 22.7053 15.3922 22.462 15.2392C21.9553 14.9209 22.1377 14.1121 22.7087 14.0078C22.9296 13.9914 23.1517 14.0054 23.3691 14.0495C23.6157 14.0762 23.8623 14.1063 24.1089 14.1399C24.6782 14.2182 25.244 14.3139 25.798 14.4408C26.3944 14.5682 26.9814 14.7385 27.5547 14.9504C28.0676 15.1307 28.5515 15.3886 28.9904 15.7157C29.0791 15.786 29.1637 15.8615 29.2438 15.9418C29.4245 16.1158 29.6999 15.8375 29.5191 15.6583C29.1057 15.2697 28.6273 14.9615 28.107 14.7487C27.515 14.4939 26.9031 14.2914 26.2777 14.1434C25.1752 13.8789 24.055 13.6993 22.9265 13.606C22.7648 13.5912 22.6019 13.6146 22.4503 13.6744C22.2987 13.7342 22.1623 13.8289 22.0515 13.9511C21.9408 14.0734 21.8586 14.2201 21.8112 14.38C21.7638 14.5399 21.7524 14.7088 21.778 14.8739C21.8066 15.042 21.8749 15.2004 21.9768 15.335C22.0787 15.4696 22.2111 15.5765 22.3624 15.6462C22.6483 15.7546 22.9545 15.7945 23.2576 15.7627C24.4873 15.7488 25.717 15.8027 26.9449 15.8618C27.7439 15.9001 28.5428 15.9714 29.3401 15.9992H29.3806C29.6374 16.0149 29.6357 15.6131 29.3874 15.5957Z" fill="#474B58" />
              <path d="M9.46582 15.7958C9.46582 15.7958 13.7325 15.5053 15.9047 15.5627C16.3928 15.5749 16.832 15.2775 16.8844 14.7783C16.8981 14.6479 16.8836 14.516 16.8419 14.3921C16.8001 14.2682 16.7322 14.1553 16.6431 14.0617C16.5539 13.968 16.4457 13.8959 16.3262 13.8505C16.2067 13.8051 16.0789 13.7875 15.952 13.7991C14.4081 13.9417 10.861 14.3905 9.46582 15.7958Z" fill="#80766E" />
              <path d="M15.9047 15.0808C16.3574 15.093 16.7678 14.8373 16.8658 14.4008C16.8876 14.4982 16.8934 14.5988 16.8827 14.6982C16.8303 15.1973 16.3912 15.4965 15.903 15.4826C13.7325 15.4252 9.46582 15.7156 9.46582 15.7156C9.63435 15.5511 9.81887 15.4048 10.0165 15.2791C11.2292 15.2043 14.2038 15.0356 15.9047 15.0808Z" fill="#6D645E" />
              <path d="M9.46414 16.0009C10.1398 15.9557 10.8019 15.9174 11.4708 15.8826C12.7022 15.8183 13.9369 15.7644 15.1699 15.7609C15.7544 15.7609 16.4452 15.8757 16.859 15.3452C16.9585 15.2103 17.026 15.0534 17.0563 14.8869C17.0865 14.7204 17.0786 14.5489 17.0331 14.3861C16.9877 14.2234 16.906 14.0737 16.7946 13.9492C16.6831 13.8246 16.545 13.7285 16.3912 13.6685C16.136 13.5945 15.8674 13.5837 15.6074 13.6372C15.3529 13.6639 15.099 13.6941 14.8456 13.7277C14.2359 13.8077 13.6295 13.9016 13.0282 14.0373C12.397 14.1682 11.776 14.3467 11.1701 14.5712C10.6219 14.7639 10.1044 15.0394 9.63474 15.3887C9.52688 15.4706 9.42367 15.5589 9.32563 15.6531C9.1449 15.827 9.42022 16.1157 9.60096 15.9366C9.98322 15.581 10.4243 15.2988 10.9033 15.1034C11.4528 14.8675 12.0207 14.6796 12.6008 14.5417C13.6519 14.2885 14.7194 14.1141 15.7949 14.0199C16.0533 13.9955 16.2915 13.9973 16.4891 14.1938C16.5836 14.29 16.6484 14.4128 16.6754 14.5468C16.7025 14.6807 16.6905 14.8199 16.6412 14.9469C16.5805 15.071 16.488 15.1755 16.3736 15.2491C16.2592 15.3227 16.1274 15.3626 15.9925 15.3643C15.7341 15.3783 15.4723 15.3643 15.2139 15.3643C14.0315 15.3643 12.8626 15.4165 11.6887 15.4757C10.959 15.5122 10.2259 15.5435 9.49285 15.6026H9.45907C9.21415 15.6131 9.21246 16.0148 9.46414 16.0009Z" fill="#474B58" />
              <path d="M16.4755 29.2786L17.9535 30.0717L20.3183 31.3431L20.8554 31.6336C20.9305 31.6749 21.018 31.6855 21.1004 31.6633C21.1827 31.641 21.2539 31.5875 21.2996 31.5136C21.3423 31.4368 21.354 31.3459 21.3322 31.2603C21.3104 31.1748 21.2569 31.1014 21.1831 31.0561L19.6984 30.263L17.3336 28.9916L16.8049 28.6977C16.7298 28.6564 16.6423 28.6458 16.5599 28.668C16.4776 28.6903 16.4064 28.7437 16.3607 28.8177C16.318 28.8945 16.3063 28.9854 16.3281 29.071C16.3499 29.1565 16.4035 29.2298 16.4772 29.2751L16.4755 29.2786Z" fill="#474B58" />
              <path d="M31.7797 10.0769C31.5483 9.67344 31.295 9.28384 31.0365 8.89946C30.4306 7.9883 29.77 7.11697 29.0586 6.29055C28.23 5.30935 27.2838 4.44031 26.2428 3.70425C25.7397 3.35478 25.199 3.06646 24.6314 2.84505C24.3644 2.74358 24.0899 2.66448 23.8105 2.60851C23.6534 2.5772 23.4406 2.50589 23.292 2.58242L23.2329 2.61721C22.161 3.2549 20.972 3.6559 19.7415 3.79469C18.2618 3.94775 16.7467 3.50945 15.4393 2.84331C15.2974 2.77026 15.1572 2.69547 15.0187 2.61373C14.9912 2.59586 14.9624 2.58016 14.9326 2.56677C14.7873 2.50763 14.5694 2.57894 14.4258 2.61199C13.8501 2.74014 13.295 2.95214 12.7773 3.24161C11.6625 3.84166 10.6912 4.69564 9.8129 5.62093C9.01195 6.47343 8.27242 7.3849 7.60017 8.34811C7.22181 8.88381 6.85865 9.43168 6.52421 9.99694L6.47691 10.0769C6.44459 10.1382 6.4367 10.2099 6.45492 10.277C6.47313 10.3441 6.51602 10.4012 6.57447 10.4363C6.63293 10.4714 6.70236 10.4816 6.76802 10.4649C6.83369 10.4481 6.89044 10.4057 6.92621 10.3465C7.4021 9.53653 7.92616 8.75759 8.49539 8.01417C9.53926 6.62275 10.8061 5.18611 12.2587 4.18777C12.6662 3.90201 13.0988 3.65628 13.5509 3.4538C13.7615 3.36343 13.9769 3.28561 14.1961 3.22073C14.3087 3.18943 14.4213 3.1616 14.534 3.13725C14.6353 3.11464 14.7907 3.08855 14.8515 3.07985L14.7198 3.04333C14.99 3.20598 15.2698 3.35119 15.5576 3.47815C16.2346 3.79339 16.9432 4.03135 17.6706 4.18777C18.1041 4.27983 18.5442 4.33452 18.9864 4.35126C19.4166 4.35876 19.8465 4.32381 20.2702 4.24691C21.0288 4.11492 21.7693 3.89012 22.4761 3.57729C22.8483 3.42306 23.209 3.24111 23.5555 3.03289L23.4237 3.06942C23.4693 3.06942 23.5926 3.09725 23.6855 3.11464C23.7784 3.13203 23.8882 3.15986 23.9879 3.18769C24.1913 3.24384 24.3915 3.31178 24.5875 3.39118C24.9865 3.55892 25.3703 3.76263 25.7344 3.99993C26.5067 4.5079 27.2212 5.10356 27.8644 5.77573C28.9676 6.91282 29.9552 8.16287 30.8119 9.50647C30.9909 9.78127 31.1666 10.0578 31.3304 10.3431C31.3662 10.4022 31.423 10.4446 31.4886 10.4614C31.5543 10.4782 31.6237 10.4679 31.6822 10.4328C31.7406 10.3978 31.7835 10.3406 31.8017 10.2735C31.8199 10.2064 31.8121 10.1347 31.7797 10.0735V10.0769Z" fill="#474B58" />
              <path d="M7.05371 8.5483L10.7174 3.25047L15.1614 0.998112L19.7102 0.335449L24.0765 1.39988L27.5426 3.57398L30.5948 7.2108L31.1302 8.94485L28.8567 6.51161L24.8822 3.23656L23.4245 2.82261L20.9905 3.82443L18.3488 4.03836L16.1664 3.45744L14.6057 2.81043L13.4605 3.19829L11.0957 4.7532L7.99117 8.25088L7.16181 8.94485L7.05371 8.5483Z" fill="#474B58" />
              <path d="M11.3392 18.422H16.3542C16.4232 18.422 16.4893 18.3938 16.5381 18.3436C16.5869 18.2934 16.6143 18.2252 16.6143 18.1542C16.6143 18.0832 16.5869 18.015 16.5381 17.9648C16.4893 17.9146 16.4232 17.8864 16.3542 17.8864H11.3392C11.2702 17.8864 11.2041 17.9146 11.1553 17.9648C11.1065 18.015 11.0791 18.0832 11.0791 18.1542C11.0791 18.2252 11.1065 18.2934 11.1553 18.3436C11.2041 18.3938 11.2702 18.422 11.3392 18.422Z" fill="#474B58" />
              <path d="M22.3314 18.422H27.3464C27.4154 18.422 27.4815 18.3938 27.5303 18.3436C27.5791 18.2934 27.6065 18.2252 27.6065 18.1542C27.6065 18.0832 27.5791 18.015 27.5303 17.9648C27.4815 17.9146 27.4154 17.8864 27.3464 17.8864H22.3314C22.2624 17.8864 22.1963 17.9146 22.1475 17.9648C22.0987 18.015 22.0713 18.0832 22.0713 18.1542C22.0713 18.2252 22.0987 18.2934 22.1475 18.3436C22.1963 18.3938 22.2624 18.422 22.3314 18.422Z" fill="#474B58" />
            </svg>
            <h3 className='p-3 username'>Name</h3>
          </div>
          <h3 className='text-capitalize'>{userData?.first_name}</h3>

        </div>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center justify-content-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='logo-account' viewBox="0 0 38 39" fill="none">
              <path d="M36.9222 27.4902L28.6575 23.843C28.3045 23.6881 27.9121 23.6554 27.5394 23.75C27.1668 23.8446 26.8341 24.0612 26.5913 24.3673L22.9312 28.9719C17.1871 26.1832 12.5643 21.4231 9.85601 15.5084L14.3278 11.7396C14.6257 11.4901 14.8365 11.1475 14.9284 10.7636C15.0203 10.3797 14.9882 9.97545 14.837 9.61202L11.295 1.10184C11.129 0.71007 10.8355 0.390206 10.4651 0.1974C10.0946 0.00459333 9.67043 -0.0490707 9.26567 0.0456611L1.59128 1.86927C1.20105 1.96206 0.85288 2.18831 0.603602 2.5111C0.354325 2.83388 0.21866 3.23413 0.21875 3.64653C0.21875 23.1364 15.5601 38.903 34.4583 38.903C34.859 38.9033 35.2478 38.7637 35.5615 38.507C35.8751 38.2503 36.0949 37.8917 36.1851 37.4897L37.9561 29.5874C38.0475 29.1686 37.9943 28.7301 37.8056 28.3473C37.6169 27.9645 37.3045 27.6615 36.9222 27.4902Z" fill="black" />
            </svg>
            <h3 className='p-3 username '>Phone</h3>
          </div>
          <h3>{userData?.phone}</h3>

        </div>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center justify-content-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='logo-account' viewBox="0 0 26 26" fill="none">
              <path d="M12.6618 0.494751C9.30264 0.494751 6.08107 1.82917 3.70579 4.20445C1.33051 6.57972 -0.00390625 9.80129 -0.00390625 13.1604C-0.00390625 16.5196 1.33051 19.7412 3.70579 22.1164C6.08107 24.4917 9.30264 25.8261 12.6618 25.8261C12.9672 25.8261 13.26 25.7048 13.476 25.4889C13.6919 25.273 13.8132 24.9801 13.8132 24.6747C13.8132 24.3693 13.6919 24.0765 13.476 23.8605C13.26 23.6446 12.9672 23.5233 12.6618 23.5233C10.6122 23.5233 8.60866 22.9155 6.9045 21.7768C5.20034 20.6381 3.87211 19.0197 3.08777 17.1261C2.30343 15.2326 2.09821 13.1489 2.49807 11.1388C2.89792 9.12856 3.88488 7.28208 5.33415 5.83281C6.78342 4.38354 8.6299 3.39658 10.6401 2.99672C12.6503 2.59687 14.7339 2.80209 16.6275 3.58643C18.521 4.37077 20.1395 5.699 21.2782 7.40316C22.4169 9.10732 23.0246 11.1109 23.0246 13.1604V16.4501C23.0246 17.0172 22.7994 17.561 22.3984 17.962C21.9974 18.363 21.4535 18.5883 20.8864 18.5883C20.3193 18.5883 19.7755 18.363 19.3745 17.962C18.9735 17.561 18.7482 17.0172 18.7482 16.4501V8.22543C18.7482 7.92005 18.6269 7.62718 18.411 7.41125C18.195 7.19531 17.9022 7.074 17.5968 7.074C17.2914 7.074 16.9986 7.19531 16.7826 7.41125C16.5667 7.62718 16.4454 7.92005 16.4454 8.22543V8.43153C15.3767 7.55935 14.0412 7.08017 12.6618 7.074C11.6748 7.06701 10.7009 7.30016 9.8241 7.75334C8.94729 8.20652 8.19383 8.86615 7.6287 9.67535C7.06356 10.4845 6.7037 11.4191 6.58013 12.3983C6.45656 13.3775 6.57299 14.3721 6.91939 15.2964C7.26579 16.2206 7.83175 17.0467 8.56851 17.7035C9.30526 18.3603 10.1907 18.8281 11.1485 19.0665C12.1063 19.3049 13.1076 19.3068 14.0663 19.0721C15.025 18.8373 15.9122 18.3729 16.6515 17.7189C16.9545 18.7401 17.6155 19.6179 18.5131 20.1914C19.4107 20.7649 20.485 20.9957 21.539 20.8416C22.5929 20.6874 23.5561 20.1586 24.2519 19.3521C24.9477 18.5455 25.3295 17.5153 25.3275 16.4501V13.1604C25.3235 9.80251 23.9878 6.58324 21.6134 4.20882C19.239 1.8344 16.0197 0.498712 12.6618 0.494751ZM12.6618 16.944C11.9135 16.944 11.1819 16.7221 10.5597 16.3064C9.93753 15.8906 9.45258 15.2997 9.16621 14.6084C8.87984 13.917 8.80491 13.1562 8.9509 12.4223C9.09689 11.6884 9.45724 11.0142 9.98639 10.485C10.5155 9.9559 11.1897 9.59555 11.9236 9.44956C12.6576 9.30357 13.4183 9.37849 14.1097 9.66486C14.8011 9.95123 15.392 10.4362 15.8077 11.0584C16.2235 11.6806 16.4454 12.4121 16.4454 13.1604C16.4442 14.1635 16.0451 15.1252 15.3358 15.8345C14.6265 16.5438 13.6649 16.9428 12.6618 16.944Z" fill="black" />
            </svg>
            <h3 className='p-3 username '>Gender</h3>
          </div>
          <h3 className='text-capitalize'>{userData?.gender}</h3>

        </div>
        <div>
          <div className='between d-flex align-items-center justify-content-center'>
            <img src={account} className='img-account' />
            <Link to="/update"><button className='btn-account'> Change Account Info</button></Link>
          </div>
          <div className='between d-flex  justify-content-center gap-4 my-4'>
            <i className="fa-solid fa-trash-can "></i>
            <p className='text-account' onClick={deleteAccount}>Delete my Account</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Account