import { MdOutlineEditAttributes } from "react-icons/md";

const parseDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  };

export default parseDate