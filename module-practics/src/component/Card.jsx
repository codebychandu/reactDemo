
import "./Card.css"

const Card = ({username, clickhere}) => {
    return (
      <div className="CardContainor" >
        <div className=" max-w-xs rounded-md shadow hover:shadow-lg bg-black text-gray-100" >
          <img
            src="https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
              <p className="text-gray-400 bg-red-500 rounded-md m-6 p-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
                soluta amet corporis accusantium aliquid consectetur eaque!
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200 cursor-pointer" 
            >
              {clickhere}
            </button>
          </div>
        </div>
        </div>
    )
}

export default Card;