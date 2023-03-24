import React from 'react'

const AboutCard = ({data}) => {
  return (
    <>
      <section className="about">
        <div className="about-container">
          <div className="container-text"></div>
          <h1 className='about-heading fs-64 ' style={{ color: '#fff' }} > About Us </h1>
        </div>
      </section>
      {/* ############################## info section #######################*/}
      <h1 className='history-heading fs64 text-center App-header' style={{background:"linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35))"}} > Our history </h1>
      <section className="card-section">
      
      {
          data.map((currele)=>{
            const {id, category, year, Date, Achieve, Image} = currele
              return(
                  <>
                  
                 <div className="card-container" key={currele.id}>
          <div className="card">
            <div className="card-body text-center">
              <span className="card-number"> {id} </span> <br /> <br />
                <span className="year"> {year} </span> <br />
                <span className="date"> {Date} </span> <br />
                <span className="achieve"> {Achieve} </span>
            </div>
            </div>
    <img src={Image} alt=" No image added "  className='history-card-image min-vw-90 min-vh-90'/>
          </div>
                  </>
              )
          })
      }
         
        
      </section>
    </>
  )
}

export default AboutCard