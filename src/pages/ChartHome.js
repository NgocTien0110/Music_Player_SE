import React, { useEffect, useState } from "react"
// ...
import Loading from "../components/Loading"

const ChartHome = () => {

  const [dataChartHome, setDataChartHome] = useState()

  //...


  useEffect(() => {
    (
      async () => {
        //...
      }
    )()
  }, [])


  //...

  return (
    <>
      <main className="inset-0 box-border pt-[64px] pb-[96px] px-[10vw]">
        <div className="mt-8">
          {
            dataChartHome
            ?
            <div>hihi</div>
            //...
            :
            <Loading />
          }
        </div>
      </main>
    </>
  )
}

export default ChartHome