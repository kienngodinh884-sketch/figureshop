import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Content from "../components/Content/Content";
import products from "../data/products";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.item2}>
        <div className={styles.mainContent}>
          {products.slice(0, 8).map((product, index) => (
            <Content
              key={product.id}
              {...product}
              isFirst={index === 0}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}