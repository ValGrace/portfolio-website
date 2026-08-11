export function NewSect(){
    return (
        <div className="wrap">
  <div className="stage">
 
    <svg className="lines" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet">
      <path d="M 600 345 C 380 345, 380 150, 165 150" class="conn"/>
      <path d="M 600 345 C 400 345, 400 400, 195 400" class="conn"/>
      <path d="M 600 345 C 530 345, 530 660, 460 660" class="conn"/>
      <path d="M 600 345 C 675 345, 675 660, 750 660" class="conn"/>
      <path d="M 600 345 C 820 345, 820 165, 1035 165" class="conn"/>
    </svg>
 
    <div className="node about-header" style={{ left: '400px', top: '195px', fontFamily: 'Geist Pixel', fontSize: '4em' }}>
      <h1 style={{fontFamily: 'Geist Pixel'}}>ABOUT ME</h1>
    </div>
 
    <div className="node about-card card-title" style={{ left: '410px', top: '270px' }}>
      <h3>I build a diverse set of applications. From frontend, to backend, to ETL
      pipelines and sometimes I play with machine learning models. My main goal
      is to use data ethically to solve societal problems through software.</h3>
    </div>
 
    <div className="node card" style={{ left: '30px', top: '30px' }}>
      <div className="card-head">
        <span className="icon icon-violet">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><line x1="8" y1="20" x2="16" y2="20"/><line x1="12" y1="16" x2="12" y2="20"/></svg>
        </span>
        <span className="card-title">frontend</span>
      </div>
      <div className="tags">
        <span className="tag">react</span>
        <span className="tag">html</span>
        <span className="tag">css</span>
      </div>
      <div className="card-foot">
        <span className="dot dot-violet"></span>
        <span>design / connecting apis</span>
      </div>
    </div>
 
    <div className="node card" style={{ left: '60px', top: '300px' }}>
      <div className="card-head">
        <span className="icon icon-amber">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="7 8 11 12 7 16"/><line x1="13" y1="16" x2="17" y2="16"/></svg>
        </span>
        <span className="card-title">system administration</span>
      </div>
      <div className="tags">
        <span className="tag">linux</span>
        <span className="tag">powershell</span>
        <span className="tag">prometheus</span>
      </div>
      <div className="card-foot">
        <span className="dot dot-amber"></span>
        <span>administering servers</span>
      </div>
    </div>
 
    <div className="node card" style={{ left: '330px', top: '560px' }}>
      <div className="card-head">
        <span className="icon icon-green">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><line x1="7" y1="7.5" x2="7.01" y2="7.5"/><line x1="7" y1="16.5" x2="7.01" y2="16.5"/></svg>
        </span>
        <span className="card-title">backend</span>
      </div>
      <div className="tags">
        <span className="tag">docker</span>
        <span className="tag">python</span>
        <span className="tag">golang</span>
        <span className="tag">databases</span>
      </div>
      <div className="card-foot">
        <span className="dot dot-green"></span>
        <span>building secure and resilient backends</span>
      </div>
    </div>
 
    <div className="node card" style={{ left: '620px', top: '560px' }}>
      <div className="card-head">
        <span className="icon icon-blue">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>
        </span>
        <span className="card-title">data engineering</span>
      </div>
      <div className="tags">
        <span className="tag">airflow</span>
        <span className="tag">kafka</span>
        <span className="tag">sql</span>
        <span className="tag">power bi</span>
        <span className="tag">pyspark</span>
        <span className="tag">dbt</span>
        <span className="tag">postgres</span>
        <span className="tag">data governance</span>
      </div>
      <div className="card-foot">
        <span className="dot dot-blue"></span>
        <span>orchestrating data pipelines</span>
      </div>
    </div>
 
    <div className="node card" style={{ left: '900px', top: '60px' }}>
      <div className="card-head">
        <span className="icon icon-cyan">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-1.5A4.5 4.5 0 0 0 6.5 19h11z"/></svg>
        </span>
        <span className="card-title">cloud and devops</span>
      </div>
      <div className="tags">
        <span className="tag">git</span>
        <span className="tag">ci/cd</span>
        <span className="tag">makefiles</span>
        <span className="tag">aws</span>
        <span className="tag">networking</span>
        <span className="tag">kubernetes</span>
      </div>
      <div class="card-foot">
        <span className="dot dot-cyan"></span>
        <span>deploying and managing production systems</span>
      </div>
    </div>
 
  </div>
</div>
    )
}