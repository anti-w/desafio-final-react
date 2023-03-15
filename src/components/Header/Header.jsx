import { useState } from "react";
import logo from "../../images/Myanimelist_logo.webp";

const Header = ({ setAnimes }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    setAnimes(name);
  };
  return (
    <header className="flex w-full justify-between p-6 mb-10">
      <img src={logo} className="w-1/6" />
      <div className="flex justify-center items-center gap-2">
        <input
          type="search"
          placeholder="Digite o nome de um anime"
          onChange={(event) => setName(event.target.value)}
          value={name}
          className="text-black p-2 w-[400px] rounded"
        />
        <button type="submit" onClick={handleSubmit}>
          <img
            className="w-10"
            src="https://www.citypng.com/public/uploads/small/11640084027eqwauegwzmhrbniaualprqoe4jj2jguwobj2t6vnixim3yf2w8xzbb5jdksvrcemxwzv9ncnqzadnjtmwf6eqpadmrmarzhefgxf.png"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
