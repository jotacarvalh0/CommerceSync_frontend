import Header from "@components/Header";
import Footer from "@components/Footer";
import Main from "@components/Main";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
