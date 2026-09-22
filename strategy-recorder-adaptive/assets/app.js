(function(){
  var slides = document.querySelectorAll('.slide');
  var total = slides.length;
  if(!total) return;
  var dotsWrap = document.getElementById('dots');
  var counter = document.getElementById('counter');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');
  var stage = document.getElementById('stage');
  var pageKey = document.body.getAttribute('data-page') || 'page';
  var current = 0;

  try{
    var saved = sessionStorage.getItem('sr_slide_' + pageKey);
    if(saved !== null){ current = Math.min(Math.max(parseInt(saved,10)||0,0), total-1); }
  }catch(e){}

  for(var i=0;i<total;i++){
    var d = document.createElement('button');
    d.className = 'dot';
    d.setAttribute('aria-label', 'Go to slide ' + (i+1));
    d.addEventListener('click', function(idx){ return function(){ go(idx); }; }(i));
    dotsWrap.appendChild(d);
  }
  var dotEls = dotsWrap.querySelectorAll('.dot');

  function playAnimatedBeats(slide){
    ['.fake-cursor','.click-ripple','.draw-mark','.toolbox','.toast-confirm'].forEach(function(sel){
      slide.querySelectorAll(sel).forEach(function(el){
        el.classList.remove('go');
      });
    });
    void slide.offsetWidth;
    requestAnimationFrame(function(){
      ['.fake-cursor','.click-ripple','.draw-mark','.toolbox','.toast-confirm'].forEach(function(sel){
        slide.querySelectorAll(sel).forEach(function(el){ el.classList.add('go'); });
      });
    });
  }

  function render(){
    slides.forEach(function(s,idx){ s.hidden = idx !== current; });
    dotEls.forEach(function(d,idx){ d.classList.toggle('active', idx===current); });
    counter.textContent = (current+1) + ' / ' + total;
    prevBtn.disabled = current===0;
    nextBtn.disabled = current===total-1;
    try{ sessionStorage.setItem('sr_slide_' + pageKey, String(current)); }catch(e){}
    playAnimatedBeats(slides[current]);
  }
  function go(i){ current = Math.min(Math.max(i,0), total-1); render(); }

  prevBtn.addEventListener('click', function(){ go(current-1); });
  nextBtn.addEventListener('click', function(){ go(current+1); });
  document.addEventListener('keydown', function(e){
    if(e.key==='ArrowRight') go(current+1);
    if(e.key==='ArrowLeft') go(current-1);
  });

  render();

  document.querySelectorAll('.track-card.pickable').forEach(function(card){
    function pick(){
      card.parentNode.querySelectorAll('.track-card').forEach(function(c){ c.classList.remove('selected'); });
      card.classList.add('selected');
    }
    card.addEventListener('click', pick);
    card.addEventListener('keydown', function(e){ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); pick(); } });
  });

  var placementToggle = document.getElementById('placementToggle');
  if(placementToggle && stage){
    placementToggle.addEventListener('click', function(e){
      var btn = e.target.closest('button');
      if(!btn) return;
      placementToggle.querySelectorAll('button').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      stage.setAttribute('data-placement', btn.getAttribute('data-val'));
      try{ sessionStorage.setItem('sr_placement', btn.getAttribute('data-val')); }catch(e2){}
    });
    try{
      var pl = sessionStorage.getItem('sr_placement');
      if(pl){
        stage.setAttribute('data-placement', pl);
        placementToggle.querySelectorAll('button').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-val')===pl); });
      }
    }catch(e){}
  }
})();
