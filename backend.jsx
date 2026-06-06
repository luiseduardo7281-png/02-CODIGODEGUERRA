<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',sans-serif;color:#0d1f1a;background:#fff;font-size:16px}
::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#10b981;border-radius:4px}
.page{display:none}.page.active{display:block}
nav{background:#fff;border-bottom:1px solid rgba(0,0,0,.08);height:64px;display:flex;align-items:center;padding:0 40px;justify-content:space-between;position:sticky;top:0;z-index:100}
.nav-logo{display:flex;align-items:center;gap:10px;cursor:pointer}
.nav-logo-icon{width:34px;height:34px;background:#10b981;border-radius:9px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:14px}
.nav-logo-text{font-size:18px;font-weight:700;color:#0d1f1a}.nav-logo-text span{color:#10b981}
.nav-links{display:flex;gap:28px}.nav-links a{text-decoration:none;color:#374151;font-size:14px;font-weight:500;cursor:pointer;transition:color .15s}.nav-links a:hover{color:#10b981}
.nav-actions{display:flex;gap:10px;align-items:center}
.btn-outline{padding:7px 18px;border:1.5px solid #10b981;border-radius:8px;background:#fff;color:#10b981;font-size:14px;font-weight:600;cursor:pointer;transition:all .15s;font-family:'Inter',sans-serif}.btn-outline:hover{background:#f0fdf4}
.btn-solid{padding:7px 18px;border:none;border-radius:8px;background:#10b981;color:#fff;font-size:14px;font-weight:600;cursor:pointer;transition:all .15s;font-family:'Inter',sans-serif}.btn-solid:hover{background:#059669}
.btn-dark{padding:11px 22px;background:#0d1f1a;border:none;border-radius:10px;color:#fff;font-size:15px;font-weight:600;cursor:pointer;font-family:'Inter',sans-serif;transition:all .15s}.btn-dark:hover{background:#1a3a2e}
.btn-ghost{padding:11px 22px;background:#fff;border:1.5px solid #d1d5db;border-radius:10px;color:#374151;font-size:15px;font-weight:600;cursor:pointer;font-family:'Inter',sans-serif;transition:all .15s}.btn-ghost:hover{border-color:#10b981;color:#10b981}
.btn-green{padding:10px 20px;background:#10b981;border:none;border-radius:8px;color:#fff;font-size:14px;font-weight:600;cursor:pointer;font-family:'Inter',sans-serif;transition:all .15s;display:inline-flex;align-items:center;gap:6px}.btn-green:hover{background:#059669}.btn-green:disabled{opacity:.5;cursor:not-allowed}
.badge{display:inline-flex;align-items:center;gap:6px;background:#f0fdf4;border:1px solid #a7f3d0;border-radius:20px;padding:5px 14px;font-size:12px;color:#059669;font-weight:500;margin-bottom:18px}
.s-num{font-size:26px;font-weight:800;color:#10b981}.s-lbl{font-size:12px;color:#9ca3af;margin-top:2px}
.dash-preview{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:22px;box-shadow:0 4px 20px rgba(0,0,0,.06)}
.dp-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}
.dp-title{font-size:16px;font-weight:700}.dp-date{font-size:12px;color:#9ca3af}
.dp-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px}
.dp-card{border-radius:10px;padding:14px}
.dp-card.g{background:#f0fdf4;border:1px solid #a7f3d0}
.dp-card.a{background:#fffbeb;border:1px solid #fde68a}
.dp-lbl{font-size:11px;font-weight:600;color:#059669;margin-bottom:6px}
.dp-lbl.a{color:#d97706}
.dp-val{font-size:22px;font-weight:800;color:#0d1f1a;margin-bottom:3px}
.dp-sub{font-size:11px;color:#6b7280}
.bar-wrap{margin-bottom:14px}
.bar-title{font-size:12px;font-weight:600;color:#374151;margin-bottom:8px}
.bars{display:flex;align-items:flex-end;gap:5px;height:70px}
.bar-item{flex:1;border-radius:3px 3px 0 0}
.bar-lbl-row{display:flex;justify-content:space-between;font-size:10px;color:#9ca3af;margin-bottom:10px}
.sc-row{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.sc{border-radius:8px;padding:9px 12px;text-align:center}
.sc.r{background:#fef2f2;border:1px solid #fecdd3}.sc.g{background:#f0fdf4;border:1.5px solid #10b981}.sc.b{background:#eff6ff;border:1px solid #bfdbfe}
.sc-t{font-size:10px;font-weight:700;margin-bottom:3px}
.sc-t.r{color:#dc2626}.sc-t.g{color:#059669}.sc-t.b{color:#2563eb}
.sc-v{font-size:13px;font-weight:700}
.sc-v.r{color:#dc2626}.sc-v.g{color:#059669}.sc-v.b{color:#2563eb}
.trust-bar{background:#10b981;padding:32px 80px}
.trust-grid{display:grid;grid-template-columns:repeat(4,1fr);text-align:center;gap:16px}
.ti-icon{width:40px;height:40px;background:rgba(255,255,255,.2);border-radius:9px;display:flex;align-items:center;justify-content:center;margin:0 auto 8px;font-size:18px}
.ti-t{font-size:13px;font-weight:700;color:#fff;margin-bottom:3px}.ti-s{font-size:11px;color:rgba(255,255,255,.75)}
section{padding:72px 80px}
.sec-title{font-size:36px;font-weight:800;color:#0d1f1a;line-height:1.2;text-align:center;margin-bottom:10px}
.sec-title span{color:#10b981}
.sec-sub{font-size:15px;color:#6b7280;text-align:center;margin-bottom:44px}
.sec-center{text-align:center}
.prob-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.prob-card{border-radius:12px;padding:22px}
.prob-card.red{background:#fef2f2;border:1px solid #fecdd3}
.prob-card.orange{background:#fff7ed;border:1px solid #fed7aa}
.prob-card.yellow{background:#fefce8;border:1px solid #fef08a}
.prob-card.pink{background:#fdf2f8;border:1px solid #f5d0fe}
.prob-icon{width:38px;height:38px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;margin-bottom:16px}
.prob-icon.red{background:#fee2e2}.prob-icon.orange{background:#ffedd5}.prob-icon.yellow{background:#fef9c3}.prob-icon.pink{background:#fae8ff}
.prob-card h4{font-size:14px;font-weight:700;margin-bottom:8px}.prob-card p{font-size:13px;color:#6b7280;line-height:1.6}
.sol-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.sol-card{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:28px}
.sol-ic{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:18px}
.sol-ic.g{background:#10b981}.sol-ic.b{background:#3b82f6}.sol-ic.p{background:#8b5cf6}.sol-ic.o{background:#f97316}
.sol-card h3{font-size:16px;font-weight:700;margin-bottom:8px}.sol-card p{font-size:13px;color:#6b7280;line-height:1.6}
.diff-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;max-width:860px;margin:0 auto}
.diff-card{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:26px}
.diff-card.hl{background:#f0fdf4;border:1.5px solid #10b981}
.diff-card h3{font-size:17px;font-weight:700;margin-bottom:3px}.diff-card .ds{font-size:13px;color:#9ca3af;margin-bottom:18px}
.di{display:flex;align-items:center;gap:10px;padding:7px 0;font-size:14px;color:#374151}
.di.st{color:#9ca3af;text-decoration:line-through}
.ck{width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0}
.ck.gr{background:#f3f4f6;color:#9ca3af;border:1px solid #e5e7eb}.ck.gn{background:#10b981;color:#fff}
.dhr{background:#fff;border:1px solid #10b981;border-radius:8px;padding:9px 13px;margin:3px 0;display:flex;align-items:center;gap:10px;font-size:14px;font-weight:600}
.persona-wrap{display:grid;grid-template-columns:1fr 1.6fr;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;max-width:900px;margin:0 auto}
.per-left{background:#10b981;padding:36px;display:flex;flex-direction:column;align-items:center;text-align:center}
.per-av{width:80px;height:80px;background:rgba(255,255,255,.25);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;margin-bottom:16px;border:2px solid rgba(255,255,255,.3)}
.per-name{font-size:20px;font-weight:800;color:#fff;margin-bottom:3px}.per-role{font-size:13px;color:rgba(255,255,255,.8);margin-bottom:16px}
.per-meta{font-size:13px;color:rgba(255,255,255,.85);margin-bottom:6px}
.per-right{background:#fff;padding:32px}
.per-right h4{font-size:13px;font-weight:700;color:#dc2626;margin-bottom:10px}.per-right h4.g{color:#059669}
.pi{display:flex;align-items:center;gap:8px;font-size:14px;color:#374151;padding:4px 0}
.pdot{width:8px;height:8px;border-radius:50%;background:#dc2626;flex-shrink:0}.pdot.g{background:#10b981}
.hdiv{height:1px;background:#e5e7eb;margin:16px 0}
.help-i{display:flex;align-items:center;gap:8px;font-size:14px;padding:4px 0}
.hck{width:20px;height:20px;background:#10b981;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff;flex-shrink:0}
.quote{background:#f0fdf4;border-left:3px solid #10b981;border-radius:8px;padding:13px 15px;margin-top:14px;font-size:13px;color:#374151;font-style:italic;line-height:1.6}
.quote-auth{font-size:13px;font-weight:600;color:#059669;margin-top:5px;font-style:normal}
.mkt-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-bottom:24px}
.mkt-card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:24px}
.mkt-num{font-size:44px;font-weight:800;color:#e5e7eb;margin-bottom:10px}
.mkt-ic{width:40px;height:40px;background:#10b981;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:14px}
.mkt-card h3{font-size:16px;font-weight:700;margin-bottom:5px}.mkt-card p{font-size:13px;color:#6b7280}
.pot-card{background:#f0fdf4;border:1px solid #a7f3d0;border-radius:12px;padding:36px;display:flex;gap:48px;align-items:center}
.pot-stats h3{font-size:17px;font-weight:700;margin-bottom:18px}
.pot-row{display:flex;align-items:baseline;gap:8px;margin-bottom:10px}
.pn{font-size:30px;font-weight:800}.pn.g{color:#10b981}.pn.b{color:#3b82f6}.pn.p{color:#8b5cf6}
.pl{font-size:13px;color:#6b7280}
.bubbles{position:relative;width:140px;height:170px;flex-shrink:0}
.bub{position:absolute;border-radius:50%;border:2px solid #10b981}
.b1{width:140px;height:140px;top:15px;left:0;background:rgba(16,185,129,.08)}
.b2{width:88px;height:88px;top:41px;left:26px;background:rgba(16,185,129,.15)}
.b3{width:44px;height:44px;top:63px;left:48px;background:#10b981}
.big-dash-wrap{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:26px;max-width:960px;margin:0 auto}
.bdh{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:16px;border-bottom:1px solid #f3f4f6;margin-bottom:18px}
.bdt{font-size:19px;font-weight:700}.bds{font-size:12px;color:#9ca3af;margin-top:2px}
.live{font-size:13px;color:#9ca3af;display:flex;align-items:center;gap:5px}
.live-dot{width:7px;height:7px;background:#10b981;border-radius:50%;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
.kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:18px}
.kpi{border-radius:12px;padding:15px 16px;color:#fff}
.kpi.gn{background:#10b981}.kpi.bl{background:#3b82f6}.kpi.rd{background:#ef4444}.kpi.or{background:#f97316}
.kpi-l{font-size:10px;font-weight:600;opacity:.85;margin-bottom:5px}
.kpi-v{font-size:20px;font-weight:800;margin-bottom:3px}.kpi-s{font-size:10px;opacity:.75}
.charts-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:18px}
.ch-box{border:1px solid #f3f4f6;border-radius:10px;padding:16px}
.ch-title{font-size:13px;font-weight:600;color:#374151;margin-bottom:13px}
.lbars{display:flex;align-items:flex-end;gap:4px;height:72px;margin-bottom:6px}
.lb{flex:1;border-radius:3px 3px 0 0}
.cmp-item{margin-bottom:12px}
.cmp-row{display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px}
.cmp-track{height:6px;background:#f3f4f6;border-radius:3px}
.cmp-fill{height:6px;border-radius:3px}
.cmp-total{display:flex;justify-content:space-between;padding-top:10px;border-top:1px solid #f3f4f6;font-size:13px;font-weight:700}
.cmp-total-v{color:#10b981}
.sim-wrap{background:#f0fdf4;border:1px solid #a7f3d0;border-radius:12px;padding:22px}
.sim-title{font-size:15px;font-weight:700;margin-bottom:16px}
.sim-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.sim-card{background:#fff;border-radius:10px;padding:16px}
.sim-card.ac{border:1.5px solid #10b981}.sim-card.rd{border:1px solid #fecdd3}.sim-card.bl{border:1px solid #bfdbfe}
.sim-ct{font-size:12px;font-weight:700;display:flex;align-items:center;gap:5px;margin-bottom:12px}
.sim-ct.r{color:#dc2626}.sim-ct.g{color:#059669}.sim-ct.b{color:#2563eb}
.sim-row{display:flex;justify-content:space-between;font-size:12px;color:#6b7280;margin-bottom:4px}
.sim-row span:last-child{font-weight:600;color:#374151}
.sim-lucro{display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid #f3f4f6;margin-top:8px;font-size:13px;font-weight:700}
.cta-sec{background:#10b981;padding:72px 80px}
.cta-inner{text-align:center;margin-bottom:40px}
.cta-inner h2{font-size:40px;font-weight:800;color:#fff;margin-bottom:10px;line-height:1.2}
.cta-inner p{font-size:15px;color:rgba(255,255,255,.8)}
.cta-box{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:32px;max-width:760px;margin:0 auto 36px;display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center}
.cta-list h4{font-size:14px;font-weight:700;color:#fff;margin-bottom:14px}
.cta-li{display:flex;align-items:center;gap:9px;font-size:13px;color:rgba(255,255,255,.9);margin-bottom:8px}
.cta-ck{width:20px;height:20px;background:rgba(255,255,255,.25);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff;flex-shrink:0}
.cta-form{background:#fff;border-radius:12px;padding:24px}
.cta-form h3{font-size:16px;font-weight:700;color:#0d1f1a;margin-bottom:5px}
.cta-form p{font-size:13px;color:#6b7280;margin-bottom:18px}
.cta-btn-big{width:100%;padding:12px;background:#10b981;border:none;border-radius:9px;color:#fff;font-size:14px;font-weight:700;cursor:pointer;margin-bottom:6px;font-family:'Inter',sans-serif;transition:all .15s}.cta-btn-big:hover{background:#059669}
.cta-disc{font-size:11px;color:#9ca3af;text-align:center}
.cta-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:540px;margin:0 auto;text-align:center}
.csn{font-size:34px;font-weight:800;color:#fff;margin-bottom:3px}.csl{font-size:12px;color:rgba(255,255,255,.75)}
footer{background:#0d1f1a;padding:48px 80px 28px}
.ft-top{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:44px;margin-bottom:36px}
.ft-logo{display:flex;align-items:center;gap:9px;margin-bottom:12px}
.ft-logo-ic{width:34px;height:34px;background:#10b981;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:13px}
.ft-logo-t{font-size:17px;font-weight:700;color:#fff}.ft-logo-t span{color:#10b981}
.ft-tag{font-size:13px;color:#10b981;font-style:italic;margin-bottom:8px}
.ft-desc{font-size:13px;color:#6b7280;line-height:1.6}
.ft-col h4{font-size:13px;font-weight:700;color:#fff;margin-bottom:12px}
.ft-col a{display:block;font-size:13px;color:#9ca3af;text-decoration:none;margin-bottom:7px;cursor:pointer;transition:color .15s}.ft-col a:hover{color:#10b981}
.ft-ci{display:flex;align-items:center;gap:7px;font-size:13px;color:#9ca3af;margin-bottom:7px}
.ft-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:22px;border-top:1px solid rgba(255,255,255,.08)}
.ft-socials{display:flex;gap:8px}
.ft-soc{width:34px;height:34px;background:rgba(255,255,255,.08);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:13px;cursor:pointer;color:#9ca3af;transition:all .15s;font-weight:700}.ft-soc:hover{background:#10b981;color:#fff}
.ft-legal{font-size:12px;color:#6b7280}.ft-legal a{color:#9ca3af;text-decoration:none;margin-left:10px}.ft-legal a:hover{color:#10b981}
.auth-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f9fafb;padding:40px}
.auth-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:36px;width:100%;max-width:420px}
.auth-logo{display:flex;align-items:center;gap:9px;margin-bottom:24px;justify-content:center}
.auth-logo-ic{width:36px;height:36px;background:#10b981;border-radius:9px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:14px}
.auth-logo-t{font-size:20px;font-weight:700}.auth-logo-t span{color:#10b981}
.auth-title{font-size:22px;font-weight:700;text-align:center;margin-bottom:6px}
.auth-sub{font-size:14px;color:#6b7280;text-align:center;margin-bottom:26px}
.field{margin-bottom:14px}
.field label{display:block;font-size:13px;font-weight:600;color:#374151;margin-bottom:5px}
.field input{width:100%;padding:10px 13px;border:1px solid #e5e7eb;border-radius:9px;font-size:14px;font-family:'Inter',sans-serif;outline:none;transition:border .15s;background:#f9fafb}
.field input:focus{border-color:#10b981;background:#fff;box-shadow:0 0 0 3px rgba(16,185,129,.1)}
.auth-btn{width:100%;padding:12px;background:#10b981;border:none;border-radius:9px;color:#fff;font-size:15px;font-weight:700;cursor:pointer;font-family:'Inter',sans-serif;transition:all .15s;margin-top:6px}.auth-btn:hover{background:#059669}
.auth-footer{text-align:center;font-size:13px;color:#6b7280;margin-top:18px}
.auth-footer a{color:#10b981;font-weight:600;cursor:pointer;text-decoration:none}
.auth-demo-box{background:#f0fdf4;border:1px solid #a7f3d0;border-radius:9px;padding:12px 14px;margin-bottom:20px}
.auth-demo-title{font-size:12px;font-weight:700;color:#059669;margin-bottom:4px}
.auth-demo-creds{font-size:13px;color:#374151}
.app-layout{display:flex;min-height:100vh}
.sidebar{width:240px;background:#fff;border-right:1px solid #e5e7eb;display:flex;flex-direction:column;position:sticky;top:64px;height:calc(100vh - 64px)}
.sb-user{padding:18px 16px;border-bottom:1px solid #f3f4f6;display:flex;align-items:center;gap:10px}
.sb-av{width:36px;height:36px;background:#10b981;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:13px;flex-shrink:0}
.sb-name{font-size:14px;font-weight:600;color:#0d1f1a}.sb-role{font-size:11px;color:#9ca3af}
.sb-nav{padding:12px 8px;flex:1}
.sb-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:9px;cursor:pointer;font-size:14px;font-weight:500;color:#6b7280;transition:all .15s;margin-bottom:2px}
.sb-item:hover{background:#f9fafb;color:#0d1f1a}
.sb-item.active{background:#f0fdf4;color:#059669;font-weight:600}
.sb-item .sb-icon{font-size:17px;width:20px;text-align:center}
.sb-logout{padding:12px 8px;border-top:1px solid #f3f4f6}
.sb-logout-btn{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:9px;cursor:pointer;font-size:14px;color:#dc2626;width:100%;background:none;border:none;font-family:'Inter',sans-serif;font-weight:500;transition:all .15s}
.sb-logout-btn:hover{background:#fef2f2}
.app-main{flex:1;padding:32px;background:#f9fafb;overflow-y:auto}
.app-section{display:none}.app-section.active{display:block}
.app-title{font-size:22px;font-weight:700;color:#0d1f1a;margin-bottom:4px}
.app-sub{font-size:14px;color:#6b7280;margin-bottom:24px}
.card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:20px;margin-bottom:16px}
.card-title{font-size:15px;font-weight:600;color:#0d1f1a;margin-bottom:16px}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px}
.form-grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:14px}
.field-sm label{font-size:12px;font-weight:500;color:#374151;display:block;margin-bottom:5px}
.field-sm input,.field-sm select{width:100%;padding:8px 11px;border:1px solid #e5e7eb;border-radius:8px;font-size:13px;font-family:'Inter',sans-serif;outline:none;background:#f9fafb;transition:border .15s}
.field-sm input:focus,.field-sm select:focus{border-color:#10b981;background:#fff}
select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:28px !important}
.preview-row{background:#f0fdf4;border:1px solid #a7f3d0;border-radius:9px;padding:12px 16px;display:flex;gap:24px;flex-wrap:wrap;margin:14px 0}
.pv-item .pv-l{font-size:11px;color:#6b7280;margin-bottom:2px}.pv-item .pv-v{font-size:15px;font-weight:700}
.stat-grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px}
.stat-c{background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:14px 16px}
.stat-c .sl{font-size:11px;color:#9ca3af;margin-bottom:4px}.stat-c .sv{font-size:20px;font-weight:700;color:#0d1f1a}
.safra-item{background:#fff;border:1px solid #e5e7eb;border-radius:11px;padding:16px;margin-bottom:10px;transition:box-shadow .15s}
.safra-item:hover{box-shadow:0 2px 10px rgba(0,0,0,.06)}
.si-head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px}
.si-name{font-size:15px;font-weight:600;color:#0d1f1a}.si-meta{font-size:12px;color:#9ca3af;margin-top:2px}
.tag{display:inline-block;background:#ecfdf5;color:#059669;font-size:11px;font-weight:500;padding:2px 8px;border-radius:20px;border:1px solid #a7f3d0;margin-left:6px}
.tag-w{background:#fffbeb;color:#d97706;border-color:#fde68a}
.metrics-row{display:flex;gap:18px;flex-wrap:wrap;margin-bottom:9px}
.metric .ml{font-size:11px;color:#9ca3af}.metric .mv{font-size:13px;font-weight:600}
.prog-track{height:5px;background:#f3f4f6;border-radius:3px;margin-top:8px}
.prog-fill{height:5px;border-radius:3px}
.prog-lbl{font-size:10px;color:#9ca3af;margin-top:3px}
.del-btn{padding:5px 11px;background:#fef2f2;color:#dc2626;border:1px solid #fecdd3;border-radius:7px;font-size:12px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .15s}.del-btn:hover{background:#fee2e2}
.ia-box{background:#f8f4ff;border:1px solid #e0d5ff;border-radius:10px;padding:16px;white-space:pre-wrap;line-height:1.7;font-size:13px;color:#0d1f1a;margin-top:14px}
.spinner{display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:spin .7s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.empty-state{text-align:center;padding:48px 20px;color:#9ca3af}
.empty-state .ei{font-size:40px;margin-bottom:10px}
.empty-state h3{font-size:15px;font-weight:600;color:#374151;margin-bottom:5px}
.err-bar{background:#fef2f2;border:1px solid #fecdd3;border-radius:9px;padding:10px 14px;font-size:13px;color:#dc2626;margin-bottom:14px}
.db-pill{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:600;padding:3px 10px;border-radius:20px;margin-left:10px}
.db-pill.ok{background:#dcfce7;color:#15803d}.db-pill.err{background:#fee2e2;color:#b91c1c}
#loading-screen{position:fixed;inset:0;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;gap:14px}
.load-logo{width:52px;height:52px;background:#10b981;border-radius:14px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:22px}
.load-text{font-size:15px;color:#6b7280}
.load-bar{width:200px;height:4px;background:#e5e7eb;border-radius:2px;overflow:hidden}
.load-fill{height:100%;background:#10b981;border-radius:2px;animation:loadprog 1.2s ease forwards}
@keyframes loadprog{from{width:0}to{width:100%}}
</style>

<!-- Loading -->
<div id="loading-screen">
  <div class="load-logo">S+</div>
  <div class="load-text">Iniciando banco de dados...</div>
  <div class="load-bar"><div class="load-fill"></div></div>
</div>

<nav id="main-nav" style="display:none">
  <div class="nav-logo" onclick="goHome()">
    <div class="nav-logo-icon">S+</div>
    <span class="nav-logo-text">Safra<span>+</span></span>
    <span id="db-indicator" class="db-pill ok">● DB ativo</span>
  </div>
  <div class="nav-links" id="nav-links">
    <a onclick="scrollTo(0,0)">Solução</a>
    <a onclick="scrollTo(0,0)">Funcionalidades</a>
    <a onclick="scrollTo(0,0)">Mercado</a>
    <a onclick="scrollTo(0,0)">Plataforma</a>
  </div>
  <div class="nav-actions" id="nav-actions">
    <button class="btn-outline" onclick="showPage('login')">Login</button>
    <button class="btn-solid" onclick="showPage('login')">Solicitar Demo</button>
  </div>
</nav>

<!-- ===== LANDING ===== -->
<div id="page-landing" class="page">
<section style="min-height:calc(100vh - 64px);padding:72px 80px 56px;display:flex;align-items:center;gap:56px;background:#fff">
  <div style="flex:1;max-width:520px">
    <div class="badge">✦ Inteligência Financeira para o Agro</div>
    <h1 style="font-size:50px;font-weight:800;line-height:1.15;color:#0d1f1a;margin-bottom:18px">Controle sua safra.<br><span style="color:#10b981">Antecipe seu lucro.</span></h1>
    <p style="font-size:15px;color:#6b7280;line-height:1.7;margin-bottom:30px">A plataforma de inteligência financeira que ajuda produtores de grãos a prever margens, comparar safras e tomar decisões mais lucrativas.</p>
    <div style="display:flex;gap:14px;margin-bottom:38px">
      <button class="btn-dark" onclick="showPage('login')">Solicitar Demonstração →</button>
      <button class="btn-ghost" onclick="showPage('login')">Conhecer a Plataforma</button>
    </div>
    <div style="display:flex;gap:36px;padding-top:22px;border-top:1px solid #e5e7eb">
      <div><div class="s-num">98%</div><div class="s-lbl">Precisão nas Projeções</div></div>
      <div><div class="s-num">+35%</div><div class="s-lbl">Margem Média</div></div>
      <div><div class="s-num">2h</div><div class="s-lbl">Economia Semanal</div></div>
    </div>
  </div>
  <div style="flex:1;max-width:540px">
    <div class="dash-preview">
      <div class="dp-header"><span class="dp-title">Visão Geral da Safra</span><span class="dp-date">Safra 2025/2026</span></div>
      <div class="dp-grid">
        <div class="dp-card g"><div class="dp-lbl">$ Lucro Projetado</div><div class="dp-val">R$ 487.500</div><div class="dp-sub">+12% vs safra anterior</div></div>
        <div class="dp-card a"><div class="dp-lbl a">↗ Margem Estimada</div><div class="dp-val" style="color:#d97706">38.5%</div><div class="dp-sub">Cenário realista</div></div>
      </div>
      <div class="bar-wrap">
        <div class="bar-title">Evolução Financeira</div>
        <div class="bars">
          <div class="bar-item" style="height:44%;background:#e5e7eb"></div><div class="bar-item" style="height:50%;background:#e5e7eb"></div><div class="bar-item" style="height:47%;background:#e5e7eb"></div>
          <div class="bar-item" style="height:58%;background:#10b981"></div><div class="bar-item" style="height:64%;background:#10b981"></div><div class="bar-item" style="height:70%;background:#10b981"></div>
          <div class="bar-item" style="height:76%;background:#10b981"></div><div class="bar-item" style="height:82%;background:#10b981"></div><div class="bar-item" style="height:88%;background:#10b981"></div>
          <div class="bar-item" style="height:92%;background:#10b981"></div><div class="bar-item" style="height:96%;background:#10b981"></div><div class="bar-item" style="height:100%;background:#10b981"></div>
        </div>
        <div class="bar-lbl-row"><span>Jan</span><span>Dez</span></div>
      </div>
      <div class="sc-row">
        <div class="sc r"><div class="sc-t r">Pessimista</div><div class="sc-v r">R$ 420k</div></div>
        <div class="sc g"><div class="sc-t g">Realista</div><div class="sc-v g">R$ 487k</div></div>
        <div class="sc b"><div class="sc-t b">Otimista</div><div class="sc-v b">R$ 550k</div></div>
      </div>
    </div>
  </div>
</section>
<div class="trust-bar">
  <div class="trust-grid">
    <div><div class="ti-icon">🛡</div><div class="ti-t">Dados Seguros</div><div class="ti-s">Criptografia de ponta a ponta</div></div>
    <div><div class="ti-icon">🏅</div><div class="ti-t">Certificado</div><div class="ti-s">Validado por especialistas</div></div>
    <div><div class="ti-icon">👥</div><div class="ti-t">500+ Produtores</div><div class="ti-s">Confiam na nossa solução</div></div>
    <div><div class="ti-icon">⚡</div><div class="ti-t">Suporte 24/7</div><div class="ti-s">Sempre disponível</div></div>
  </div>
</div>
<section style="background:#f9fafb">
  <h2 class="sec-title">O produtor sabe quanto produz.<br><span>Mas sabe quanto realmente lucra?</span></h2>
  <div class="prob-grid">
    <div class="prob-card red"><div class="prob-icon red">↘</div><h4>Custos crescentes de insumos</h4><p>Fertilizantes e defensivos cada vez mais caros, impactando diretamente a rentabilidade.</p></div>
    <div class="prob-card orange"><div class="prob-icon orange">$</div><h4>Margens cada vez menores</h4><p>Pressão de preços e aumento de despesas reduzindo a lucratividade da operação.</p></div>
    <div class="prob-card yellow"><div class="prob-icon yellow">?</div><h4>Falta de previsibilidade</h4><p>Impossível saber com antecedência se a safra será lucrativa ou não.</p></div>
    <div class="prob-card pink"><div class="prob-icon pink">⚠</div><h4>Decisões tomadas sem dados</h4><p>Planilhas desatualizadas e falta de informação para decisões estratégicas.</p></div>
  </div>
</section>
<section>
  <div class="sec-center"><div class="badge">Nossa Solução</div></div>
  <h2 class="sec-title">Transformamos dados em <span>decisões.</span></h2>
  <div class="sol-grid">
    <div class="sol-card"><div class="sol-ic g">💲</div><h3>Registro Inteligente de Custos</h3><p>Centraliza despesas com sementes, fertilizantes, defensivos, combustível e mão de obra.</p></div>
    <div class="sol-card"><div class="sol-ic b">📍</div><h3>Lucro por Hectare</h3><p>Identifica quais áreas e culturas geram maior rentabilidade.</p></div>
    <div class="sol-card"><div class="sol-ic p">📊</div><h3>Comparação de Safras</h3><p>Analisa resultados históricos para apoiar decisões futuras.</p></div>
    <div class="sol-card"><div class="sol-ic o">📈</div><h3>Projeção Financeira</h3><p>Simula cenários otimistas, realistas e conservadores antes do plantio.</p></div>
  </div>
</section>
<section style="background:#f9fafb">
  <div class="sec-center"><div class="badge">✦ Nosso Diferencial</div></div>
  <h2 class="sec-title">Enquanto outros mostram <span>o que aconteceu,</span></h2>
  <h2 class="sec-title" style="margin-bottom:40px">a Safra+ mostra <span>o que provavelmente acontecerá.</span></h2>
  <div class="diff-grid">
    <div class="diff-card"><h3>Sistemas Tradicionais</h3><div class="ds">Focados apenas no passado</div>
      <div class="di"><div class="ck gr">✓</div>Controle financeiro</div>
      <div class="di"><div class="ck gr">✓</div>Histórico de custos</div>
      <div class="di"><div class="ck gr">✓</div>Relatórios</div>
      <div class="di st"><div class="ck gr">✕</div>Projeção de lucro</div>
      <div class="di st"><div class="ck gr">✕</div>Simulação de cenários</div>
      <div class="di st"><div class="ck gr">✕</div>Apoio à decisão</div>
    </div>
    <div class="diff-card hl"><h3>Safra+</h3><div class="ds">Preparado para o futuro</div>
      <div class="di"><div class="ck gn">✓</div>Controle financeiro</div>
      <div class="di"><div class="ck gn">✓</div>Histórico de custos</div>
      <div class="di"><div class="ck gn">✓</div>Relatórios</div>
      <div class="dhr"><div class="ck gn">✓</div>Projeção de lucro</div>
      <div class="dhr"><div class="ck gn">✓</div>Simulação de cenários</div>
      <div class="dhr"><div class="ck gn">✓</div>Apoio à decisão</div>
    </div>
  </div>
</section>
<section>
  <div class="sec-center"><div class="badge">👤 Nosso Cliente Ideal</div></div>
  <h2 class="sec-title" style="margin-bottom:32px">Feito para produtores como você</h2>
  <div class="persona-wrap">
    <div class="per-left">
      <div class="per-av">👤</div>
      <div class="per-name">João, 47 anos</div>
      <div class="per-role">Produtor de soja e milho</div>
      <div class="per-meta">📍 150 hectares</div>
      <div class="per-meta">↗ +R$300k investidos/safra</div>
    </div>
    <div class="per-right">
      <h4>● Problemas enfrentados</h4>
      <div class="pi"><div class="pdot"></div>Não conhece sua margem futura</div>
      <div class="pi"><div class="pdot"></div>Usa planilhas e anotações</div>
      <div class="pi"><div class="pdot"></div>Tem dificuldade para prever resultados</div>
      <div class="hdiv"></div>
      <h4 class="g">⊙ Como a Safra+ ajuda</h4>
      <div class="help-i"><div class="hck">✓</div>Projeta lucro</div>
      <div class="help-i"><div class="hck">✓</div>Calcula margem</div>
      <div class="help-i"><div class="hck">✓</div>Apoia decisões estratégicas</div>
      <div class="quote">"Com a Safra+, consigo planejar minha safra com dados reais e tomar decisões mais seguras sobre o que plantar e quando vender."<div class="quote-auth">— João Silva</div></div>
    </div>
  </div>
</section>
<section style="background:#f9fafb">
  <div class="sec-center"><div class="badge">🌐 Plano de Expansão</div></div>
  <h2 class="sec-title">Um mercado pronto para <span>inovação</span></h2>
  <p class="sec-sub">Estratégia de crescimento gradual e sustentável</p>
  <div class="mkt-grid">
    <div class="mkt-card"><div class="mkt-num">01</div><div class="mkt-ic">📍</div><h3>Rio Grande do Sul</h3><p>Produtores de grãos da região.</p></div>
    <div class="mkt-card"><div class="mkt-num">02</div><div class="mkt-ic">↗</div><h3>Sul do Brasil</h3><p>Expansão para PR e SC.</p></div>
    <div class="mkt-card"><div class="mkt-num">03</div><div class="mkt-ic">🌐</div><h3>Brasil</h3><p>Escala nacional para soja, milho, trigo e arroz.</p></div>
  </div>
  <div class="pot-card">
    <div class="pot-stats" style="flex:1">
      <h3>Potencial de mercado</h3>
      <div class="pot-row"><span class="pn g">5,4M</span><span class="pl">hectares de grãos no RS</span></div>
      <div class="pot-row"><span class="pn b">15M</span><span class="pl">hectares na região Sul</span></div>
      <div class="pot-row"><span class="pn p">70M</span><span class="pl">hectares no Brasil</span></div>
    </div>
    <div class="bubbles"><div class="bub b1"></div><div class="bub b2"></div><div class="bub b3"></div></div>
  </div>
</section>
<section>
  <div class="sec-center"><div class="badge">⚡ Plataforma</div></div>
  <h2 class="sec-title">Visualize seu <span>futuro financeiro</span></h2>
  <p class="sec-sub">Interface intuitiva e dashboards completos para controle total da sua safra</p>
  <div class="big-dash-wrap">
    <div class="bdh">
      <div><div class="bdt">Dashboard Financeiro</div><div class="bds">Safra 2025/2026 • Soja + Milho</div></div>
      <div class="live"><div class="live-dot"></div>Atualizado agora</div>
    </div>
    <div class="kpi-grid">
      <div class="kpi gn"><div class="kpi-l">$ Lucro Estimado</div><div class="kpi-v">R$ 487.500</div><div class="kpi-s">+12% vs safra anterior</div></div>
      <div class="kpi bl"><div class="kpi-l">↗ Margem Prevista</div><div class="kpi-v">38.5%</div><div class="kpi-s">Cenário realista</div></div>
      <div class="kpi rd"><div class="kpi-l">↘ Custos Totais</div><div class="kpi-v">R$ 778.500</div><div class="kpi-s">150 hectares</div></div>
      <div class="kpi or"><div class="kpi-l">📊 Receita Esperada</div><div class="kpi-v">R$ 1.266M</div><div class="kpi-s">Preço médio R$ 130/sc</div></div>
    </div>
    <div class="charts-row">
      <div class="ch-box"><div class="ch-title">Evolução Financeira</div>
        <div class="lbars">
          <div class="lb" style="height:60%;background:#e5e7eb"></div><div class="lb" style="height:65%;background:#e5e7eb"></div>
          <div class="lb" style="height:72%;background:#10b981"></div><div class="lb" style="height:80%;background:#10b981"></div>
          <div class="lb" style="height:88%;background:#10b981"></div><div class="lb" style="height:100%;background:#10b981"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:10px;color:#9ca3af"><span>420k</span><span>435k</span><span>487k</span></div>
      </div>
      <div class="ch-box"><div class="ch-title">Comparação de Safras</div>
        <div class="cmp-item"><div class="cmp-row"><span style="font-weight:500;font-size:12px">Soja</span><span style="font-weight:600;font-size:12px">R$ 320.000</span></div><div class="cmp-track"><div class="cmp-fill" style="width:75%;background:#10b981"></div></div></div>
        <div class="cmp-item"><div class="cmp-row"><span style="font-weight:500;font-size:12px">Milho</span><span style="font-weight:600;font-size:12px">R$ 167.500</span></div><div class="cmp-track"><div class="cmp-fill" style="width:40%;background:#f97316"></div></div></div>
        <div class="cmp-total"><span>Total</span><span class="cmp-total-v">R$ 487.500</span></div>
      </div>
    </div>
    <div class="sim-wrap">
      <div class="sim-title">Simulação de Cenários</div>
      <div class="sim-grid">
        <div class="sim-card rd"><div class="sim-ct r">↘ Pessimista</div><div class="sim-row"><span>Preço:</span><span>R$ 110/sc</span></div><div class="sim-row"><span>Produtividade:</span><span>48 sc/ha</span></div><div class="sim-lucro"><span>Lucro:</span><span style="color:#dc2626">R$ 420.000</span></div></div>
        <div class="sim-card ac"><div class="sim-ct g">↗ Realista</div><div class="sim-row"><span>Preço:</span><span>R$ 130/sc</span></div><div class="sim-row"><span>Produtividade:</span><span>55 sc/ha</span></div><div class="sim-lucro"><span>Lucro:</span><span style="color:#059669">R$ 487.500</span></div></div>
        <div class="sim-card bl"><div class="sim-ct b">↗ Otimista</div><div class="sim-row"><span>Preço:</span><span>R$ 145/sc</span></div><div class="sim-row"><span>Produtividade:</span><span>60 sc/ha</span></div><div class="sim-lucro"><span>Lucro:</span><span style="color:#2563eb">R$ 550.000</span></div></div>
      </div>
    </div>
  </div>
</section>
<section class="cta-sec">
  <div class="cta-inner"><h2>Planeje sua próxima safra com mais segurança.</h2><p>Transforme custos em previsões e decisões em resultados.</p></div>
  <div class="cta-box">
    <div class="cta-list"><h4>O que você recebe:</h4>
      <div class="cta-li"><div class="cta-ck">⊙</div>Demonstração personalizada da plataforma</div>
      <div class="cta-li"><div class="cta-ck">⊙</div>Análise gratuita da sua safra atual</div>
      <div class="cta-li"><div class="cta-ck">⊙</div>Consultoria sem compromisso</div>
      <div class="cta-li"><div class="cta-ck">⊙</div>Suporte completo na implementação</div>
    </div>
    <div class="cta-form"><h3>Solicite uma Demonstração</h3><p>Veja na prática como a Safra+ pode transformar a gestão da sua propriedade.</p>
      <button class="cta-btn-big" onclick="showPage('login')">Agendar Demonstração Gratuita →</button>
      <div class="cta-disc">Sem compromisso • Sem cartão de crédito</div>
    </div>
  </div>
  <div class="cta-stats">
    <div><div class="csn">500+</div><div class="csl">Produtores Ativos</div></div>
    <div><div class="csn">15k+</div><div class="csl">Hectares Gerenciados</div></div>
    <div><div class="csn">R$ 45M</div><div class="csl">em Lucros Projetados</div></div>
  </div>
</section>
<footer>
  <div class="ft-top">
    <div>
      <div class="ft-logo"><div class="ft-logo-ic">S+</div><span class="ft-logo-t">Safra<span>+</span></span></div>
      <div class="ft-tag">"Inteligência financeira para quem produz o futuro."</div>
      <div class="ft-desc">Transformando dados em decisões estratégicas para o agronegócio brasileiro.</div>
    </div>
    <div class="ft-col"><h4>Produto</h4><a>Funcionalidades</a><a>Plataforma</a><a>Preços</a><a>Demonstração</a></div>
    <div class="ft-col"><h4>Empresa</h4><a>Sobre Nós</a><a>Blog</a><a>Carreiras</a><a>Contato</a></div>
    <div class="ft-col"><h4>Contato</h4>
      <div class="ft-ci">✉ contato@saframais.com.br</div>
      <div class="ft-ci">📞 (51) 99999-9999</div>
      <div class="ft-ci">📍 Porto Alegre - RS, Brasil</div>
    </div>
  </div>
  <div class="ft-bottom">
    <div class="ft-socials"><div class="ft-soc">in</div><div class="ft-soc">ig</div><div class="ft-soc">fb</div></div>
    <div class="ft-legal">© 2026 Safra+. Todos os direitos reservados.<a>Política de Privacidade</a><a>Termos de Uso</a></div>
  </div>
</footer>
</div>

<!-- ===== LOGIN ===== -->
<div id="page-login" class="page">
  <div class="auth-wrap">
    <div class="auth-card">
      <div class="auth-logo"><div class="auth-logo-ic">S+</div><span class="auth-logo-t">Safra<span>+</span></span></div>
      <div class="auth-demo-box">
        <div class="auth-demo-title">🧪 Credenciais de teste</div>
        <div class="auth-demo-creds">Email: <strong>joao@saframais.com.br</strong><br>Senha: <strong>safra123</strong></div>
      </div>
      <div id="login-err" class="err-bar" style="display:none"></div>
      <div class="field"><label>Email</label><input type="email" id="login-email" placeholder="seu@email.com" value="joao@saframais.com.br"/></div>
      <div class="field"><label>Senha</label><input type="password" id="login-pass" placeholder="••••••••" value="safra123"/></div>
      <button class="auth-btn" onclick="doLogin()">Entrar na plataforma</button>
      <div class="auth-footer">Não tem conta? <a onclick="showPage('register')">Criar conta grátis</a></div>
      <div class="auth-footer" style="margin-top:6px"><a onclick="showPage('landing')">← Voltar ao site</a></div>
    </div>
  </div>
</div>

<!-- ===== REGISTER ===== -->
<div id="page-register" class="page">
  <div class="auth-wrap">
    <div class="auth-card">
      <div class="auth-logo"><div class="auth-logo-ic">S+</div><span class="auth-logo-t">Safra<span>+</span></span></div>
      <h2 class="auth-title">Criar conta</h2>
      <p class="auth-sub">Comece a controlar sua safra hoje</p>
      <div id="reg-err" class="err-bar" style="display:none"></div>
      <div class="field"><label>Nome completo</label><input type="text" id="reg-name" placeholder="João Silva"/></div>
      <div class="field"><label>Email</label><input type="email" id="reg-email" placeholder="seu@email.com"/></div>
      <div class="field"><label>Senha</label><input type="password" id="reg-pass" placeholder="Mínimo 6 caracteres"/></div>
      <div class="field"><label>Propriedade (hectares)</label><input type="number" id="reg-ha" placeholder="150"/></div>
      <button class="auth-btn" onclick="doRegister()">Criar conta grátis</button>
      <div class="auth-footer">Já tem conta? <a onclick="showPage('login')">Fazer login</a></div>
    </div>
  </div>
</div>

<!-- ===== APP ===== -->
<div id="page-app" class="page">
  <div class="app-layout">
    <aside class="sidebar">
      <div class="sb-user">
        <div class="sb-av" id="sb-av">J</div>
        <div><div class="sb-name" id="sb-name">João</div><div class="sb-role">Produtor</div></div>
      </div>
      <div class="sb-nav">
        <div class="sb-item active" onclick="showSection('dashboard',this)"><span class="sb-icon">📊</span>Dashboard</div>
        <div class="sb-item" onclick="showSection('registrar',this)"><span class="sb-icon">📝</span>Registrar Safra</div>
        <div class="sb-item" onclick="showSection('safras',this)"><span class="sb-icon">🌾</span>Minhas Safras</div>
        <div class="sb-item" onclick="showSection('ia',this)"><span class="sb-icon">🤖</span>Análise IA</div>
        <div class="sb-item" onclick="showSection('cenario',this)"><span class="sb-icon">🔮</span>Projeção</div>
      </div>
      <div class="sb-logout"><button class="sb-logout-btn" onclick="doLogout()">↩ Sair da conta</button></div>
    </aside>
    <main class="app-main">
      <div id="sec-dashboard" class="app-section active">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px">
          <div><h1 class="app-title">Dashboard</h1><p class="app-sub">Visão geral de todas as suas safras</p></div>
          <div class="live" style="margin-top:8px"><div class="live-dot"></div>Dados ao vivo</div>
        </div>
        <div class="stat-grid4" id="dash-stats"></div>
        <div class="card">
          <div class="card-title">📈 Custo vs Lucro por hectare</div>
          <div id="dash-chart" style="display:flex;align-items:flex-end;gap:8px;height:130px;margin-bottom:8px"></div>
          <div id="dash-chart-legend" style="font-size:11px;color:#9ca3af"></div>
        </div>
        <div id="dash-safras-list"></div>
      </div>
      <div id="sec-registrar" class="app-section">
        <h1 class="app-title">Registrar safra</h1>
        <p class="app-sub">Preencha os dados para calcular sua margem real</p>
        <div class="card">
          <div class="card-title">📋 Informações gerais</div>
          <div class="form-grid">
            <div class="field-sm"><label>Nome da safra</label><input type="text" id="f-nome" placeholder="Ex: Soja 24/25"/></div>
            <div class="field-sm"><label>Cultura</label><select id="f-cultura"><option>Soja</option><option>Milho</option><option>Trigo</option><option>Arroz</option></select></div>
            <div class="field-sm"><label>Área (ha)</label><input type="number" id="f-area" placeholder="0" oninput="updatePreview()"/></div>
            <div class="field-sm"><label>Produção total (sacas)</label><input type="number" id="f-prod" placeholder="0" oninput="updatePreview()"/></div>
            <div class="field-sm"><label>Preço de venda (R$/sc)</label><input type="number" id="f-preco" placeholder="0" oninput="updatePreview()"/></div>
          </div>
        </div>
        <div class="card">
          <div class="card-title">💰 Custos por categoria (R$)</div>
          <div class="form-grid" id="custos-grid"></div>
        </div>
        <div id="preview-box" style="display:none" class="preview-row"></div>
        <button class="btn-green" id="save-btn" onclick="salvarSafra()">💾 Salvar safra</button>
      </div>
      <div id="sec-safras" class="app-section">
        <h1 class="app-title">Minhas Safras</h1>
        <p class="app-sub">Todas as safras registradas</p>
        <div id="safras-list"></div>
      </div>
      <div id="sec-ia" class="app-section">
        <h1 class="app-title">Análise com IA</h1>
        <p class="app-sub">O assistente analisa suas safras e recomenda ações para aumentar a margem</p>
        <div class="card">
          <div class="card-title">🤖 Diagnóstico financeiro inteligente</div>
          <p style="font-size:13px;color:#6b7280;margin-bottom:16px;line-height:1.6">Com base em todas as suas safras, a IA identifica padrões, riscos e oportunidades.</p>
          <button class="btn-green" id="ia-btn" onclick="analisarIA()">🤖 Analisar safras com IA</button>
          <div id="ia-result"></div>
        </div>
      </div>
      <div id="sec-cenario" class="app-section">
        <h1 class="app-title">Projeção de cenários</h1>
        <p class="app-sub">Simule condições futuras antes da safra começar</p>
        <div class="card">
          <div class="card-title">🔮 Parâmetros do cenário</div>
          <p style="font-size:13px;color:#6b7280;margin-bottom:16px">Deixe em branco para manter igual à última safra registrada.</p>
          <div class="form-grid3">
            <div class="field-sm"><label>Novo preço (R$/sc)</label><input type="number" id="c-preco" placeholder="Ex: 120"/></div>
            <div class="field-sm"><label>Nova área (ha)</label><input type="number" id="c-area" placeholder="Ex: 500"/></div>
            <div class="field-sm"><label>Nova produtividade (sc/ha)</label><input type="number" id="c-prod" placeholder="Ex: 60"/></div>
          </div>
          <button class="btn-green" id="cen-btn" onclick="projetarCenario()">🔮 Projetar com IA</button>
          <div id="cenario-result"></div>
        </div>
      </div>
    </main>
  </div>
</div>

<script>
// ════════════════════════════════════════════════════════
//  BANCO DE DADOS — IndexedDB
//  3 tabelas: users | safras | session
// ════════════════════════════════════════════════════════
const DB_NAME = 'saframais_db';
const DB_VERSION = 1;
let db = null;

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);

    req.onupgradeneeded = e => {
      const d = e.target.result;
      // Tabela de usuários (chave: email)
      if (!d.objectStoreNames.contains('users'))
        d.createObjectStore('users', { keyPath: 'email' });
      // Tabela de safras (chave: id auto-incremento)
      if (!d.objectStoreNames.contains('safras')) {
        const s = d.createObjectStore('safras', { keyPath: 'id', autoIncrement: true });
        s.createIndex('userEmail', 'userEmail', { unique: false });
      }
      // Tabela de sessão (chave fixa 'current')
      if (!d.objectStoreNames.contains('session'))
        d.createObjectStore('session', { keyPath: 'key' });
    };

    req.onsuccess = e => { db = e.target.result; resolve(db); };
    req.onerror   = e => reject(e.target.error);
  });
}

// Helpers genéricos
function dbPut(store, obj) {
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).put(obj);
    req.onsuccess = () => res(req.result);
    req.onerror   = e => rej(e.target.error);
  });
}
function dbGet(store, key) {
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).get(key);
    req.onsuccess = () => res(req.result || null);
    req.onerror   = e => rej(e.target.error);
  });
}
function dbGetAll(store) {
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => res(req.result);
    req.onerror   = e => rej(e.target.error);
  });
}
function dbGetByIndex(store, index, value) {
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).index(index).getAll(value);
    req.onsuccess = () => res(req.result);
    req.onerror   = e => rej(e.target.error);
  });
}
function dbDelete(store, key) {
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).delete(key);
    req.onsuccess = () => res();
    req.onerror   = e => rej(e.target.error);
  });
}

// ════════════════════════════════════════════════════════
//  CONSTANTES & ESTADO
// ════════════════════════════════════════════════════════
const CUSTO_CATS = [
  {key:'sementes',    label:'Sementes'},
  {key:'fertilizantes',label:'Fertilizantes'},
  {key:'defensivos',  label:'Defensivos'},
  {key:'combustivel', label:'Combustível'},
  {key:'maoObra',     label:'Mão de obra'},
  {key:'aluguelTerra',label:'Aluguel/terra'},
  {key:'outros',      label:'Outros'}
];
const DEMO = { email:'joao@saframais.com.br', pass:'safra123', name:'João Silva', ha:150 };
const fmt = v => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}).format(v||0);

let currentUser = null;

// ════════════════════════════════════════════════════════
//  BOOT
// ════════════════════════════════════════════════════════
async function boot() {
  try {
    await openDB();
    document.getElementById('db-indicator').className = 'db-pill ok';
    document.getElementById('db-indicator').textContent = '● DB ativo';

    // Restaurar sessão
    const sess = await dbGet('session', 'current');
    if (sess && sess.user) {
      currentUser = sess.user;
      setUserUI(currentUser);
    }
  } catch(e) {
    console.error('IndexedDB erro:', e);
    document.getElementById('db-indicator').className = 'db-pill err';
    document.getElementById('db-indicator').textContent = '● DB erro';
  }

  // Esconder loading, mostrar app
  document.getElementById('loading-screen').style.display = 'none';
  document.getElementById('main-nav').style.display = 'flex';
  buildCustosGrid();

  if (currentUser) showPage('app');
  else showPage('landing');
}

// ════════════════════════════════════════════════════════
//  NAVEGAÇÃO
// ════════════════════════════════════════════════════════
function showPage(p) {
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
  document.getElementById('page-' + p).classList.add('active');
  const nl = document.getElementById('nav-links');
  const na = document.getElementById('nav-actions');
  if (p === 'app') {
    nl.style.display = 'none';
    na.innerHTML = `<span style="font-size:13px;color:#6b7280;margin-right:8px">Bem-vindo, <strong>${currentUser.name.split(' ')[0]}</strong></span>
      <button class="btn-outline" onclick="doLogout()">Sair</button>`;
    renderDashboard();
  } else if (p === 'landing') {
    nl.style.display = 'flex';
    na.innerHTML = `<button class="btn-outline" onclick="showPage('login')">Login</button>
      <button class="btn-solid" onclick="showPage('login')">Solicitar Demo</button>`;
  } else {
    nl.style.display = 'none';
    na.innerHTML = `<button class="btn-outline" onclick="showPage('landing')">← Voltar ao site</button>`;
  }
  window.scrollTo(0, 0);
}

function goHome() { currentUser ? showPage('app') : showPage('landing'); }

function showSection(s, el) {
  document.querySelectorAll('.app-section').forEach(e => e.classList.remove('active'));
  document.querySelectorAll('.sb-item').forEach(e => e.classList.remove('active'));
  document.getElementById('sec-' + s).classList.add('active');
  if (el) el.classList.add('active');
  if (s === 'registrar') buildCustosGrid();
  if (s === 'dashboard') renderDashboard();
  if (s === 'safras')    renderSafras();
}

function setUserUI(u) {
  document.getElementById('sb-av').textContent   = u.name[0].toUpperCase();
  document.getElementById('sb-name').textContent = u.name.split(' ')[0];
}

// ════════════════════════════════════════════════════════
//  AUTH
// ════════════════════════════════════════════════════════
async function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value;
  const errEl = document.getElementById('login-err');

  let user = null;
  if (email === DEMO.email && pass === DEMO.pass)
    user = { email: DEMO.email, name: DEMO.name, ha: DEMO.ha };
  else {
    const found = await dbGet('users', email);
    if (found && found.pass === pass) user = found;
  }

  if (!user) { errEl.style.display='block'; errEl.textContent='Email ou senha incorretos.'; return; }
  errEl.style.display = 'none';
  currentUser = user;
  await dbPut('session', { key: 'current', user });
  setUserUI(user);
  showPage('app');
}

async function doRegister() {
  const name  = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass  = document.getElementById('reg-pass').value;
  const ha    = document.getElementById('reg-ha').value;
  const errEl = document.getElementById('reg-err');

  if (!name||!email||!pass) { errEl.style.display='block'; errEl.textContent='Preencha todos os campos.'; return; }
  if (pass.length < 6)      { errEl.style.display='block'; errEl.textContent='Senha deve ter ao menos 6 caracteres.'; return; }
  if (email === DEMO.email) { errEl.style.display='block'; errEl.textContent='Email já cadastrado.'; return; }

  const existing = await dbGet('users', email);
  if (existing) { errEl.style.display='block'; errEl.textContent='Email já cadastrado.'; return; }

  const u = { email, pass, name, ha: parseFloat(ha)||0 };
  await dbPut('users', u);
  errEl.style.display = 'none';
  currentUser = u;
  await dbPut('session', { key: 'current', user: u });
  setUserUI(u);
  showPage('app');
}

async function doLogout() {
  currentUser = null;
  await dbDelete('session', 'current');
  showPage('landing');
}

// ════════════════════════════════════════════════════════
//  FORMULÁRIO
// ════════════════════════════════════════════════════════
function buildCustosGrid() {
  const g = document.getElementById('custos-grid');
  if (!g) return;
  g.innerHTML = CUSTO_CATS.map(({key,label}) =>
    `<div class="field-sm"><label>${label} (R$)</label>
     <input type="number" id="c-${key}" placeholder="0" oninput="updatePreview()"/></div>`
  ).join('');
}

function calcLucro(s) {
  const receita = (s.producao||0) * (s.preco||0);
  const custo   = CUSTO_CATS.reduce((a,{key}) => a + (parseFloat(s.custos[key])||0), 0);
  const area    = s.area || 1;
  return { receita, custo, lucroTotal:receita-custo, lucroHa:(receita-custo)/area, custoHa:custo/area, receitaHa:receita/area };
}

function updatePreview() {
  const area  = parseFloat(document.getElementById('f-area')?.value)||0;
  const prod  = parseFloat(document.getElementById('f-prod')?.value)||0;
  const preco = parseFloat(document.getElementById('f-preco')?.value)||0;
  const custos = {};
  CUSTO_CATS.forEach(({key}) => { custos[key] = parseFloat(document.getElementById('c-'+key)?.value)||0; });
  if (!area||!prod||!preco) { document.getElementById('preview-box').style.display='none'; return; }
  const l  = calcLucro({producao:prod, preco, area, custos});
  const pb = document.getElementById('preview-box');
  pb.style.display = 'flex';
  pb.innerHTML = [
    ['Receita',     fmt(l.receita),    '#059669'],
    ['Custo',       fmt(l.custo),      '#dc2626'],
    ['Lucro total', fmt(l.lucroTotal), l.lucroTotal>=0?'#059669':'#dc2626'],
    ['Lucro/ha',    fmt(l.lucroHa),    l.lucroHa>=0?'#7c3aed':'#dc2626'],
    ['Margem',      l.receita>0?((l.lucroTotal/l.receita)*100).toFixed(0)+'%':'—', '#6b7280']
  ].map(([lb,v,c]) =>
    `<div class="pv-item"><div class="pv-l">${lb}</div><div class="pv-v" style="color:${c}">${v}</div></div>`
  ).join('');
}

async function salvarSafra() {
  const nome    = document.getElementById('f-nome').value.trim();
  const area    = parseFloat(document.getElementById('f-area').value)||0;
  const prod    = parseFloat(document.getElementById('f-prod').value)||0;
  const preco   = parseFloat(document.getElementById('f-preco').value)||0;
  const cultura = document.getElementById('f-cultura').value;
  if (!nome||!area||!prod||!preco) { alert('Preencha todos os campos obrigatórios.'); return; }

  const custos = {};
  CUSTO_CATS.forEach(({key}) => { custos[key] = parseFloat(document.getElementById('c-'+key)?.value)||0; });

  const s = {
    userEmail: currentUser.email, nome, cultura, area,
    producao: prod, preco, custos,
    data: new Date().toLocaleDateString('pt-BR'),
    ts: Date.now()
  };

  await dbPut('safras', s); // id é auto-incrementado pelo IndexedDB

  // Limpar form
  ['f-nome','f-area','f-prod','f-preco'].forEach(id => { document.getElementById(id).value=''; });
  CUSTO_CATS.forEach(({key}) => { const el = document.getElementById('c-'+key); if(el) el.value=''; });
  document.getElementById('preview-box').style.display = 'none';

  // Feedback
  const btn = document.getElementById('save-btn');
  btn.innerHTML = '✅ Safra salva!'; btn.style.background = '#059669';
  setTimeout(() => { btn.innerHTML='💾 Salvar safra'; btn.style.background=''; }, 2000);

  // Ir ao dashboard
  document.querySelectorAll('.sb-item').forEach((el,i) => el.classList.toggle('active', i===0));
  showSection('dashboard', document.querySelector('.sb-item'));
}

// ════════════════════════════════════════════════════════
//  RENDERIZAÇÃO
// ════════════════════════════════════════════════════════
async function renderDashboard() {
  const mine = await dbGetByIndex('safras','userEmail', currentUser.email);
  mine.sort((a,b) => (b.ts||0)-(a.ts||0));

  const totalReceita = mine.reduce((a,s) => a+calcLucro(s).receita, 0);
  const totalLucro   = mine.reduce((a,s) => a+calcLucro(s).lucroTotal, 0);
  const avgHa        = mine.length ? mine.reduce((a,s) => a+calcLucro(s).lucroHa,0)/mine.length : 0;

  document.getElementById('dash-stats').innerHTML = [
    ['Safras registradas', mine.length,      '#0d1f1a'],
    ['Receita total',      fmt(totalReceita),'#059669'],
    ['Lucro total',        fmt(totalLucro),  totalLucro>=0?'#059669':'#dc2626'],
    ['Lucro médio/ha',     fmt(avgHa),       avgHa>=0?'#059669':'#dc2626']
  ].map(([l,v,c]) =>
    `<div class="stat-c"><div class="sl">${l}</div><div class="sv" style="color:${c}">${v}</div></div>`
  ).join('');

  const chartEl = document.getElementById('dash-chart');
  if (!mine.length) {
    chartEl.innerHTML = `<div style="width:100%;text-align:center;color:#9ca3af;font-size:13px;padding:20px 0">Nenhuma safra registrada ainda.</div>`;
    document.getElementById('dash-chart-legend').innerHTML = '';
  } else {
    const maxVal = Math.max(...mine.map(s => Math.max(calcLucro(s).custoHa, Math.abs(calcLucro(s).lucroHa))));
    chartEl.innerHTML = [...mine].reverse().slice(0,8).map(s => {
      const l  = calcLucro(s);
      const cH = Math.round((l.custoHa/maxVal)*100);
      const lH = Math.round((Math.abs(l.lucroHa)/maxVal)*100);
      const lC = l.lucroHa>=0?'#10b981':'#ef4444';
      return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px">
        <div style="width:100%;display:flex;align-items:flex-end;gap:2px;height:110px">
          <div style="flex:1;height:${cH}%;background:#fca5a5;border-radius:3px 3px 0 0"></div>
          <div style="flex:1;height:${lH}%;background:${lC};border-radius:3px 3px 0 0"></div>
        </div>
        <div style="font-size:10px;color:#9ca3af;text-align:center;max-width:60px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.nome}</div>
      </div>`;
    }).join('');
    document.getElementById('dash-chart-legend').innerHTML = `
      <span style="display:inline-flex;align-items:center;gap:4px;margin-right:14px">
        <span style="width:10px;height:10px;background:#fca5a5;border-radius:2px;display:inline-block"></span>Custo/ha</span>
      <span style="display:inline-flex;align-items:center;gap:4px">
        <span style="width:10px;height:10px;background:#10b981;border-radius:2px;display:inline-block"></span>Lucro/ha</span>`;
  }

  const listEl = document.getElementById('dash-safras-list');
  if (!mine.length) {
    listEl.innerHTML = `<div class="empty-state"><div class="ei">🌱</div><h3>Nenhuma safra registrada</h3><p>Clique em "Registrar Safra" para começar.</p></div>`;
  } else {
    listEl.innerHTML = mine.slice(0,3).map(s => safraCardHTML(s, false)).join('');
  }
}

async function renderSafras() {
  const mine = await dbGetByIndex('safras','userEmail', currentUser.email);
  mine.sort((a,b) => (b.ts||0)-(a.ts||0));
  const el = document.getElementById('safras-list');
  if (!mine.length) {
    el.innerHTML = `<div class="empty-state"><div class="ei">🌾</div><h3>Nenhuma safra ainda</h3><p>Registre sua primeira safra para começar.</p></div>`;
  } else {
    el.innerHTML = mine.map(s => safraCardHTML(s, true)).join('');
  }
}

function safraCardHTML(s, showDel=false) {
  const l      = calcLucro(s);
  const pct    = l.receita>0 ? (l.custo/l.receita*100).toFixed(0) : 0;
  const margem = l.receita>0 ? ((l.lucroTotal/l.receita)*100).toFixed(0) : 0;
  const pc     = parseInt(pct)>80?'#ef4444':parseInt(pct)>60?'#f97316':'#10b981';
  return `<div class="safra-item">
    <div class="si-head">
      <div>
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
          <span class="si-name">${s.nome}</span>
          <span class="tag">${s.cultura}</span>
          <span class="tag ${parseInt(margem)>20?'':'tag-w'}">${margem}% margem</span>
        </div>
        <div class="si-meta">${s.area} ha · ${s.data}</div>
      </div>
      ${showDel?`<button class="del-btn" onclick="deleteSafra(${s.id})">🗑 Excluir</button>`:''}
    </div>
    <div class="metrics-row">
      <div class="metric"><div class="ml">Receita</div><div class="mv" style="color:#059669">${fmt(l.receita)}</div></div>
      <div class="metric"><div class="ml">Custo</div><div class="mv" style="color:#dc2626">${fmt(l.custo)}</div></div>
      <div class="metric"><div class="ml">Lucro total</div><div class="mv" style="color:${l.lucroTotal>=0?'#059669':'#dc2626'}">${fmt(l.lucroTotal)}</div></div>
      <div class="metric"><div class="ml">Lucro/ha</div><div class="mv" style="color:${l.lucroHa>=0?'#7c3aed':'#dc2626'}">${fmt(l.lucroHa)}</div></div>
      <div class="metric"><div class="ml">Custo/ha</div><div class="mv" style="color:#6b7280">${fmt(l.custoHa)}</div></div>
    </div>
    <div class="prog-track"><div class="prog-fill" style="width:${Math.min(pct,100)}%;background:${pc}"></div></div>
    <div class="prog-lbl">${pct}% da receita comprometida com custos</div>
  </div>`;
}

async function deleteSafra(id) {
  if (!confirm('Excluir esta safra permanentemente?')) return;
  await dbDelete('safras', id);
  renderSafras();
}

// ════════════════════════════════════════════════════════
//  CLAUDE API
// ════════════════════════════════════════════════════════
async function callClaude(prompt) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514', max_tokens: 1000,
      system: 'Você é um consultor agrícola especializado em finanças rurais no Brasil. Responda em português, de forma direta e prática, com tópicos curtos e números concretos.',
      messages: [{ role:'user', content: prompt }]
    })
  });
  const d = await res.json();
  return d.content?.[0]?.text || 'Erro ao obter resposta.';
}

async function analisarIA() {
  const mine = await dbGetByIndex('safras','userEmail', currentUser.email);
  if (!mine.length) { alert('Registre ao menos uma safra primeiro.'); return; }
  const btn = document.getElementById('ia-btn');
  const res = document.getElementById('ia-result');
  btn.disabled=true; btn.innerHTML=`<span class="spinner"></span> Analisando...`;
  res.innerHTML='';
  const resumo = mine.map(s => {
    const l = calcLucro(s);
    return `"${s.nome}" (${s.cultura}, ${s.area}ha): receita ${fmt(l.receita)}, custo ${fmt(l.custo)}, lucro/ha ${fmt(l.lucroHa)}`;
  }).join('\n');
  try {
    const txt = await callClaude(`Analise as safras abaixo:\n${resumo}\n\nForneça:\n1) Diagnóstico financeiro\n2) Principais riscos\n3) Recomendações para melhorar margem\n4) Melhor safra e por quê`);
    res.innerHTML = `<div class="ia-box">${txt}</div>`;
  } catch(e) { res.innerHTML=`<div class="err-bar">Erro ao consultar IA: ${e.message}</div>`; }
  btn.disabled=false; btn.innerHTML='🤖 Analisar safras com IA';
}

async function projetarCenario() {
  const mine = await dbGetByIndex('safras','userEmail', currentUser.email);
  if (!mine.length) { alert('Registre ao menos uma safra primeiro.'); return; }
  mine.sort((a,b)=>(b.ts||0)-(a.ts||0));
  const btn = document.getElementById('cen-btn');
  const res = document.getElementById('cenario-result');
  btn.disabled=true; btn.innerHTML=`<span class="spinner"></span> Projetando...`;
  res.innerHTML='';
  const s  = mine[0];
  const l  = calcLucro(s);
  const np = document.getElementById('c-preco').value || 'igual ao atual';
  const na = document.getElementById('c-area').value  || 'igual ao atual';
  const np2= document.getElementById('c-prod').value  || 'igual ao atual';
  try {
    const txt = await callClaude(`Safra base: ${s.cultura}, ${s.area}ha, receita/ha ${fmt(l.receitaHa)}, custo/ha ${fmt(l.custoHa)}, lucro/ha ${fmt(l.lucroHa)}.\nCenário: preço ${np} R$/sc, área ${na} ha, produtividade ${np2} sc/ha.\nForneça: 1) Lucro estimado total e por hectare 2) Vale expandir? 3) Ponto de equilíbrio 4) Recomendação final`);
    res.innerHTML = `<div class="ia-box">${txt}</div>`;
  } catch(e) { res.innerHTML=`<div class="err-bar">Erro ao consultar IA.</div>`; }
  btn.disabled=false; btn.innerHTML='🔮 Projetar com IA';
}

// ════════════════════════════════════════════════════════
//  INICIAR
// ════════════════════════════════════════════════════════
boot();
</script>
