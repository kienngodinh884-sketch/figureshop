// src/components/Footer/Footer.js
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Decorative top border */}
      <div className={styles.topAccent} />

      <div className={styles.footerInner}>
        {/* Brand column */}
        <div className={`${styles.col} ${styles.brandCol}`}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>⬡</span>
            <span className={styles.logoText}>FIGURE STORE <em>VN</em></span>
          </div>
          <p className={styles.brandDesc}>
            Hệ thống phân phối mô hình chính hãng từ Nhật Bản. Cam kết 100% authentic — từng chi tiết, từng hộp.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialBtn} aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className={styles.socialBtn} aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className={styles.socialBtn} aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.vDivider} />

        {/* Contact column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Liên hệ</h4>
          <ul className={styles.infoList}>
            <li>
              <span className={styles.infoIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              123 Lê Lợi, Quận 1, TP.HCM
            </li>
            <li>
              <span className={styles.infoIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.95 3.38 2 2 0 0 1 3.92 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              Hotline: <strong>1900 6xxx</strong>
            </li>
            <li>
              <span className={styles.infoIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </span>
              hello@figurestorevn.com
            </li>
            <li>
              <span className={styles.infoIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </span>
              Thứ 2 – Chủ nhật: 9:00 – 21:00
            </li>
          </ul>
        </div>

        {/* Support column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Hỗ trợ</h4>
          <ul className={styles.linkList}>
            <li><a href="#">Chính sách Pre-order</a></li>
            <li><a href="#">Hướng dẫn thanh toán</a></li>
            <li><a href="#">Chính sách đổi trả</a></li>
            <li><a href="#">Kiểm tra đơn hàng</a></li>
            <li><a href="#">Câu hỏi thường gặp</a></li>
          </ul>
        </div>

        {/* Newsletter column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Nhận thông báo</h4>
          <p className={styles.newsletterDesc}>Pre-order mới, figure limited — nhận ngay trước khi sold out.</p>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email của bạn"
              className={styles.emailInput}
            />
            <button className={styles.subscribeBtn}>→</button>
          </div>
          <div className={styles.badges}>
            <span className={styles.badge}>✦ Chính hãng</span>
            <span className={styles.badge}>✦ Bảo hành</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>© 2025 Figure Store VN. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="#">Điều khoản sử dụng</a>
          <a href="#">Bảo mật</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}