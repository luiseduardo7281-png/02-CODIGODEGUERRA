import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const CULTURAS = ["Soja","Milho","Trigo","Arroz"];
const CUSTO_CATS = [
  { key:"sementes", label:"Sementes" },
  { key:"fertilizantes", label:"Fertilizantes" },
  { key:"defensivos", label:"Defensivos" },
  { key:"combustivel", label:"Combustível" },
  { key:"maoObra", label:"Mão de obra" },
  { key:"aluguelTerra", label:"Aluguel/terra" },
  { key:"outros", label:"Outros" },
];

const fmt = v => v == null ? "—" : new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0}).format(v);

const initialSafra = () => ({
  id: Date.now(), nome:"", cultura:"Soja", area:"", producao:"", precoVenda:"",
  custos:{ sementes:0, fertilizantes:0, defensivos:0, combustivel:0, maoObra:0, aluguelTerra:0, outros:0 },
});

const calcLucro = s => {
  const receita = (parseFloat(s.producao)||0)*(parseFloat(s.precoVenda)||0);
  const totalCusto = Object.values(s.custos).reduce((a,b)=>a+(parseFloat(b)||0),0);
  const area = parseFloat(s.area)||1;
  return { receita, totalCusto, lucroTotal:receita-totalCusto, lucroHa:(receita-totalCusto)/area, custoHa:totalCusto/area, receitaHa:receita/area };
};

async function callClaude(prompt) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      model:"claude-sonnet-4-20250514",
      max_tokens:1000,
      system:`Você é um consultor agrícola especializado em análise financeira de safras no Brasil. 
Responda sempre em português, de forma direta e prática. 
Use números concretos quando disponíveis. Formate sua resposta em tópicos curtos.
Foque em decisões práticas que o produtor pode tomar agora.`,
      messages:[{role:"user",content:prompt}]
    })
  });
  const d = await res.json();
  return d.content?.[0]?.text || "Erro ao obter resposta.";
}

function Spinner() {
  return <span style={{display:"inline-block",width:14,height:14,border:"2px solid #ccc",borderTopColor:"#1a7a4a",borderRadius:"50%",animation:"spin 0.7s linear infinite",verticalAlign:"middle",marginRight:6}}/>
}

