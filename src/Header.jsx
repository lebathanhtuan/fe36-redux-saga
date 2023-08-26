export const ahihi = "Ahihi";
export const abc = "ABC";

function Header({ name, gender, children }) {
  // const name = props.name;
  // const gender = props.gender;
  return (
    <>
      <h1>Header</h1>
      <h3>
        {name} - {gender}
      </h3>
      {children}
    </>
  );
}

export default Header;
