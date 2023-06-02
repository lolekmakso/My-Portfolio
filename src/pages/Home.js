import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Education</h2>
              <p>
                I study at the university as a system analyst, I also completed
                the "lemon school" courses on the frontend
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Angular, Vue, HTML, CSS, SCSS,
                BootStrap, Figma
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