export default function App() {
  const [tab, setTab] = useState("registrar");
  const [safras, setSafras] = useState([]);
  const [form, setForm] = useState(initialSafra());
  const [iaResult, setIaResult] = useState("");
  const [iaLoading, setIaLoading] = useState(false);
  const [cenarioInputs, setCenarioInputs] = useState({ precoNovo:"", areaNova:"", novaProducao:"" });
  const [cenarioResult, setCenarioResult] = useState("");

  const handleSave = () => {
    if (!form.nome||!form.area||!form.producao||!form.precoVenda) return alert("Preencha todos os campos obrigatórios.");
    setSafras(p=>[...p,{...form,id:Date.now()}]);
    setForm(initialSafra());
    setTab("ia");
  };

  const analisarSafras = async () => {
    if (safras.length === 0) return alert("Registre ao menos uma safra primeiro.");
    setIaLoading(true); setIaResult("");
    const resumo = safras.map(s => {
      const l = calcLucro(s);
      return `Safra "${s.nome}" (${s.cultura}, ${s.area}ha): receita R$${l.receita.toFixed(0)}, custo R$${l.totalCusto.toFixed(0)}, lucro/ha R$${l.lucroHa.toFixed(0)}`;
    }).join("\n");
    const prompt = `Analise as safras abaixo e forneça:\n1) Diagnóstico financeiro de cada uma\n2) Principais riscos identificados\n3) Recomendações concretas para melhorar margem\n4) Qual safra teve melhor performance e por quê\n\nDados:\n${resumo}`;
    const r = await callClaude(prompt);
    setIaResult(r); setIaLoading(false);
  };

  const projetarCenario = async () => {
    if (safras.length === 0) return alert("Registre ao menos uma safra primeiro.");
    setIaLoading(true); setCenarioResult("");
    const ultima = safras[safras.length-1];
    const l = calcLucro(ultima);
    const prompt = `Com base na última safra registrada:
- Cultura: ${ultima.cultura}, área: ${ultima.area}ha
- Receita atual/ha: R$${l.receitaHa.toFixed(0)}, Custo atual/ha: R$${l.custoHa.toFixed(0)}, Lucro atual/ha: R$${l.lucroHa.toFixed(0)}

Cenário proposto pelo produtor:
- Novo preço de venda: ${cenarioInputs.precoNovo || "mesmo atual"} R$/sc
- Nova área: ${cenarioInputs.areaNova || "mesma"} ha
- Nova produtividade esperada: ${cenarioInputs.novaProducao || "mesma"} sc/ha

Faça uma projeção financeira detalhada para esse cenário, indicando:
1) Novo lucro estimado total e por hectare
2) Se vale a pena expandir a área nessas condições
3) Ponto de equilíbrio (preço mínimo de venda para não ter prejuízo)
4) Recomendação final: expandir, manter ou reduzir operação`;
    const r = await callClaude(prompt);
    setCenarioResult(r); setIaLoading(false);
  };

  const chartData = safras.map(s => {
    const l = calcLucro(s);
    return { nome:s.nome, custo:Math.round(l.custoHa), lucro:Math.round(l.lucroHa) };
  });

  const tabs = [
    {id:"registrar",label:"📝 Registrar"},
    {id:"dashboard",label:"📊 Dashboard"},
    {id:"ia",label:"🤖 Análise IA"},
    {id:"cenario",label:"🔮 Projeção"},
  ];

  return (
    <div style={{fontFamily:"sans-serif",maxWidth:820,margin:"0 auto",padding:16}}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}} .ia-box{background:#f8f4ff;border:1px solid #d0bbff;border-radius:10px;padding:14px;white-space:pre-wrap;line-height:1.6;font-size:13px;color:#2d2d2d;margin-top:12px}`}</style>
      <h2 style={{margin:0,fontSize:20,fontWeight:500}}>🌾 AgroDecisão <span style={{background:"#7c3aed",color:"#fff",fontSize:11,padding:"2px 8px",borderRadius:20,marginLeft:6,fontWeight:400}}>IA</span></h2>
      <p style={{margin:"2px 0 12px",fontSize:13,color:"#666"}}>Sistema de decisão inteligente para produtores rurais</p>

      <div style={{display:"flex",gap:8,borderBottom:"1px solid #e0e0e0",paddingBottom:8,marginBottom:16,flexWrap:"wrap"}}>
        {tabs.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{padding:"6px 14px",borderRadius:6,border:"none",background:tab===t.id?"#7c3aed":"#f0f0f0",color:tab===t.id?"#fff":"#333",cursor:"pointer",fontSize:13,fontWeight:tab===t.id?500:400}}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === "registrar" && (
        <div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}}>
            {[["Nome da safra","nome","text","Ex: Safra Soja 24/25"],["Área (ha)","area","number",""],["Produção total (sacas)","producao","number",""],["Preço de venda (R$/sc)","precoVenda","number",""]].map(([l,k,t,ph])=>(
              <div key={k}>
                <label style={{fontSize:12,color:"#555",display:"block",marginBottom:3}}>{l}</label>
                <input type={t} placeholder={ph} value={form[k]} onChange={e=>setForm(p=>({...p,[k]:e.target.value}))}
                  style={{width:"100%",padding:"7px 10px",borderRadius:6,border:"1px solid #ddd",fontSize:13,boxSizing:"border-box"}}/>
              </div>
            ))}
            <div>
              <label style={{fontSize:12,color:"#555",display:"block",marginBottom:3}}>Cultura</label>
              <select value={form.cultura} onChange={e=>setForm(p=>({...p,cultura:e.target.value}))}
                style={{width:"100%",padding:"7px 10px",borderRadius:6,border:"1px solid #ddd",fontSize:13}}>
                {CULTURAS.map(c=><option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <p style={{fontSize:13,fontWeight:500,marginBottom:8}}>Custos por categoria (R$)</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
            {CUSTO_CATS.map(({key,label})=>(
              <div key={key}>
                <label style={{fontSize:12,color:"#555",display:"block",marginBottom:3}}>{label}</label>
                <input type="number" min="0" value={form.custos[key]||""} onChange={e=>setForm(p=>({...p,custos:{...p.custos,[key]:e.target.value}}))}
                  style={{width:"100%",padding:"7px 10px",borderRadius:6,border:"1px solid #ddd",fontSize:13,boxSizing:"border-box"}}/>
              </div>
            ))}
          </div>
          {form.area && form.producao && form.precoVenda && (() => {
            const l = calcLucro(form);
            return (
              <div style={{background:"#f0faf4",border:"1px solid #b2dfcb",borderRadius:8,padding:12,marginBottom:16,display:"flex",gap:24,flexWrap:"wrap"}}>
                <div><div style={{fontSize:11,color:"#555"}}>Receita</div><div style={{fontWeight:500,color:"#1a7a4a"}}>{fmt(l.receita)}</div></div>
                <div><div style={{fontSize:11,color:"#555"}}>Custo</div><div style={{fontWeight:500,color:"#c0392b"}}>{fmt(l.totalCusto)}</div></div>
                <div><div style={{fontSize:11,color:"#555"}}>Lucro total</div><div style={{fontWeight:500,color:l.lucroTotal>=0?"#1a7a4a":"#c0392b"}}>{fmt(l.lucroTotal)}</div></div>
                <div><div style={{fontSize:11,color:"#555"}}>Lucro/ha</div><div style={{fontWeight:500}}>{fmt(l.lucroHa)}</div></div>
              </div>
            );
          })()}
          <button onClick={handleSave} style={{background:"#7c3aed",color:"#fff",border:"none",padding:"10px 24px",borderRadius:8,fontSize:14,cursor:"pointer",fontWeight:500}}>
            Salvar e ir para análise IA →
          </button>
        </div>
      )}

      {tab === "dashboard" && (
        <div>
          {safras.length === 0 ? <p style={{color:"#888"}}>Nenhuma safra registrada.</p> : (
            <>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={chartData}>
                  <XAxis dataKey="nome" tick={{fontSize:11}}/>
                  <YAxis tick={{fontSize:11}} tickFormatter={v=>`R$${(v/1000).toFixed(0)}k`}/>
                  <Tooltip formatter={v=>fmt(v)}/>
                  <Bar dataKey="custo" name="Custo/ha" fill="#e74c3c" radius={[4,4,0,0]}/>
                  <Bar dataKey="lucro" name="Lucro/ha" fill="#7c3aed" radius={[4,4,0,0]}/>
                </BarChart>
              </ResponsiveContainer>
              <div style={{display:"grid",gap:10,marginTop:16}}>
                {safras.map(s=>{
                  const l=calcLucro(s);
                  return (
                    <div key={s.id} style={{border:"1px solid #e0e0e0",borderRadius:8,padding:12}}>
                      <div style={{fontWeight:500,marginBottom:6}}>{s.nome} <span style={{fontSize:11,color:"#888",fontWeight:400}}>· {s.cultura} · {s.area}ha</span></div>
                      <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
                        {[["Receita",fmt(l.receita),"#1a7a4a"],["Custo",fmt(l.totalCusto),"#c0392b"],["Lucro/ha",fmt(l.lucroHa),l.lucroHa>=0?"#7c3aed":"#c0392b"],["Margem",`${((l.lucroTotal/l.receita)*100).toFixed(0)}%`,"#555"]].map(([lb,v,c])=>(
                          <div key={lb}><div style={{fontSize:11,color:"#888"}}>{lb}</div><div style={{fontWeight:500,color:c}}>{v}</div></div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}

      {tab === "ia" && (
        <div>
          <p style={{fontSize:14,color:"#444",marginBottom:12}}>
            A IA analisa todas as suas safras registradas, identifica padrões, riscos e recomenda ações concretas para aumentar sua margem.
          </p>
          <button onClick={analisarSafras} disabled={iaLoading} style={{background:"#7c3aed",color:"#fff",border:"none",padding:"10px 20px",borderRadius:8,fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>
            {iaLoading && <Spinner/>}
            {iaLoading ? "Analisando safras..." : "🤖 Analisar minhas safras com IA"}
          </button>
          {iaResult && <div className="ia-box">{iaResult}</div>}
          {!iaResult && !iaLoading && safras.length > 0 && (
            <div style={{marginTop:12,padding:12,background:"#fafafa",borderRadius:8,border:"1px solid #eee",fontSize:13,color:"#666"}}>
              {safras.length} safra(s) pronta(s) para análise. Clique no botão acima.
            </div>
          )}
          {safras.length === 0 && <p style={{color:"#888",marginTop:12,fontSize:13}}>Registre ao menos uma safra para usar a análise IA.</p>}
        </div>
      )}

      {tab === "cenario" && (
        <div>
          <p style={{fontSize:14,color:"#444",marginBottom:12}}>
            Informe um cenário hipotético e a IA projeta o impacto financeiro antes da safra começar.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:14}}>
            {[["Novo preço (R$/sc)","precoNovo","Ex: 120"],["Nova área (ha)","areaNova","Ex: 500"],["Nova produtiv. (sc/ha)","novaProducao","Ex: 60"]].map(([l,k,ph])=>(
              <div key={k}>
                <label style={{fontSize:12,color:"#555",display:"block",marginBottom:3}}>{l}</label>
                <input type="number" placeholder={ph} value={cenarioInputs[k]} onChange={e=>setCenarioInputs(p=>({...p,[k]:e.target.value}))}
                  style={{width:"100%",padding:"7px 10px",borderRadius:6,border:"1px solid #ddd",fontSize:13,boxSizing:"border-box"}}/>
              </div>
            ))}
          </div>
          <button onClick={projetarCenario} disabled={iaLoading} style={{background:"#7c3aed",color:"#fff",border:"none",padding:"10px 20px",borderRadius:8,fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>
            {iaLoading && <Spinner/>}
            {iaLoading ? "Projetando cenário..." : "🔮 Projetar cenário com IA"}
          </button>
          {cenarioResult && <div className="ia-box">{cenarioResult}</div>}
          {safras.length === 0 && <p style={{color:"#888",marginTop:12,fontSize:13}}>Registre ao menos uma safra base para usar projeções.</p>}
        </div>
      )}
    </div>
  );
}
