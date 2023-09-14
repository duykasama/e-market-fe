import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Pagination() {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-4">
        <li className="p-1 border border-slate-700 rounded-md w-12 h-8 text-center cursor-pointer">
          <Link>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
        </li>
        <li className="p-1 border border-slate-700 rounded-md w-12 h-8 text-center cursor-pointer">
          <Link>1</Link>
        </li>
        <li className="p-1 border border-slate-700 rounded-md w-12 h-8 text-center cursor-pointer">
          <Link>2</Link>
        </li>
        <li className="p-1 border border-slate-700 rounded-md w-12 h-8 text-center cursor-pointer">
          <Link>3</Link>
        </li>
        <li className="p-1 border border-slate-700 rounded-md w-12 h-8 text-center cursor-pointer">
          <Link>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
