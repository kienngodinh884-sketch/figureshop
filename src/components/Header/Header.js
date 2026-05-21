// src/components/Header/Header.js
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const navItems = [
  { label: "Trang Chủ", href: "/" },
  { label: "Hàng Có Sẵn", href: "/hang-co-san", badge: null },
  { label: "Pre-Order", href: "/pre-order", badge: "HOT" },
  { label: "Góc Review", href: "/review" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div className={styles.announcementBar}>
        <span>🚚 Miễn phí vận chuyển đơn từ 500K &nbsp;·&nbsp; Hàng chính hãng 100% &nbsp;·&nbsp; Pre-order tháng 7 đang mở</span>
      </div>

      <header className={styles.header}>
        <div className={styles.headerInner}>

          {/* Logo */}
          <Link href="/" className={styles.logoWrap}>
            <Image src="/logo.png" alt="Figure Store VN" width={100} height={44} className={styles.logoImg} />
            <div className={styles.logoText}>
              <span className={styles.logoMain}>FIGURE STORE</span>
              <span className={styles.logoSub}>VN · Chính Hãng Nhật</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.href} className={styles.navItem}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                    {item.badge && <span className={styles.navBadge}>{item.badge}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            {/* Search */}
            <button
              className={styles.actionBtn}
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Tìm kiếm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>

            {/* Wishlist */}
            <button className={styles.actionBtn} aria-label="Yêu thích">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>

            {/* Cart */}
            <button className={`${styles.actionBtn} ${styles.cartBtn}`} aria-label="Giỏ hàng">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <span className={styles.cartBadge}>3</span>
            </button>

            {/* Hamburger (mobile) */}
            <button
              className={styles.menuBtn}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
            </button>
          </div>
        </div>

        {/* Search bar (expandable) */}
        {searchOpen && (
          <div className={styles.searchBar}>
            <input
              autoFocus
              type="text"
              placeholder="Tìm figure, scale, nendoroid..."
              className={styles.searchInput}
            />
            <button className={styles.searchClose} onClick={() => setSearchOpen(false)}>✕</button>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
              {item.label}
              {item.badge && <span className={styles.navBadge}>{item.badge}</span>}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}