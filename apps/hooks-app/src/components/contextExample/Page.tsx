import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import "./Page.scss";

const Page = () => {
  return (
      <div className="page">
        <Header />
        <Content  />
        <Footer />
      </div>
  )
}

export default Page;