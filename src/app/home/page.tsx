import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bem-vindo à HOME do TechVerse Store!</h1>
      <p>Explore o incrível mundo geek e gamer! 🚀</p>
      <p>Em breve, muitos produtos e funcionalidades estarão disponíveis.</p>
      <Link href="/" style={{ textAlign: "center", marginTop: "50px" }}>
        PAGINA INICIAL
      </Link>
      <Link
        href="/products"
        style={{ textAlign: "center", marginTop: "50px", marginLeft: "10px" }}
      >
        PRODUTOS
      </Link>
    </div>
  );
}
