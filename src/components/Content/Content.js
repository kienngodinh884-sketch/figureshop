// src/components/Content/Content.js
import Image from "next/image";
import Link from "next/link";
import styles from "./Content.module.css";

const STATUS_MAP = {
  "Pre-Order": { cls: "badgePreOrder", label: "Pre-Order" },
  "In Stock":  { cls: "badgeInStock",  label: "In Stock"  },
  "Sold Out":  { cls: "badgeSoldOut",  label: "Sold Out"  },
};

export default function Content({ id = "1", name, price, oldPrice, status, remain, image, isFirst }) {
  const badge = STATUS_MAP[status] || STATUS_MAP["In Stock"];

  const discount = oldPrice
    ? Math.round((1 - parseFloat(price) / parseFloat(oldPrice)) * 100)
    : null;

  return (
    <Link href={`/product/${id}`} className={styles.card}>
      {/* Image area */}
      <div className={styles.imageWrap}>
        <Image
          src={image || "/figure-placeholder.jpg"}
          alt={name || "Figure"}
          fill
          className={styles.img}
          sizes="(max-width: 768px) 50vw, 20vw"
        />
        {/* Discount ribbon */}
        {discount && discount > 0 && (
          <span className={styles.discountRibbon}>-{discount}%</span>
        )}
        {/* Status badge on image */}
        <span className={`${styles.statusPill} ${styles[badge.cls]}`}>
          {badge.label}
        </span>
      </div>

      {/* Info */}
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>

        <div className={styles.priceRow}>
          <strong className={styles.price}>{price}</strong>
          {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
        </div>

        {remain && (
          <div className={styles.remain}>
            <span className={styles.remainDot} />
            {remain}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        {isFirst ? (
          <button className={styles.buyBtn}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Mua Ngay
          </button>
        ) : (
          <button className={styles.detailBtn}>
            Xem Chi Tiết
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        )}
      </div>
    </Link>
  );
}