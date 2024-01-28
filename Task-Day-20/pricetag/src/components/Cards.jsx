import React from 'react'



function Card({ data }) {


    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{data.currentplan}</h5>
                    <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.ismultipleuser ? <strong>{data.user}</strong> : data.user}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.storage}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.publicProjects}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.communityAccess}</li>


                        <li className={data.isunlimitedPrivateProjects ? "" : "xsymbolitem text-muted"}><span className="fa-li"><i className={data.isunlimitedPrivateProjects ? "fas fa-check" : "fas fa-times"}></i></span>{data.privateProjects}</li>
                        <li className={data.isPhoneSupport ? "" : "xsymbolitem text-muted"}><span className="fa-li"><i className={data.isPhoneSupport ? "fas fa-check" : "fas fa-times"}></i></span>{data.phoneSupport}</li>


                        <li className={data.isSubDomain ? "" : "xsymbolitem text-muted"}><span className="fa-li"><i className={data.isSubDomain ? "fas fa-check" : "fas fa-times"}></i></span>{data.isSubdomainUnlimited ? <strong>{data.subDomain}</strong> : data.subDomain}</li>
                        <li className={data.isReports ? "" : "xsymbolitem text-muted"}><span className="fa-li"><i className={data.isReports ? "fas fa-check" : "fas fa-times"}></i></span>{data.reports}</li>
                    </ul>
                    <div className="d-grid">
                        <a href={{}} className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

