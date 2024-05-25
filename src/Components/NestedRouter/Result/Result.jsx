// eslint-disable-next-line no-unused-vars
import React from 'react'
import img2 from "../../../image/Happy.json"
import Lottie from 'lottie-react/build'
const Result = () => {
  return (
    <div>
          <div className=' col-md-12 d-flex align-items-center justify-content-center'>
              <div >
                        <Lottie animationData={img2} />
                    </div>
          </div>
          <h3 className=' text-center' style={{ color: "#CA4B7F" }}>{localStorage.getItem("emotion")}</h3>
    </div>
  )
}

export default Result