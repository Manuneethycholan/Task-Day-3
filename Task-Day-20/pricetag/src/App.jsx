import React from 'react'
import Card from './components/Cards'


function App() {

  let data = [
    {
      currentplan: "Free",
      price: "0",
      user: "Single User",
      ismultipleuser: false,
      storage: "5 GB",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      isunlimitedPrivateProjects: false,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: false,
      subDomain: "Free Subdomain",
      isSubDomain: false,
      isSubdomainUnlimited: false,
      reports: "Monthly Status Reports",
      isReports: false
    },
    {
      currentplan: "PLUS",
      price: "9",
      user: "5 Users",
      ismultipleuser: true,
      storage: "50 GB",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      isunlimitedPrivateProjects: true,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: true,
      subDomain: "Free Subdomain",
      isSubDomain: true,
      isSubdomainUnlimited: false,
      reports: "Monthly Status Reports",
      isReports: false
    },
    {
      currentplan: "PRO",
      price: "49",
      user: "Unlimited Users",
      ismultipleuser: true,
      storage: "150 GB",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      isunlimitedPrivateProjects: true,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: true,
      subDomain: "Unlimited Free Subdomain",
      isSubDomain: true,
      isSubdomainUnlimited: true,
      reports: "Monthly Status Reports",
      isReports: true
    }
  ]

  return (<div>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            data.map((e, i) => {
              // console.log(e,i)
              return <Card data={e} key={i} />
            })
          }
        </div>
      </div>
    </section>
  </div>
  )
}

export default App
