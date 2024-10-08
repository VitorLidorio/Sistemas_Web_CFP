import { useState } from "react"
import { Link } from "react-router-dom"
import { BiSolidCategory } from "react-icons/bi"
import { MdDashboard, MdMenu, MdClose } from "react-icons/md"
import { FaExchangeAlt } from "react-icons/fa"
import TransactionModal from "../Private/TransactionModal" // Import the TransactionModal

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false)

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <aside
      className={`bg-green-800 h-full shadow-lg fixed top-0 left-0 z-50 transition-all duration-300 ${
        isMinimized ? "w-20" : "w-52"
      }`}
    >
      <div className="p-6 flex justify-between items-center">
        <h2
          className={`text-2xl font-bold text-white transition-all duration-300 ${
            isMinimized ? "hidden" : "block"
          }`}
        >
          Menu
        </h2>
        <button
          onClick={toggleSidebar}
          className="text-white hover:text-gray-300 text-2xl"
        >
          {isMinimized ? <MdMenu /> : <MdClose />}
        </button>
      </div>
      <nav className="mt-6 flex-grow">
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 text-white hover:bg-green-600 px-6 py-3 rounded-lg transition-all duration-300"
            >
              <MdDashboard className="text-2xl" />
              <span className={`${isMinimized ? "hidden" : "block"}`}>
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/category"
              className="flex items-center space-x-2 text-white hover:bg-green-600 px-6 py-3 rounded-lg transition-all duration-300"
            >
              <BiSolidCategory className="text-2xl" />
              <span className={`${isMinimized ? "hidden" : "block"}`}>
                Categorias
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/transaction"
              className="flex items-center space-x-2 text-white hover:bg-green-600 px-6 py-3 rounded-lg transition-all duration-300"
            >
              <FaExchangeAlt className="text-2xl" />
              <span className={`${isMinimized ? "hidden" : "block"}`}>
                Transações
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Transaction Modal */}
      <TransactionModal/>
  
    </aside>
  )
}

export default Sidebar
