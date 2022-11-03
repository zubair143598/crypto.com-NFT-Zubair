import React from 'react'

const Cards = () => {
    const data=
    [
        {
            img:"./Assists/card1.gif",
            img:"./Assists/1.1.png",
            text1:"Cross world tour",
            img:"./Assists/1.svg",
            title:"Cronos World Tour at Messari Mainnet 2022",
            text2:"1 minted",
            text3:'Current Bid',
            price:"$1",
            text4:"Ends in",
            time:"3 hour",
            but:"Bid",
        },
        {
            img:"./Assists/card1.gif",
            img:"./Assists/1.1.png",
            text1:"Cross world tour",
            img:"./Assists/1.svg",
            title:"Cronos World Tour at Messari Mainnet 2022",
            text2:"1 minted",
            text3:'Current Bid',
            price:"$1",
            text4:"Ends in",
            time:"3 hour",
            but:"Bid",
        },


    ]

  return (
    <div className="Cards-section">
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                    {
                        data.map((v,i)=>{
                            return(
                                <>
                                <div className="row">
                                    <div className="col-md-3">

                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards