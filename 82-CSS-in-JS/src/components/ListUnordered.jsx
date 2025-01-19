// UnorderedList.jsx
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Lista stílusozása styled-components segítségével
const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;

  li {
    margin: 5px 0;
  }
`;

// Komponens definíciója
const ListUnordered = ({ items }) => {
  return (
    <List>
      {items.map((item, index) => (
        <li key={index}>{item}</li> // Az items-t a props-ból érjük el, és a map metódussal végigiterálunk rajta, minden elemhez egy li elemet generálunk, amelynek a kulcsa az index értéke lesz.
      ))}
    </List>
  );
};
ListUnordered.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ListUnordered;
