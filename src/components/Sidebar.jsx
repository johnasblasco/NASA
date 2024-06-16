

function Sidebar(props) {

      const { handleModal } = props


      return (
            <aside className="sidebar">
                  <div className="bgOverlay" onClick={handleModal}>

                  </div>

                  <div className="sidebarContents">
                        <h2>{props.data?.title}</h2>
                        <div className="descriptionContainer">
                              <p className="descriptionTitle">{props.data?.date}</p>
                              <p>{props.data?.explanation}</p>

                        </div>
                        <button onClick={handleModal}>
                              <i className="fa-solid fa-arrow-right"></i>
                        </button>
                  </div>

            </aside>
      )
}

export default Sidebar