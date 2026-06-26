function scrollTo_(id) {
  var el = document.getElementById(id);
  if (!el) return;
  var top = el.getBoundingClientRect().top + window.pageYOffset - 170;
  window.scrollTo({ top: top, behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var id = this.getAttribute('href').slice(1);
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    var top = el.getBoundingClientRect().top + window.pageYOffset - 170;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });
});

function toggleFaq(btn) {
  var item = btn.parentElement;
  item.classList.toggle('open');
}
