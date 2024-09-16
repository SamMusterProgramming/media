import './Infos.css'


const Infos = () => {
  return (
    <div className='infosContainer'>
      <div className="infosWrapper">

        <h4 className="infosTitle">User Information</h4>
         <div className="infos">
           <div className="infosItem">
              <span className="infosKey">City:</span>
              <span className="infosValue">New York</span>
           </div>
           <div className="infosItem">
              <span className="infosKey">From:</span>
              <span className="infosValue">Tizi-Ouzou</span>
           </div>
           <div className="infosItem">
              <span className="infosKey">Relationship:</span>
              <span className="infosValue">Married</span>
           </div>
         </div>

         <h4 className="friends">User Friends</h4>
         <div className="friendsFollowers">
           
            <div className="friendsFollower">
                <img src='/assets/asset/samir.jpeg' alt="" className="freindsFollowerImg" />
                <span className="friendsName">Samir Haddadi</span>
            </div>
           
         </div>
      </div>
    </div>
  )
}

export default Infos
