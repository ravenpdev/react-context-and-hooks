import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="p-5 mb-5"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul className="p-0 list-none">
        {books.map((book) => (
          <li
            className="p-2 mx-auto my-2"
            style={{ background: theme.ui }}
            key={book.id}
          >
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

// class BookList extends Component {
//   static contextType = ThemeContext;

//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;

//     return (
//       <div
//         className="p-5 mb-5"
//         style={{ background: theme.bg, color: theme.syntax }}
//       >
//         <ul className="p-0 list-none">
//           <li className="p-2 mx-auto my-2" style={{ background: theme.ui }}>
//             The way of kings
//           </li>
//           <li className="p-2 mx-auto my-2" style={{ background: theme.ui }}>
//             The name of the wind
//           </li>
//           <li className="p-2 mx-auto my-2" style={{ background: theme.ui }}>
//             The final empire
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }

export default BookList;
