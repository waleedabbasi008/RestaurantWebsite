import React from 'react'

const OrgCard = ({ orgdata }) => {
  console.log(orgdata);

  return (
    <>
      <section className="card-section">

        {
          orgdata.map((currele) => {
            const { id, name, title, description, Fee, image } = currele;
            return (
              <>
                <div className="card-container " key={currele.id}>
                  <div className="card">
                    <div className="card-body">
                      <span className='card-number' > {id} </span>
                      <span className="card-author subtile   fw-bolder d-block w-auto" style={{ color: 'black' }}> {name} </span>
                      <h2 className="card-title"> {title} </h2>
                      <span className="card-description">
                        {description}
                      </span>
                      <div className="card-read"> Read </div>
                    </div>
                    <img src={image} alt="MyImage" className='card-image' />
                    <span className="Fee"> Fee {Fee} </span>
                    <span className="card-tag text-center"> Order Now </span>
                  </div>
                </div>
              </>
            )
          })
        }

      </section>
    </>
  )
}

export default OrgCard;