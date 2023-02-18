export const CardTech = ({ index, setModalOn, modalOn, setTech, element }) => {
  return (
    <button
      key={index}
      onClick={() => {
        setModalOn({ ...modalOn, update: "working" });
        setTech(element);
      }}
    >
      <h1>{element.title}</h1>
      <h2>{element.status}</h2>
    </button>
  );
};
