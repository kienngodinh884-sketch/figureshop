import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import products from "../../../data/products";
import SimpleSlider from "../../../slider/slider";
import styles from "./product-detail.module.css";

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id) || products[0];

  const STATUS_MAP = {
    "Pre-Order": { cls: "statusPreOrder", label: "Pre-Order" },
    "In Stock":  { cls: "statusInStock",  label: "In Stock"  },
    "Sold Out":  { cls: "statusSoldOut",  label: "Sold Out"  },
  };
  const badge = STATUS_MAP[product.status] || STATUS_MAP["In Stock"];

  const discount = product.oldPrice
    ? Math.round((1 - parseFloat(product.price) / parseFloat(product.oldPrice)) * 100)
    : null;

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>

        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <a href="/">Trang chủ</a>
          <span className={styles.sep}>›</span>
          <a href="/hang-co-san">Figure</a>
          <span className={styles.sep}>›</span>
          <span className={styles.breadCurrent}>{product.name}</span>
        </nav>

        <div className={styles.wrapper}>

          {/* ── Left: Image slider ── */}
          <div className={styles.imageSection}>
            <div className={styles.sliderWrap}>
              <SimpleSlider image={product.image} images={product.images || []} />
            </div>
            {/* Trust badges */}
            <div className={styles.trustRow}>
              {[
                { icon: "✦", text: "100% Chính Hãng" },
                { icon: "⟳", text: "Đổi trả 7 ngày" },
                { icon: "⬡", text: "Seal nguyên hộp" },
              ].map((b) => (
                <div key={b.text} className={styles.trustBadge}>
                  <span className={styles.trustIcon}>{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Info ── */}
          <div className={styles.infoSection}>

            {/* Status + discount */}
            <div className={styles.topMeta}>
              <span className={`${styles.statusPill} ${styles[badge.cls]}`}>
                {badge.label}
              </span>
              {discount && discount > 0 && (
                <span className={styles.discountTag}>-{discount}%</span>
              )}
            </div>

            {/* Title */}
            <h1 className={styles.title}>{product.name}</h1>

            {/* Price block */}
            <div className={styles.priceBlock}>
              <span className={styles.price}>{product.price}</span>
              {product.oldPrice && (
                <span className={styles.oldPrice}>{product.oldPrice}</span>
              )}
            </div>

            {/* Divider */}
            <div className={styles.divider} />

            {/* Description */}
            <div className={styles.descSection}>
              <h4 className={styles.sectionLabel}>Mô tả sản phẩm</h4>
              <p className={styles.desc}>{product.description}</p>
            </div>

            {/* Specs */}
            <div className={styles.specsSection}>
              <h4 className={styles.sectionLabel}>Thông số kỹ thuật</h4>
              <ul className={styles.specList}>
                {product.specs.map((spec, i) => (
                  <li key={i} className={styles.specItem}>
                    <span className={styles.specDot} />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Remain notice */}
            {product.remain && (
              <div className={styles.remainBar}>
                <span className={styles.remainDot} />
                {product.remain}
              </div>
            )}

            {/* Actions */}
            <div className={styles.actions}>
              <button className={styles.addCartBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                Thêm vào giỏ
              </button>
              <button className={styles.buyNowBtn}>
                Mua Ngay
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>

            {/* Shipping note */}
            <p className={styles.shippingNote}>
              🚚 Miễn phí vận chuyển toàn quốc cho đơn từ 500.000₫
            </p>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}