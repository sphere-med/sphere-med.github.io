const tabList = document.querySelector('[role="tablist"]');

if (tabList) {
  const tabs = [...tabList.querySelectorAll('[role="tab"]')];
  const mobileLayout = window.matchMedia('(max-width: 760px)');

  function updateOrientation() {
    tabList.setAttribute('aria-orientation', mobileLayout.matches ? 'horizontal' : 'vertical');
  }

  function selectTab(selected, focus = false) {
    for (const tab of tabs) {
      const active = tab === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
    }
    if (focus) selected.focus();
  }

  for (const [index, tab] of tabs.entries()) {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (event) => {
      const previous = mobileLayout.matches ? 'ArrowLeft' : 'ArrowUp';
      const next = mobileLayout.matches ? 'ArrowRight' : 'ArrowDown';
      let target;
      if (event.key === previous) target = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === next) target = (index + 1) % tabs.length;
      else if (event.key === 'Home') target = 0;
      else if (event.key === 'End') target = tabs.length - 1;
      else return;
      event.preventDefault();
      selectTab(tabs[target], true);
    });
  }

  updateOrientation();
  mobileLayout.addEventListener('change', updateOrientation);
}
