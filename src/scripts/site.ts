/**
 * Replaces legacy jQuery + awlaw.min.js interactions (mobile nav, modals).
 */

function initMobileNav(): void {
  const btn = document.querySelector<HTMLAnchorElement>('.js-navToggle');
  const body = document.body;
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const open = body.classList.toggle('navOpen');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Menu -' : 'Menu +';
  });
}

function initModals(): void {
  document.body.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    const trigger = target?.closest<HTMLAnchorElement>('a[data-modal]');
    if (!trigger) return;
    const href = trigger.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    e.preventDefault();
    const modal = document.querySelector<HTMLElement>(href);
    if (!modal) return;
    openModal(modal);
  });

  document.body.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    if (target?.closest('a[rel~="modal:close"]')) {
      e.preventDefault();
      closeTopModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTopModal();
  });
}

let modalStack: { blocker: HTMLElement; modal: HTMLElement; placeholder: Comment }[] = [];

function openModal(modal: HTMLElement): void {
  const parent = modal.parentNode;
  if (!parent) return;

  const placeholder = document.createComment('modal-placeholder');
  parent.insertBefore(placeholder, modal);

  const blocker = document.createElement('div');
  blocker.className = 'blocker current u-posFullScreen';
  blocker.setAttribute('role', 'presentation');
  blocker.addEventListener('click', (e) => {
    if (e.target === blocker) closeTopModal();
  });

  document.body.appendChild(blocker);
  blocker.appendChild(modal);
  document.body.style.overflow = 'hidden';

  modalStack.push({ blocker, modal, placeholder });
}

function closeTopModal(): void {
  const top = modalStack.pop();
  if (!top) return;

  const { blocker, modal, placeholder } = top;
  const parent = placeholder.parentNode;
  if (parent) {
    parent.insertBefore(modal, placeholder);
    parent.removeChild(placeholder);
  }

  blocker.remove();
  if (!modalStack.length) {
    document.body.style.overflow = '';
  }
}

function initSmoothScroll(): void {
  document.body.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    const el = target?.closest<HTMLAnchorElement>('.js-scrollToElement');
    if (!el) return;
    const href = el.getAttribute('href');
    if (!href?.startsWith('#')) return;
    const dest = document.querySelector(href);
    if (!dest) return;
    e.preventDefault();
    dest.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

initMobileNav();
initModals();
initSmoothScroll();
