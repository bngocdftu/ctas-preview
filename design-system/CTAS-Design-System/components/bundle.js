/* @ds-bundle: {"format":4,"namespace":"CTAS","components":[{"name":"BrandMark"},{"name":"Button"},{"name":"Eyebrow"},{"name":"Tag"},{"name":"MediaPlaceholder"},{"name":"NewsCard"},{"name":"ProductCard"},{"name":"ProjectGrid"},{"name":"LecturerCard"},{"name":"NewsTicker"},{"name":"StatStrip"}]} */
(function () {
  var R = window.React, h = R.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function ext(href) { return /^https?:/.test(href || '') ? { target: '_blank', rel: 'noopener' } : {}; }

  function BrandMark(p) {
    return h('a', { className: cx('ct-mark', p.className), href: p.href || '#' },
      h('span', { className: 'ct-mark-sq', 'aria-hidden': 'true' }, 'C'),
      h('span', { className: 'ct-mark-tx' },
        p.showParent === false ? null : h('small', null, p.parent || 'Đại học Ngoại thương'),
        p.name || 'CTAS'));
  }

  function Button(p) {
    var v = p.variant || 'primary';
    var cls = cx('ct-btn', 'ct-btn-' + v, p.block && 'ct-btn-block', p.className);
    var kids = [p.children];
    if (p.href) return h('a', Object.assign({ className: cls, href: p.href }, ext(p.href)), kids);
    return h('button', { className: cls, type: p.type || 'button', onClick: p.onClick, disabled: p.disabled }, kids);
  }

  function Eyebrow(p) {
    return h('div', { className: cx('ct-eyebrow', p.onDark && 'ct-eyebrow-dark', p.className) }, p.children);
  }

  function Tag(p) {
    return h('span', { className: cx('ct-tag', p.active && 'ct-tag-on', p.className) }, p.children);
  }

  function MediaPlaceholder(p) {
    return h('div', { className: cx('ct-noimg', p.className), role: 'img', 'aria-label': (p.label || 'CTAS') + ' - ' + (p.category || '') },
      h('b', null, p.label || 'CTAS'), h('span', null, p.category || ''));
  }

  function NewsCard(p) {
    var media = p.image ? h('img', { src: p.image, alt: '', loading: 'lazy' }) : h(MediaPlaceholder, { category: p.category });
    return h('a', { className: cx('ct-news', p.className), href: p.href || '#' },
      h('div', { className: 'ct-news-im' }, media),
      h('div', { className: 'ct-news-tx' },
        h('div', { className: 'ct-meta' }, p.category ? h('b', null, p.category) : null, p.date),
        h('h3', null, p.title),
        p.excerpt ? h('p', null, p.excerpt) : null,
        h('span', { className: 'ct-news-go' }, p.cta || 'Đọc bài')));
  }

  function ProductCard(p) {
    return h('div', { className: cx('ct-prod', p.highlight && 'ct-prod-hi', p.className) },
      p.image ? h('div', { className: 'ct-prod-im' }, h('img', { src: p.image, alt: '' })) : null,
      h('div', { className: 'ct-prod-tx' },
        p.domain ? h('span', { className: 'ct-prod-url' }, p.domain) : null,
        h('h3', null, p.name),
        h('p', null, p.description),
        p.points && p.points.length ? h('ul', null, p.points.map(function (t, i) { return h('li', { key: i }, t); })) : null,
        h('div', { className: 'ct-prod-links' },
          p.learnHref ? h('a', Object.assign({ className: 'ct-pri', href: p.learnHref }, ext(p.learnHref)), 'Tìm hiểu thêm ↗') : null,
          p.introHref ? h('a', { href: p.introHref }, 'Giới thiệu') : null)));
  }

  function ProjectGrid(p) {
    var cols = p.columns || 3;
    return h('div', { className: cx('ct-pj', p.className), style: { gridTemplateColumns: 'repeat(' + cols + ', minmax(0,1fr))' } },
      (p.items || []).map(function (it, i) {
        return h('a', Object.assign({ key: i, href: it.href || '#' }, ext(it.href)),
          it.image ? h('div', { className: 'ct-pj-im' }, h('img', { src: it.image, alt: '', loading: 'lazy' })) : null,
          h('span', { className: 'ct-pj-st' }, it.status),
          h('h3', null, it.title),
          h('p', null, it.description),
          it.tags && it.tags.length ? h('div', { className: 'ct-pj-tg' }, it.tags.map(function (t, j) { return h(Tag, { key: j }, t); })) : null);
      }));
  }

  function LecturerCard(p) {
    var initial = (p.name || '?').trim().split(/\s+/).pop().charAt(0);
    return h('a', { className: cx('ct-lc', p.className), href: p.href || '#' },
      h('div', { className: 'ct-lc-ph' }, p.photo ? h('img', { src: p.photo, alt: p.name, loading: 'lazy' }) : initial),
      h('div', { className: 'ct-lc-nm' }, h('h4', null, p.name), p.role ? h('small', null, p.role) : null));
  }

  function NewsTicker(p) {
    var items = p.items || [];
    var row = items.map(function (it, i) {
      return h('a', { key: i, href: it.href || '#' }, h('time', null, it.date), it.title);
    });
    var dup = items.map(function (it, i) {
      return h('a', { key: 'd' + i, href: it.href || '#', 'aria-hidden': 'true', tabIndex: -1 }, h('time', null, it.date), it.title);
    });
    return h('div', { className: cx('ct-ticker', p.className) },
      h('a', { className: 'ct-ticker-lb', href: p.allHref || '#' }, p.label || 'TIN MỚI'),
      h('div', { className: 'ct-ticker-vp' }, h('div', { className: 'ct-ticker-tr', style: { animationDuration: (p.seconds || 120) + 's' } }, row, dup)),
      p.allHref ? h('a', { className: 'ct-ticker-all', href: p.allHref }, p.allLabel || 'Tất cả') : null);
  }

  function StatStrip(p) {
    return h('div', { className: cx('ct-stats', p.className) },
      (p.items || []).map(function (it, i) { return h('div', { key: i }, h('strong', null, it.value), h('span', null, it.label)); }));
  }

  var api = { BrandMark: BrandMark, Button: Button, Eyebrow: Eyebrow, Tag: Tag, MediaPlaceholder: MediaPlaceholder, NewsCard: NewsCard, ProductCard: ProductCard, ProjectGrid: ProjectGrid, LecturerCard: LecturerCard, NewsTicker: NewsTicker, StatStrip: StatStrip };
  window.CTAS = Object.assign(window.CTAS || {}, api);
})();
