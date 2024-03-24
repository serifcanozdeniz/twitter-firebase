import { FiEdit2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

const Dropdown = ({ handleDelete }) => {
  return (
    <label className="popup">
      <input type="checkbox" />
      <div className="burger" tabindex="0">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className="popup-window">
        <legend>Aksiyonlar</legend>
        <ul>
          <li>
            <button>
              <FiEdit2 />
              <span>Düzenle</span>
            </button>
          </li>
          <hr />
          <li>
            <button onClick={handleDelete}>
              <FaTrash />
              <span>Sil</span>
            </button>
          </li>
        </ul>
      </nav>
    </label>
  );
};

export default Dropdown;
